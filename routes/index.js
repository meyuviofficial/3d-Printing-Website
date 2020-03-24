var model = require('../model/user');
module.exports = function(app,passport)
{

    app.get('/', function (req, res) {
        res.render('index')
    })
    app.get('/3D-Printers', function (req, res) {
        res.render('Printers')
    })
    app.get('/3D-Printing-Services', function (req, res) {
        res.render('Printing_Services')
    })
    app.get('/Filaments', function (req, res) {
        res.render('filaments')
    })
    console.log("hey Yuvi !! I'm from indexx.js");
    app.get('/login',function(req,res)
    {
        res.render('login')
    });
    app.get('/signup',function(req,res)
    {
        res.render('signup');
    });
    app.post('/signup',function(req,res)
    {
        let userinfo = new model (
            {
                FirstName : req.body.FirstName,
                LastName : req.body.LastName,
                Email : req.body.Email,
                Password : req.body.Password,
                PhoneNo : req.body.PhoneNo
            }
            
            );
            
            userinfo.save(function (err)
            {
                if(err)
                {
                    return next(err);
                }
                res.send (req.body);
            });
            // res.send(req.body);
    });
    // app.post('/signup', passport.authenticate('local-signup', {
        
        
        
    //     successRedirect: '/profile', // redirect to the secure profile section
    //     failureRedirect: '/signup', // redirect back to the signup page if there is an error
    //     // failureFlash: true // allow flash messages
    // })); 
    app.get('/profile',function(req,res)
    {
        res.send("Success signup");
    });
}
// module.exports = routes;