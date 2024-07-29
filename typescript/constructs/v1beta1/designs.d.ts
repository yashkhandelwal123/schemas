/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * State of the entity in which the capability is applicable.
 */
export type InputString = ("declaration" | "instance")[];
/**
 * Visualisation styles for a component
 */
export type ComponentStyles = Styles & {
  /**
   * The shape of the node’s body. Note that each shape fits within the specified width and height, and so you may have to adjust width and height if you desire an equilateral shape (i.e. width !== height for several equilateral shapes)
   */
  shape:
    | "ellipse"
    | "triangle"
    | "round-triangle"
    | "rectangle"
    | "round-rectangle"
    | "bottom-round-rectangle"
    | "cut-rectangle"
    | "barrel"
    | "rhomboid"
    | "diamond"
    | "round-diamond"
    | "pentagon"
    | "round-pentagon"
    | "hexagon"
    | "round-hexagon"
    | "concave-hexagon"
    | "heptagon"
    | "round-heptagon"
    | "octagon"
    | "round-octagon"
    | "star"
    | "tag"
    | "round-tag"
    | "vee"
    | "polygon";
  /**
   * The position of the node. If the position is set, the node is drawn at that position in the given dimensions. If the position is not set, the node is drawn at a random position.
   */
  position?: {
    /**
     * The x-coordinate of the node.
     */
    x: number;
    /**
     * The y-coordinate of the node.
     */
    y: number;
  };
  /**
   * The text to display for an element’s body. Can give a path, e.g. data(id) will label with the elements id
   */
  "body-text"?: string;
  /**
   * How to wrap the text in the node. Can be 'none', 'wrap', or 'ellipsis'.
   */
  "body-text-wrap"?: string;
  /**
   * The maximum width for wrapping text in the node.
   */
  "body-text-max-width"?: string;
  /**
   * The opacity of the node’s body text, including its outline.
   */
  "body-text-opacity"?: number;
  /**
   * The colour of the node’s body text background. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "body-text-background-color"?: string;
  /**
   * The size of the node’s body text.
   */
  "body-text-font-size"?: string;
  /**
   * The colour of the node’s body text. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "body-text-color"?: string;
  /**
   * A CSS font weight to be applied to the node’s body text.
   */
  "body-text-weight"?: string;
  /**
   * A CSS horizontal alignment to be applied to the node’s body text.
   */
  "body-text-horizontal-align"?: string;
  /**
   * A CSS text decoration to be applied to the node’s body text.
   */
  "body-text-decoration"?: string;
  /**
   * A CSS vertical alignment to be applied to the node’s body text.
   */
  "body-text-vertical-align"?: string;
  /**
   * The width of the node’s body or the width of an edge’s line.
   */
  width?: number;
  /**
   * The height of the node’s body
   */
  height?: number;
  /**
   * The colour of the node’s body. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "background-color"?: string;
  /**
   * Blackens the node’s body for values from 0 to 1; whitens the node’s body for values from 0 to -1.
   */
  "background-blacken"?: number;
  /**
   * The opacity level of the node’s background colour
   */
  "background-opacity"?: number;
  /**
   * The size of the node’s border.
   */
  "border-width"?: number;
  /**
   * The style of the node’s border
   */
  "border-style"?: "solid" | "dotted" | "dashed" | "double";
  /**
   * The colour of the node’s border. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "border-color"?: string;
  /**
   * The opacity of the node’s border
   */
  "border-opacity"?: number;
  /**
   * The amount of padding around all sides of the node.
   */
  padding?: number;
  /**
   * The horizontal alignment of a node’s label
   */
  "text-halign"?: "left" | "center" | "right";
  /**
   * The vertical alignment of a node’s label
   */
  "text-valign"?: "top" | "center" | "bottom";
  /**
   * Whether to use the ghost effect, a semitransparent duplicate of the element drawn at an offset.
   */
  ghost?: "yes" | "no";
  /**
   * The colour of the indicator shown when the background is grabbed by the user. Selector needs to be *core*. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "active-bg-color"?: string;
  /**
   *  The opacity of the active background indicator. Selector needs to be *core*.
   */
  "active-bg-opacity"?: string;
  /**
   *  The opacity of the active background indicator. Selector needs to be *core*.
   */
  "active-bg-size"?: string;
  /**
   * The background colour of the selection box used for drag selection. Selector needs to be *core*. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "selection-box-color"?: string;
  /**
   * The size of the border on the selection box. Selector needs to be *core*
   */
  "selection-box-border-width"?: number;
  /**
   * The opacity of the selection box.  Selector needs to be *core*
   */
  "selection-box-opacity"?: number;
  /**
   * The colour of the area outside the viewport texture when initOptions.textureOnViewport === true.  Selector needs to be *core*. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "outside-texture-bg-color"?: string;
  /**
   * The opacity of the area outside the viewport texture. Selector needs to be *core*
   */
  "outside-texture-bg-opacity"?: number;
  [k: string]: unknown;
};
/**
 * Visualisation styles for a relationship
 */
export type RelationshipStyles = Styles & {
  /**
   * The animation to use for the edge. Can be like 'marching-ants' , 'blink' , 'moving-gradient',etc .
   */
  "edge-animation"?: string;
  /**
   * The curving method used to separate two or more edges between two nodes; may be haystack (very fast, bundled straight edges for which loops and compounds are unsupported), straight (straight edges with all arrows supported), bezier (bundled curved edges), unbundled-bezier (curved edges for use with manual control points), segments (a series of straight lines), taxi (right-angled lines, hierarchically bundled). Note that haystack edges work best with ellipse, rectangle, or similar nodes. Smaller node shapes, like triangle, will not be as aesthetically pleasing. Also note that edge endpoint arrows are unsupported for haystack edges.
   */
  "curve-style"?: "straight" | "haystack" | "bezier" | "unbundled-bezier" | "segments" | "taxi";
  /**
   * The colour of the edge’s line. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "line-color"?: string;
  /**
   * The style of the edge’s line.
   */
  "line-style"?: "solid" | "dotted" | "dashed";
  /**
   * The cap style of the edge’s line; may be butt (default), round, or square. The cap may or may not be visible, depending on the shape of the node and the relative size of the node and edge. Caps other than butt extend beyond the specified endpoint of the edge.
   */
  "line-cap"?: "butt" | "round" | "square";
  /**
   * The opacity of the edge’s line and arrow. Useful if you wish to have a separate opacity for the edge label versus the edge line. Note that the opacity value of the edge element affects the effective opacity of its line and label subcomponents.
   */
  "line-opacity"?: number;
  /**
   * The colour of the edge’s source arrow. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "target-arrow-color"?: string;
  /**
   * The shape of the edge’s source arrow
   */
  "target-arrow-shape"?:
    | "triangle"
    | "triangle-tee"
    | "circle-triangle"
    | "triangle-cross"
    | "triangle-backcurve"
    | "vee"
    | "tee"
    | "square"
    | "circle"
    | "diamond"
    | "chevron"
    | "none";
  /**
   * The fill state of the edge’s source arrow
   */
  "target-arrow-fill"?: "filled" | "hollow";
  /**
   * The colour of the edge’s source arrow. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  "mid-target-arrow-color"?: string;
  /**
   * The shape of the edge’s source arrow
   */
  "mid-target-arrow-shape"?:
    | "triangle"
    | "triangle-tee"
    | "circle-triangle"
    | "triangle-cross"
    | "triangle-backcurve"
    | "vee"
    | "tee"
    | "square"
    | "circle"
    | "diamond"
    | "chevron"
    | "none";
  /**
   * The fill state of the edge’s source arrow
   */
  "mid-target-arrow-fill"?: "filled" | "hollow";
  /**
   * Scaling for the arrow size.
   */
  "arrow-scale"?: number;
  /**
   * The text to display for an edge’s source label. Can give a path, e.g. data(id) will label with the elements id
   */
  "source-label"?: string;
  /**
   * The text to display for an edge’s target label. Can give a path, e.g. data(id) will label with the elements id
   */
  "target-label"?: string;
  [k: string]: unknown;
};
export type From = {
  kind?: string;
  model?: HttpsSchemasMesheryIoModelJson2;
  /**
   * A Universally Unique Identifier used to uniquely identify entites in Meshery. The UUID core defintion is used across different schemas.
   */
  id?: string;
  match?: {
    /**
     * A Universally Unique Identifier used to uniquely identify entites in Meshery. The UUID core defintion is used across different schemas.
     */
    id?: string;
    /**
     * Defines paths which should be matched with the 'kind' property.
     */
    self?: string[];
    /**
     * Optional property which defines paths which should be matched with 'self'. Here 'kind' is valid Component 'kind' belonging to the above specifed model. eg: If model is Kubernetes, valid 'kind' are 'Pod', 'Secret'. If the value for all paths of 'self' & 'kind' along with the value of all paths inside 'to.match.self' & 'to.match.kind are equal then the component with 'kind' act as an binded component. eg: ClusterRole, ClusterRoleBinding and ServiceAccount. If the paths for ClusterRole & ClusterRoleBinding and ServiceAccount & ClusterRoleBinding are equal then ClusterRoleBinding acts as an binding. Make sure the 'kind' value in 'from' and 'to' should be equal.
     */
    kind?: string[];
  };
  patch?: {
    patchStrategy?: "replace";
    /**
     * JSON ref to value from where patch should be applied.
     */
    mutatorRef?: string[][];
  };
}[];
export type To = {
  kind?: string;
  model?: HttpsSchemasMesheryIoModelJson3;
  /**
   * A Universally Unique Identifier used to uniquely identify entites in Meshery. The UUID core defintion is used across different schemas.
   */
  id?: string;
  match?: {
    /**
     * A Universally Unique Identifier used to uniquely identify entites in Meshery. The UUID core defintion is used across different schemas.
     */
    id?: string;
    /**
     * Defines paths which should be matched with 'kind'.
     */
    self?: string[];
    /**
     * Optional property which defines paths which should be matched with 'self'. Here 'kind' is valid Component 'kind' belonging to the above specifed model. eg: If model is Kubernetes, valid 'kind' are 'Pod', 'Secret'. If the value for all paths of 'self' & 'kind' along with the value of all paths inside 'to.match.self' & 'to.match.kind are equal then the component with 'kind' act as an binded component. eg: ClusterRole, ClusterRoleBinding and ServiceAccount. If the paths for ClusterRole & ClusterRoleBinding and ServiceAccount & ClusterRoleBinding are equal then ClusterRoleBinding acts as an binding. Make sure the 'kind' value in 'from' and 'to' should be equal.
     */
    kind?: string[];
  };
  patch?: {
    patchStrategy?: "replace";
    /**
     * JSONPath (https://en.wikipedia.org/wiki/JSONPath) to property to be patched.
     */
    mutatedRef?: string;
  };
}[];

/**
 * Designs are your primary tool for collaborative authorship of your infrastructure, workflow, and processes.
 */
export interface DesignSchema {
  /**
   * A Universally Unique Identifier used to uniquely identify entites in Meshery. The UUID core defintion is used across different schemas.
   */
  id?: string;
  /**
   * Name of the design; a descriptive, but concise title for the design document.
   */
  name: string;
  /**
   * Specifies the version of the schema to which the design conforms.
   */
  schemaVersion: string;
  /**
   * Revision of the design as expressed by an auto-incremented, SemVer-compliant version number. May be manually set by a user or third-party system, but will always be required to be of version number higher than the previously defined version number.
   */
  version: string;
  /**
   * A list of one or more component declarations.
   */
  components: HttpsSchemasMesheryIoComponentJson[];
  /**
   * Design-level preferences
   */
  preferences?: {
    /**
     * List of available layers
     */
    layers: string[];
    [k: string]: unknown;
  };
  /**
   * List of relationships between components
   */
  relationships: HttpsSchemasMesheryIoRelationshipJson[];
  [k: string]: unknown;
}
/**
 * Components are reusable building blocks for depicting capabilities defined within models. Learn more at https://docs.meshery.io/concepts/components
 */
export interface HttpsSchemasMesheryIoComponentJson {
  /**
   * A Universally Unique Identifier used to uniquely identify entites in Meshery. The UUID core defintion is used across different schemas.
   */
  id?: string;
  /**
   * Specifies the version of the schema to which the component definition conforms.
   */
  schemaVersion: string;
  /**
   * Version of the component definition.
   */
  version: string;
  /**
   * Name of the component in human-readible format.
   */
  displayName?: string;
  /**
   * A written representation of the purpose and characteristics of the component.
   */
  description?: string;
  /**
   * Format specifies the format used in the `component.schema` field. JSON is the default.
   */
  format?: "JSON" | "CUE";
  model: HttpsSchemasMesheryIoModelJson;
  styles?: ComponentStyles;
  /**
   * Meshery manages components in accordance with their specific capabilities. This field explicitly identifies those capabilities largely by what actions a given component supports; e.g. metric-scrape, sub-interface, and so on. This field is extensible. ComponentDefinitions may define a broad array of capabilities, which are in-turn dynamically interpretted by Meshery for full lifecycle management.
   */
  capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
  /**
   * Metadata contains additional information associated with the component.
   */
  metadata?: {
    /**
     * Genealogy represents the various representational states of the component.
     */
    genealogy?: string;
    /**
     * Identifies whether the component is semantically meaningful or not; identifies whether the component should be treated as deployable entity or is for purposes of logical representation.
     */
    isAnnotation?: boolean;
    /**
     * 'published' controls whether the component should be registered in Meshery Registry. When the same 'published' property in Models, is set to 'false', the Model property takes precedence with all Entities in the Model not being registered.
     */
    published?: boolean;
    [k: string]: unknown;
  };
  /**
   * The configuration of the component. The configuration is based on the schema defined within the component definition(component.schema).
   */
  configuration?: {
    [k: string]: unknown;
  };
  /**
   * Component and it's properties.
   */
  component: {
    /**
     * Version of the component produced by the registrant. Example: APIVersion of a Kubernetes Pod.
     */
    version: string;
    /**
     * The unique identifier (name) assigned by the registrant to this component. Example: A Kubernetes Pod is of kind 'Pod'.
     */
    kind: string;
    /**
     * JSON schema of the object as defined by the registrant.
     */
    schema: string;
    [k: string]: unknown;
  };
}
/**
 * Reference to the specific registered model to which the component belongs and from which model version, category, and other properties may be referenced. Learn more at https://docs.meshery.io/concepts/models
 */
export interface HttpsSchemasMesheryIoModelJson {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion?: string;
  /**
   * Version of the model definition.
   */
  version: string;
  /**
   * The unique name for the model within the scope of a registrant.
   */
  name: string;
  /**
   * Human-readable name for the model.
   */
  displayName?: string;
  /**
   * Description of the model.
   */
  description?: string;
  /**
   * Status of model, including:
   * - duplicate: this component is a duplicate of another. The component that is to be the canonical reference and that is duplicated by other components should not be assigned the 'duplicate' status.
   * - maintenance: model is unavailable for a period of time.
   * - enabled: model is available for use for all users of this Meshery Server.
   * - ignored: model is unavailable for use for all users of this Meshery Server.
   */
  status?: "ignored" | "enabled" | "duplicate";
  registrant: {
    [k: string]: unknown;
  };
  /**
   * Category of the model.
   */
  category: string;
  /**
   * Sub-category of the model.
   */
  subCategory?: string;
  /**
   * Metadata containing additional information associated with the model.
   */
  metadata?: {
    /**
     * Capabilities associated with the model
     */
    capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
    /**
     * Indicates whether the model and its entities should be treated as deployable entities or as logical representations.
     */
    isAnnotation?: boolean;
    /**
     * Primary color associated with the model.
     */
    primaryColor?: string;
    /**
     * Secondary color associated with the model.
     */
    secondaryColor?: string;
    /**
     * SVG representation of the model in white color.
     */
    svgWhite?: string;
    /**
     * SVG representation of the model in colored format.
     */
    svgColor?: string;
    /**
     * SVG representation of the complete model.
     */
    svgComplete?: string;
    [k: string]: unknown;
  };
  /**
   * Registrant-defined data associated with the model. Properties pertain to the software being managed (e.g. Kubernetes v1.31)
   */
  model?: {
    /**
     * Version of the model as defined by the registrant.
     */
    version: string;
    [k: string]: unknown;
  };
}
/**
 * Meshery manages entities in accordance with their specific capabilities. This field explicitly identifies those capabilities largely by what actions a given component supports; e.g. metric-scrape, sub-interface, and so on. This field is extensible. Entities may define a broad array of capabilities, which are in-turn dynamically interpretted by Meshery for full lifecycle management.
 */
export interface HttpsSchemasMesheryIoCapabilityJson {
  /**
   * Specifies the version of the schema to which the capability definition conforms.
   */
  schemaVersion: string;
  /**
   * Version of the capability definition.
   */
  version: string;
  /**
   * Name of the capability in human-readible format.
   */
  displayName: string;
  /**
   * A written representation of the purpose and characteristics of the capability.
   */
  description?: string;
  /**
   * Top-level categorization of the capability
   */
  kind: ("action" | "mutate" | "view" | "interaction") & string;
  /**
   * Classification of capabilities. Used to group capabilities similar in nature.
   */
  type: string;
  /**
   * Most granular unit of capability classification. The combination of Kind, Type and SubType together uniquely identify a Capability.
   */
  subType?: string;
  /**
   * Key that backs the capability.
   */
  key?: string;
  entityState?: InputString;
  /**
   * Status of the capability
   */
  status: "enabled" | "disabled";
  /**
   * Metadata contains additional information associated with the capability. Extension point.
   */
  metadata?: {
    [k: string]: unknown;
  };
}
/**
 * Common styles for all entities
 */
export interface Styles {
  /**
   * Primary color of the component used for UI representation.
   */
  primaryColor: string;
  /**
   * Secondary color of the entity used for UI representation.
   */
  secondaryColor?: string;
  /**
   * White SVG of the entity used for UI representation on dark background.
   */
  svgWhite: string;
  /**
   * Colored SVG of the entity used for UI representation on light background.
   */
  svgColor: string;
  /**
   * Complete SVG of the entity used for UI representation, often inclusive of background.
   */
  svgComplete?: string;
  /**
   * The color of the element's label. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
   */
  color?: string;
  /**
   * The opacity of the label text, including its outline.
   */
  "text-opacity"?: number;
  /**
   * A comma-separated list of font names to use on the label text.
   */
  "font-family"?: string;
  /**
   * The size of the label text.
   */
  "font-size"?: string;
  /**
   * A CSS font style to be applied to the label text.
   */
  "font-style"?: string;
  /**
   * A CSS font weight to be applied to the label text.
   */
  "font-weight"?: string;
  /**
   * A transformation to apply to the label text
   */
  "text-transform"?: "none" | "uppercase" | "lowercase";
  /**
   * The opacity of the element. See https://js.cytoscape.org/#style/visibility
   */
  opacity?: number;
  /**
   * An integer value that affects the relative draw order of elements. In general, an element with a higher z-index will be drawn on top of an element with a lower z-index. Note that edges are under nodes despite z-index.
   */
  "z-index"?: number;
  /**
   * The text to display for an element’s label. Can give a path, e.g. data(id) will label with the elements id
   */
  label?: string;
}
/**
 * Relationships define the nature of interaction between interconnected components in Meshery. The combination of relationship properties kind, type, and subtype characterize various genealogical relations among and between components. Relationships have selectors, selector sets, metadata, and optional parameters. Learn more at https://docs.meshery.io/concepts/logical/relationships.
 */
export interface HttpsSchemasMesheryIoRelationshipJson {
  /**
   * Specifies the version of the schema used for the relationship definition.
   */
  schemaVersion: string;
  /**
   * Specifies the version of the relationship definition.
   */
  version: string;
  model: HttpsSchemasMesheryIoModelJson1;
  /**
   * Kind of the Relationship. Learn more about relationships - https://docs.meshery.io/concepts/logical/relationships.
   */
  kind: "Hierarchical" | "Edge" | "Sibling";
  /**
   * Classification of relationships. Used to group relationships similar in nature.
   */
  type: string;
  /**
   * Most granular unit of relationship classification. The combination of Kind, Type and SubType together uniquely identify a Relationship.
   */
  subType: string;
  /**
   * Optional. Assigns the policy to be used for the evaluation of the relationship. Deprecation Notice: In the future, this property is either to be removed or to it is to be an array of optional policy $refs.
   */
  evaluationQuery?: string;
  /**
   * Capabilities associated with the relationship.
   */
  capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
  /**
   * Metadata contains additional information associated with the Relationship.
   */
  metadata?: {
    /**
     * Characterization of the meaning of the relationship and its relevance to both Meshery and entities under management.
     */
    description?: string;
    styles?: RelationshipStyles;
    [k: string]: unknown;
  };
  /**
   * Selectors are organized as an array, with each item containing a distinct set of selectors that share a common functionality. This structure allows for flexibility in defining relationships, even when different components are involved.
   */
  selectors?: {
    /**
     * Optional selectors used to define relationships which should not be created / is restricted.
     */
    deny?: {
      from: From;
      to: To;
      [k: string]: unknown;
    };
    /**
     * Selectors used to define relationships which are allowed.
     */
    allow: {
      from: From;
      to: To;
      [k: string]: unknown;
    };
  }[];
}
/**
 * Name of the model in which this relationship is packaged.
 */
export interface HttpsSchemasMesheryIoModelJson1 {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion?: string;
  /**
   * Version of the model definition.
   */
  version: string;
  /**
   * The unique name for the model within the scope of a registrant.
   */
  name: string;
  /**
   * Human-readable name for the model.
   */
  displayName?: string;
  /**
   * Description of the model.
   */
  description?: string;
  /**
   * Status of model, including:
   * - duplicate: this component is a duplicate of another. The component that is to be the canonical reference and that is duplicated by other components should not be assigned the 'duplicate' status.
   * - maintenance: model is unavailable for a period of time.
   * - enabled: model is available for use for all users of this Meshery Server.
   * - ignored: model is unavailable for use for all users of this Meshery Server.
   */
  status?: "ignored" | "enabled" | "duplicate";
  registrant: {
    [k: string]: unknown;
  };
  /**
   * Category of the model.
   */
  category: string;
  /**
   * Sub-category of the model.
   */
  subCategory?: string;
  /**
   * Metadata containing additional information associated with the model.
   */
  metadata?: {
    /**
     * Capabilities associated with the model
     */
    capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
    /**
     * Indicates whether the model and its entities should be treated as deployable entities or as logical representations.
     */
    isAnnotation?: boolean;
    /**
     * Primary color associated with the model.
     */
    primaryColor?: string;
    /**
     * Secondary color associated with the model.
     */
    secondaryColor?: string;
    /**
     * SVG representation of the model in white color.
     */
    svgWhite?: string;
    /**
     * SVG representation of the model in colored format.
     */
    svgColor?: string;
    /**
     * SVG representation of the complete model.
     */
    svgComplete?: string;
    [k: string]: unknown;
  };
  /**
   * Registrant-defined data associated with the model. Properties pertain to the software being managed (e.g. Kubernetes v1.31)
   */
  model?: {
    /**
     * Version of the model as defined by the registrant.
     */
    version: string;
    [k: string]: unknown;
  };
}
/**
 * Name of the model implicated by this selector. Learn more at https://docs.meshery.io/concepts/models
 */
export interface HttpsSchemasMesheryIoModelJson2 {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion?: string;
  /**
   * Version of the model definition.
   */
  version: string;
  /**
   * The unique name for the model within the scope of a registrant.
   */
  name: string;
  /**
   * Human-readable name for the model.
   */
  displayName?: string;
  /**
   * Description of the model.
   */
  description?: string;
  /**
   * Status of model, including:
   * - duplicate: this component is a duplicate of another. The component that is to be the canonical reference and that is duplicated by other components should not be assigned the 'duplicate' status.
   * - maintenance: model is unavailable for a period of time.
   * - enabled: model is available for use for all users of this Meshery Server.
   * - ignored: model is unavailable for use for all users of this Meshery Server.
   */
  status?: "ignored" | "enabled" | "duplicate";
  registrant: {
    [k: string]: unknown;
  };
  /**
   * Category of the model.
   */
  category: string;
  /**
   * Sub-category of the model.
   */
  subCategory?: string;
  /**
   * Metadata containing additional information associated with the model.
   */
  metadata?: {
    /**
     * Capabilities associated with the model
     */
    capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
    /**
     * Indicates whether the model and its entities should be treated as deployable entities or as logical representations.
     */
    isAnnotation?: boolean;
    /**
     * Primary color associated with the model.
     */
    primaryColor?: string;
    /**
     * Secondary color associated with the model.
     */
    secondaryColor?: string;
    /**
     * SVG representation of the model in white color.
     */
    svgWhite?: string;
    /**
     * SVG representation of the model in colored format.
     */
    svgColor?: string;
    /**
     * SVG representation of the complete model.
     */
    svgComplete?: string;
    [k: string]: unknown;
  };
  /**
   * Registrant-defined data associated with the model. Properties pertain to the software being managed (e.g. Kubernetes v1.31)
   */
  model?: {
    /**
     * Version of the model as defined by the registrant.
     */
    version: string;
    [k: string]: unknown;
  };
}
/**
 * Model of the implicated component. Learn more at https://docs.meshery.io/concepts/models
 */
export interface HttpsSchemasMesheryIoModelJson3 {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion?: string;
  /**
   * Version of the model definition.
   */
  version: string;
  /**
   * The unique name for the model within the scope of a registrant.
   */
  name: string;
  /**
   * Human-readable name for the model.
   */
  displayName?: string;
  /**
   * Description of the model.
   */
  description?: string;
  /**
   * Status of model, including:
   * - duplicate: this component is a duplicate of another. The component that is to be the canonical reference and that is duplicated by other components should not be assigned the 'duplicate' status.
   * - maintenance: model is unavailable for a period of time.
   * - enabled: model is available for use for all users of this Meshery Server.
   * - ignored: model is unavailable for use for all users of this Meshery Server.
   */
  status?: "ignored" | "enabled" | "duplicate";
  registrant: {
    [k: string]: unknown;
  };
  /**
   * Category of the model.
   */
  category: string;
  /**
   * Sub-category of the model.
   */
  subCategory?: string;
  /**
   * Metadata containing additional information associated with the model.
   */
  metadata?: {
    /**
     * Capabilities associated with the model
     */
    capabilities?: HttpsSchemasMesheryIoCapabilityJson[];
    /**
     * Indicates whether the model and its entities should be treated as deployable entities or as logical representations.
     */
    isAnnotation?: boolean;
    /**
     * Primary color associated with the model.
     */
    primaryColor?: string;
    /**
     * Secondary color associated with the model.
     */
    secondaryColor?: string;
    /**
     * SVG representation of the model in white color.
     */
    svgWhite?: string;
    /**
     * SVG representation of the model in colored format.
     */
    svgColor?: string;
    /**
     * SVG representation of the complete model.
     */
    svgComplete?: string;
    [k: string]: unknown;
  };
  /**
   * Registrant-defined data associated with the model. Properties pertain to the software being managed (e.g. Kubernetes v1.31)
   */
  model?: {
    /**
     * Version of the model as defined by the registrant.
     */
    version: string;
    [k: string]: unknown;
  };
}
