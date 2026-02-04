function parseUnorderedList(markdown) {
  // 1. Split the string into individual lines based on the newline character
  const lines = markdown.split('\n');

  // 2. Map over each line to transform it into an <li> element
  const listItems = lines.map(line => {
    // This regex finds the leading dash and any number of spaces following it, 
    // then replaces them with nothing, leaving just the text.
    const itemText = line.replace(/^-\s+/, '');
    return `<li>${itemText}</li>`;
  });

  // 3. Join all <li> strings together and wrap them in <ul> tags
  return `<ul>${listItems.join('')}</ul>`;
}

// Testing
console.log(parseUnorderedList("- Item A\n- Item B"))
console.log(parseUnorderedList("-  JavaScript\n-  Python"))
console.log(parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla"))
console.log(parseUnorderedList("- A-1\n- A-2\n- B-1"))