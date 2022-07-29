
import About from './components/AboutMe/About';
import CareerSlider from './components/CareerSlider/CareerSlider';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Hero from './components/Hero/Hero';
import TechSlider from './components/TechSlider/TechSlider';
import Footer from './components/UI/Footer/Footer';

function App() {
    return (
        <>
            <Hero />
            <CareerSlider />
            <About />
            <TechSlider />
            <GetInTouch />
            <Footer />
        </>
    );
}

export default App;
