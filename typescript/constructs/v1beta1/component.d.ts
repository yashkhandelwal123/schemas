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
 * Components are reusable building blocks for depicting capabilities defined within models. Learn more at https://docs.meshery.io/concepts/components
 */
export interface HttpsSchemasMesheryIoComponentJson {
  /**
   * Uniquely identifies the entity (i.e. component) as defined in a declaration (i.e. design).
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
