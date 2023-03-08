module.exports = {
  extends: [
    "stylelint-config-standard",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
  ],
  ignoreFiles: [
    "app/**/*"
  ],
  rules: {
    "at-rule-no-unknown": [true, {
      ignoreAtRules: [
        /(mixin|include|return|function)/,
      ],
    }],
    "color-function-notation": "legacy",
    "declaration-empty-line-before": ["never", {
      "ignore": ["after-comment", "after-declaration"],
    }],
    "import-notation": "string",
    "function-no-unknown": [true, {ignoreFunctions: /(darken|.*-func)/}],
    "selector-class-pattern": /^([a-z][a-z0-9]*)([_-]{1,2}[a-z0-9]+)*$/,
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          type: "at-rule",
          name: "include"
        },
        "declarations",
        {
          type: "rule",
          selector: "^&::(before|after)"
        },
        {
          type: "rule",
          selector: "^&:(first-child|last-child)"
        },
        {
          type: "rule",
          selector: "^&:"
        },
        {
          type: "rule",
          selector: "^&--"
        },
        {
          type: "rule",
          selector: "^&_"
        },
        {
          type: "rule",
          selector: "^."
        },
      ],
      {
        unspecified: "bottom",
      },
    ],
    "order/properties-order": [
      {
        groupName: "positioning",
        emptyLineBefore: "always",
        properties: [
          "content",
          "position",
          "top",
          "right",
          "bottom",
          "left",
          "z-index",
        ],
      },
      {
        groupName: "block model",
        emptyLineBefore: "always",
        properties: [
          "flex",
          "flex-grow",
          "flex-shrink",
          "flex-basis",
          "flex-flow",
          "grid-column-start",
          "grid-column-end",
          "grid-row-start",
          "grid-row-end",
          "grid-column",
          "grid-row",
          "grid-area",
          "justify-self",
          "align-self",
          "display",
          "flex-direction",
          "flex-wrap",
          "grid",
          "grid-template-columns",
          "grid-template-rows",
          "grid-template-areas",
          "grid-template",
          "grid-column-gap",
          "grid-row-gap",
          "grid-gap",
          "justify-content",
          "justify-items",
          "align-content",
          "align-items",
          "order",
          "grid-auto-columns",
          "grid-auto-rows",
          "grid-auto-flow",
          "box-sizing",
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "overflow",
          "overflow-x",
          "overflow-y",
        ],
      },
      {
        groupName: "typography",
        emptyLineBefore: "always",
        properties: [
          "font",
          "font-family",
          "color",
          "font-size",
          "line-height",
          "font-weight",
          "font-style",
          "font-variant",
          "list-style",
          "list-style-position",
          "list-style-type",
          "list-style-image",
          "text-align",
          "text-transform",
          "text-decoration",
          "border-collapse",
          "border-spacing",
          "table-layout",
          "empty-cells",
          "caption-side",
          "vertical-align",
          "direction",
          "writing-mode",
          "font-size-adjust",
          "font-stretch",
          "font-effect",
          "font-emphasize",
          "font-emphasize-position",
          "font-emphasize-style",
          "font-smooth",
          "text-align-last",
          "letter-spacing",
          "word-spacing",
          "white-space",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-style",
          "text-emphasis-position",
          "text-indent",
          "text-justify",
          "text-outline",
          "text-wrap",
          "text-overflow",
          "text-overflow-ellipsis",
          "text-overflow-mode",
          "text-orientation",
          "word-wrap",
          "word-break",
          "tab-size",
          "hyphens",
          "columns",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "text-shadow",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
        ],
      },
      {
        groupName: "formalization",
        emptyLineBefore: "always",
        properties: [
          "background",
          "background-color",
          "background-image",
          "linear-gradient",
          "background-repeat",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-size",
          "background-clip",
          "background-origin",
          "background-attachment",
          "box-decoration-break",
          "background-blend-mode",
          "border",
          "border-width",
          "border-style",
          "border-color",
          "border-top",
          "border-top-width",
          "border-top-style",
          "border-top-color",
          "border-right",
          "border-right-width",
          "border-right-style",
          "border-right-color",
          "border-bottom",
          "border-bottom-width",
          "border-bottom-style",
          "border-bottom-color",
          "border-left",
          "border-left-width",
          "border-left-style",
          "border-left-color",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius",
          "border-image",
          "border-image-source",
          "border-image-slice",
          "border-image-width",
          "border-image-outset",
          "border-image-repeat",
          "outline",
          "outline-width",
          "outline-style",
          "outline-color",
          "outline-offset",
          "box-shadow",
          "transform",
          "transform-origin",
          "backface-visibility",
          "perspective",
          "perspective-origin",
          "transform-style",
          "visibility",
          "opacity",
          "filter",
          "appearance",
          "cursor",
        ],
      },
      {
        groupName: "animation",
        emptyLineBefore: "always",
        properties: [
          "transition",
          "transition-delay",
          "transition-timing-function",
          "transition-duration",
          "transition-property",
          "animation",
          "animation-name",
          "animation-duration",
          "animation-play-state",
          "animation-timing-function",
          "animation-delay",
          "animation-iteration-count",
          "animation-direction",
        ],
      },
      {
        groupName: "other",
        emptyLineBefore: "always",
        properties: [
          "quotes",
          "counter-reset",
          "counter-increment",
          "resize",
          "user-select",
          "nav-index",
          "nav-up",
          "nav-right",
          "nav-down",
          "nav-left",
          "pointer-events",
          "object-fit",
          "will-change",
          "clip",
          "clip-path",
          "zoom",
        ],
      },
    ],
  },
}
