const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utilities/mongoose')

class SiteController {
    
    // [GET] /  
    index(req, res ,next) {
        Course.find({})
            .then(courses => {
                res.render('pages/home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next); // error chạy và lưu thẳng trong next
            
        // res.render('pages/home');

        const course = {
            name: 'JS'
        };
    }

    // [GET] /contact
    contact(req, res) {
        res.render('pages/contact');
    }
}

module.exports = new SiteController;

// const HomeController