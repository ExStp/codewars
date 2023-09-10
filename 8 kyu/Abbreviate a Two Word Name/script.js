function abbrevName(name){
    let space = name.indexOf(' ');
    return `${name[0].toUpperCase()}.${name[++space].toUpperCase()}`;
}

console.log(abbrevName('andrey ryov'));