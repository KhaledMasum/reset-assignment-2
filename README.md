Question-1: What is JSX, and why is it used?
Ans: JSX stands fo Javascript XML. It is used to write javascript codes like HTML syntax.

Question-2: What is the difference between State and Props?
Ans: State is like a variable that can preserve the data. Using state, we can dynamically changes data in the components. When the state changes, the page re-rendered. Props is used to pass states, function etc to child components. Using props, we can reuse components in react.

Question-3: What is the useState hook, and how does it work?
Ans: useState hook is a react hook that can dynamically update data from different components. A useState hook has a state variable and a function to update the value of the state variable. Initially, a value is set in the useState. After that, each time when the function is called, the value of that variable also changed.

Question-4: How can you share state between components in React?
Ans: State can be passed from parent components to child components using props. Context API is another way of passing states to different components. As, state cannot lifting upwards from child to parent, there is a way of doing this using function. It is called lifting state up.

Question-5: How is event handling done in React?
Ans: Event handling is done almost like event handler in HTML. In react, the event handler is attached with a html attributes like button, div etc. In React, events handler are written in camel case like "onClick". A function calling inside an event handler is different. It needs to wrap inside an anonymous function, otherwise it is called immidiately when the page loads.
