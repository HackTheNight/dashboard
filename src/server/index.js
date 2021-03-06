const express = require('express');
const os = require('os');
const TeamController = require('./controller/TeamController');

const app = express();

app.use(express.static('dist'));
app.use('/api/team', TeamController);
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
