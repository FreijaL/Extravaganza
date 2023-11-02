import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';
import style from '../pages/BookingPage.scss';


function ModalPrize() {

    const [showModal, setShowModal] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowModal(true)
    //     }, 11000 )
    //     return () => clearTimeout(timer)
    // });

    return (
        <>
        {
            showModal
            ?
            <article className='modal'>
                <section className='modal__text-section'>
                    <h2>Congratulations!</h2>
                    <h3>You won 10% off original prize</h3>
                    <p>Book your visit now to take part of the deal or enter your email below and we will send you the offer!</p>
                </section>  
                <form>
                    <section className='modal__form-section'>
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" id="firstName" />
                    </section>
                    <section className='modal__form-section'>
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" name="LastName" id="lastName" />
                    </section>
                    <section className='modal__form-section'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' />
                    </section>
                
                </form>
                <section className='modal__button--container'>
                    {/* <Button 
                        className={style.__defaultButton}
                        title='Send me the deal' 
                        action={setShowModal}  
                    /> */}
                    <motion.button 
                        initial={{ scale: 1}}
                        whileHover={{ scale: 1.2, cursor: 'pointer', boxShadow: '0 0 8px black'}}
                        whileTap={{ opacity: .6}}

                        onClick={() => {setShowModal(false)}} 
                        className='modal__button'
                    >
                        Send Deal
                    </motion.button>
                    <motion.button 
                        initial={{ scale: 1}}
                        whileHover={{ scale: 1.2, cursor: 'pointer', boxShadow: '0 0 8px black'}}
                        whileTap={{ opacity: .6}}

                        onClick={() => {setShowModal(false)}} 
                        className='modal__button' 
                        id='modal__button-no'
                    >
                        Nah no deal for me
                    </motion.button>
                </section>
            </article>
            :
            ''
        }
            
        </>

    )
};

export default ModalPrize;