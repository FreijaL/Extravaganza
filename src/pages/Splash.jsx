import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './Splash.scss';


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
            <img className="splash__logo" src="/svg/logo.svg" />
            <h1 className="splash__heading">EXTRAVAGANZA</h1>
        </main>
    )
};

export default Splash;