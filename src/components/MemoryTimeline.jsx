import { motion } from "framer-motion"

export default function MemoryTimeline({ next }) {

const memories = [
{
title:"The day we first talked",
text:"That simple conversation slowly became something very special."
},
{
title:"The day you made me smile",
text:"You probably didn't notice it, but that day meant a lot to me."
},
{
title:"The moment you became important",
text:"Somewhere between our talks and laughs, you became part of my heart."
},
{
title:"Today ❤️",
text:"Today the world celebrates the day someone beautiful was born."
}
]

const hearts = Array.from({length:12})

return (

<div className="min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden
bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">

{/* floating hearts background */}

{hearts.map((_,i)=>(
<motion.div
key={i}
initial={{y:120,opacity:0}}
animate={{y:-700,opacity:1}}
transition={{
duration:6,
delay:i*0.5,
repeat:Infinity
}}
className="absolute text-xl"
style={{left:`${Math.random()*100}%`}}
>
💖
</motion.div>
))}


{/* title */}

<motion.h2
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-3xl font-bold text-pink-600 mb-12 text-center"
>
Our Little Story ❤️
</motion.h2>


{/* timeline container */}

<div className="relative max-w-md w-full">

{/* vertical line */}

<div className="absolute left-4 top-0 bottom-0 w-1 bg-pink-200 rounded"></div>

<div className="space-y-10">

{memories.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6,delay:index*0.2}}
viewport={{once:true}}
className="relative pl-12"
>

{/* timeline dot */}

<div className="absolute left-2 top-2 w-4 h-4 bg-pink-500 rounded-full shadow-md"></div>

{/* card */}

<div className="bg-white/90 backdrop-blur shadow-xl rounded-xl p-5 border border-pink-100
hover:scale-105 transition-transform">

<h3 className="font-semibold text-lg text-gray-800">
{item.title}
</h3>

<p className="text-gray-600 mt-2 leading-relaxed">
{item.text}
</p>

</div>

</motion.div>

))}

</div>

</div>


{/* continue button */}

<motion.button
onClick={next}
whileHover={{scale:1.1}}
whileTap={{scale:0.95}}
animate={{scale:[1,1.05,1]}}
transition={{repeat:Infinity,duration:2}}
className="mt-12 bg-pink-500 text-white px-8 py-3 rounded-full
shadow-lg hover:bg-pink-600 transition-all"
>
Continue ❤️
</motion.button>

</div>

)

}
