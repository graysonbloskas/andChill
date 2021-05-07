//imports multer model
const multer = require("multer");

//defines filter to allow images to pass
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

//configures multer to use Disk Storage engine
var storage = multer.diskStorage({
  //determines folder to store updated files
  destination: (req, file, cb) => {
    cb(null, __basedir + "/assets/uploads/");
  },
  //determines the name of the file inside the destination folder
  filename: (req, file, cb) => {
    //add username from user model when refactoring
    //timestamp and username prefixes added to original filename to make sure duplicates never occur
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;