// Package v1beta1 provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.3.0 DO NOT EDIT.
package v1beta1

import (
	externalRef2 "github.com/meshery/schemas/models/core"
)

// Workspace defines model for workspace.
type Workspace struct {
	ID        externalRef2.GeneralId `db:"id" json:"id"`
	CreatedAt externalRef2.Time      `json:"created_at,omitempty"`

	// DeletedAt SQL null Timestamp to handle null values of time.
	DeletedAt      externalRef2.NullTime       `json:"deleted_at,omitempty"`
	Description    externalRef2.Text           `json:"description,omitempty"`
	Name           externalRef2.Text           `json:"name,omitempty"`
	OrganizationId externalRef2.OrganizationId `db:"org_id" json:"org_id"`
	Owner          externalRef2.Text           `json:"owner,omitempty"`
	UpdatedAt      externalRef2.Time           `json:"updated_at,omitempty"`
}

// WorkspacePage defines model for workspacePage.
type WorkspacePage struct {
	Page       externalRef2.Number `json:"page,omitempty"`
	PageSize   externalRef2.Number `json:"page_size,omitempty"`
	TotalCount externalRef2.Number `json:"total_count,omitempty"`
	Workspaces []Workspace         `json:"workspaces,omitempty"`
}

// WorkspacePayload defines model for workspacePayload.
type WorkspacePayload struct {
	Description externalRef2.Text `json:"description,omitempty"`
	Name        externalRef2.Text `json:"name"`

	// OrganizationID Organization ID
	OrganizationID string `json:"organization_id"`
}

// WorkspaceUpdatePayload defines model for workspaceUpdatePayload.
type WorkspaceUpdatePayload struct {
	Description externalRef2.Text `json:"description,omitempty"`
	Name        externalRef2.Text `json:"name,omitempty"`

	// OrganizationID Organization ID
	OrganizationID string `json:"organization_id"`
}

// WorkspacesDesignsMapping defines model for workspacesDesignsMapping.
type WorkspacesDesignsMapping struct {
	ID          externalRef2.GeneralId   `db:"id" json:"id"`
	CreatedAt   externalRef2.Time        `json:"created_at,omitempty"`
	DeletedAt   externalRef2.NullTime        `json:"deleted_at,omitempty"`
	DesignId    externalRef2.DesignId    `db:"design_id" json:"design_id"`
	UpdatedAt   externalRef2.Time        `json:"updated_at,omitempty"`
	WorkspaceId externalRef2.WorkspaceId `db:"workspace_id" json:"workspace_id"`
}

// WorkspacesEnvironmentsMapping defines model for workspacesEnvironmentsMapping.
type WorkspacesEnvironmentsMapping struct {
	ID            externalRef2.GeneralId     `db:"id" json:"id"`
	CreatedAt     externalRef2.Time          `json:"created_at,omitempty"`
	DeletedAt     externalRef2.NullTime          `json:"deleted_at,omitempty"`
	EnvironmentId externalRef2.EnvironmentId `db:"environment_id" json:"environment_id"`
	UpdatedAt     externalRef2.Time          `json:"updated_at,omitempty"`
	WorkspaceId   externalRef2.WorkspaceId   `db:"workspace_id" json:"workspace_id"`
}

// WorkspacesTeamsMapping defines model for workspacesTeamsMapping.
type WorkspacesTeamsMapping struct {
	ID          externalRef2.GeneralId   `db:"id" json:"id"`
	CreatedAt   externalRef2.Time        `json:"created_at,omitempty"`
	DeletedAt   externalRef2.NullTime        `json:"deleted_at,omitempty"`
	TeamId      externalRef2.TeamId      `db:"team_id" json:"team_id"`
	UpdatedAt   externalRef2.Time        `json:"updated_at,omitempty"`
	WorkspaceId externalRef2.WorkspaceId `db:"workspace_id" json:"workspace_id"`
}

// WorkspacesViewsMapping defines model for workspacesViewsMapping.
type WorkspacesViewsMapping struct {
	ID          externalRef2.GeneralId   `db:"id" json:"id"`
	CreatedAt   externalRef2.Time        `json:"created_at,omitempty"`
	DeletedAt   externalRef2.NullTime        `json:"deleted_at,omitempty"`
	UpdatedAt   externalRef2.Time        `json:"updated_at,omitempty"`
	ViewId      externalRef2.ViewId      `db:"view_id" json:"view_id"`
	WorkspaceId externalRef2.WorkspaceId `db:"workspace_id" json:"workspace_id"`
}
