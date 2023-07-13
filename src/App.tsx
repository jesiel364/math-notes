import {
  useState,
  useEffect
} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import http from "./http-common";

function App() {
  const data = "When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
  const [tex, setTex] = useState("")


  useEffect(()=> {
    if (typeof window?.MathJax !== "undefined") {
      window.MathJax.typesetClear()
      window.MathJax.typeset()
    }
  },
    [tex])
const getData = async () => {
    try {
      const response = await axios.get("https://flask-api-restful.vercel.app/users")
      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
      getData()

    }, []);
    

  

let l = []
    
 const [lines, setLines]= useState([1])
 function Change(e){
   setTex(e.target.value)
  //  console.log(e.target.value.split('\n'))
   setLines(e.target.value.split( '\n').fill(lines.length,0,10))
 }

 function handleKeyPress(e){
  // console.log(e.target.value.split('\n'))
  if(e.key == 'Enter'){
    setLines(lines)
  }

  // console.log(lines)
 }


  return (
    <>
    <div>
    <h2>{"\\(\\sqrt{MathNotes} \\)"}</h2>
      
      <p>
      {"\\(" + tex +"\\)"}
    </p>
    <button onClick={(e) => {setTex(tex+ "\\sqrt{x}")}}>{"\\(\\sqrt{x}\\)"}</button>
    <button onClick={(e) => {setTex(tex+ "\\over ")}}>{"\\( x \\over x \\)"}</button>
     <button onClick={(e) => {setTex(tex+ "/")}}>{"/"}</button>
     <button onClick={(e) => {setTex(tex+ " \\pm   ")}}>{"\\( \\pm \\) "}</button>
  </div>
  <div id="editor">
  <div className="LineNumbers">
    {lines.map((item,i) => {
    
    return(<span>{i+1}</span>)
     
    })}

    {/* {lines} */}
  </div>
      <textarea onKeyPress={handleKeyPress} className="Editor" value={tex} onChange={(e)=> { Change(e)
         }} />
         
   </div>
   </>
  )
}

export default App