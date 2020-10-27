# Notes

## Quick Links
[]()

## Conditionals
There are two main ways to display content conditionally. Since React is just JS, both involve writing JS. The first method is using a ternary expression inside the `render()` method's return statement. In this example, the button toggles a boolean state property named `showPersons`
```
render() {
  return (
      <div className="App">
        <h1>Hello, I am a React app</h1>
        <button 
        style={style}
        onClick={this.togglePersonHandler} >Show People</button>
        {this.state.showPersons === true ?
          <Person /> : null
        }
      </div>
    );
  }
```
Here, the conditional statement will render everything between `?` and `:` if it is true. Otherwise it will return `null`.

The recommended way to display conditional content is by writing JS, not JSX. We can write JS in the `render()` method but outside of the return statement. The JS  that is written returns JSX which is stored in a variable. 
```
let persons = null;
if(this.state.showPersons) {
  persons = (
    <div>
      <Person 
        name={person.name}
        age={person.age} />
    </div>
  );
}
```
Then, in the `return()` function, can can reference this `persons` JSX object to render it:
```
return (
  <div className="App">
    <h1>Hello, I am a React app</h1>
    <button 
    style={style}
    onClick={this.togglePersonHandler} >Show People</button>
    {persons}
  </div>
);
```

## Lists
Use the JS array `map()` function to map elements from arrays into components (or whatever else you want). `map()` takes a function as an argument. This function can have two arguments itself. The first is a variable to that is used to refernce each element in the array. The second is optional and is used to keep track of the index of the array as it is being iterated over. **Note** that when using two arguments, they must be wrapped in `()`.
```
this.state.persons.map( (person, index) => {
  return <Person
    name={person.name}
    age={person.age} />
} );
```

## Changing State Immutably
Since JS objects and arrays are reference types we do not want to mutate the original data. We can ensure that we do not alter state directly by creating a copy of the array before manipulating it. One method to do this is useing the `.slice()` array function without arguments. This returns a copy of the array. However, we can also use the spread operator: `const newArr = [...oldArr]`. 

In this example, we are deleting an element in the `persons` state array, but first we copy the current state, manipulate the copy, and set the state to this manipulated array.
```
deletePersonHandler = (index) => {
  const p = [...this.state.persons];
  p.splice(index, 1);
  this.setState({persons: p});
}
```

## List Keys
The `key` property is a default property that is important when rendering lists of data. It helps React update the DOM efficiently. Its value has to be a unique identifier, so for this example, we change our `persons` state object array to hold a new property:
```
state = {
  persons: [
    {id: '123', name: 'Bob', age: 23},
    {id: '456', name: 'Randers', age: 25},
    {id: '789', name: 'Stephanie', age: 22}
  ]
```
And then we set the key with `{key=this.state.persons[index].id}` when we want to use it.

## Flexible lists
We can assign events to change component-specific data. Here, we are allowing the user to type in a name that will replace the current person's name. First, we pass the function we want to call to the child component using the `changed` props. Since the child calls this on input change (it is a textfield), we get the `event` object, which we pass to `nameChangeHandler()` along with `person.id`.
```
let persons = null;
if(this.state.showPersons) {
  persons = (
    <div>
    {this.state.persons.map((person, index) => {
      return <Person 
        click={() => this.deletePersonHandler(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.nameChangeHandler(event, person.id)} />
    })}
    </div>
  );
}
```
Then we have to define the function we are calling. They point here is to find which component is being updated by searching through the state `persons` object array and matching the `id`. Then we make a copy of the individual element we want to change and the state array before manipulating the former and updating the latter. 
```
nameChangeHandler = (event, id) => {
    // Get the index of the matching id argument
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Copy the current person at the matched index to a new person object
    const personUpdated = {...this.state.persons[personIndex]};

    // Update the copy's name
    personUpdated.name = event.target.value;

    // Copy the persons arrray to then swap in the updated value
    const personsUpdated = [...this.state.persons];
    personsUpdated[personIndex] = personUpdated;

    // Update the State array
    this.setState( {persons: personsUpdated} );
  }
```
By using conditionals and lists with React, we can make responsive and powerful apps. 