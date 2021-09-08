import { useEffect } from 'react';
import './App.scss';
import { Header, Footer, Sheet } from 'Components';
import { Cellars } from 'Cellars/Cellars';
import { Validators } from 'Validators/Validators';
import { QueryClient, QueryClientProvider } from 'react-query';
import { css } from '@emotion/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App(): JSX.Element {
    const queryClient = new QueryClient();

    useEffect(() => {
        document.body.classList.add('brand');
    }, []);

    return (
        <div className='app'>
            <QueryClientProvider client={queryClient}>
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
                            <Validators />
                        </Route>
                        <Route path='/governance'>
                            <Sheet>
                                <Sheet.body>
                                    <div
                                        css={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        No open proposals
                                    </div>
                                </Sheet.body>
                            </Sheet>
                        </Route>
                        <Route path='/cellars'>
                            <Cellars />
                        </Route>
                    </div>
                    <Footer />
                </Router>
            </QueryClientProvider>
        </div>
    );
}

export default App;
