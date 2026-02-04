function vowelCase(str) {
  const vowels = "aeiouAEIOU";

  return str
    .split("") // Convert string to array of characters
    .map((char) => {
      if (vowels.includes(char)) {
        return char.toUpperCase(); // It's a vowel!
      } else {
        return char.toLowerCase(); // It's a consonant or non-letter
      }
    })
    .join(""); // Convert array back to string
}
// Testing 
console.log(vowelCase("vowelcase")) 
console.log(vowelCase("coding is fun"))
console.log(vowelCase("HELLO, world!"))
console.log(vowelCase("git cherry-pick"))
console.log(vowelCase("HEAD~1"))