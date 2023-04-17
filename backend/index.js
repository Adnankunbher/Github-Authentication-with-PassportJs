require('dotenv').config();
const passport_setup= require('./middleware/passport')
var express = require('express');
var path=require('path')
var authRouter=require('./routes/auth')
var todoRouter=require('./routes/todo')
var passport=require('passport')
var mongoose=require('mongoose')
var cors=require('cors')
var cookieSession=require('cookie-session')
var session=require('express-session');


// // var indexRouter = require('./routes/index');
// var authRouter= require('./passport');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  name:'session',
  secret: 'Adnanali123',
  resave: true,
  saveUninitialized: true,
  cookieSession: {
    secure: false,
    maxAge: 24*60*60*100
  }
  
}));

// app.use(cookieSession({
//   name:'session',
//   keys:['adnan'],
//   maxAge: 24*60*60*100
// }))
app.use(passport.authenticate('session'));
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
  origin:"http://localhost:3000",
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}
))

try{
  mongoose.connect('mongodb://127.0.0.1:27017/final_project',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
  })
  console.log('Connected to MongoDB')
}
catch(error){
  handleError(error)
}
process.on('unhandleRejection',(error)=>{
  console.log('unhandleRection', error.message)
})


// // app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/todo', todoRouter)



app.get('/',(req,res)=>{
  res.send('HOME')
})

app.listen(3001,function(){
  console.log("server is at 3001")
})