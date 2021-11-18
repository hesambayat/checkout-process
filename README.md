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
The components exported with `@/compontents/index.js` are globally defined. For the constancy, component folders and component names are dashed lowercase and prefixed with their type, e.g `el-` as element.

### Customize configuration
See [Configuration reference](https://cli.vuejs.org/config/).
