function removeDuplicateWords(s) {
    let set = new Set(s.split(' '))
    return [...set].join(' ')
}

const str = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
console.log(removeDuplicateWords(str));