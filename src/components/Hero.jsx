import { heroImage } from "../assets/images"
import { backInOut, easeIn, motion } from "framer-motion"

function Hero() {
  return (
    <div className="h-[calc(100vh-75px)] w-full flex flex-col items-center justify-center max-w-[1440px] mx-auto lg:flex-row">
      <div className="flex flex-col items-start w-full gap-3 px-6 overflow-hidden">
        <motion.h1 
          className="text-4xl font-bold lg:text-6xl cursor-none"
          initial={{x: -200,y:50, opacity: 0,scale: 0}}
          animate={{x:0,y :0, opacity: 1, scale:1}}
          transition={{ease: "linear" , x :{duration: .5} , y: {duration: .25}, scale: {duration: .5}}}
        >
        The Better Way To Success In Your Business
        </motion.h1>
        <motion.p className="lg:text-xl "
          initial={{x:200, opacity:0}}
          animate={{x: 0, opacity:1}}
          transition={{duration: .5, delay: .25}}
        >
        I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.    
        </motion.p>
        <motion.button className="px-4 py-2 font-bold text-white bg-[#756BEE] rounded-xl uppercase tracking-wider lg:px-10 "
           initial={{x:-50, opacity:0, scale:0}}
           animate={{x: 0, opacity:1, scale:1}}
           transition={{duration: .5, delay: .25}}
           whileHover={{scale: 1.1}}
           whileTap={{scale: .95}}
        >
        Hire Me
        </motion.button>
      </div>
      <div className="h-[50%] flex items-center justify-center w-full lg:h-[80%]">
        <motion.img 
            src={heroImage} alt="" 
            className="max-h-[100%]"
            initial={{opacity:0 , scale:0}}
            animate={{opacity:1, scale: 1}}
            transition={{ease:backInOut, duration: .5, delay: .25}}
        />
      </div>
    </div>
  )
}

export default Hero
