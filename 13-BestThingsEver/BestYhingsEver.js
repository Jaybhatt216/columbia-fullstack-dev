const fs = require('fs');

fs.readFile('unsolved/best_things_ever.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);
    for(var i =0; i <dataArr.length; i++);
    console.log(dataArr[i]);
  });
  