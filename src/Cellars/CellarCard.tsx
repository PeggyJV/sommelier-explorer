import { TokenLogoPair, IToken } from './TokenFormat';
import { Sheet, Text, Button } from 'Components';
import { Box } from '@material-ui/core';
import { toUSD } from 'Components/Text/formats';
import { ProgressBar } from './ProgressBar';

type CellarStats = {
    tvl: string;
    totalDeposits: string;
    fees: string;
};

type CellarCardProps = {
    token0: IToken;
    token1: IToken;
    stats: CellarStats;
};
export const CellarCard = ({
    token0,
    token1,
    stats,
}: CellarCardProps): JSX.Element => {
    return (
        <Sheet
            css={{
                maxWidth: '210px',
                background: 'var(--objSecondary)',
                backdropFilter: 'blur(16px)',
            }}
        >
            <Sheet.header>
                <Box
                    display='flex'
                    alignItems='flex-start'
                    justifyContent='space-between'
                >
                    <Box
                        css={{
                            marginRight: '0.5rem',
                        }}
                    >
                        <Box display='flex' flexDirection='column'>
                            <Text.md variant='strong'>{`${token0?.symbol}-${token1?.symbol}`}</Text.md>
                            <Text.sm variant='default'>{`${token0?.name}-${token1?.name}`}</Text.sm>
                        </Box>
                    </Box>
                    <Box>
                        <TokenLogoPair token0={token0} token1={token1} />
                    </Box>
                </Box>
            </Sheet.header>
            <Sheet.body>
                <table
                    width='100%'
                    css={{ 'tr > td': { padding: '0.5rem 0' } }}
                >
                    <tr>
                        <td>
                            <Text.sm variant='default'>TVL</Text.sm>
                        </td>
                        <td align='right'>
                            <Text.sm variant='strong'>
                                {/* {toUSD(stats?.tvl)} */}
                                {'$---,---.--'}
                            </Text.sm>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Text.sm variant='default'>Deposits</Text.sm>
                        </td>
                        <td align='right'>
                            <Text.sm variant='strong'>
                                {/* {toUSD(stats?.totalDeposits)} */}
                                {'$---,---.--'}
                            </Text.sm>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Text.sm variant='default'>Fees</Text.sm>
                        </td>
                        <td align='right'>
                            <Text.sm variant='positive'>
                                {/* {toUSD(stats?.fees)} */}
                                {'$--,---.--'}
                            </Text.sm>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <ProgressBar percent='1' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Text.sm variant='default'>Limit</Text.sm>
                        </td>
                        <td align='right'>
                            <Text.sm variant='strong'>{'$--.--k'}</Text.sm>
                        </td>
                    </tr>
                </table>
            </Sheet.body>
            <Sheet.footer>
                <Button variant='accent' display='block' size='medium'>
                    {'Coming Soon'}
                </Button>
            </Sheet.footer>
        </Sheet>
    );
};
