import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import BlogModel from './Component/BlogModel/BlogModel';
import BookMarkModel from './Component/BookMarkModel/BookMarkModel';
import { useState, useEffect } from 'react';
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuesAndAns from './Component/QuesAndAns/QuesAndAns';

function App() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookMark, setbookMark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    if (loading) {
      fetch("/fakedata.json")
        .then((response) => response.json())
        .then((data) => {
          setBlogData(data)
          setLoading(false);
        });
       
    }

  });

const addBookMark=(e)=>{
  if(bookMark.indexOf(e) !== -1){
    toast('This is Already Exist', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
} else{
  setbookMark([...bookMark, e])
}
 
}

const addReadTime=(e)=>{
  setReadTime( readTime + parseInt(e) ) ;
}

var blogRender;
  if(!loading){
    blogRender =  blogData.map(e=> {
     var tagValue = e.tag
     tagValue = tagValue.map(e=><span>#{e} </span>);
      return <BlogModel addReadTime ={addReadTime } id={e.id} key={e.id} authorName={e.authorName} title={e.title} image={e.image} coverImage={e.coverImage} authorImg={e.authorImg} readTime={e.readTime} publishDate={e.publishDate} tag={tagValue} addBookMark={addBookMark}/>
    })
var bookMarkRender = bookMark.map(e=><BookMarkModel name={e} />)
    
  }

 
  return (
    <>
      <div className="container">
        <Header />
        <hr />
        <div className="main row">
          <div className="col-md-8">
{blogRender}
            
{<><ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
 

/>
 
<ToastContainer /></>}
          </div>
          <div className="col-md-4 sidebar">
            <div className="spend-time" role="alert">
              Spent time on read : {readTime} min
            </div>
            <div className="bookmark-blog">
              <h3>Bookmarked Blogs : {bookMark.length}</h3>
 {bookMarkRender}
            </div>
          </div>
        </div>
        
       <div className='d-flex justify-content-center mb-5 mt-5'>
        <div className='quesandans  '>
<h1 className='text-center mb-5'>Ques And Answer</h1>

        <QuesAndAns/>
        </div>
      
       </div>
      </div>

    </>
  );
}

export default App;
