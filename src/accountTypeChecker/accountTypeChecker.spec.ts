import { accountTypeChecker } from './accountTypeChecker';
import {
    mockVaryingAccountBalanceHistory,
    mockConsistentAccountBalanceHistory,
} from './accountTypeChecker.data';

test('determines if the balance goes down by varying amounts each month', () => {
    expect(accountTypeChecker(mockVaryingAccountBalanceHistory)).toEqual('A');
});

test('determines if the balance goes down by the same amount each month', () => {
    expect(accountTypeChecker(mockConsistentAccountBalanceHistory)).toEqual(
        'B'
    );
});
