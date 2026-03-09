import { useState } from "react"
import Welcome from "./components/Welcome"
import MemoryTimeline from "./components/MemoryTimeline"
import OpenWhen from "./components/OpenWhen"
import FloatingHearts from "./components/FloatingHearts"
import FinalSurprise from "./components/FinalSurprise"

function App(){

const [step,setStep] = useState(0)

return(

<div className="min-h-screen relative">

<FloatingHearts/>

{step === 0 && (
<Welcome
start={()=>setStep(1)}
/>
)}

{step === 1 && (
<MemoryTimeline
next={()=>setStep(2)}
onBack={()=>setStep(0)}
/>
)}

{step === 2 && (
<OpenWhen
onBirthday={()=>setStep(3)}
onBack={()=>setStep(1)}
/>
)}

{step === 3 && (
<FinalSurprise
onBack={()=>setStep(2)}
/>
)}

</div>

)

}

export default App

