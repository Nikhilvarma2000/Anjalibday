import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function OpenWhen({ onBirthday, onBack }) {

const [message,setMessage] = useState(null)
const [countdown,setCountdown] = useState(null)

const messages = {
sad:"Whenever you feel sad, remember there is someone who believes in you more than anyone else — me.",
miss:"If you ever miss me, just close your eyes and imagine me hugging you tightly.",
sleep:"If you can't sleep, think about our small memories. They are my favourite moments.",
motivation:"You are stronger, kinder and more beautiful than you think. I believe in you always.",
birthday:"Happy Birthday Anjali 🎂❤️ Today the world celebrates the day someone very special was born."
}

const cards = [
{key:"sad",label:"Open when you feel sad"},
{key:"miss",label:"Open when you miss me"},
{key:"sleep",label:"Open when you can't sleep"},
{key:"motivation",label:"Open when you need motivation"},
{key:"birthday",label:"Open when it's your birthday 🎂"}
]

function startCountdown(){

let count = 3
setCountdown(count)

const timer=setInterval(()=>{

count--

if(count===0){
clearInterval(timer)
onBirthday()
}else{
setCountdown(count)
}

},1000)

}

function handleClick(key){

setMessage(messages[key])

if(key==="birthday"){
setTimeout(()=>startCountdown(),600)
}

}

const hearts = Array.from({length:14})
const stars = Array.from({length:25})

return(

<div className="min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden
bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">


{/* FLOATING HEARTS */}

{hearts.map((_,i)=>(
<motion.div
key={i}
initial={{y:120,opacity:0,rotate:-20}}
animate={{y:-800,opacity:1,rotate:20}}
transition={{duration:6,delay:i*0.3,repeat:Infinity}}
className="absolute text-xl"
style={{left:`${Math.random()*100}%`}}
>
💖
</motion.div>
))}


{/* TWINKLING STARS */}

{stars.map((_,i)=>(
<motion.div
key={i}
initial={{opacity:0}}
animate={{opacity:[0,1,0]}}
transition={{duration:2,delay:i*0.15,repeat:Infinity}}
className="absolute text-yellow-300"
style={{
left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`
}}
>
✨
</motion.div>
))}


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


{/* TITLE */}

<motion.h2
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-3xl font-bold text-pink-600 mb-12 text-center"
>
Open When... ❤️
</motion.h2>


{/* CARDS */}

<div className="grid gap-6 w-full max-w-md">

{cards.map((card,index)=>(

<motion.button
key={card.key}
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{delay:index*0.15}}
whileHover={{scale:1.06}}
whileTap={{scale:0.95}}
onClick={()=>handleClick(card.key)}
className="relative bg-white/90 backdrop-blur shadow-xl rounded-xl py-5 px-6 text-gray-700 border border-pink-200 hover:shadow-pink-200 transition"
>

<div className="flex items-center justify-between">

<span className="font-medium">{card.label}</span>

<span className="text-xl">💌</span>

</div>

</motion.button>

))}

</div>


{/* MESSAGE POPUP */}

<AnimatePresence>

{message && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm p-6"
>

<motion.div
initial={{scale:0.8,y:40}}
animate={{scale:1,y:0}}
exit={{scale:0.8}}
transition={{duration:0.35}}
className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center border border-pink-100"
>

<div className="text-3xl mb-3">💌</div>

<p className="text-lg text-gray-700 leading-relaxed">
{message}
</p>

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.9}}
onClick={()=>setMessage(null)}
className="mt-6 text-pink-500 font-semibold"
>
Close ❤️
</motion.button>

</motion.div>

</motion.div>

)}

</AnimatePresence>


{/* COUNTDOWN */}

{countdown && (

<motion.div
initial={{scale:0}}
animate={{scale:1}}
className="fixed inset-0 flex items-center justify-center
bg-black/60 backdrop-blur-md text-white text-8xl font-bold"
>

<motion.div
animate={{scale:[1,1.2,1]}}
transition={{repeat:Infinity,duration:1}}
>
{countdown}
</motion.div>

</motion.div>

)}

</div>

)

}
