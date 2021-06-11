const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(app.get('port'), function() {
  console.log('listening on port ', process.env.PORT || 8080);
});