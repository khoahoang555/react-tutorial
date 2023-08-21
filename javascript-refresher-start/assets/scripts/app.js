/** Section 17: Import & export
// import { apiKey } from "./util.js";
// console.log(apiKey)

// import apiKey from "./util.js";
// import { api1, api2 } from "./util.js";
// console.log(apiKey);
// console.log(api1);
// console.log(api2);

// import * as util from "./util.js";
// console.log(util.default);
// console.log(util.api1);
// console.log(util.api2);

// import { api1 as alias } from "./util.js";
// console.log(alias);
 **/

const [firstName, lastName] = ["Khoa", "Pham"];
const {name: userName, age} = {
    name: "Khoa",
    age: 22
}
console.log(userName);
console.log(age);