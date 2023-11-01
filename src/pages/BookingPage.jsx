import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModalPrize from '../components/ModalPrize';
import Button from '../components/Button';
import { Wheel } from 'react-custom-roulette';
import style from './BookingPage.scss';

function BookingPage() {
    const navigate = useNavigate();

    const data = [
        { option: '10%'},
        { option: '15%'},
        { option: '10%'},
        { option: '20%'},
        { option: '10%'},
        { option: '15%'},
    ]

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }

    return (
        <>
            <article className='bookingpage__wrapper'>
                <Header action={() => navigate('/home')} />

                <main className='bookingpage__main'>
                    <section className='bookingpage__wheel__container'>
                        <Wheel 
                            mustStartSpinning={mustSpin}
                            prizeNumber={prizeNumber}
                            data={data}
                            backgroundColors={['#96d3f4', '#b296f4', 'orchid']}
                            fontFamily='Sansita'
                            onStopSpinning={() => {
                                setMustSpin(false);
                            }}
                        />
                        <button 
                            className='wheel__button'
                            onClick={handleSpinClick}
                        >
                            SPIN
                        </button>
                    </section>
                    <ModalPrize />
                </main>

            </article>

            <Footer />
        </>
    )


};

export default BookingPage;