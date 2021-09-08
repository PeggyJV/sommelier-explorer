import Box from '@material-ui/core/Box';
import { css } from '@emotion/react';
import { TextTitle, Text, Sheet } from 'Components';
import { CellarCard } from './CellarCard';
import swirl1 from '../Assets/swirl1.png';
import { url } from 'inspector';

export const Cellars = (): JSX.Element => {
    const token0 = {
        id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        symbol: 'WETH',
        name: 'Wrapped Ether',
    };

    const token1 = {
        id: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        symbol: 'USDT',
        name: 'Tether USD',
    };

    const stats = {
        tvl: '238921',
        totalDeposits: '991832',
        fees: '23242',
    };

    return (
        <Sheet>
            <Sheet.body css={{ position: 'relative' }}>
                <img
                    src={swirl1}
                    css={{ position: 'absolute', top: -20, right: -20 }}
                />
                <Text.md variant='accent'>Cellars</Text.md>
                <br />
                <br />
                <div
                    css={{
                        minWidth: '600px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        '> div': {
                            margin: '1rem 0',
                        },
                        position: 'relative',
                    }}
                >
                    <CellarCard token0={token0} token1={token1} stats={stats} />
                    <CellarCard token0={token0} token1={token1} stats={stats} />
                    <CellarCard token0={token0} token1={token1} stats={stats} />
                    <CellarCard token0={token0} token1={token1} stats={stats} />
                </div>
            </Sheet.body>
        </Sheet>
    );
};
