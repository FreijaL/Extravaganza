import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import style from './BookingPage.scss';

function BookingPage() {
    const navigate = useNavigate();

    return (
        <>
            <article className='bookingpage__wrapper'>
                <Header />

                <main>
                    <h1>hello</h1>
                </main>
            </article>
        </>
    )


};

export default BookingPage;