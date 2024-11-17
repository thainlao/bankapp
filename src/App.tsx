import FirstPage from './Components/FirstPage';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
