import { motion } from 'framer-motion';
import style from '../pages/HomePage.scss';

function Header() {
    return (
        <header className="homepage__header">
            <motion.img 
                initial= {{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 360, scale: 1.2, cursor: 'pointer'  }}
                transition={{ duration: 1.25}}

                id="extravaganza-logo" 
                src="/svg/logo-2.svg" 
                alt="extravaganza-logo" />
            <h1 className="homepage__heading">EXTRAVAGANZA</h1>
            <motion.img 
                initinal= {{ y:0 }}
                whileHover= {{ y: -12, cursor: 'pointer' }}
                transition= {{ type: 'spring', stiffness: 150 }}
                id="shopping-cart" 
                src="/svg/shopping-cart.svg" 
                alt="shopping-cart-icon" 
            />
        </header>
    )
}

export default Header;