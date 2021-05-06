const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    //checks file upload
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    //saves image object to MySQL database
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      //data is retrieved from uploads folder (where the middleware function stored the image)
      data: fs.readFileSync(
        __basedir + "/assets/uploads/" + req.file.filename
      ),
    }).then((image) => {
      //save write the image data to tmp folder
      fs.writeFileSync(
        __basedir + "/assets/tmp/" + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying to upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};