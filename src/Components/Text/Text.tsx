import { css } from '@emotion/react';

export const TextSm = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => (
    <span
        css={{
            color: 'var(--faceDefault)',
            fontSize: '0.75rem',
            lineHeight: '1rem',
        }}
    >
        {children}
    </span>
);

export const TextMd = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => (
    <span
        css={{
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: 'var(--faceStrong)',
        }}
    >
        {children}
    </span>
);

export const TextLg = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => (
    <span
        css={{
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            color: 'var(--faceStrong)',
        }}
    >
        {children}
    </span>
);
export const TextTitle = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => (
    <span
        css={{
            fontSize: '1.5rem',
            lineHeight: '1.5rem',
            color: 'var(--faceStrong)',
        }}
    >
        {children}
    </span>
);

export const TextPNL = ({
    children,
    isNegative,
}: {
    children: string | JSX.Element;
    isNegative: boolean;
}): JSX.Element => {
    return (
        <span
            css={{
                color: isNegative
                    ? 'var(--faceNegative)'
                    : 'var(--facePositive)',
            }}
        >
            {children}
        </span>
    );
};
