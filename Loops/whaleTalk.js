let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] == vowels[j]) {
            if (vowels[j] === 'u' || vowels[j] === 'e') {
                resultArray.push(vowels[j]);
            }
            resultArray.push(vowels[j]);
        }
    }
}

let resultString = resultArray.join('').toUpperCase();
console.log(resultString);

