import { useValidators, ValidatorType } from './useValidators';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Text, Sheet } from 'Components';
import { Grid } from 'react-loading-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faSquare } from '@fortawesome/free-solid-svg-icons';
import swirl1 from '../Assets/swirl1.png';

export const Validators = (): JSX.Element => {
    const { data, isLoading, status, isError } = useValidators();
    const [topValidators, setTopValidators] = useState<ValidatorType[] | null>(
        [],
    );
    console.log(data, isLoading, status, isError);

    useEffect(() => {
        if (status !== 'success') return;

        const partial = data?.validators.slice(0, 25);
        partial && setTopValidators(partial);
    }, [data, status]);

    const tableStyles = {
        width: '100%',
        border: '1px solid var(--borderSecondary)',
        borderRadius: '4px',
        'tr td': {
            padding: '1rem 2rem',
        },
        thead: {
            'tr td': {
                color: 'var(--faceSecondary)',
                // background: 'var(--objSecondary)',
                // backdropFilter: 'blur(16px)',
                borderBottom: '1px solid var(--borderSecondary)',
            },
        },
        a: {
            color: 'var(--facePrimary)',
            '&:hover': {
                color: 'var(--faceSecondary)',
            },
        },
    };
    return (
        <Sheet>
            <Sheet.body
                css={{
                    position: 'relative',
                    minHeight: '150px',
                }}
            >
                <img
                    src={swirl1}
                    css={{ position: 'absolute', top: -20, right: -20 }}
                />
                <Text.md variant='accent'>Validators</Text.md>
                <br />
                <br />
                <br />
                {isLoading ? (
                    <div css={{ textAlign: 'center' }}>
                        <Grid height='48px' />
                    </div>
                ) : (
                    <div
                        css={{
                            background: 'var(--objSecondary)',
                            backdropFilter: 'blur(16px)',
                        }}
                    >
                        <table
                            css={tableStyles}
                            cellPadding='0'
                            cellSpacing='0'
                        >
                            <thead>
                                <tr>
                                    <td>Rank</td>
                                    <td>Name</td>
                                    <td text-align='center'>Voting Power</td>
                                    <td align='center'>Uptime</td>
                                </tr>
                            </thead>
                            <tbody>
                                {topValidators?.map((validator, index) => (
                                    <tr key={index}>
                                        <td>#{index + 1}</td>
                                        <td>
                                            {validator?.description?.moniker}
                                            &nbsp;
                                            <a
                                                href={`${validator?.description?.website}`}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <FontAwesomeIcon
                                                    icon={faExternalLinkAlt}
                                                />
                                            </a>
                                        </td>
                                        <td>{validator?.tokens}</td>
                                        <td
                                            align='center'
                                            css={{
                                                svg: {
                                                    padding: '0 2px',
                                                    color: 'var(--objPositive)',
                                                },
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faSquare} />
                                            <FontAwesomeIcon icon={faSquare} />
                                            <FontAwesomeIcon icon={faSquare} />
                                            <FontAwesomeIcon icon={faSquare} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </Sheet.body>
        </Sheet>
    );
};
