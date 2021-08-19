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
        <div css={{ backgroundColor: 'var(--bgDefault)' }}>
            <Header />
            <Cellars />
            <Footer />
        </div>
    );
}

export default App;
