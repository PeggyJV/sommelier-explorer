import { useEffect } from 'react';
import './App.scss';
import { Header, Footer } from 'Components';
import { Cellars } from 'Cellars/Cellars';
import { css } from '@emotion/react';

function App(): JSX.Element {
    useEffect(() => {
        document.body.classList.add('brand');
    }, []);

    return (
        <div className='app'>
            <Header />
            <div
                css={{
                    margin: '0 auto',
                    padding: '2rem 0',
                    width: '920px',
                    '> div': {
                        margin: '2rem 0',
                    },
                }}
            >
                <Cellars />
                <Cellars />
                <Cellars />
            </div>
            <Footer />
        </div>
    );
}

export default App;
