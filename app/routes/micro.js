module.exports = app => {
    const ref = require("../controllers/ref.controller.js");
  
    var router = require("express").Router();
    
    router.get("/", ref.findAll);
    router.post("/create", ref.validate('createRef'), ref.create);
  
    app.use('/api/ref', router);
  };