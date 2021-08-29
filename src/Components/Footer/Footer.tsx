import Box from '@material-ui/core/Box';
import { Text } from 'Components/Text/Text';
import { ReactComponent as Logo } from 'Assets/logo.svg';

export const Footer = (): JSX.Element => {
    return (
        <div
            css={{
                width: '100%',
                position: 'fixed',
                bottom: '0',
                padding: '1rem',
                backgroundColor: 'var(--bgPrimary)',
                borderTop: '1px solid var(--borderSecondary)',
                backdropFilter: 'blur(16px)',
            }}
        >
            <div css={{ width: '800px', margin: '0 auto' }}>
                <Box
                    css={{
                        '> div': { flexGrow: 1 },
                        width: '100%',
                    }}
                    display='flex'
                    justifyContent='space-btween'
                    alignItems='center'
                >
                    <Box display='flex' alignItems='center'>
                        <Text.sm variant='strong'>Powered by Sommelier</Text.sm>
                        &nbsp;
                        <Logo height='17' />
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <div>
                            <Text.sm variant='strong'>
                                Join our Community
                            </Text.sm>
                        </div>
                        <div>
                            <Text.sm variant='strong'>
                                Follow our Twitter
                            </Text.sm>
                        </div>
                        <div>
                            <Text.sm variant='strong'>Read our Blog</Text.sm>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    );
};
