const res = require("express/lib/response")

class NewsController {

    // GET /news
    index(req, res) {
        res.render('news')
    }


    // [GET] /news/:slug
    show() {
        res.send('slug');
    }
}

module.exports = new NewsController