import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';
import style from '../pages/BookingPage.scss';


function ModalPrize() {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 11000 )
        return () => clearTimeout(timer)
        // if (!showModal) {
        //     setInterval(() => {
        //         setShowModal = prevstate => !prevstate;
        //     }, 3000)
        // }
    })

    return (
        <>
        {
            showModal
            ?
            <article className='modal'>
                <section>
                    <h2>Congratulations!</h2>
                    <h3>You won 10% off original prize</h3>
                    <p>Book your visit now to take part of the deal or enter your email below and we will send you the offer!</p>
                </section>  
                <form>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" id="firstName" />
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="LastName" id="lastName" />
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' />
                </form>
                <section className='modal__button--container'>
                    {/* <Button 
                        className={style.__defaultButton}
                        title='Send me the deal' 
                        action={setShowModal}  
                    /> */}
                    <button className='modal__button'>Send Deal</button>
                    <button className='modal__button'>Nah no deal for me</button>
                </section>
            </article>
            :
            ''
        }
            
        </>

    )
};

export default ModalPrize;