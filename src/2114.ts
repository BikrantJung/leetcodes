// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

function mostWordsFound(sentences: string[]): number {
  return Math.max(
    ...sentences.map((sentence) => sentence.trim().split(" ").length)
  );
}
console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too this is a hero",
    "this is great thanks very much",
  ])
);
