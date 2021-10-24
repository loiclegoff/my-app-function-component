# React Tutorial

The essential guide to getting started with React. This walkthrough tutorial will have you building an application in React from scratch, learning about state, props, and components along the way.

### Prerequisites

- Basic familiarity with [HTML & CSS](https://internetingishard.com/).
- Basic knowledge of [JavaScript](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript) and programming.
- Basic understanding of [the DOM](https://www.taniarascia.com/introduction-to-the-dom/).
- Familiarity with [ES6 syntax and features](https://www.taniarascia.com/es6-syntax-and-feature-overview/).
- [Node.js and npm](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/) installed globally.

#### Goals

- Learn about essential React concepts and related terms, such as Babel, Webpack, JSX, components, props, state, and lifecycle.
- Build a very simple React app that demonstrates the above concepts.

Here's the source and a live demo of the end result.

- [View Source on GitHub](https://github.com/loiclegoff/my-app)

## Setup and Installation

### Static HTML File

Let's start by making a basic `index.html` file. We're going to load in three CDNs in the `head` - React, React DOM, and Babel. We're also going to make a `div` with an id called `root`, and finally we'll create a `script` tag where your custom code will live.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      // React code will go here
    </script>
  </body>
</html>
```

I'm loading in the latest stable versions of the libraries as of the time of this writing.

- [React](https://reactjs.org/docs/react-api.html) - the React top level API
- [React DOM](https://reactjs.org/docs/react-dom.html) - adds DOM-specific methods
- [Babel](https://babeljs.io/) - a JavaScript compiler that lets us use ES6+ in old browsers

The entry point for our app will be the `root` div element, which is named by convention. You'll also notice the `text/babel` script type, which is mandatory for using Babel.

Now, let's write our first code block of React. We're going to use ES6 classes to create a React component called `App`.

index.html

```jsx
const App = () => {
  //...
}
```

Now we'll add the [`return`](https://reactjs.org/docs/react-component.html#render) value, which is used to render DOM nodes.

index.html

```jsx
const App = () => {
  return (
      //...
  );
}
```

Inside the `return`, we're going to put what looks like a simple HTML element. Note that we're not returning a string here, so don't use quotes around the element. This is called `JSX`, and we'll learn more about it soon.

index.html

```jsx
const App = () => {
  return <h1>Hello world!</h1>
}
```

Finally, we're going to use the React DOM `render()` method to render the `App` class we created into the `root` div in our HTML.

index.html

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

Here is the full code for our `index.html`.

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Hello React!</title>

    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      const App = () => {
        return <h1>Hello world!</h1>
      }

      ReactDOM.render(<App />, document.getElementById('root'))
    </script>
  </body>
</html>
```

Now if you view your `index.html` in the browser, you'll see the `h1` tag we created rendered to the DOM.

### Create your app folder

To set up `create-react-app`, run the following code in your terminal, one directory up from where you want the project to live.

```shell
npm install -g create-react-app # to install package globally
npx create-react-app my-app
cd my-app && npm start
```

# Step 0 : first app

Open `public/index.html` and add bootstrap import to use css rules

```html
<head>
  <!-- ... -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
    crossorigin="anonymous"
  />
</head>
```

## Exemple

```jsx
import React from 'react'

function App({ title }) {
  // state is initialized by a props
  const [title, setTitle] = useState(props.title)

  const handleChangeTitle = (e) => {
    // this.setState allows us to update the state value
    setTitle(e.target.value)
  }

  return (
    <div className='App'>
      <h1> this is my first React Component</h1>
      <label htmlFor='titleInput'>Title</label>
      <input
        type='text'
        id='titleInput'
        onChange={handleChangeTitle}
        value={title}
      />
      <h3>{title}</h3>
    </div>
  )
}
export default App
```

## Practice

Modify `index.js` and `App.js` to:

- Create App allowing to get as input a title and print it below
  <details>
      <summary>help</summary>
      <p>
          use a state to store the value of the input
      </p>
  </details>
- Your App component must be initialized with the title property = ‘default_title’
    <details>
        <summary>help</summary>
        <p>
            props to initialize this property
        </p>
    </details>
- Update the number of mouse over the printed title
    <details>
        <summary>help</summary>
        <p>
            use state and the event onMouseOver of the div that contains the title
        </p>
    </details>

## Correction proposal

- [branch](https://github.com/loiclegoff/my-app-function-component/tree/step0-first_app)

# Step 1 : use bootstrap components

Install bootstrap

```shell
npm install react-bootstrap bootstrap
```

Replace your elements that use bootstrap classnames with the correct component imported from `react-bootstrap`. Example to use the Button component :

```jsx
import { Button } from 'react-bootstrap'
```

Others components : https://react-bootstrap.github.io/components/alerts

## Correction proposal

- [branch](https://github.com/loiclegoff/my-app-function-component/tree/step1-first_app_with_bootstrap_components)
- [difference with previous step](https://github.com/loiclegoff/my-app-function-component/compare/step0-first_app...step1-first_app_with_bootstrap_components?diff=split)

# Step 2 : 1 robot

## Fetch data

A REST api is availaible at the following URL : https://pure-temple-56604.herokuapp.com

For this step you can use these endpoints:

```
GET    /robots
GET    /robots/1
```

## Application

You must create the following application :

![App](/screenshots/step-2.png)

Please take the time to analyze this image and identify the required components

To do :

- A main component that fetches data from robots
    <details>
    <summary>help</summary>
    You can use the default **fetch** API to get data. This resquest can be triggered by the *useEffect* hook (without deps)
    </details>
- A Left side component: `RobotList`
- A `Robot` component
- A `Label` component for the Robot Component

## Correction proposal

- [branch](https://github.com/loiclegoff/my-app-function-component/tree/step2-1_robot_img_video)
- [difference with the previous step](https://github.com/loiclegoff/my-app-function-component/compare/step1-first_app_with_bootstrap_components...step2-1_robot_img_video?diff=split)

# Step 3 : list robots

Update one component to show all robots

## Correction proposal

- [branch](https://github.com/loiclegoff/my-app-function-component/tree/step3-list_of_robots_img_video)
- [difference with the previous step](https://github.com/loiclegoff/my-app-function-component/compare/step2-1_robot_img_video...step3-list_of_robots_img_video?diff=split)

# Step 4 : list robots and associated parts

## Goal

![App](/screenshots/step-4.png)

Take the time to analyze this image and determine how many components you need to create

## Fetch data

For this step you can use these endpoints:

```
GET    /robots
GET    /robots/1
GET    /parts
GET    /parts?id=A1&id=A2
```

## Application

- Add a MiddleSide Component displaying the parts list: `PartList`
    <details>
    <summary>help</summary>
    See the implementation of RobotList commponent
    </details>
- Add a `Part` Component using
  - `Description` Component
  - `Price` Component
  <details>
  <summary>help</summary>
  See the implementation of Robot component
  </details>
- Update the `PartList` Component to show only the part related to the selected robot
    <details>
    <summary>help</summary>
    Add a new attibute in the main state : selectedId. Inject in RobotList component a setter and add the property selectedPartIds in PartList
    </details>

## Others features (for futher)

_This part is not required_

Add a RightSide Component to display description of selected part.

<details>
<summary>help</summary>
You can re-use Price and Visual components
</details>

## Correction proposal

- [branch](https://github.com/loiclegoff/my-app-function-component/tree/step4-list_of_robots_with_related_parts)
- [difference with the previous step](https://github.com/loiclegoff/my-app-function-component/compare/step3-list_of_robots_img_video...step4-list_of_robots_with_related_parts?diff=split)

### With others features

- [branch](https://github.com/loiclegoff/my-app-function-component/tree/step4bis-list_of_robots_with_related_parts_and_right_panel)
- [difference](https://github.com/loiclegoff/my-app-function-component/compare/step4-list_of_robots_with_related_parts...step4bis-list_of_robots_with_related_parts_and_right_panel?diff=split)

# Step 5 : list robots and associated parts with redux

## Redux flow

![App](/screenshots/redux-flow.png)

## Create actions

In file `actions/index.js`, create action types and action creators

```jsx
/*
 * action types
 */
export const UPDATE_ROBOTS = 'UPDATE_ROBOTS'

/*
 * action creators
 */

export function setRobots(robots) {
  return { type: UPDATE_ROBOTS, robots }
}
```

You must create 4 actions:

- set robots_list after fetch
- set part_list after fetch
- set selected robot id
- set selected part id

## Create Reducers

In file `reducers/robotReducer.js`, create action types and action creators

```jsx
import { UPDATE_ROBOTS } from '../actions'

const initialState = {
  robots: [],
  /*...*/
}

/**
 * Reducer
 */
const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROBOTS:
      // state is immutable, you must create a new object with another reference
      return {
        ...state,
        robots: action.robots,
      }
    default:
      return state
  }
}

export default robotReducer
```

You must create 2 reducers with an initial state. Each declared action must be used in one of the reducers

## Store and Provider

Create the `globalReducer` to merge `robotReducer` and `partReducer`.
Add the store and the provider in `src/App`.
You can add options to use ReduxDevTools on Firefox/Chrome:

```js
const store = createStore(
  globalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```

## Add dispatchers and selector to be connected with the store

Exemple

MyComponent.jsx

```jsx
const Component = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.isOpen)

  const toggle = () => {
    //...
    dispatch(setIsOpen(!isOpen))
  }

  return (
    <>
      <Button onClick={toggle} />
      {isOpen && <AnotherComponent />}
    </>
  )
}
```

## Practice

- Subscribe to store and get the list of robots in the **RobotList** component
- Dispatch the robots fetching in the **RobotList** component
- Dispatch selected robot in the **Robot** component
- Subscribe to store and get the list of parts in the **Partlist** component
- Dispatch the parts fetching in the **PartList** component
- Dispatch selected part in the **Part** component
- Subscribe to store and get the selected part in the **PartDetail** component

## Correction proposal

- [branch](https://github.com/loiclegoff/my-app-function-component/tree/step5-list_of_robots_with_related_parts_redux)
- [difference with the previous step](https://github.com/loiclegoff/my-app-function-component/compare/step4bis-list_of_robots_with_related_parts_and_right_panel...step5-list_of_robots_with_related_parts_redux?diff=split)

# Step  : Advanced Practice

## Remove Redux to use native Context of react

- [React Context Documentation](https://fr.reactjs.org/docs/context.html)
- [Context Hook](https://reactjs.org/docs/hooks-reference.html#usecontext)

## Memorization

Improve code base with memorization : useMemo, useCallback, memo.

## Lazy loading and Suspense

[Documentation](https://reactjs.org/docs/react-api.html#reactsuspense)

# Docs, Sources and Inspirations

- [Tania Rascia Tutorial](https://www.taniarascia.com/getting-started-with-react/)
- [Jacques Saraydaryan Tutorial](https://github.com/jacques-saraydaryan/front-end-react.js)
- [Redux Basic Tutorial](https://redux.js.org/basics/basic-tutorial)
- [Redux Hooks API Reference](https://react-redux.js.org/api/hooks)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [JavaScript Documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/)
