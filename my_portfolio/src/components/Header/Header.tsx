import { motion } from "framer-motion";
import { useState } from "react";
import './Header.css';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import { Link, Outlet } from "react-router-dom";

export default function Header({ childToParent }: { childToParent: (data: boolean) => void }) {

    const [changeColor, setcolor] = useState('text-[#ec8846]');
    const [theme, setTheme] = useState(moon);
    const [themeText, setThemeText] = useState('');
    const [animateSunset, setAnimateSunset] = useState(false);
    const angleOpen = "<";
    const angleClose = ">";

    const headerLi = [
        { id: 1, text: "Home", path: "/" },
        { id: 2, text: "Projects", path: "/projects" },
        { id: 3, text: "About", path: "/about"},
        { id: 4, text: "Contact", path: "/contact"},
    ];

    const handleThemeClick = () => {
        setAnimateSunset(true);
        
        if(theme === sun) {   
            setTheme(moon);
            setThemeText('text-black');
            childToParent(true);
        } else {
            setTheme(sun);
            setThemeText('text-white');
            childToParent(false);
        }
    };

    const spring = {
        type: 'spring', 
        stiffness: 250,
        damping: 25,
        mass: 0.75,
    }

    return (
        <>
            <div 
                className={`flex justify-between items-center h-40 max-w-[115vh] mx-auto sticky top-0`}
            >
                <motion.a 
                    onHoverStart={() => setcolor('text-[#de1d8d]')}
                    transition={{
                        duration: 5,
                        delay: 0.3,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    className={`text-4xl font-bold ${changeColor} horizontal-underline`}
                    onHoverEnd={() => setcolor('text-[#ec8846]')}
                >
                    <motion.span>{angleOpen}</motion.span>
                    <span>D </span>
                    <span>_</span>
                    <motion.span>{angleClose}</motion.span>
                </motion.a>
                <ul className="flex">
                    {
                        headerLi.map((li) => (
                            <motion.li 
                                className={`p-3 font-bold ${themeText} hov-effect`}
                                whileHover={{
                                    cursor: 'pointer'
                                }}
                                key={li.id}
                            >
                                <Link to={li.path}>{li.text}</Link>
                            </motion.li>
                        ))
                    }
                    <li 
                        className="w-full p-1" 
                        onClick = {handleThemeClick}
                    >
                        <motion.img 
                            animate={{
                                opacity: animateSunset ? 0 : 1,
                                y: animateSunset ? 10 : 0
                            }}
                            transition={spring}
                            className="w-12 icon" 
                            src={theme}
                            onAnimationComplete={() => setAnimateSunset(false)}
                        />
                    </li>
                </ul>

                <Outlet />
            </div>
        </>
    );
}

