
// Router HTTP / HTTPS
let mobile = require('is-mobile');
let bank   = require('./routes/bank');
module.exports = function(app, redT) {
	// Home
	app.get('/', function(req, res) {
		if (mobile({ua:req})){
			return res.redirect('/mobile/');
		} else {
			return res.redirect('/index.html/');
		}
	});
	app.get('/', function(req, res) {
		if (mobile({ua:req})){
			return res.redirect('/mobile/');
		} else {
			return res.render('index.html');
		}
	});
	app.get('/', function(req, res) {
		if (mobile({ua:req})){
			return res.render('index_mobile');
		} else {
			return res.redirect('/index.html/');
		}
	});

	// Android
	app.get('/download/android', function(req, res) {
		return res.render('download/android');
	});

	// Admin
	app.get('/68ClubA/', function(req, res) {
		return res.render('admin');
	});

	// Fanpage
	app.get('/fanpage/', function(req, res) {
		return require('./routes/fanpage/redirect')(res);
	});

	// Help IOS
	app.get('/help/ios/', function(req, res) {
		return res.render('help/ios');
	});

	//Telegram
	app.get('/telegram/', function(req, res) {
		return require('./routes/telegram/redirect')(res);
	});
	
	app.post('/tst/8416E5A1F233D440D5BE40CE52B4B029', function(req, res) {
        return require('./app/Controllers/shop/nap_the_callback')(req,res);
    });


    app.post('/momo/163851122514152a21d4883107821be9bbae5820', function(req, res) {
        return require('./app/Controllers/shop/momocallback')(req,res);
    });

    app.get('/088dcf626ca3f3b95d9751a259718800', function(req, res) {
        return require('./app/Controllers/shop/bankcallback')(req,res);
    });
	app.post('/bank/16385112144e1d68d1fe3e96792e7ba891853e24', function(req, res) {
        return require('./app/Controllers/shop/autocallback')(req,res);
    });

	// Sign API
	require('./routes/api')(app, redT);  // load routes API
};
