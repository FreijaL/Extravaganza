import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './Splash.scss';
import { motion } from 'framer-motion';


function Splash() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate('/home')
    //     }, 3000)
    //     return () => clearTimeout(timer)
    // })

    return ( 
        <main className="splash__main-container">
            <img className="splash__logo" src="/svg/logo.svg" />
            <motion.h1 
                initial= {{scale: 2}}
                animate= {{scale: 1}}
                className="splash__heading"
            >EXTRAVAGANZA</motion.h1>
        </main>
    )
};

export default Splash;