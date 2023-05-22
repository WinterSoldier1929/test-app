import React from 'react'
import {motion} from "framer-motion"

const Home = () => {
return (
    <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
    >
    <h1 className='font-bold font-sans text-[#6096B4] text-5xl my-4 text-left mx-14 '>WHAT WE DO</h1>
    <p className='font-sans text-[#93BFCF] text-lg mx-14 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.</p></motion.div>
)
}

export default Home