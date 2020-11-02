# Styling Components 
Remeber that CSS stylesheets are globally scoped and inline-styles (using JS) are scoped to that component. However, you can't write pseudo-style rules with inline JS.

## Quick links
[Radium](https://formidable.com/open-source/radium/)
[Styled Components](https://styled-components.com/)
[CSS Modules Github](https://github.com/css-modules/css-modules)
[CSS Modules React](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)

## Dynamically changing styles
With inline styles, we can just set object properties like in regular JS, meaning that they can be updated easily. 
```
const style = {
    backgroundColor: 'green',
}

style.backgroundColor: 'red'
```

## Setting Class Names Dynamically
We can also change styles by changing the assigned `className`. To do this, we have an array of strings and join them into one longer string with each element separated by a space character by using the `.join(' ')` array method. 
```
const classes = [];
classes.push('red');
classes.push('bold');

<p className={classes.join(' ')}>This is a bold, red paragraph</p>
```

## Radium
(Radium)[https://formidable.com/open-source/radium/] is a popular package to use pseudo selectors and media queries with inline stlying. Remember to import it and when you export a comonent, you have to wrap in in a `Radium()` method.
```
export default Radium(myApp);
```
Then, you are able to write pseudo selection rules by using quotes around the selector. So to use hover, you would do:
```
const style = {
    backgroundColor: 'green',
    ':hover': {
        backgroundColor: 'lightgreen',
    }
};
```

Using media queries is also possible with Radium, though you must wrap your whole App/root component in a `<StyleRoot>` component. Otherwise, writing rules works the same way as above. 
```
const style = {
    backgroundColor: 'green',
    '@media (min-width: 500px)': {
        backgroundColor: 'lightgreen',
    }
};
```

## Styled Components
(Styled Components)[https://styled-components.com/] is another JS library that is useful in styling React components. Import this library gives us access to the `styled` object. It has a method for each HTML element and takes in a string of the styles you want to apply to that element. The method does not use `()`, though. The defined styles go in between backticks. We can also make components with this.

```
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  font: inherit;
  border: solid blue thin;
  padding: 8px;
  cursor: pointer;
  `}

render() {
    return (
    <StyledButton 
    alt={this.state.showPersons}
    onClick={this.togglePersonHandler}>
        Show People
    </StyledButton>
    );
}
```
Kind of wierd to have the CSS and JS in one file. It clogs it up, so we have one other way to style components.

## CSS Modules
When importing the CSS file, we can give it a name like `import styles from './App.css';`. They we can use this `styles` object to assign classes. Under the hood, React takes all the classes and styles we define in App.css and converts them to unique class names that is applied to our code. In this way, they are scoped to our components. 
```
<button className={styles.Button}>
```
The above `styles.Button` is a pointer to a unique style defined by `.Button{...}` in our App.css. Since we are just writing regular CSS in a .css file, we can use media queries and other CSS rules as we would normally.