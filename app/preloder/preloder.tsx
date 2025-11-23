// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"

// const Preloader = () => {
//   const [loading, setLoading] = useState(true)
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     // simulate loading progress
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) return 100
//         return prev + Math.random() * 10
//       })
//     }, 300)

//     // finish loading after ~2.5s
//     const timer = setTimeout(() => {
//       setLoading(false)
//       clearInterval(interval)
//       setProgress(100)
//     }, 2500)

//     return () => {
//       clearInterval(interval)
//       clearTimeout(timer)
//     }
//   }, [])

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Spinning Logo */}

//           {/* Gradient Text */}
//           <motion.h1
//             className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Loading...
//           </motion.h1>


//           {/* Progress Bar */}
//           <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
//             <motion.div
//               className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
//               animate={{ width: `${progress}%` }}
//               transition={{ ease: "easeOut", duration: 0.3 }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// export default Preloader
