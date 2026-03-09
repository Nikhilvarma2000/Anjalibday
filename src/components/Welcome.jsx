import { motion } from "framer-motion"

export default function Welcome({ start }) {
  return (

    <div className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-md w-full space-y-8"
      >

        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 leading-relaxed">
          I made something special for you ❤️
        </h1>

        <p className="text-gray-600 text-base md:text-lg">
          Open it slowly…
        </p>

        <button
          onClick={start}
          className="w-full py-4 text-lg bg-pink-500 text-white rounded-full
          shadow-lg transition-all duration-300
          hover:bg-pink-600 hover:scale-105 active:scale-95"
        >
          Start
        </button>

      </motion.div>

    </div>
  )
}