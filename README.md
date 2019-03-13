## Instructions

- Configure your config.js file in the configuration folder, you can use the file config.example.js as a base.
- Install the npm packages with:
  `npm install`

## Npm scripts

For the developer's facility this repository has several npm scripts ready to be executed and for different purposes. They are listed below:

- For the development
  `npm run dev`

- To compile and run to production
  `npm run build`

## Project structure

```shell
│ / \# → Root
├── __mocks__/ \# → Global mocks
├── build/ \# → Automatically generated compiled code
├── src/ \# → Client source code
│ ├── components/ \# → Reusable components (They do not know redux)
│ │ └── ExampleComponent/
│ │     ├── __test__/ \# → Folder with jest testing scripts
│ │     └── index.jsx
│ ├── containers/ \# → React containers
│ ├── pages/ \# → React pages
│ ├── redux/ \# → Actions, reducers, store & types
│ │ ├── actions/
│ │ ├── reducers/
│ │ ├── store/
│ │ └── types/
│ ├── services/ \# → Configuring requests to the backend
│ ├── static/ \# → Server resources
│ │ └── images/
│ ├── styles/ \# → Styles in Less
│ └── utils/ \# → Utilities & helpers
├── config.js \# → Configuration file
├── next.config.js \# → Next configuration
├── routes.js \# → Routes of the app
└── server.js \# → Node server
```

## Development standard

The source code should follow the following guidelines:

- The naming convention for variables, functions, methods, will be lower camel case. Ex: "thisIsMyBeautifulFunction".
- The names of the React components begin with uppercase. Ex: "MyComponent".
- Every component folder must have an index file that is the main file.
- Each function and method must be commented on, specifying what it does, the parameters it receives and the values that return.
- All API requests go in the services folder.
- If a container uses a component that is not reusable, it must be in the same folder as the containe with the extension ".comp.js". Ex: "myComponent.comp.js". If there are many components, a "Components" folder can be created inside the container folder.
- If a reusable component requires a configuration file, it must be in the same folder of the component with the extension ".conf.js".
- All reusable components must have defined their propTypes and defaultProps. See [here](https://reactjs.org/docs/typechecking-with-proptypes.html) for more information about propTypes.
- The general styles go in the styles folder. Styles that only apply to a particular component go in the component or container folder with the name "style.less".
- The render method should not be extended too much, if it is extending a lot, functions should be used to reduce its extension.
- If one component extends too much, it must sub divide into other small components.
- If the state or props are going to be used, they must be declared at the beginning in the following way:

```
const { stateVariable, otherStateVariable } = this.state
const { propsVariable, otherPropsVariable } = this.props
```

- The order of the methods within a React component will be as follows:

```
constructor(){}
componentWillMount(){}
(Other methods inherited from React.component)
render(){}
myCustomMethod(){}
(Other custom methods)
```

- There must be one component for each container. The containers should not have elements of styles.
- The component in most cases should not have status, event management and knowledge of the store. These should be provided by your container.

## Libraries and frameworks

- Style sheets - [Less](http://lesscss.org/features/).
- Framework css - [Andt](https://ant.design/docs/react/introduce).
- Handling dates - [Moment](https://momentjs.com/docs).
- Http requests - [Axios](https://github.com/axios/axios).
- Multilanguage - [React intl](https://github.com/yahoo/react-intl/wiki).

## Plugins for VS code

- Code Spell Checker
- ESLint
- Prettier - Code formatter

## Convention commits

#### Format

Type: Short description  
More description (if it is necessary)  
issue number

#### Types:

- feat: A new feature.
- fix: Fixed a bug.

#### Example:

Feat: login function  
Now you can login through basic authentication  
issue 23

For more details you can review [this article](http://udacity.github.io/git-styleguide/).
