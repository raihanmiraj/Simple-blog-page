import React from 'react';

const QuesAndAns = () => {
    return (
        <>
           <div class="card mb-3">
  <div class="card-body">
    <h3>Difference Between State vs Props?</h3>
  <p class="card-text ms-2">Props refer to the data passed into a component when it is rendered. They are read-only and cannot be modified once set.<br/>
State refers to the state of the component at any given time. It can be modified during the lifecycle of the component.</p>

  </div>
</div> 


<div class="card mb-3 ">
  <div class="card-body">
    <h3>What is UseState?</h3>
  <p class="card-text ms-2">In React, the useState hook is used to manage state in functional components.
<br/>
When you call useState, it returns an array with two elements: the current state value and a function that can be used to update the state.</p>

  </div>
</div> 


<div class="card   mb-3">
  <div class="card-body">
    <h3>Application of useEffect?</h3>
  <p class="card-text ms-2">
    <ul>
        <li>Fetching data from an API when the component mounts.</li>
        <li>Updating the title of the page based on the component's state. </li>
     </ul>
  </p>

  </div>
</div> 


<div class="card mb-3">
  <div class="card-body">
    <h3>how does react work?</h3>
  <p class="card-text ms-2">
  React is a JavaScript library used for building user interfaces. It allows developers to build reusable UI components and manage the state of those components.
<br/>
React works by maintaining a virtual representation of the UI in memory, called the Virtual DOM. Whenever the state of a component changes, React updates the Virtual DOM with the new state. It then compares the updated Virtual DOM with the previous one to figure out what has changed. Finally, it updates only the parts of the actual DOM that have changed, minimizing the number of expensive DOM manipulations.
<br/>
This process allows React to provide a fast and efficient way to build complex user interfaces while also providing a simple programming model that is easy to reason about.
  </p>

  </div>
</div> 





 

        </>
    );
}

export default QuesAndAns;
