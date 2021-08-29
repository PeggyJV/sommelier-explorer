import { css } from '@emotion/react';

const COLOR_VARIANT = {
    strong: 'var(--faceStrong)',
    primary: 'var(--facePrimary)',
    default: 'var(--faceDefault)',
    accent: 'var(--faceAccent)',
    warn: 'var(--faceWarn)',
    positive: 'var(--facePositive)',
    negative: 'var(--faceNegative)',
};

// 12px
type Variant = keyof typeof COLOR_VARIANT;
export const TextSm = ({
    children,
    variant = 'strong',
    className,
}: {
    children: React.ReactNode;
    variant?: Variant;
    className?: string;
}): JSX.Element => (
    <span
        css={{
            color: COLOR_VARIANT[variant],
            fontSize: '0.75rem',
            lineHeight: '1rem',
        }}
        className={className}
    >
        {children}
    </span>
);

// 16px
export const TextMd = ({
    children,
    variant = 'strong',
    className,
}: {
    children: React.ReactNode;
    variant?: Variant;
    className?: string;
}): JSX.Element => (
    <span
        css={{
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: COLOR_VARIANT[variant],
        }}
        className={className}
    >
        {children}
    </span>
);

// 18px
export const TextLg = ({
    children,
    variant = 'strong',
    className,
}: {
    children: React.ReactNode;
    variant?: Variant;
    className?: string;
}): JSX.Element => (
    <span
        css={{
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            color: COLOR_VARIANT[variant],
        }}
        className={className}
    >
        {children}
    </span>
);

// 20px
export const TextTitle = ({
    children,
    variant = 'strong',
    className,
}: {
    children: React.ReactNode;
    variant?: Variant;
    className?: string;
}): JSX.Element => (
    <span
        css={{
            fontSize: '1.25rem',
            lineHeight: '2rem',
            color: COLOR_VARIANT[variant],
        }}
        className={className}
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

export const Text = {
    sm: TextSm,
    md: TextMd,
    lg: TextLg,
    title: TextTitle,
};
