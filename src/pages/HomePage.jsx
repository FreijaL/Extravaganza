import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import Header from '../components/Header'
import style from './homepage.scss';


function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <article className="homepage__wrapper">
                <header className="homepage__header">
                    <img id="extravaganza-logo" src="/svg/logo.svg" alt="extravaganza-logo" />
                    <h1 className="homepage__heading">EXTRAVAGANZA</h1>
                    <img id="shopping-cart" src="/svg/shopping-cart.svg" alt="shopping-cart-icon" />
                </header>
                
                <main className="homepage__main">
                    <section className="homepage__first">
                        <section className="homepage__first-section">
                            <article className="homepage__first-section-scroll-container">
                                <img className="homepage__first-section-image" src="/images/karusell.jpg" alt="karusell med hästar" />
                                <img className="homepage__first-section-image" src="/images/waffles.jpg" alt="waffles" />
                                {/* <img className="homepage__first-section-image" src="/images/skiing-2.jpg" alt="skiing" /> */}
                                {/* <img className="homepage__first-section-image" src="/images/food.jpg" alt="food selections" /> */}
                                {/* <img className="homepage__first-section-image" src="/images/skiing.jpg" alt="old couple skiing" /> */}
                                <img className="homepage__first-section-image" src="/images/house.jpg" alt="house" />
                                <img className="homepage__first-section-image" src="/images/shopping.jpg" alt="holiday shopping" />
                                <img className="homepage__first-section-image" src="/images/train.jpg" alt="train" />
                            </article>
                        </section>
                        <h2 className="homepage__first-section-text">Välkommen till en magisk upplevelse för hela familjen!</h2>
                    </section>
                    <section className="homepage__news">
                        <section>
                            <h2>News in the park</h2>
                        </section>
                        <section className="homepage__news-section">
                            <section className="homepage__news-section-card">
                                <article className="homepage__news-section-option">
                                    <img className="homepage__news-section-image" src="/images/julmarknad.jpg" alt="julmarknad på nöjesfältet" />
                                </article>
                                <h3 className="homepage__news-section-title">Julmarknad</h3>
                            </section>
                            <section className="homepage__news-section-card">
                                <article className="homepage__news-section-option">
                                    <img className="homepage__news-section-image" id="news-image-2" src="/images/jul-slott.jpg" alt="slottet i juldekoration" />
                                </article>
                                <h3 className="homepage__news-section-title">Extra öppet</h3>
                            </section>
                            <section className="homepage__news-section-card">
                                <article className="homepage__news-section-option">
                                    <img className="homepage__news-section-image" src="/images/fyrverkerier.jpg" alt="fyrverkerier" />
                                </article>
                                <h3 className="homepage__news-section-title">Fyrverkerier</h3>
                            </section>
                        </section>
                    </section>
                </main>

                <footer className="homepage__footer">
                        <p>Contact: freijalindkvist@hotmail.com</p>
                        <p>&copy; Copyrights 2023 by Freija Lindkvist </p>
                        <p>Examination UX/UI</p>
                </footer>
            </article>
        </>
    )
};

export default HomePage;