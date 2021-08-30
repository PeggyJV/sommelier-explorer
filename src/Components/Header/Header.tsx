import React from 'react';
import { Text, TextPNL, Ticker, Button } from 'Components';
import Box from '@material-ui/core/Box';
import { ReactComponent as Logo } from 'Assets/logo.svg';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => (
    <div css={{ backgroundColor: 'var(--bgPrimary)' }}>
        <StatsReel />
        <Box
            css={{
                borderTop: '1px solid var(--borderSecondary)',
                borderBottom: '1px solid var(--borderSecondary)',
            }}
            p='1rem 0'
            display='flex'
            justifyContent='center'
        >
            <Box
                display='flex'
                justifyContent='center'
                flexGrow={1}
                alignItems='center'
                css={{
                    maxWidth: '800px',
                    position: 'relative',
                }}
            >
                {/* <div>
                    <Text.lg variant='default'>Search</Text.lg>
                </div> */}
                <Box
                    display='flex'
                    alignItems='center'
                    css={{ '> span': { padding: '0 0.5rem' } }}
                >
                    <Text.lg variant='strong'>Cellar</Text.lg>
                    <Logo height={36} />

                    <Text.lg variant='strong'>Explorer</Text.lg>
                </Box>
                <div css={{ position: 'absolute', right: '0' }}>
                    <Button variant='default'>Launch App</Button>
                </div>
            </Box>
        </Box>
        <Box
            display='flex'
            justifyContent='center'
            p='1rem 0'
            css={{ borderBottom: '1px solid var(--borderSecondary)' }}
        >
            <Nav />
        </Box>
    </div>
);

const StatsReel = (): JSX.Element => (
    <div>
        <Ticker>
            <Box display='flex' justifyContent='space-between' p='0.75rem 0'>
                <Text.sm>
                    Total value locked{' '}
                    <TextPNL isNegative={false}>$12,323,345</TextPNL>
                </Text.sm>
                <Text.sm>Transactions 19,273,025</Text.sm>
                <Text.sm>
                    Cellars <TextPNL isNegative={false}>10,037</TextPNL>
                </Text.sm>
                <Text.sm>
                    SOMM rewards <TextPNL isNegative={false}>12,456</TextPNL>
                </Text.sm>
            </Box>
        </Ticker>
    </div>
);

const Nav = (): JSX.Element => {
    const activeStyles = {
        backgroundColor: 'var(--objPrimary)',
        border: '1px solid var(--borderPrimary)',
    };
    const navStyles = {
        borderRadius: '6px',
        padding: '0.5rem 1.5rem',
        color: 'var(--facePrimary)',
    };
    return (
        <Box
            display='inline-flex'
            justifyContent='space-between'
            css={{
                borderRadius: '6px',
                backgroundColor: 'var(--objSecondary)',
                // border: '1px solid var(--borderSecondary)',
            }}
        >
            <Box css={{ ...navStyles, ...activeStyles }}>
                <Text.md variant='strong'>Cellars</Text.md>
            </Box>
            <Box css={navStyles}>
                <Text.md variant='primary'>
                <Link to='/governance'>Governance</Link></Text.md>
            </Box>
            <Box css={navStyles}>
                <Text.md variant='primary'>Validators</Text.md>
            </Box>
        </Box>
    );
};
