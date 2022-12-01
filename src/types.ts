export interface TokenDefinitions {
  tokens: object; // TODO: Better types
  properties: string[];
}

export interface BaseTokens {
  scale: TokenDefinitions;
  color: TokenDefinitions;
  opacity: TokenDefinitions;
  "font-weight": TokenDefinitions;
  elevation: TokenDefinitions;
  // TODO: line-height
}

export interface UtilityClassDefinition {
  name: string;
  declarations: {
    property: string;
    value: string;
  }[];
}

export interface BaseCSSDeclarations {
  property: string;
  values: string[];
}
