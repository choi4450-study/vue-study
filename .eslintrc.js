// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'off',
    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'off',
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': 'error',
    // disallow unnecessary semicolons
    'no-extra-semi': 'warn',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'off',
    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['off', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
      ]
    }],
    // enforce spacing inside single-line blocks
    'block-spacing': ['warn', 'always'],
    // require trailing commas in multiline object literals
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    // require padding inside curly braces
    'object-curly-spacing': ['warn', 'always'],
    // require method and property shorthand syntax for object literals
    'object-shorthand': ['warn', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    // enforce spacing inside array brackets
    'array-bracket-spacing': ['warn', 'never'],
    // enforces no braces where they can be omitted
    'arrow-body-style': ['warn', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    // require parens in arrow function arguments
    'arrow-parens': ['warn', 'as-needed', {
      requireForBlockBody: true,
    }],
    "func-names": "off",
    // require or disallow space before blocks
    'space-before-blocks': 'warn',
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    // require or disallow spaces inside parentheses
    'space-in-parens': ['warn', 'never'],
    // require spaces around operators
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['warn', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: false,
      }
    }],
    // require or disallow use of semicolons instead of ASI
    'semi': ['warn', 'always']
  }
}
