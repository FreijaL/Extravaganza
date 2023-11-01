import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu.jsx';
import style from '../pages/HomePage.scss';

function Header() {

    const navigate = useNavigate();

    return (
        <header className="homepage__header">
            <Menu action={() => navigate('/booking')} />
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