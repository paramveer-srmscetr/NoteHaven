const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchuser=require('../middleware/fetchuser')
const JWT_SECRET = "IshuIsGoodBoy";

//create the user
router.post(
  "/createuser",
  [
    body("name", "enter a valid name").not().isEmpty(),
    body("name", "enter the name at least 3 char").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "Password should be strict").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({ error: "Email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        // create the new user
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      //fetch the id of the user
      const data = {
        user: {
          id: user.id,
        },
      };
      //generate the user token for helping to not logging again and again
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ user, authToken });
      //res.json({user})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);


//Authentication user using Post "api/auth/login" login required

router.post('/login',[
    body("email", "enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
    
], async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
const {email,password}=req.body;
try {
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: "Please try to login with correct credentials"})
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        return res.status(400).json({ error: "Please try to login with correct credentials"})
    }  
    const data={
        user:{
            id:user.id
        }
    }  
    const authToken=jwt.sign(data,JWT_SECRET);
    res.json({user,authToken});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");

    }
})

// Route-3  get loggedin user details using : post--/api/auth/getuser----login required
 router.post('/getuser',fetchuser, async(req,res)=>{
  try {
      userid=req.user.id;
      const user=await User.findById(userid).select("-password");
    res.send(user)
    }
      catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");
        }
    
 })

module.exports = router;
