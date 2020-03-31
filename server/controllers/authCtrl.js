bcrypt = require("bcryptjs");


module.exports = {
   register: async(req, res) => {
      const {email, password} = req.body,
            db = req.app.get("db");

      let foundUser = await db.auth.check_users(email)
      if (foundUser[0]){
         return res.status(400).send("Email already in use")
      }
      let salt =bcrypt.genSaltSync(10),
          hash = bcrypt.hashSync(password, salt),
          nuevoUser = await db.auth.register_user(email, hash)
          
          req.session.user = nuevoUser[0];
          res.status(201).send(req.session.user);
   },
   login: async (req, res) => {
      const {email, password} = req.body,
            db = req.app.get("db");

      let foundUser = await db.auth.check_users(email)
      if (!foundUser[0]){
         return res.status(400).send("Account doesn't exist")
   }
      const authenticated = bcrypt.compareSync(password, foundUser[0].password);

      if(!authenticated){
         return res.status(400).send("passowrd is incorrect")
      }
      delete foundUser[0].password;
      req.session.user = foundUser[0];
      console.log(req.session.user);
      res.status(202).send(req.session.user)
   },

   logout: (req, res) => {
      req.session.destroy();
      console.log(req.session);
      res.sendStatus(200);
   }
}