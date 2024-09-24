import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from "@ramonak/react-progress-bar"
function App() {
  const [password,setPassword]=useState("")
  const [strength,setStrength]=useState(null)
  const progressbardict={poor:20,good:40,better:60,strong:80,verystrong:100}
  const passwordChangehandler=(e)=>{
    setPassword(e.target.value)
  }
  console.log(progressbardict[strength],strength)
  useEffect(()=>{
    passwordStatusChecker(password)
    console.log("use effect executed")
  },[password])
  const passwordStatusChecker=()=>{
    const rules=[
      {regex:/.{8,}/,label:"atleast 8 characters"},
      // {regex:/\w/,label:"constains alphanumeric"},
      {regex:/\W/,label:"constains non alphanumeric characters"},
      {regex:/[a-z]/,label:"contains lowercase character"},
      {regex:/[A-Z]/,label:"contains uppercase character"},
      {regex:/\d/,label:"contains digit"}
    ]
    const boolarray=rules.filter((rule)=>{
      if (rule.regex.test(password)){
        return 1
      }
      
    })
    console.log(boolarray)
    switch(boolarray.length){
      case 1:
        setStrength("poor")
        break
      case 2:
        setStrength("good")
        break
      case 3:
        setStrength("better")
        break
      case 4:
        setStrength("strong")
        break
      case 5:
        setStrength("verystrong")
        break
      default :
        setStrength(null)
        break
    }
  }
  return (
    <>
      <div>
        <h1>password strength checker</h1>
        <div>
          <label>
            <input className="passwordbox" placeholder="enter your password" type="password" name="password" value={password} onChange={passwordChangehandler} />
          </label>
        </div>
        <br/>
        <div>
        <ProgressBar completed={progressbardict[strength]||0} isLabelVisible={false} bgColor={progressbardict[strength]==0?"white":progressbardict[strength]==20?"red":progressbardict[strength]==40?"orange":progressbardict[strength]==60?"yellow":progressbardict[strength]==80?"blue":progressbardict[strength]==100?"green":""}/>
        </div>
        
        <div>
          Strength :{strength}
        </div>
      </div>
    </>
  )
}

export default App
