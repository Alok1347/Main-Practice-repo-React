//Convert Underscore variable name to camelCase
// input= alok_singh_developer => alokSinghDeveloper

let result = [];

function converter(input) {
  result = input.split("_");

  const temp = result.map(
    (el) => el.slice(0, 1).toUpperCase() + el.slice(1, el.length)
  );

  const res = temp.join("");
  return res.replace(res.charAt(0), res.charAt(0).toLowerCase());
}

console.log(converter("my_new_array"));
console.log(converter("alok_singh_developer"));
