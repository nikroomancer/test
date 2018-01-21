const fakeData = require('../data/fakeSalonData.js');
module.exports = app => {
  app.get('/api/list', (req, res) => {
    res.send(fakeData);
  });
};
