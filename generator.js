let path = require("path");

let fs = require("fs");


let dir = "201905"

let fileUrl = `/docs/daily/${dir}`

const writeFileRecursive = function(path, buffer, callback){
    let lastPath = path.substring(0, path.lastIndexOf("/"));
    fs.mkdir(lastPath, {recursive: true}, (err) => {
        if (err) return callback(err);
        fs.writeFile(path, buffer, function(err){
            if (err) return callback(err);
            return callback(null);
        });
    });
}

const writeFiles = function (month) {
    for (var i = 1; i < 31; i++) {
        i < 10 ? i = `0${i}` : null;
        writeFileRecursive(`./docs/daily/${month}/day${i}.md`, '你好', function (error) {
            if (error) {
                console.log(error);
                return false;
            }
            console.log('写入成功');
        })
    }
}

/*
*
{ title: '03', path:'201904/day3'},
*
*/

const getTpl = (y, m, d) => `{ title: 'day${d}', path:'${y}${m}/day${d}'},`

const getJson = function(y, m){

    for (var i = 1; i < 31; i++) {
        i < 10 ? i = `0${i}` : null;
        console.log(getTpl(y, m, i))
    }

}

const rename = function(month){
    for (var i = 1; i < 30; i++) {
        fs.rename(`./docs/daily/${month}/day${i}.html`, `./docs/daily/${month}/day${i}.md`, function (error) {
            if (error) {
                console.log(error);
                return false;
            }
            console.log('修改名字成功');
        })
    }
}

// 写文件
 writeFiles('201909');

//获json
  getJson('2019', '09')


// rename('201906')
