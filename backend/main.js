/*-------packges---------*/
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


/*--------middlewears imports----------*/
const notFoundMiddleware = require('./middlewars/notFound.middleware');





/* ----- App Initialization ----- */
const app = express();
dotenv.config();


/* ----- Global Middlewares ----- */
app.use(express.json());
app.use(cors());
app.use("/public" , express.static("./public"))


/*-------routes import----------*/
const blogroutes = require('./routes/blog.routes');
const errorMiddleware = require('./middlewars/error.middleware');



/* ----- Routes User ----- */
app.use(blogroutes);



/*--------error middlewears ------*/
app.use(notFoundMiddleware);
app.use(errorMiddleware)



/*--------start finction --------*/
mongoose.connect(`mongodb://${process.env.DB_URI}/${process.env.DB_NAME}`)
.then(()=>{
    console.log('conected')
    app.listen(8000,()=>{
        console.log('http://localhost:8000');
    })
}).catch((err)=>{
    console.log(err)
});



















