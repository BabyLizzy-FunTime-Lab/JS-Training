function foo(text) {
    let result = [];
    for (word of text.split(" ")) {
        result.push(word[0].toUpperCase() + word.substr(1));
    }
    return result.join(" ");
}

function bar(text) {
  let result = "";
  let wordIndex = 0;

  while (true) {
    let nextIndex = text.indexOf(" ", wordIndex);

    result += text[wordIndex].toUpperCase();

    if (nextIndex === -1) {
      result += text.substr(wordIndex + 1);
      break;
    }
    else {
      result += text.substr(wordIndex + 1, nextIndex - (wordIndex + 1)) + " ";
    }

    wordIndex = nextIndex + 1;
  }

  return result;
}