const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-US", dateOptions)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-US", dateOptions)
  }
];



var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages: messages});
});


router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add a new message'})
})


router.post('/new', function(req, res, next) {
  const messageText = req.body.message
  const messageUser = req.body.author
  messages.push({text: messageText, user: messageUser, added: new Date().toLocaleDateString("en-US", dateOptions)});
  res.redirect('/')
})

module.exports = router;
