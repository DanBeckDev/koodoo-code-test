import { IAccountBalanceHistory } from './accountTypeChecker.types';

export const accountBalanceHistory: IAccountBalanceHistory[] = [
  {
    monthNumber: 0,
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1,
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: 200 },
    },
  },
];

export const mockVaryingAccountBalanceHistory: IAccountBalanceHistory[] = [
  {
    monthNumber: 0,
    account: {
      balance: { amount: 5 },
    },
  },
  {
    monthNumber: 1,
    account: {
      balance: { amount: 110 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: 200 },
    },
  },
  {
    monthNumber: 3,
    account: {
      balance: { amount: 459 },
    },
  },
  {
    monthNumber: 4,
    account: {
      balance: { amount: 500 },
    },
  },
];

export const mockConsistentAccountBalanceHistory: IAccountBalanceHistory[] = [
  {
    monthNumber: 0,
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 1,
    account: {
      balance: { amount: 200 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: 300 },
    },
  },
  {
    monthNumber: 3,
    account: {
      balance: { amount: 400 },
    },
  },
  {
    monthNumber: 4,
    account: {
      balance: { amount: 500 },
    },
  },
];
