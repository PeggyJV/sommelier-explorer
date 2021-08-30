import { useEffect } from 'react';
import './App.scss';
import { Header, Footer } from 'Components';
import { Cellars } from 'Cellars/Cellars';
import { css } from '@emotion/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App(): JSX.Element {
    useEffect(() => {
        document.body.classList.add('brand');
    }, []);

    return (
        <div className='app'>
            <Router>
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
                    <Route exact path='/'>
                        <Cellars />
                        <Cellars />
                        <Cellars />
                    </Route>
                    <Route path='/governance'>
                        <div>Governance</div>
                    </Route>
                    <Route path='/validators'>
                        <div>Validators</div>
                    </Route>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
