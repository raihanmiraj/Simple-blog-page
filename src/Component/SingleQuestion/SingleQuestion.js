import React from 'react';

const SingleQuestion = (props) => {
    return (
        <>
               <div class="card mb-3">
  <div class="card-body">
    <h3>{props.question}</h3>
  <p class="card-text ms-2">{props.answer}</p>

  </div>
</div>  
        </>
    );
}

export default SingleQuestion;
