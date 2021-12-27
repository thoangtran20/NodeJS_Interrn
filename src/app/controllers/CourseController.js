class CourseController {
    
    // [GET] /course  
    index(req, res) {
        res.render('pages/course');
    }

    // [GET] /course/:slug
    show() {
        res.send('COURSE DETAIL')
    }
}

module.exports = new CourseController;
