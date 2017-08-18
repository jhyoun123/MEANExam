var mongoose = require('mongoose')
var random = require('mongoose-random');
var Question = mongoose.model('Question') 
var Test = mongoose.model('Test')

module.exports = {
    add_question: (req, res) => {
        console.log(req.body)
        let new_question = new Question(req.body)
        new_question.save()
            .then(() => {
                console.log("new question has been added")
                res.json(true)
            })
            .catch(err => {
                console.log("Question create error", err)
                res.status(500).json(err)
            })
    },
    login: (req,res) => {
        console.log(req.body)
        req.session.name = req.body.name
        req.session.complete = false
        console.log(req.session.name)
        res.json(true)
    },

    make_test: (req,res) => {
        Question.findRandom().limit(3).exec(function (err, questions) {
            if(err) {
                console.log(err)
	 			res.status(500).json(err)
            } else {
                res.json(questions)
            }
        });
    },

    get_logged: (req,res) => {
        if(req.session.name){
			res.json(req.session.name)
		} else {
			res.status(500).json(false)
		}
    },

    logout: (req, res) => {
        console.log("logout works")
		req.session.destroy()
		res.json(true)
    },
    
    add_test: (req, res) => {
        console.log(req.body)
        let new_test = new Test(req.body)
        new_test.save()
            .then(() => {
                console.log("new test has been added")
                req.session.complete = true
                res.json(true)
            })
            .catch(err => {
                console.log("Test create error", err)
                res.status(500).json(err)
            })
    },

    get_tests: (req, res) => {
        Test.find()
			.then(tests => res.json(tests))
			.catch(err => {
				console.log("tests find all error", err)
				res.status(500).json(err)
			})
    },
    

}