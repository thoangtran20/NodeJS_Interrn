class SiteController {
    
    // [GET] /  
    index(req, res) {
        res.render('pages/home');
    }

    // [GET] /contact
    contact(req, res) {
        res.send('pages/contact');
    }
}

module.exports = new SiteController;

// const HomeController