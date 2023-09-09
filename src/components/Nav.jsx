import { useState } from "react";
import { logo } from "../assets/images"
import { navLinks } from "../contants"
import { backInOut, motion } from "framer-motion";

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 90% 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: (width ) => ({
      clipPath: `circle(0 at 90% 40px)`,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    })
};

function Nav() {
   const [isOpen, setIsOpen] = useState(false);

   const sideBarToggle = () => {
    setIsOpen(!isOpen)
   }

  return (
    <div className="flex items-center justify-between w-full px-5 h-[75px] relative max-w-[1440px] mx-auto ">
      <motion.div className="flex items-center gap-3 "
        initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{duration: .5, delay: .25}}
      >
        <img src={logo} alt="" />
        <span className="text-2xl font-bold" >Workinon</span>
      </motion.div>

      <motion.div className="absolute h-full w-[35px] right-[20px] z-[99] flex flex-col gap-1 top-[28px] hover:cursor-pointer md:hidden"
        onClick={sideBarToggle}
        initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{ease: backInOut,duration: .5, delay: .25}}
        whileHover={{scale: 1.15, duration: .25}}
      >
        <span className="h-[5px] w-full bg-[#756BEE] block rounded-lg active:bg-white"></span>
        <span className="h-[5px] w-full bg-[#756BEE] block rounded-lg"></span>
        <span className="h-[5px] w-full bg-[#756BEE] block rounded-lg"></span>
      </motion.div>
      
      <motion.ul className="absolute right-0 top-0 flex flex-col justify-center items-center h-[100vh] w-[75vw] bg-[#a29bed] gap-6 overflow-hidden md:hidden"
        animate={isOpen ? "open" : "closed"}
        variants={sidebar}
      >
        {navLinks.map((link) => (
            <li className="text-4xl font-bold text-white hover:text-[#756BEE]">
                <a href={link.href} onClick={sideBarToggle}>{link.label}</a>
            </li>
        ))}
      </motion.ul>
      
      <ul className="hidden relative right-0 top-0  flex-row justify-end items-center h-[100%] w-[75vw]  gap-6 overflow-hidden md:flex "
      >
        {navLinks.map((link,index) => (
            <motion.li className="text-xl font-bold text-slate-600 hover:text-[#756BEE]"
              initial={{y:-100}}
              animate={{y:0}}
              transition={{ease:"backInOut" ,duration: .25, delay: index * .25}}
              key={index}
            >
                <a href={link.href} >{link.label}</a>
            </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
