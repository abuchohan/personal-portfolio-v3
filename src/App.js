
import Section from './components/UI/Section';
import Button from './components/UI/Button';
import Hero from './components/Hero/Hero';

function App() {
    return (
        <>
            <Section>
                <Hero/>
            </Section>
            <h1 className='secondary'> Test</h1>
            <Section light={true}>
                <h1 className='section-title'>About</h1>
                <p className={'paragraph'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Button>Click Me!</Button>
            </Section>
            </>
    );
}

export default App;
