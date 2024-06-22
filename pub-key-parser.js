const fs = require('fs');
const { parse } = require('path');

if (process.argv.length != 3) {
    console.log("Expecting a file name");
    return;
}

var deposit_data_file_name = process.argv[2];
console.log("Processing file: " + deposit_data_file_name + " ...");

let rawdata = fs.readFileSync(deposit_data_file_name);
let parsed_deposit_data = JSON.parse(rawdata);

// for (const pubkey in deposit_data) {
//     if(deposit_data.hasOwnProperty(pubkey)){
//         console.log(`${pubkey} : ${deposit_data[pubkey].value}`);
//       }

console.log("Total number of validators: " + parsed_deposit_data.length);
console.log("----------------------");
for (var index in parsed_deposit_data) {
    console.log(parsed_deposit_data[index].pubkey);
}



    
