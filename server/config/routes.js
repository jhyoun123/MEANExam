const questions = require('../controllers/questions.js')

module.exports = function(app) {
    app.post("/login", questions.login)
    app.post("/add_question", questions.add_question)
    app.get("/make_test", questions.make_test)
    app.get("/get_logged_in", questions.get_logged)
    app.get("/logout", questions.logout)
    app.post("/add_test", questions.add_test)
    app.get("/get_tests", questions.get_tests)
}