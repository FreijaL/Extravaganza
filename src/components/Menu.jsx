import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from '../pages/HomePage.scss';

function Menu({action}) {

    //const navigate = useNavigate;
    const [showMenu, setShowMenu] = useState(false);


    const hoverMenuOptions = {
        initial: {
            scale: 1
        },
        whileHover: {
            scale: 1.15,
            textShadow: '0 0 5px blue',
            cursor: 'pointer'
        },
        whileTap: {
            scale: 1,
            transition: {
                duration: .2
            }
        }
    }


    return (
        <>
            <motion.img 
                initial= {{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 360, scale: 1.2, cursor: 'pointer'  }}
                transition={{ duration: 1}}

                onClick={() => setShowMenu(prevstate => !prevstate)}

                id="extravaganza-logo" 
                src="/svg/logo-2.svg" 
                alt="extravaganza-logo" 
            />
            {
                showMenu
                ?
                <motion.nav 
                    initial={{ x: -250 }}
                    animate={{ x: 0}}
                    transition={{ type: 'spring', stiffness: 150}}
                    className='menu__navigation'
                >
                    
                    <ul className='menu__list'>
                        <motion.li 
                            variants={hoverMenuOptions}
                            initial='initial'
                            whileHover='whileHover'
                            whileTap='whileTap'

                            onClick={action}

                            className='menu__list__option'
                        >
                            Boka ditt besök
                        </motion.li>
                        <motion.li 
                            variants={hoverMenuOptions}
                            initial='initial'
                            whileHover='whileHover'
                            whileTap='whileTap'

                            className='menu__list__option'
                        >
                            Evenemang
                        </motion.li>
                        <motion.li 
                            variants={hoverMenuOptions}
                            initial='initial'
                            whileHover='whileHover'
                            whileTap='whileTap'

                            className='menu__list__option'
                            >
                                Öppettider
                        </motion.li>
                        <motion.li 
                            variants={hoverMenuOptions}
                            initial='initial'
                            whileHover='whileHover'
                            whileTap='whileTap'

                            className='menu__list__option'
                            >
                                Kontakt
                        </motion.li>
                        <motion.li 
                            variants={hoverMenuOptions}
                            initial='initial'
                            whileHover='whileHover'
                            whileTap='whileTap'

                            className='menu__list__option'
                            >
                                FAQ
                        </motion.li>
                    </ul>
                </motion.nav>
                :
                ''
            }
        </>
    )
};

export default Menu;