let str = "andreya";

function getCount(str) {
    const vowels = ['a','e','i','o','u'];
    const arr = str.split('');
    let vowelCounter = 0

    for (let i = 0; i < arr.length; i++) {
        vowels.forEach(vowel => {
            if (arr[i] == vowel) vowelCounter++;
        })
    }

    return vowelCounter;
}

function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    const array = str.split("");
    let vowelCounter = 0;

    array.forEach(word => {
        if (vowels.includes(word)) vowelCounter++
    });

    return vowelCounter;
}

console.log(getCount(str));
