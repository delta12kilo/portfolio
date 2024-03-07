import { motion } from "framer-motion";
import { useState } from "react";
import './Header.css';

function Header() {

    const [changeColor, setcolor] = useState('text-[#ec8846]');
    
    return (
        <>
            <div className="
                flex justify-between items-center h-40
                max-w-[1240px] mx-auto 
                text-white">
                <motion.a 
                    onHoverStart={() => setcolor('text-white')}
                    transition={{duration: 5,
                        delay: 0.3,
                        ease: [0.5, 0.71, 1, 1.5],}}
                    className={`w-full text-3xl font-bold ${changeColor} horizontal-underline horizontal-underline-active`}
                    onHoverEnd={() => setcolor('text-[#ec8846]')}
                >
                    D.
                </motion.a>
                <ul className="flex">
                    <li className="p-4">Home</li>
                    <li className="p-4">Projects</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </>
    );

//     const size = "large"
//   const type = "danger"
//   return (
//     <h1 className={`${size} main ${type}`}>

//        Hello World
//     </h1>
//   )
}

export default Header