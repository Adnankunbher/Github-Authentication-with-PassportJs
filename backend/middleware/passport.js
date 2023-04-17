require('dotenv').config()
var passport=require('passport');
var GoogleStrategy=require('passport-google-oauth20');
// var GitHubStrategy=require('passport-github2').Strategy
var User=require('../models/passportUser-model')



// passport.serializeUser((user,done)=>{
//   done(null, {id: user.id, username: user.username})
// })

// passport.deserializeUser((id,done)=>{
//   User.findById(id).then((user)=>{
//     done(null,user)
//   })
// })

//   passport.use(new GitHubStrategy({
//     clientID: process.env['GITHUB_CLIENT_ID'],
//     clientSecret: process.env['GITHUB_CLIENT_SECRET'],
//     callbackURL: "/auth/github/callback"
//   },
//   (accessToken,refreshToken,profile,done)=>{
//     User.findOne({githubId:profile.id}).then((currentUser)=>{
//       if (currentUser){
//         console.log("User is ",currentUser)
//         done(null,currentUser)
//       }
//       else{
//         const user= new User({
//           username: profile.username,
//           name: profile.displayName,
//           githubId: profile.id,
//           avatar: profile._json.avatar_url
//         }).save().then((newUser)=>{
//           console.log("New User is created: ",newUser)
//           done(null, newUser)
//         })
//       }
//     })   
//   }
// ));



// passport.serializeUser((user,done)=>{
//   done(null, user.id)
// })

// passport.deserializeUser((id,done)=>{
//   User.findById(id).then((user)=>{
//     done(null,user)
//   })
// })
  // passport.serializeUser(function(user, cb) {
  //   process.nextTick(function() {
  //     cb(null, { id: user.id });
  //   });
  // });
  
  // passport.deserializeUser(function(user, cb) {
  //   process.nextTick(function() {
  //     return cb(null, user);
  //   });
  // });



  passport.serializeUser((user,done)=>{
    done(null, {id: user.id, username: user.username})
  })
  
  passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
      done(null,user)
    })
  })
  
    passport.use(new GoogleStrategy({
      clientID: process.env['GOOGLE_ID'],
      clientSecret: process.env['GOOGLE_SECRET'],
      callbackURL: "/auth/google/callback"
    },
    (accessToken,refreshToken,profile,done)=>{
      console.log(profile)
      User.findOne({GoogleId:profile.id}).then((currentUser)=>{
        if (currentUser){
          console.log("User is ",currentUser)
          done(null,currentUser)
        }
        else{
          const user= new User({
            username: profile.username,
            name: profile.displayName,
            GoogleId: profile.id,
            avatar: profile._json.picture
          }).save().then((newUser)=>{
            console.log("New User is created: ",newUser)
            done(null, newUser)
          })
        }
      })   
    }
  ));
  