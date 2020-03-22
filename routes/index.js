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
        res.render('index');
    });
}
// module.exports = routes;