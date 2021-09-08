import { useQuery } from 'react-query';

enum BondStatus {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BOND_STATUS_UNSPECIFIED = 0,
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BOND_STATUS_UNBONDED = 1,
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BOND_STATUS_UNBONDING = 2,
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BOND_STATUS_BONDED = 3,
    UNRECOGNIZED = -1,
}

export type ValidatorType = {
    operatorAddress: string;
    jailed: boolean;
    status: BondStatus;
    tokens: string;
    delegatorShares: string;
    unbondingHeight: {
        low: number;
        high: number;
        unsigned: boolean;
    };
    minSelfDelegation: string;
    consensusPubkey: {
        typeUrl: string;
        value: {
            [index: string]: number;
        };
    };
    description: {
        moniker: string;
        identity: string;
        website: string;
        securityContact: string;
        details: string;
    };
    unbondingTime: string;
    commission: {
        rate: string;
        maxRate: string;
        maxChangeRate: string;
    };
    updateTime: string;
};

export interface Response<T> {
    data: T | null;
    isLoading: boolean;
    status: string;
    isError: boolean;
}
// export type ValidatorResponse = Response<ValidatorType>;

type ValidatorResponse = {
    data: { validators: Array<ValidatorType> } | undefined;
    isLoading: boolean;
    status: string;
    isError: boolean;
};

export const useValidators = (): ValidatorResponse => {
    const getValidators = async () => {
        const response = await fetch(
            `https://us-central1-peggyjv-sommscan-65139.cloudfunctions.net/getValidators`,
        );
        if (!response.ok) throw new Error(`Failed to fetch validators`);

        const data = await (response.json() as Promise<{
            validators: ValidatorType[];
        }>);

        return data;
    };

    const { data, isLoading, status, isError } = useQuery(
        ['getValidators'],
        getValidators,
    );

    return { data, isLoading, status, isError };
};
