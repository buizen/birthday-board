import { Router } from "express";
import multer from "multer";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const path = require('path');
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


var uploadPath = path.join(__dirname, '../utils/uploads')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random()* 1E9);
      cb(null, uniquePrefix + '-' + file.originalname);
    }
});

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images only! (jpeg, jpg, png, gif)');
  }
}


const upload = multer({ 
  storage: storage,
  limits: { fileSize: 4000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  } 
});
  
const router = Router();

router.get('/api/posts', (request, response) => {
      var x = path.join(__dirname, '../utils/data/name.json')
      //read the name.json file
      fs.readFile(x,'utf8', function readFileCallback(err, data){
      if (err){
        console.log(err); 
      } else {  
      
        var obj = {
          table: []
        };
        obj = JSON.parse(data); //now it an object
        //response.status(201).send({ obj });
        res.status(204).redirect('https://www.google.com/')
      
    }}
      
    )});

router.get('/api/images/:id', (req, res) => {
  //console.log(req.params);
  let fileName = req.params.id;
  const options = {
    root: path.join(__dirname, '../utils/uploads')
  };
  
  //console.log(options);
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('Sent:', fileName);
    }
  });
  
  res.status(201);
});




var fs = require('fs');
router.post('/api/uploadFile', upload.single('avatar'), (req, res) => {
    //read the name.json file
    var x = path.join(__dirname, '../utils/data/name.json');
    fs.readFile(x,'utf8', function readFileCallback(err, data){
      if (err){
        console.log(err); 
    } else {
      var obj = {
        table: []
      };
      let nameData = req.body.name;
      let messageData = req.body.message;
      let fileName = req.file.filename;
      obj = JSON.parse(data); //now an object
      let nextId = 0;
      let lastPlace = 0;
      //making the next id
      if (obj.table.length ==  0) {
        nextId = 1;
      } else {
        lastPlace = obj.table.length - 1;
        nextId = obj.table[lastPlace].id + 1
      }
      obj.table.push({id: nextId, name: nameData, message: messageData, filename: fileName}); //add some data
      var json = JSON.stringify(obj); //convert it back to json
      fs.writeFile(x, json, function(err) {
              if (err) throw err;
                console.log('complete'); // write it back 
              })
            
    }});    
    res.status(204).redirect('https://www.google.com/')
  });



export default router;
