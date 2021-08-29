export const Sheet = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}): JSX.Element => {
    return (
        <div
            css={{
                border: '1px solid var(--borderSecondary)',
                borderRadius: '4px',
                background: 'var(--bgPrimary)',
            }}
            className={className}
        >
            {children}
        </div>
    );
};

const Header = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <div
            css={{
                padding: '1rem',
                borderBottom: '1px solid var(--borderSecondary)',
            }}
        >
            {children}
        </div>
    );
};

const Body = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}): JSX.Element => {
    return (
        <div css={{ padding: '1rem' }} className={className}>
            {children}
        </div>
    );
};
const Footer = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <div
            css={{
                padding: '1rem',
                borderTop: '1px solid var(--borderSecondary)',
            }}
        >
            {children}
        </div>
    );
};

Sheet.header = Header;
Sheet.body = Body;
Sheet.footer = Footer;
