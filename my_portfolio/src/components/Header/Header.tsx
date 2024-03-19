import { motion } from "framer-motion";
import { useState } from "react";
import './Header.css';
import darkMode from '../../assets/moon.svg';
import lightMode from '../../assets/sun.svg';

export default function Header({ childToParent }: { childToParent: (data: boolean) => void }) {

    const [changeColor, setcolor] = useState('text-[#ec8846]');
    const [theme, setTheme] = useState(lightMode);
    const [themeText, setThemeText] = useState('');
    const headerLi = [
        { id: 1, text: "Home" },
        { id: 2, text: "Projects" },
        { id: 3, text: "About" },
        { id: 4, text: "Contact" },
    ];

    const handleThemeClick = () => {
        if(theme === darkMode) {     
            setTheme(lightMode);
            setThemeText('text-black');
            childToParent(true);
        } else {
            setTheme(darkMode);
            setThemeText('text-white');
            childToParent(false);
        }
    };

    return (
        <>
            <div 
                className={`flex justify-between items-center h-40 max-w-[115vh] mx-auto ${themeText}`}
            >
                <motion.a 
                    onHoverStart={() => setcolor('text-[#de1d8d]')}
                    transition={{
                        duration: 5,
                        delay: 0.3,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    className={`text-3xl font-bold ${changeColor} horizontal-underline horizontal-underline-active`}
                    onHoverEnd={() => setcolor('text-[#ec8846]')}
                >
                    D.
                </motion.a>
                <ul className="flex">
                    {
                        headerLi.map((li) => (
                            <motion.li 
                                className={`p-3 font-semibold`}
                                whileHover={{
                                    cursor: 'pointer'
                                }}
                                key={li.id}
                            >
                                {li.text}
                            </motion.li>
                        ))
                    }
                    <a className="w-full p-1">
                        <motion.img 
                            whileHover={{
                                scale: 1.3
                            }}
                            onClick = {handleThemeClick}
                            className="w-12" 
                            src={theme}
                        />
                    </a>
                </ul>
            </div>
        </>
    );
}

