const router = require('express').Router()
const multer = require('multer')

var storage = multer.diskStorage({
    destination:function(req,res,next){
        next(null,"./new_file");
    },
    filename:function(req,file,next){
        next(null,file.originalname);
    },
});

const upload = multer({storage:storage});

router.post('/read',upload.single("path"),(req,res)=>{
res.send("file save successfully..")
})

module.exports=router