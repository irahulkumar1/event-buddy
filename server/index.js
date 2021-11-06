const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

const session = require('express-session')
const passport = require('passport');
// const MongoDBStore = require('connect-mongodb-session')(session);


//for session auth
// const store = new MongoDBStore({
//   uri: config.DB_URI,
//   collecton: 'eventSessions',
// })
// // (err) => console.log(err))
// store.on('error', (error) => console.log(error))

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


//for session auth
// app.use(session({
//   secret: config.SESSION_SECRET,
//   cookie: {
//     maxAge: 3600000
//   },
//   resave: false,
//   saveUninitialized: false,
//   store
// }
// ))
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/v1/events', eventsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/threads', threadsRoutes);
app.use('/api/v1/categories', categoriesRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log('App is running on port: ' + PORT);
});
