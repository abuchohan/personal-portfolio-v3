
import About from './components/AboutMe/About';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Hero from './components/Hero/Hero';
import ProjectSlider from './components/ProjectSlider/ProjectSlider';
import TechSlider from './components/TechSlider/TechSlider';

function App() {
    return (
        <>
            <Hero />
            <ProjectSlider />
            <TechSlider />
            <About />
            <GetInTouch />
        </>
    );
}

export default App;
