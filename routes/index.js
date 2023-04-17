var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//  visual studio route
router.get('/vsCode', function (req, res) {
  var filesDup = [];
  fs.readdir('./upload', { withFileTypes: true }, function (err, files) {
    // console.log(files);
    files.forEach(function(file){
      filesDup.push({fileName:file.name,isFolder:file.isDirectory()});
    });
    res.render('vsCode', { files: filesDup });
  });
});
//  form with file create rout 
router.post('/fileCreate', function (req, res) {
  var filesDup = [];
  fs.writeFileSync('./upload/' + req.body.fileName, '');
  fs.readdir('./upload', { withFileTypes: true }, function (err, files) {
    console.log(files);
    files.forEach(function(file){
      filesDup.push({fileName:file.name,isFolder:file.isDirectory()});
    });
    res.render('vsCode', { file: filesDup });
  });
});
//  form with folder create route 
router.post('/folderCreate', function (req, res) {
  var filesDup = [];
  fs.mkdirSync('./upload/' + req.body.folderName);
  fs.readdir('./upload', { withFileTypes: true }, function (err, files) {
    files.forEach(function(file){
      filesDup.push({fileName:file.name,isFolder:file.isDirectory()});
    });
    res.render('vsCode', { file: filesDup });
  });
});

module.exports = router;