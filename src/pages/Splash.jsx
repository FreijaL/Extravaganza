import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './Splash.scss';
import { motion } from 'framer-motion';


function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 3000)
        return () => clearTimeout(timer)
    })

    return ( 
        <main className="splash__main-container">
            <motion.img 
                initial= {{ rotate: 0}}
                animate= {{ rotate: -360}}
                transition={{ duration: 3 }}
                className="splash__logo" src="/svg/logo.svg" />
            <motion.h1 
                initial= {{scale: 6}}
                animate= {{scale: 1.5}}
                transition={{ type: 'spring', stiffness: 250}}
                className="splash__heading"
            >EXTRAVAGANZA</motion.h1>
        </main>
    )
};

export default Splash;