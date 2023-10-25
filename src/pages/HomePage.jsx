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
                    <section className="homepage__first-section">
                        <img id="homepage__first-section-image" src="/images/karusell.jpg" alt="karusell med hästar" />
                        <h2 className="homepage__first-section-text">Välkommen till en magisk upplevelse för hela familjen!</h2>
                    </section>
                    <section className="homepage__news">
                        <section>
                            <h2>News in the park</h2>
                        </section>
                        <section className="homepage__news-section">
                            <section className="homepage__news-section-option">
                                <img className="homepage__news-section-image" src="/images/julmarknad.jpg" alt="julmarknad på nöjesfältet" />
                            </section>
                            <section className="homepage__news-section-option">
                                <img className="homepage__news-section-image" src="/images/jul-slott.jpg" alt="slottet i juldekoration" />
                            </section>
                            <section className="homepage__news-section-option">
                                <img className="homepage__news-section-image" src="/images/fyrverkerier.jpg" alt="fyrverkerier" />
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