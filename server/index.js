const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const session = require('express-session')
const passport = require('passport');
const path = require('path')


require("./models/events");
require("./models/users");
require("./models/threads");
require("./models/posts");
require("./models/categories");
require("./passport/passport")

const eventsRoutes = require('./routes/events'),
  usersRoutes = require('./routes/users'),
  threadsRoutes = require('./routes/threads'),
  postsRoutes = require('./routes/posts'),
  categoriesRoutes = require('./routes/categories');

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch(errors => console.log(errors));

const app = express();

app.use(bodyParser.json());


app.use('/api/v1/events', eventsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/threads', threadsRoutes);
app.use('/api/v1/categories', categoriesRoutes);

// if (process.env.NODE_ENV === 'production') {
const appPath = path.join(__dirname, '..', 'dist');
app.use(express.static(appPath));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(appPath, 'index.html'))
})
// }


const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('App is running on port: ' + PORT);
});
