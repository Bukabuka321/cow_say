const cowSay = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${cowSay.userName} and I study in ${cowSay.campusName}`,
    e : "oO",
    T : "U "
}));