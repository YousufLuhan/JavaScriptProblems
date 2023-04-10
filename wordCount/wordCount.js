function wordCount(word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      count++;
    }
  }
  count++;
  return "Total word is " + count;
}

console.log(
  wordCount("Lorem ipsum dolor sit amet consectetur adipisicing elit")
);

function vowelCount(word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      count++;
    }
  }
  return "Total vowel is " + count;
}

console.log(
  vowelCount("Lorem ipsum dolor sit amet consectetur adipisicing elit")
);

function sentenceCount(sentence) {
  var count = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === "." || sentence === "?" || sentence === "!") {
      count++;
    }
  }
  return "Total sentece is " + count;
}
var js =
  "JavaScript is the world's most popular programming language.\
    JavaScript is the programming language of the Web.\
    JavaScript is easy to learn.\
    This tutorial will teach you JavaScript from basic to advanced.";
console.log(sentenceCount(js));
