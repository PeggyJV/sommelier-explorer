import React from 'react';
import { Text, TextPNL, Ticker, Button } from 'Components';
import Box from '@material-ui/core/Box';
import { ReactComponent as Logo } from 'Assets/logo.svg';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

export const Header = (): JSX.Element => (
    <div css={{ backgroundColor: 'var(--bgPrimary)' }}>
        {/* <StatsReel /> */}
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
                justifyContent='space-between'
                flexGrow={1}
                alignItems='center'
                css={{
                    maxWidth: '920px',
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
                    <Logo height={42} width={42} />
                    <Text.lg variant='strong'>Sommelier</Text.lg>

                    <Text.lg variant='strong'>Explorer</Text.lg>
                </Box>
                <div css={{ position: 'absolute', right: '0' }}>
                    <a
                        href='https://app.sommelier.finance'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button variant='default'>Launch App</Button>
                    </a>
                </div>
            </Box>
        </Box>
        <Box
            display='flex'
            justifyContent='center'
            p='1rem 0'
            css={{ borderBottom: '1px solid var(--borderSecondary)' }}
            // css={{ background: 'var(--bgGradientTo)' }}
        >
            <div css={{ width: '920px' }}>
                <Nav />
            </div>
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
            <NavLink exact to='/' css={navStyles} activeStyle={activeStyles}>
                <Text.md variant='strong'>Validators</Text.md>
            </NavLink>
            <NavLink to='/cellars' css={navStyles} activeStyle={activeStyles}>
                <Text.md variant='primary'>Cellars</Text.md>
            </NavLink>
            <NavLink
                to='/governance'
                css={navStyles}
                activeStyle={activeStyles}
            >
                <Text.md variant='primary'>Governance</Text.md>
            </NavLink>
        </Box>
    );
};
