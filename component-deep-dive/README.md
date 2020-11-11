# Component Deep Dive

## Quick Links
[More on useEffect()](https://reactjs.org/docs/hooks-effect.html)\
[State & Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)\
[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)\
[Higher Order Components](https://reactjs.org/docs/higher-order-components.html)\
[Refs](https://reactjs.org/docs/refs-and-the-dom.html)

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

### `useEffect()`
`useEffect()` can be used in functional components as it if were `componentDidUpdate()`. It is sort of a combination of `componenetDidMount()` and `componentDidUpdate` but for functional components. Pass in a function which is executed in every render cycle of that component. Since it actually runs on creation and on update, we can configure it to only update if specified data is changed. The second argument can be an array of the data that when changed would trigger the function. Passing an empty array means that you only want the function to run once, on creation. 

### Optimizing Rendering

#### `shouldComponentUpdate()`
The `shouldComponentUpdate()` lifecyle method determines whether the DOM should be re-rendered. Sometimes, a component may have a change, but some of it's children will remain the same, so there is no reason for it to re-render. It should return a `true` or `false` value. 

#### `React.memo()` and Pure Components
For functional components, we use `React.memo()` to do the same as above. Pure components does a similar thing. It allows us to compare the current propts and the future props, and then re-renders only what is needed to. 

## Higher Order Components (HOC)
Wrapping the JSX in a root component may not make sense structurally. Some components simply wrap around other components or JSX. These generally have no styling, structuring (HTML), or functional aspects to them. A lot of times, we want `<div>`s wrapping our JSX because we can apply classes to them. With HOCs, we can do this in a more elegant way. For example:

```
import React from 'react';

const WithClass = props => (
    <div className={props.classes}>{props.children}</div>
);

export default WithClass;
```

and then when we import it in another file to use:

```
import WithClass from '../withClass';

render() {
    return (
      <WithClass classes={styles.App}>
        <p>Don't click this button!</p>
        <button onClick={this.doSomething}>Toggle Cockpit</button>
      </WithClass>
    );
}
```
Here, we are applying the `.App` class from a CSS module.

### Fragment
In these cases, React has a built in feature called Fragment, which basically wraps JSX code in a root element that is not rendered in the DOM:
```
import React { Fragment } from 'react';
...
render() {
    return (
        <Fragment>...</Fragment>
    )
}
```

## Note on Setting State
Ususall, we can just use `setState()` the normal way to manipulate the component state. However, if we are changing a state based on the previous state, this could cause problems. What we think of as the previous state could actually not be becuse of the lifecycles. So to avoid this issue, we can pass two arguments to `setState()`: `prevState` and `props`. 
```
state = {
    counter: 0
}

this.setState(prevState, props) => {
    return {
        counter: prevState.counter + 1
    }
}
```

## Props Chain Problems
Passing props around to a shit ton of components can be cumbersome. To get around this issue, we can use the Context API or use `static contextType` feature in React. This allows us access to defined props without passing them explicitly. It is a bit confusing, so it would be better to just look it up. 
