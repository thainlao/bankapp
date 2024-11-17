import { useTheme } from '../context/ThemeContext';
import '../styles/firstpage.css';
import Header from './Header';

const FirstPage = () => {
    const { theme } = useTheme();

    return (
        <div className={`firstpage ${theme}`}>
            <Header />
            <section className={`center ${theme}`}>
                <h1>Bank app version 1.0</h1>
                <h2>17.11.2024</h2>
            </section>
        </div>
    )
}

export default FirstPage