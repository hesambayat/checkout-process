# Checkout process
A simple workflow that guides the user through a checkout process and collects data.

## Development workflow
After cloning the project, run `yarn` to fetch its dependencies. Then, you can run the following commands:

- `yarn serve` compiles and hot-reloads for development.
- `yarn build` compiles and minifies for production.
- `yarn lint` lints and fixes files.
- `yarn test:unit` runs the complete test suite.
- `yarn test:unit --watch` runs an interactive test watcher.

## Styles guide
This app uses Sass pre-processor and follows BEM methodology. \
See [Sass documentation](https://sass-lang.com/documentation/). \
See [BEM introduction](http://getbem.com/introduction/).

## Reusing components
The components exported with `@/compontents/index.js` are globally defined. For the constancy, component folders and component names are dashed lowercase and prefixed with their type, e.g. `el-` as an element.

### Input
A model input component.
#### Input props
| Name         | Type         | Default      | Description |
| ------------ | ------------ | ------------ | ----------- |
| autocomplete | `string`     | `undefined`  | Provide automated assistance in filling out form field value |
| errorMessage | `string`     | `undefined`  | Custom error message to display |
| label        | `string`     | `undefined`  | The input label renders above the field |
| type         | `string`     | `undefined`  | The input type |

#### Input two-way binding
| Name         | Type         | Description |
| ------------ | ------------ | ----------- |
| v-model      | `(value: string)`     | Data to bind |

## Store
This app uses Vuex as a centralized store for state management pattern + library. The global store is divided into three modules, one for each of two forms and one for keeping track of completed forms. The latter will help simplify the view components in rendering the relevant UI relatively to the checkout process state.

### Slides module
Keeps track of the slides validity for the navigation purpose and deep-links, `info` and `consent`.

### User consent module
Stores session consent information.

### User info module
Stores the user info entries.

## Tests
The test suites are categorized into two test types, integration, and functional tests. 
- Integration tests are suffixed by `.test.js` and usually located in the `__tests__` folders.
- Functional tests are suffixed by `.spec.js` and usually located in the app root directory `/tests`

### Integration testing
Integration tests are isolated and individual tests for components, stores,  utils, etc., to ensure they work as expected. They do not tend to cover business logic and requirements.  

### Functional testing
Functional tests verify the app functionality and business requirements as a whole. They also demonstrate that various user flows work as expected and can be as simple as loading a page or more complex scenarios.

## Customize configuration
See [Configuration reference](https://cli.vuejs.org/config/).
