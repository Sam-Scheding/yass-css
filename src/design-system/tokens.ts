export interface TokenDefinitions {
  tokens: object; // TODO: Better types
  properties: string[];
}


interface BaseTokens {
  scale: TokenDefinitions;
  color: TokenDefinitions;
  opacity: TokenDefinitions;
}

export const base: BaseTokens = {
  scale: {
    tokens: {
      '0': '0px',
      '100': '2px',
      '200': '4px',
      '300': '6px',
      '400': '8px',
      '500': '16px',
      '600': '32px',
      '700': '64px',
      '800': '128px',
      '900': '256px',
      '1000': '512px',
    },
    properties: [
      '-webkit-margin-after',
      '-webkit-margin-before',
      '-webkit-padding-after',
      '-webkit-padding-before',
      '-webkit-shape-margin',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-bottom-width',
      'border-left-width',
      'border-radius',
      'border-right-width',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-top-width',
      'border-width',
      'column-gap',
      'font-size',
      'gap',
      'height',
      'line-height',
      'margin-block-end',
      'margin-block-start',
      'margin-block',
      'margin-bottom',
      'margin-inline-end',
      'margin-inline-start',
      'margin-inline',
      'margin-left',
      'margin-right',
      'margin-top',
      'margin',
      'max-height',
      'max-width',
      'min-height',
      'min-width',
      'padding-block-end',
      'padding-block-start',
      'padding-block',
      'padding-bottom',
      'padding-inline-end',
      'padding-inline-start',
      'padding-inline',
      'padding-left',
      'padding-right',
      'padding-top',
      'padding',
      'scroll-margin-bottom',
      'scroll-margin-left',
      'scroll-margin-right',
      'scroll-margin-top',
      'scroll-margin',
      'scroll-padding-block-end',
      'scroll-padding-block-start',
      'scroll-padding-block',
      'scroll-padding-bottom',
      'scroll-padding-inline-end',
      'scroll-padding-inline-start',
      'scroll-padding-inline',
      'scroll-padding-left',
      'scroll-padding-right',
      'scroll-padding-top',
      'scroll-padding',
      'scroll-snap-inline-block',
      'scroll-snap-margin-block-end',
      'scroll-snap-margin-block-start',
      'scroll-snap-margin-block',
      'scroll-snap-margin-bottom',
      'scroll-snap-margin-inline-end',
      'scroll-snap-margin-inline-start',
      'scroll-snap-margin-left',
      'scroll-snap-margin-right',
      'scroll-snap-margin-top',
      'shape-margin',
      'width',
      'top',
      'right',
      'bottom',
      'left',
    ],
  },
  color: {
    properties: [
      'background-color',
      'border-bottom-color',
      'border-color',
      'border-left-color',
      'border-right-color',
      'border-top-color',
      'color',    
    ],
    tokens: {
      'neutral-50': 'hsl(220, 25%, 97.5%)',
      'neutral-100': 'hsl(220, 25%, 95%)',
      'neutral-200': 'hsl(220, 25%, 85%)',
      'neutral-300': 'hsl(220, 25%, 75%)',
      'neutral-400': 'hsl(220, 25%, 65%)',
      'neutral-500': 'hsl(220, 25%, 50%)',
      'neutral-600': 'hsl(220, 25%, 40%)',
      'neutral-700': 'hsl(220, 25%, 30%)',
      'neutral-800': 'hsl(220, 25%, 20%)',
      'neutral-900': 'hsl(220, 25%, 15%)',

      'red-50': 'hsl(0, 100%, 97.5%)',
      'red-100': 'hsl(0, 100%, 95%)',
      'red-200': 'hsl(0, 100%, 85%)',
      'red-300': 'hsl(0, 100%, 75%)',
      'red-400': 'hsl(0, 100%, 65%)',
      'red-500': 'hsl(0, 100%, 35%)',
      'red-600': 'hsl(0, 100%, 30%)',
      'red-700': 'hsl(0, 100%, 25%)',
      'red-800': 'hsl(0, 100%, 20%)',
      'red-900': 'hsl(0, 100%, 15%)',

      'orange-50': 'hsl(25, 100%, 97.5%)',
      'orange-100': 'hsl(25, 100%, 95%)',
      'orange-200': 'hsl(25, 100%, 85%)',
      'orange-300': 'hsl(25, 100%, 75%)',
      'orange-400': 'hsl(25, 100%, 60%)',
      'orange-500': 'hsl(25, 100%, 50%)',
      'orange-600': 'hsl(25, 100%, 40%)',
      'orange-700': 'hsl(25, 100%, 35%)',
      'orange-800': 'hsl(25, 100%, 25%)',
      'orange-900': 'hsl(25, 100%, 20%)',

      'yellow-50': 'hsl(50, 100%, 97.5%)',
      'yellow-100': 'hsl(50, 100%, 95%)',
      'yellow-200': 'hsl(50, 100%, 85%)',
      'yellow-300': 'hsl(50, 100%, 75%)',
      'yellow-400': 'hsl(50, 100%, 60%)',
      'yellow-500': 'hsl(50, 100%, 50%)',
      'yellow-600': 'hsl(50, 100%, 40%)',
      'yellow-700': 'hsl(50, 100%, 35%)',
      'yellow-800': 'hsl(50, 100%, 25%)',
      'yellow-900': 'hsl(50, 100%, 20%)',

      'green-50': 'hsl(135, 80%, 97.5%)',
      'green-100': 'hsl(135, 80%, 95%)',
      'green-200': 'hsl(135, 80%, 85%)',
      'green-300': 'hsl(135, 80%, 75%)',
      'green-400': 'hsl(135, 80%, 45%)',
      'green-500': 'hsl(135, 80%, 35%)',
      'green-600': 'hsl(135, 80%, 30%)',
      'green-700': 'hsl(135, 80%, 25%)',
      'green-800': 'hsl(135, 80%, 20%)',
      'green-900': 'hsl(135, 80%, 15%)',

      'teal-50': 'hsl(180, 80%, 97.5%)',
      'teal-100': 'hsl(180, 80%, 95%)',
      'teal-200': 'hsl(180, 80%, 85%)',
      'teal-300': 'hsl(180, 80%, 75%)',
      'teal-400': 'hsl(180, 80%, 45%)',
      'teal-500': 'hsl(180, 80%, 35%)',
      'teal-600': 'hsl(180, 80%, 30%)',
      'teal-700': 'hsl(180, 80%, 25%)',
      'teal-800': 'hsl(180, 80%, 20%)',
      'teal-900': 'hsl(180, 80%, 15%)',

      'blue-50': 'hsl(220, 80%, 97.5%)',
      'blue-100': 'hsl(220, 80%, 95%)',
      'blue-200': 'hsl(220, 80%, 85%)',
      'blue-300': 'hsl(220, 80%, 75%)',
      'blue-400': 'hsl(220, 80%, 65%)',
      'blue-500': 'hsl(220, 80%, 50%)',
      'blue-600': 'hsl(220, 80%, 40%)',
      'blue-700': 'hsl(220, 80%, 35%)',
      'blue-800': 'hsl(220, 80%, 30%)',
      'blue-900': 'hsl(220, 80%, 20%)',

      'purple-50': 'hsl(280, 80%, 97.5%)',
      'purple-100': 'hsl(280, 80%, 95%)',
      'purple-200': 'hsl(280, 80%, 85%)',
      'purple-300': 'hsl(280, 80%, 75%)',
      'purple-400': 'hsl(280, 80%, 65%)',
      'purple-500': 'hsl(280, 80%, 50%)',
      'purple-600': 'hsl(280, 80%, 40%)',
      'purple-700': 'hsl(280, 80%, 35%)',
      'purple-800': 'hsl(280, 80%, 30%)',
      'purple-900': 'hsl(280, 80%, 20%)',

      'pink-50': 'hsl(320, 80%, 97.5%)',
      'pink-100': 'hsl(320, 80%, 95%)',
      'pink-200': 'hsl(320, 80%, 85%)',
      'pink-300': 'hsl(320, 80%, 75%)',
      'pink-400': 'hsl(320, 80%, 65%)',
      'pink-500': 'hsl(320, 80%, 50%)',
      'pink-600': 'hsl(320, 80%, 40%)',
      'pink-700': 'hsl(320, 80%, 35%)',
      'pink-800': 'hsl(320, 80%, 30%)',
      'pink-900': 'hsl(320, 80%, 20%)',
    }
  },
  opacity: {
    properties: [
      'opacity',
    ],
    tokens: {
      '0': '0%',
      '10': '10%',
      '20': '20%',
      '30': '30%',
      '40': '40%',
      '50': '50%',
      '60': '60%',
      '70': '70%',
      '80': '80%',
      '90': '90%',
      '100': '100%',
    }
  }
}

export const aliases: TokenDefinitions[] = [
  // TODO: Example alias token. Update with Scott's
  {
    properties: [
      'font-size',
    ],
    tokens: {
      'small': base.scale.tokens['300'],
      'default': base.scale.tokens['500'],
      'large': base.scale.tokens['700'],
    }
  },
  {
    properties: [
      'background-color',
      'border-bottom-color',
      'border-color',
      'border-left-color',
      'border-right-color',
      'border-top-color',
      'color',
    ], 
    tokens: {
      'primary': base.color.tokens['blue-500'],
      'primary-hover': base.color.tokens['blue-400'],
      'primary-focus': base.color.tokens['blue-400'],
      'primary-active': base.color.tokens['blue-600'],

      'neutral': base.color.tokens['neutral-500'],
      'neutral-hover': base.color.tokens['neutral-400'],
      'neutral-focus': base.color.tokens['neutral-400'],
      'neutral-active': base.color.tokens['neutral-600'],

      'success': base.color.tokens['green-500'],
      'success-hover': base.color.tokens['green-400'],
      'success-focus': base.color.tokens['green-400'],
      'success-active': base.color.tokens['green-600'],

      'warning': base.color.tokens['orange-500'],
      'warning-hover': base.color.tokens['orange-400'],
      'warning-focus': base.color.tokens['orange-400'],
      'warning-active': base.color.tokens['orange-600'],

      'danger': base.color.tokens['red-500'],
      'danger-hover': base.color.tokens['red-400'],
      'danger-focus': base.color.tokens['red-400'],
      'danger-active': base.color.tokens['red-600'],
    }
  }
]


