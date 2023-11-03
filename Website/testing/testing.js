const splatoon3api = require("splatoon3api");
const Splatoon3 = new splatoon3api.Client("en-GB");
// https://github.com/KartoffelChipss/splatoon3api

// This gets converted to bundle.js to allow node.js packages to work on the web.


// npm install splatoon3api --save-dev
// npm install browserify --save-dev

// To create bundle.js
// npx browserify [original].js --standalone [App Name] > bundle.js


function splatoontest(){
    Splatoon3.getStages(res => {
        console.log(res);
      });
}

// This must be added to allow for functions to be called outside browserify
// To call the function you must do [App Name].[function]()
exports.splatoontest = splatoontest;