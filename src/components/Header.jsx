import { motion } from 'framer-motion';
import Menu from '../components/Menu.jsx';
import style from '../pages/HomePage.scss';

function Header() {
    return (
        <header className="homepage__header">
            <Menu />
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