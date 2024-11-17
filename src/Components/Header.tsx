import { useTheme } from '../context/ThemeContext';
import '../styles/header.css';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header>
            <h1 className={theme}>LOGO</h1>

            <section className={theme}>
                <a>Docs</a>
                <a>Гарантии</a>
                <a>Написать нам</a>

                <button className="theme-toggle" onClick={toggleTheme}>
                    <img src={theme === 'light' ? sun : moon}/>
                </button>

            </section>
        </header>
    )
}

export default Header