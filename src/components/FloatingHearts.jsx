import { motion } from "framer-motion"

export default function FloatingHearts() {

const hearts = Array.from({ length: 20 })

return (
<div className="fixed inset-0 overflow-hidden pointer-events-none">

{hearts.map((_,i)=>{

const left = Math.random()*100
const duration = 8 + Math.random()*6
const delay = Math.random()*5

return(
<motion.div
key={i}
initial={{ y: "100vh", opacity: 0 }}
animate={{ y: "-10vh", opacity: [0,1,1,0] }}
transition={{
duration: duration,
repeat: Infinity,
delay: delay,
ease: "linear"
}}
style={{ left: `${left}%` }}
className="absolute text-pink-400 text-xl drop-shadow-lg"
>
❤️
</motion.div>
)

})}

</div>
)
}