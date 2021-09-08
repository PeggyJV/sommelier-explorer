import { useValidators } from './useValidators';
import { css } from '@emotion/react';
import { Sheet } from 'Components';

export const Validators = (): JSX.Element => {
    const { data, isLoading, status, isError } = useValidators();

    console.log(data, isLoading, status, isError);
    const tableStyles = {
        width: '100%',
        'tr td': {
            padding: '1rem 2rem',
        },
        thead: {
            'tr td': {
                color: 'var(--faceSecondary)',
                background: 'var(--bgDefault)',
            },
        },
    };
    return (
        <Sheet>
            <Sheet.body>
                <table css={tableStyles} cellPadding='0' cellSpacing='0'>
                    <thead>
                        <tr>
                            <td>Rank</td>
                            <td>Name</td>
                            <td>Voting Power</td>
                            <td>Uptime</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Evernote Systems</td>
                            <td>$12,344,234</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </Sheet.body>
        </Sheet>
    );
};
