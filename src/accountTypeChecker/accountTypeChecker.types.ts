export interface IAccountBalanceHistory {
  monthNumber: number;
  account: {
    balance: {
      amount: number;
    };
  };
}

export type TAccountType = 'A' | 'B';
