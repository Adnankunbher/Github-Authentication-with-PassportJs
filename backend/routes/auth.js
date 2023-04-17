const router=require('express').Router();
const passport=require('passport'); 
var {signup,signin}=require('../middleware/user')
const PassportSetup=require('../models/passportUser-model')

const CLIENT_URL='http://localhost:3000/'

// Login URLs
router.get('/login',(req,res)=>{
    res.redirect(CLIENT_URL+'login')
})

router.post('/signup', signup,(req,res)=>{
    res.send(res.json())
})
router.post('/signin', signin,function(req,res){
    res.send(res.json)
})

router.get("/login/success", async (req, res) => {
    try {
      // Query the database for the user document by their githubId
      const googleid= '100274175143905847582'
      //const user = await User.findOne({ githubId: req.user.githubId });
       const user = await PassportSetup.findOne({GoogleId:googleid});

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found in database"
        });
      }
  
      // If the user document is found, return it as a response
      res.status(200).json({
        success: true,
        message: "Success",
        user: user
      });
    } catch (err) {
      // If an error occurs during the database query, return an error response
      res.status(500).json({
        success: false,
        message: "Error retrieving user data",
        error: err.message
      });
    }
  });

router.get('login/failure',(req,res)=>{
    res.status(404).json({
        success: false,
        msg: 'LOGGEN FAILED'
    })
})


// logout URL
router.get("/logout", (req, res) => {
  req.session.destroy(function(err) {
if(err) {
  console.log(err);
  return next(err)
}  
  res.redirect(CLIENT_URL+'login');

});
});



router.get('/google',
  passport.authenticate('google', { scope: [ 'profile' ] }));

router.get('/google/callback', 
  passport.authenticate('google',{
    successRedirect: CLIENT_URL+'dashboard',
    failureRedirect: '/login/failure'
  }));


module.exports=router