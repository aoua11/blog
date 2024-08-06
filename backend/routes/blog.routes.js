const Router  = require('express');
const blogcontroller = require('../controllers/blog.controller');
const errorhandller = require('../middlewars/errorHandler');
const validator = require('../middlewars/validator.middlewar');
const validation = require('../validation/blog.validation');
const multer = require('multer');
const objectIdMiddleware = require('../middlewars/objectId.middleware');
const errorHandler = require('../middlewars/errorHandler');
const upload  = multer({dest : 'public/uploads/'});

const router = Router();


router.get('/blog', errorhandller(blogcontroller.index));
router.post('/blog', upload.single('image'), validator(validation.store) , errorhandller(blogcontroller.store));
router.get('/blog/:id' ,  objectIdMiddleware , errorhandller (blogcontroller.show));
router.put('blog:/id' , objectIdMiddleware , upload.single("image") , validator(validation.store) , errorHandler(blogcontroller.store) )
router.delete('blog/:id' , objectIdMiddleware , errorHandler(blogcontroller.delete))





module.exports = router ;