import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"

export default function FinalSurprise({ onBack }) {

const [typedText,setTypedText] = useState("")

const message = `Among millions of people in this world…
somehow my heart found you, Anjali.

You came into my life quietly,
but you became the most beautiful part of it.

Your smile, your kindness and your presence
make my world brighter than you can imagine.

I am truly lucky to have you in my life.`


/* CONFETTI SYSTEM */

useEffect(()=>{

// start immediately
confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
})

setTimeout(()=>{
confetti({particleCount:100,spread:100,origin:{x:0.1,y:0.7}})
confetti({particleCount:100,spread:100,origin:{x:0.9,y:0.7}})
},300)

const interval=setInterval(()=>{

confetti({
particleCount:30,
spread:70,
origin:{x:Math.random(),y:Math.random()*0.3}
})

},1800)

return ()=>clearInterval(interval)

},[])


/* TYPEWRITER EFFECT (FASTER) */

useEffect(()=>{

let i=0

const typing=setInterval(()=>{

setTypedText(message.slice(0,i))
i++

if(i>message.length){
clearInterval(typing)
}

},25) // faster typing

return ()=>clearInterval(typing)

},[])


const hearts = Array.from({length:15})
const balloons = Array.from({length:6})
const petals = Array.from({length:10})
const stars = Array.from({length:25})


return(

<div className="min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-pink-200 via-purple-100 to-pink-300 text-center">

{/* BACK BUTTON */}

<div className="absolute top-6 left-6">

<motion.button
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
onClick={onBack}
className="bg-white shadow-md px-4 py-2 rounded-full text-gray-700 font-medium border border-pink-200"
>
← Back
</motion.button>

</div>


{/* STARS */}

{stars.map((_,i)=>(
<motion.div
key={i}
initial={{opacity:0}}
animate={{opacity:[0,1,0]}}
transition={{
duration:2,
delay:i*0.15,
repeat:Infinity
}}
className="absolute text-yellow-300"
style={{
left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`
}}
>
✨
</motion.div>
))}


{/* ROSE PETALS */}

{petals.map((_,i)=>(
<motion.div
key={i}
initial={{y:-100,rotate:0}}
animate={{y:900,rotate:360}}
transition={{
duration:7,
delay:i*0.5,
repeat:Infinity
}}
className="absolute text-xl"
style={{left:`${Math.random()*100}%`}}
>
🌹
</motion.div>
))}


{/* FLOATING HEARTS */}

{hearts.map((_,i)=>(
<motion.div
key={i}
initial={{y:120,opacity:0,rotate:-20}}
animate={{y:-700,opacity:1,rotate:20}}
transition={{
duration:5,
delay:i*0.3,
repeat:Infinity
}}
className="absolute text-2xl"
style={{left:`${Math.random()*100}%`}}
>
💖
</motion.div>
))}


{/* BALLOONS */}

{balloons.map((_,i)=>(
<motion.div
key={i}
initial={{y:200}}
animate={{y:-800}}
transition={{
duration:7,
delay:i*0.9,
repeat:Infinity
}}
className="absolute text-4xl"
style={{left:`${Math.random()*100}%`}}
>
🎈
</motion.div>
))}


{/* MAIN CARD */}

<motion.div
initial={{opacity:0,scale:0.8,y:20}}
animate={{opacity:1,scale:1,y:0}}
transition={{duration:0.7}}
className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-md border border-pink-200"
>


{/* CAKE */}

<motion.div
animate={{y:[0,-10,0],scale:[1,1.05,1]}}
transition={{repeat:Infinity,duration:1.5}}
className="text-7xl mb-4"
>
🎂
</motion.div>


{/* TITLE */}

<motion.h1
animate={{scale:[1,1.03,1]}}
transition={{repeat:Infinity,duration:2}}
className="text-4xl font-bold text-pink-600 mb-4"
>
Happy Birthday Anjali ❤️
</motion.h1>


{/* MESSAGE */}

<p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
{typedText}
<span className="animate-pulse">|</span>
</p>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:3}}
className="mt-6 text-xl font-semibold text-pink-500"
>
Happy Birthday Anjali 🎂❤️
</motion.p>


</motion.div>

</div>

)

}