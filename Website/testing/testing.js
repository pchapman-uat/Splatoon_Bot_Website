const splatoon3api = require("splatoon3api");
const Splatoon3 = new splatoon3api.Client("en-GB");

function splatoontest(){
    Splatoon3.getStages(res => {
        console.log(res);
      });
}
exports.splatoontest = splatoontest;