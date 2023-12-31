import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import style from './homepage.scss';
import { motion } from 'framer-motion';


function HomePage() {
    const navigate = useNavigate();

    const hoverCard = {
        initial: {
            scale: 1
        },
        whileHover: {
            scale: 1.2
        }
    }

    const hoverShadow = {
        whileHover: {
            boxShadow: '0px 0px 25px 10px orchid',
            cursor: 'pointer'
        }
    }

    return (
        <>
            <article className="homepage__wrapper">
                < Header action={() => navigate('/home')} />
                
                <main className="homepage__main">

                <video id="opening-video"  width={'80%'} controls autoPlay> 
                    <source src="/videos/amusement-video-3.mp4" type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
                    <section className="homepage__first">
                        <section className="homepage__first-section">
                            <article className="homepage__first-section__scroll-container">
                                {/* <img className="homepage__first-sectopn__image" src="/images/four-boys.jpg" alt="four boys on a rollercoster" /> */}
                                <img className="homepage__first-section__image" src="/images/karusell.jpg" alt="karusell med hästar" />
                                <img className="homepage__first-section__image" src="/images/waffles.jpg" alt="waffles" />
                                <img className="homepage__first-section__image" src="/images/house.jpg" alt="house" />
                                <img className="homepage__first-section__image" src="/images/shopping.jpg" alt="holiday shopping" />
                                <img className="homepage__first-section__image" src="/images/train.jpg" alt="train" />
                            </article>
                        </section>
                        <h2 className="homepage__first-section__text">Welcome to us for a magical experience for the whole family!</h2>
                    </section>
                    <section className="homepage__news">
                        <section>
                            <h2>News in the park</h2>
                        </section>
                        <section className="homepage__news-section">
                            <motion.section 
                                variants={hoverCard}
                                initial= 'initial'
                                whileHover= 'whileHover'

                                className="homepage__news-section__card"
                            >
                                <motion.article 
                                    variants={hoverShadow}
                                    initial='initial'
                                    whileHover='whileHover'
                                    className="homepage__news-section__option"
                                >
                                    <img className="homepage__news-section__image" src="/images/julmarknad.jpg" alt="julmarknad på nöjesfältet" />
                                </motion.article>
                                <h3 className="homepage__news-section__title">Christmas market</h3>
                            </motion.section>
                            <motion.section 
                                variants={hoverCard}
                                initial='initial'
                                whileHover='whileHover'
                                className="homepage__news-section__card"
                            >
                                <motion.article 
                                    variants={hoverShadow}
                                    initial='initial'
                                    whileHover='whileHover'

                                    className="homepage__news-section__option"
                                >
                                    <img className="homepage__news-section__image" id="news-image-2" src="/images/jul-slott.jpg" alt="slottet i juldekoration" />
                                </motion.article>
                                <h3 className="homepage__news-section__title">Extra opening hours</h3>
                            </motion.section>
                            <motion.section
                                variants={hoverCard}
                                initial='initial'
                                whileHover='whileHover' 
                                className="homepage__news-section__card"
                            >
                                <motion.article 
                                    variants={hoverShadow}
                                    initial='initial'
                                    whileHover='whileHover'
                                    className="homepage__news-section__option">
                                    <img className="homepage__news-section__image" src="/images/fyrverkerier.jpg" alt="fyrverkerier" />
                                </motion.article>
                                <h3 className="homepage__news-section__title">Fireworks</h3>
                            </motion.section>
                        </section>
                    </section>
                </main>

                <Footer />
    
            </article>
        </>
    )
};

export default HomePage;