import React,{useState} from "react";
import ReactMarkdown from 'react-markdown'
function App() {
  const [input, setInput] = useState('# Markdown Preview')
  return (
    <>
    <h2>Click Here For <span style={{color:'green'}}>Cheat Sheet</span></h2>
    <div className="App">
   <textarea
   autoFocus
    className="textArea"
    value={input} 
    onChange={(e)=>setInput(e.target.value)}
    />
    <ReactMarkdown children={input}  className="markdown"/>
    </div>
    </>
  );
}

export default App;
