// console.log("hellow word");
// console.log(global);
// const os=require('os');
//
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname)
// console.log(__filename)

const path=require("path")

console.log(path.dirname(__filename))

// const math=require("./math")  mmeme facon
const {add}=require("./math")
console.log(add(5,8))
