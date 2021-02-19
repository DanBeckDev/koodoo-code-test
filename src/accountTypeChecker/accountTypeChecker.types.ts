export interface IAccountBalanceHistory {
    monthNumber: number;
    account: {
        balance: {
            amount: number;
        };
    };
}

export interface IAccountType {
    balanceDifferenceBenchmark?: number;
    isConsistent?: boolean;
}

export type TAccountResult = 'A' | 'B';
