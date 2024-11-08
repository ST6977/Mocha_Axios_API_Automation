const generateRandomId = (min,max) => {
    let randomId = Math.random()*(max-min)+min
    return parseInt(randomId)
}
export default generateRandomId;

const rand = generateRandomId(1000 ,9999)
console.log(rand);