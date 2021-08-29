import logoMappings from 'Constants/TrustwalletMappings.json';

const ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

export const TokenLogo = ({
    address,
    size = '24px',
}: {
    address: string;
    size?: string;
}): JSX.Element => {
    if (!address) return <span className='no-image'></span>;
    if (address?.toLowerCase() === ETH_ADDRESS.toLowerCase()) {
        // Show ETH logo
        const imgUrl = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png`;
        return (
            <span>
                <img
                    src={imgUrl}
                    alt='🍇'
                    height={size}
                    style={{ borderRadius: '1rem' }}
                />
            </span>
        );
    }

    let tokenAddress: string | undefined;

    if (address && address in logoMappings) {
        tokenAddress = logoMappings[address as keyof typeof logoMappings];
    }

    if (!tokenAddress) return <span className='no-image'></span>;

    const imgUrl = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${tokenAddress}/logo.png`;
    return (
        <span>
            <img
                src={imgUrl}
                alt='🍇'
                height={size}
                style={{
                    borderRadius: '1rem',
                    boxShadow: '0 0 10px var(--objAccent)',
                }}
            />
        </span>
    );
};

export interface IToken {
    id: string;
    symbol: string;
    name: string;
}

export const TokenLogoPair = ({
    token0,
    token1,
}: {
    token0: IToken;
    token1: IToken;
}): JSX.Element => {
    return (
        <div css={{ minWidth: '50px' }}>
            <TokenLogo address={token0?.id} />
            <TokenLogo address={token1?.id} />
        </div>
    );
};
