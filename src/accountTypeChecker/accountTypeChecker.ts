import {
    IAccountBalanceHistory,
    IAccountType,
    TAccountResult,
} from './accountTypeChecker.types';

export function accountTypeChecker(
    accountBalanceHistory: IAccountBalanceHistory[]
): TAccountResult {
    const accountType = accountBalanceHistory.reduce<IAccountType>(
        (accumulator, currentValue, currentIndex, array) => {
            if (currentIndex === array.length - 1) {
                return accumulator;
            }

            const currentAmount = currentValue.account.balance.amount;
            const previousAmount =
                array[currentIndex + 1].account.balance.amount;
            const balanceDifference = currentAmount - previousAmount;

            if (currentIndex === 0) {
                return {
                    ...accumulator,
                    balanceDifferenceBenchmark: balanceDifference,
                };
            }

            return balanceDifference === accumulator.balanceDifferenceBenchmark
                ? accumulator
                : { ...accumulator, isConsistent: false };
        },
        { isConsistent: true }
    );

    return accountType.isConsistent ? 'B' : 'A';
}
