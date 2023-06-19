// https://leetcode.com/problems/richest-customer-wealth/
function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((account) => account.reduce((acc, cur) => acc + cur))
  );
}

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
