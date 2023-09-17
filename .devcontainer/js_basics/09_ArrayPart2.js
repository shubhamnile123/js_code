const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// const allHeros = marvel_heros.concat(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = [...marvel_heros,...dc_heros]

console.log(allHeros);


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray);





