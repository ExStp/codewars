function findShort(s){
    return (s.split(' ')).sort((a,b) => a.length - b.length)[0].length;
}

let str = "bitcoin take o the world maybe who knows perhaps";
console.log(findShort(str))