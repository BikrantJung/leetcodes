// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const resultArr: boolean[] = [];

  for (let i = 0; i < candies.length; i++) {
    //   [1, 3, 2, 5, 4]
    let isGreatest = false;
    for (let j = 0; j < candies.length; j++) {
      if (candies[i] + extraCandies >= candies[j]) {
        isGreatest = true;
      } else {
        isGreatest = false;
      }
      if (!isGreatest) {
        break;
      }
    }
    if (isGreatest) {
      resultArr.push(true);
    } else {
      resultArr.push(false);
    }
  }

  return resultArr;
}
let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
