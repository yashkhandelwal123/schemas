// The file implements the Entity interface on the ModelDefinition struct.
// This is not autogenerated.
package model

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"path/filepath"
	"sync"

	"github.com/gofrs/uuid"
	"github.com/layer5io/meshkit/database"
	"github.com/layer5io/meshkit/models/meshmodel/entity"
	"github.com/layer5io/meshkit/utils"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

var modelCreationLock sync.Mutex //Each component/relationship will perform a check and if the model already doesn't exist, it will create a model. This lock will make sure that there are no race conditions.

func (m ModelDefinition) TableName() string {
	return "model_dbs"
}

func (m ModelDefinition) Type() entity.EntityType {
	return entity.Model
}

func (m *ModelDefinition) GenerateID() (uuid.UUID, error) {
	modelIdentifier := ModelDefinition{
		Registrant:    m.Registrant,
		Version:       m.Version,
		SchemaVersion: m.SchemaVersion,
		Name:          m.Name,
		Model: Model{
			Version: m.Model.Version,
		},
	}
	byt, err := json.Marshal(modelIdentifier)
	if err != nil {
		return uuid.UUID{}, err
	}
	
	hash := md5.Sum(byt)
	return uuid.FromString(hex.EncodeToString(hash[:]))
}

func (m ModelDefinition) GetID() uuid.UUID {
	return m.Id
}

func (m *ModelDefinition) GetEntityDetail() string {
	return fmt.Sprintf("type: %s, model: %s, definition version: %s, version: %s", m.Type(), m.Name, m.Version, m.Model.Version)
}

func (m *ModelDefinition) Create(db *database.Handler, hostID uuid.UUID) (uuid.UUID, error) {
	modelID, err := m.GenerateID()
	if err != nil {
		return modelID, err
	}

	var model ModelDefinition
	if m.Name == "" {
		return uuid.UUID{}, fmt.Errorf("empty or invalid model name passed")
	}
	modelCreationLock.Lock()
	defer modelCreationLock.Unlock()
	err = db.First(&model, "id = ? and connection_id = ?", modelID, hostID).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return uuid.UUID{}, err
	}
	if err == gorm.ErrRecordNotFound { //The model is already not present and needs to be inserted
		id, err := m.Category.Create(db, hostID)
		if err != nil {
			return uuid.UUID{}, err
		}
		m.Id = modelID
		m.CategoryId = id
		m.RegistrantId = hostID
		m.Status = ModelDefinitionStatusEnabled
		err = db.Omit(clause.Associations).Create(&m).Error
		if err != nil {
			return uuid.UUID{}, err
		}
		// register model inside registries table
		err = registerModel(db, hostID, modelID)
		if err != nil {
			return uuid.UUID{}, err
		}
		return m.Id, nil
	}
	return model.Id, nil
}

func (m *ModelDefinition) UpdateStatus(db *database.Handler, status entity.EntityStatus) error {
	err := db.Model(&Model{}).Where("id = ?", m.Id).Update("status", status).Error
	if err != nil {
		return entity.ErrUpdateEntityStatus(err, string(m.Type()), status)
	}
	return nil
}

// WriteModelDefinition writes out the model to the given `modelDefPath` in the `outputType` format.
// `outputType` can be `yaml` or `json`.
// Usage: model.WriteModelDefinition("./modelName/model.yaml", "yaml")
func (m ModelDefinition) WriteModelDefinition(modelDefPath string, outputType string) error {
	err := utils.CreateDirectory(filepath.Dir(modelDefPath))
	if err != nil {
		return err
	}
	if outputType == "json" {
		err = utils.WriteJSONToFile(modelDefPath, m)
	}
	if outputType == "yaml" {
		err = utils.WriteYamlToFile(modelDefPath, m)
	}
	if err != nil {
		return err
	}
	return nil
}

// Registers models into registries table.
func registerModel(db *database.Handler, regID, modelID uuid.UUID) error {
	var count int64
	err := db.Table("registries").Where("registrant_id = ?", regID).Where("type = ?", "model").Where("entity = ?", modelID).Count(&count).Error

	if err != nil && err != gorm.ErrRecordNotFound {
		return err
	}

	if count == 0 {
		err = db.Exec("INSERT INTO registries (registrant_id, entity, type) VALUES (?,?,?)", regID, modelID, "model").Error
		if err != nil {
			return err
		}
	}
	return nil
}
