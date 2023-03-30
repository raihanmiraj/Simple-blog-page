import React from 'react';

const BlogModel = (props) => {
    return (
        <>
          <div className="card border-0">
        <img
          src={props.coverImage}
          className="card-img-top rounded-2 card-img-custom"
          alt="..."
        />
        <div className="card-body ">
          {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <div className="content-owner d-flex justify-content-between align-items-center mt-2">
            <div className="content-athor d-flex align-items-center">
              <div className="img">
                  <img className='authorImg' src={props.authorImg} alt="" />
              </div>
              <div className="ms-3">
                <span className='authorName'>{props.authorName}</span>
                <br />
                <span className='publishDate'>{props.publishDate}</span>
              </div>
            </div>
            <div>
              <span>{props.readTime} min read</span>  <img  id={props.id} data={props.title} onClick={()=>{
                props.addBookMark(props.title)
              }} className="bookmark" src="images/bookmark.png" alt="" /> 
            </div>
          </div>
          <h1>{props.title}</h1>
          <p>
            {/* <span>#beginners</span>
            <span>#programming</span> */}
            {props.tag}
          </p>
          <button    onClick={()=>props.addReadTime(props.readTime)} className="  markasread"  >
            Mark as read
          </button>
          <hr/>
        </div>
      </div>  
 
        </>
    );
}

export default BlogModel;
