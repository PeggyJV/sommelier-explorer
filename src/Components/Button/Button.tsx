import { Text } from 'Components';
// Button Types
// Type of button defines its font-size, spacing, default colors
// Small, medium, large, full

// variant defines its color / semantics
// Primary
// Default
// Accent
// Warn
// Positive
// Negative
// Transparent

type ButtonVariant =
    | 'primary'
    | 'default'
    | 'accent'
    | 'warn'
    | 'positive'
    | 'negative'
    | 'transparent';

const VARIANT_MAP = {
    primary: 'Primary',
    default: 'Default',
    accent: 'Accent',
    warn: 'Warn',
    positive: 'Positive',
    negative: 'Negative',
    transparent: 'Tertiary',
};
export const Button = ({
    variant = 'default',
    disabled = false,
    size = 'medium',
    display = 'inline',
    children,
}: {
    variant: ButtonVariant;
    disabled?: boolean;
    children: string;
    size?: 'medium' | 'large' | 'small';
    display?: 'inline' | 'block';
}): JSX.Element => {
    const color = VARIANT_MAP[variant];
    const variantStyles = {
        color: `var(--face${color})`,
        backgroundColor: `var(--obj${color})`,
        border: `1px solid var(--border${color})`,
        borderRadius: 6,
        padding: '0.5rem 1rem',
        width: display === 'block' ? '100%' : 'auto',
        outline: 'none',
        cursor: 'pointer',
        '&:hover': {
            border: `1px solid var(--border${color}Hover)`,
            backgroundColor: `var(--obj${color}Hover)`,
        },
    };

    const disabledStyles = {
        color: `var(--face${color}Disabled)`,
        border: `1px solid var(--border${color}Disabled)`,
        backgroundColor: `var(--obj${color}Disabled)`,
        cursor: 'not-allowed',
        '&:hover': {
            border: `1px solid var(--border${color}Disabled)`,
            backgroundColor: `var(--obj${color}Disabled)`,
        },
    };

    const buttonStyles = disabled
        ? { ...variantStyles, ...disabledStyles }
        : variantStyles;

    let TextComponent;
    switch (size) {
        case 'small':
            TextComponent = Text.sm;
            break;
        case 'medium':
            TextComponent = Text.md;
            break;
        case 'large':
            TextComponent = Text.lg;
            break;
        default:
            TextComponent = Text.md;
            break;
    }
    return (
        <button css={buttonStyles}>
            {disabled ? (
                <TextComponent
                    variant='strong'
                    css={{
                        color: `var(--faceStrongDisabled)`,
                    }}
                >
                    {children}
                </TextComponent>
            ) : (
                <TextComponent variant='strong'>{children}</TextComponent>
            )}
        </button>
    );
};
