import {
  useState,
  useEffect
} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const data = "When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
  const [tex,
    setTex] = useState("")
  const op = "\("
  const ot = "\)"

  useEffect(()=> {
    if (typeof window?.MathJax !== "undefined") {
      window.MathJax.typesetClear()
      window.MathJax.typeset()
    }
  },
    [tex])
    
 const [lines, setLines]= useState([])
 function Change(e){
   setTex(e.target.value)
   setLines(Array(e.target.value.split("\n").length))
   alert(lines)
   
   
 }


  return (
    <>
    <div>
      <h2>Integrating MathJax v3 in React</h2>
      
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
    {lines.map(item => {
     
    return(<span>{item}</span>)
     
    })}
  </div>
      <textarea className="Editor" value={tex} onChange={(e)=> { Change(e)
         }} />
         
   </div>
   </>
  )
}

export default App