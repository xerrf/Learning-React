# Styling Components 
Remeber that CSS stylesheets are globally scoped and inline-styles (using JS) are scoped to that component. However, you can't write pseudo-style rules with inline JS.

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

### Styled Components
(Styled Components)[https://styled-components.com/] is another JS library that is useful in styling React components. 