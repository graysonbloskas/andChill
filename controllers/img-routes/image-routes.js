const express = require("express");
const router = express.Router();
const uploadController = require("../image-upload");
const upload = require("../../middleware/img.upload");

let routes = (app) => {
  //home page for the upload form
  router.get("/signupimg", async (req, res) => {
    res.render('image-upload', {layout: "main.handlebars"})
});
  
  // "/upload" to call the upload controller
  // this is for 'action="/upload"' in the view
  // the single() function will store the single file in req.file 
  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  return app.use("/", router);
};

module.exports = routes;