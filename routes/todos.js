let express = require('express');
let router = express.Router();

const todos = [
  { text: 'task a', complete: true },
  { text: 'task b', complete: false },
  { text: 'task c', complete: false },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(todos);
});

module.exports = router;
