var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/availableMatches', function(req, res, next) {
  // get availableMatches by controller
  res.send({
    data: {
      availableMatches: []
    }
  });
});

router.get('/t1', (req, res, next) => {
  res.send(401);
});


module.exports = router;
