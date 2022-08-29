const findSum = function (array) {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    sum += array[i];
  }
  return sum;
};

const findFrequency = function (array) {
  const store = {};
  array.forEach((num) => (store[num] ? (store[num] += 1) : (store[num] = 1)));
  let obj = {
    most: "",
    least: "",
  };
  obj.most = Object.keys(store).sort((a, b) => store[b] - store[a])[0];
  obj.least = Object.keys(store).sort((a, b) => store[a] - store[b])[0];
  return obj;
};

const isPalindrome = function (str) {
  let len = Math.floor(str.length / 2);

  for (let i = 0; i < len; i++) {
    // This if-statement is used to evaluate for Palindrome.
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
};

const largestPair = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = Math.max(sum, array[i] * (array[i + 1] ?? 1));
  }
  return sum;
};

const removeParenth = function (str) {
  let startIndex = str.indexOf("(");
  let endIndex = str.indexOf(")") + 1;
  const answer = str.substr(0, startIndex) + str.substr(endIndex);
  return answer;
};

const scoreScrabble = function (str) {
  const array = str.toUpperCase().split("");
  let score = 0;

  var dict = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };

  array.forEach(function (value) {
    return (score += dict[value]);
  });

  return score;
};
