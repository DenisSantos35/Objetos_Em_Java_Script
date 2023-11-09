const read = require("./cliente.json")
console.log(read)

console.log(typeof read)

const clienteEmString = JSON.stringify(read);

console.log(clienteEmString);

console.log(typeof clienteEmString)

const cleinteEmObject = JSON.parse(clienteEmString)

console.log(cleinteEmObject)