import React from 'react';
import { TextPNL, TextSm, TextLg, TextMd, Ticker } from 'Components';
import Box from '@material-ui/core/Box';
import { ReactComponent as Logo } from 'Assets/logo.svg';
import { css } from '@emotion/react';

export const Header = (): JSX.Element => (
    <div css={{ backgroundColor: 'var(--bgPrimary)' }}>
        <StatsReel />
        <Box
            css={{
                borderTop: '1px solid var(--borderSecondary)',
                borderBottom: '1px solid var(--borderSecondary)',
            }}
            p='1.5rem 0'
            display='flex'
            justifyContent='center'
        >
            <Box
                display='flex'
                justifyContent='space-between'
                flexGrow={1}
                alignItems='center'
                css={{
                    maxWidth: '800px',
                }}
            >
                <div>
                    <TextLg>Search</TextLg>
                </div>
                <Box
                    display='flex'
                    alignItems='center'
                    css={{ '> span': { padding: '0 0.5rem' } }}
                >
                    <TextLg>Cellar</TextLg>
                    <Logo height={36} />

                    <TextLg>Explorer</TextLg>
                </Box>
                <TextLg>Launch App</TextLg>
            </Box>
        </Box>
        <Box display='flex' justifyContent='center' p='1.5rem 0'>
            <Nav />
        </Box>
    </div>
);

const StatsReel = (): JSX.Element => (
    <div>
        <Ticker>
            <Box display='flex' justifyContent='space-between' p='1.5rem 0'>
                <TextSm>
                    Total value locked{' '}
                    <TextPNL isNegative={false}>$12,323,345</TextPNL>
                </TextSm>
                <TextSm>Transactions 19,273,025</TextSm>
                <TextSm>
                    Cellars <TextPNL isNegative={false}>10,037</TextPNL>
                </TextSm>
                <TextSm>
                    SOMM rewards <TextPNL isNegative={false}>12,456</TextPNL>
                </TextSm>
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
        borderRadius: '4px',
        padding: '0.75rem 1.5rem',
    };
    return (
        <Box
            display='inline-flex'
            justifyContent='space-between'
            css={{
                borderRadius: '0.25rem',
                backgroundColor: 'var(--objDefault)',
                border: '1px solid var(--borderSecondary)',
            }}
        >
            <Box css={{ ...activeStyles, ...navStyles }}>
                <TextMd>Cellars</TextMd>
            </Box>
            <Box css={navStyles}>
                <TextMd>Governance</TextMd>
            </Box>
            <Box css={navStyles}>
                <TextMd>Validators</TextMd>
            </Box>
        </Box>
    );
};
