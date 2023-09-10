// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    let new_x = '';
    for (let i = -1; i < x.length; ++i) {
        if (x[i] < 5) {
            new_x += '0';
        }   else if (x[i] >= 5) {
            new_x += '1';
        }
    }
    return new_x;
}

console.log(fakeBin('509321967506747'));