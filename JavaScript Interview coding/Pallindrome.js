// Enter a String this will tell wheather they are same while reading forward and backward;

function pal(str) {
  const arr = str.split("");
  const original = [...arr];
  const temp = arr.reverse();

  for (i = 0; i < temp.length; i++) {
    if (temp[i] == original[i]) {
      continue;
    } else {
      return console.log("Non pallindrome");
    }
  }
  return console.log("Pallindrome");
}
pal("lol");
