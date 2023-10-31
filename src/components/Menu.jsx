import { motion } from 'framer-motion';
import style from '../pages/HomePage.scss';

function Menu() {
    return (
        <nav className='menu__navigation'>
            <ul className='menu__list'>
                <li className='menu__list__option'>Boka ditt besök</li>
                <li className='menu__list__option'>Öppettider</li>
                <li className='menu__list__option'>Evenemang</li>
                <li className='menu__list__option'>Kontakt</li>
            </ul>
        </nav>
    )
};

export default Menu;