console.log('starting App.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js'); //this is gonna save everything on exports property

var filter = _.uniq(['Vale']);
console.log(filter);
//console.log('Result:', notes.add(9, 10));
/*
var user = os.userInfo();

fs.appendFile('greetings.txt', 'Hi '+ user.username + ' , I know you are ' + notes.age + ' but this is my first App', function(err){
  if(err){
    console.log('Unable to write to file');
  }
});
*/
