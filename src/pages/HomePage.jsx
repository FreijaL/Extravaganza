import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './homepage.scss';


function HomePage() {
    const navigate = useNavigate();

    return (
        <main>
            <h1 className="homepage__heading">testing homepage</h1>
        </main>
    )
};

export default HomePage;