function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == 'needle') return i;
    }
}

haystack = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
console.log(findNeedle(haystack));