import './App.css';

function App() {
  const blogArr = [{
    title: 'My title',
    content: 'My content',},
    {
      title: 'My title 2',
      content: 'My content 2',
    },
    {
      title: 'My title 3',
      content: 'My content 3',
    }
  ]
  const blogcards = blogArr.map((item, pos)=>{
    console.log(item.title)
    return(
      <div className='card' key={pos}>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </div>
    )
    
  })
  
  return (
    <div className="App">
      {/* <h3>Log in</h3> */}
      {/* <input type="text" placeholder="Username" /> */}
      {/* <br /> */}
      {/* <input type="password" placeholder="Password" /> */}
      {/* <br /> */}
      {/* <button>Log in</button> */}
      {blogcards}
    </div>
  );
}

export default App;
