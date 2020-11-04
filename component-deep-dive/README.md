# Component Deep Dive
It is sometimes better to outsouce aspects of a component into its own component. This helps the App.js or root component have a slim `render()` method while also making it clear where the state is being changed. Methods that change state should usually be in the container component. It might be better for your app to have more functional components than class-based ones.

## Presentational Components
We have already learned that there are stateful and stateless components. Presentional, or 'dumb' components are stateless, but very useful. Presentational components are basically just to render the UI. Props are passed and event are bound to their container component, which should contain methods. This means that state changes are all in one place, making it easier to manage your app. 

## Class-based vs Functional Components
In the most recent release of React, functional components are more similar to class-based ones than they used to be. Historically, only class-based components could have and access state, and use lifecycle hooks. Now though, with React Hooks, we can do this in functional components. Remeber that you must use the `this` keyword when accessing props or state for class-based components.

## Lifcycle Hooks

### Creation 
The creation lifecyle is as follows
1. `constructor(props)`
    * Takes props as an argument.
    * Must call `super(props)` to execute the constructors for the component that is being extended. 
1. `getDerivedStateFromProps(props, state)`
    * A static method, so must include `static` keyword before use.
    * Takes props and state as arguments.
    * Returns (update) state.
1. `render()`
    * Returns JSX.
    * Renders all children components and runs their lifecycles before continuing. 
1. `componentDidMount()`
    * Can cause side-effect such as HTTP requests.

### Update  
The update lifecyle is as follows
1. `getDerivedStateFromProps(props, state)`
    * A static method, so must include `static` keyword before use.
    * Takes props and state as arguments.
    * Returns (update) state.
1. `shouldComponentUpdate(nextProps, nextState)`
    * Determines whether the component should update or not.
    * Returns boolean, true or false.
1. `render()`
    * Returns JSX.
    * Renders all children components and runs their lifecycles before continuing. 
1. `getSnapshotBeforeUpdate()`
    * Make last-minute DOM operations.
    * Kind of rare to use.
1. `componentDidUpdate()`
    * Can cause side-effect such as HTTP requests.



 
