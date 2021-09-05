function vowelsAndConsonants(s) {
  s = Array.from(s);
  //  console.log(s)
  const vowels = ["a", "e", "i", "o", "u"];
  let newArr = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (s[i] === vowels[j]) {
        s.splice(i,1);

      }
    }
  }
  console.log(s)
}

let s = "javascriptloops";

vowelsAndConsonants(s);
