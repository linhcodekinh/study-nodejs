const res = require("express/lib/response")

class SiteController {

    // GET /news
    index(req, res) {
        res.render('home')
    }


    // [GET] /news/:slug
    contact() {
        res.send('contact');
    }
}

module.exports = new SiteController