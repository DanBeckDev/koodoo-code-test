import {
  IAccountBalanceHistory,
  TAccountType,
} from './accountTypeChecker.types';

export function accountTypeChecker(
  accountBalanceHistory: IAccountBalanceHistory[]
): TAccountType {
  const monthlyAccountBalances = accountBalanceHistory.map(
    (oneMonthAccountHistory) => oneMonthAccountHistory.account.balance.amount
  );
  const accountBalanceBenchmark =
    monthlyAccountBalances[0] - monthlyAccountBalances[1];

  const isAccountBalanceHistoryConsistent = monthlyAccountBalances.every(
    (currentBalance, index, array) => {
      if (index === array.length - 1) {
        return true;
      }

      const compareWithNextMonthBalance = currentBalance - array[index + 1];
      return compareWithNextMonthBalance === accountBalanceBenchmark;
    }
  );
  return isAccountBalanceHistoryConsistent ? 'B' : 'A';
}
