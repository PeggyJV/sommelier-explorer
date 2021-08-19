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
        <div>
            <Header />
            <div css={{ margin: '2rem auto', width: '800px' }}>
                <Cellars />
            </div>
            <Footer />
        </div>
    );
}

export default App;
