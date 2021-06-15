module.exports = app => {
    const ref = require("../controllers/ref.controller.js");
  
    var router = require("express").Router();
    
    router.get("/", ref.findAll);
  
    app.use('/api/ref', router);
  };