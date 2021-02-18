import { accountTypeChecker } from './accountTypeChecker';
import {
  mockVaryingAccountBalanceHistory,
  mockConsistentAccountBalanceHistory,
} from './accountTypeChecker.data';
/*

GIVEN I want to track a users spending habits 
WHEN it goes down by varying amounts each month
THEN it should return A

GIVEN I want to track a users spending habits 
WHEN it goes down by the same amount each month
THEN it should return B

accepts multiple inputs for same month

*/

test('determines if the balance goes down by varying amounts each month', () => {
  expect(accountTypeChecker(mockVaryingAccountBalanceHistory)).toEqual('A');
});
test('determines if the balance goes down by the same amount each month', () => {
  expect(accountTypeChecker(mockConsistentAccountBalanceHistory)).toEqual('B');
});
test('accepts multiple inputs for each month');
