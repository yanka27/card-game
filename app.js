const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const isAuthenticated = require('./middleware/isAuthenticated')
// const errorController = require('./controllers/errorController');
const app = express();
app.set('views', 'views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(express.static(__dirname + '/public'));
app.set('trust proxy');
// config views =============================================
app.set('views', '.') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(express.urlencoded({ extended: true }));
app.use(session({secret: "mysecret"}));

app.use((req, res, next) => {
    isAuthenticated(req, res, next);  // Apply the isAuthenticated middleware to all other routes
});

// Routes
app.use('/', authRoutes);
app.use('/', userRoutes);

// 404 error handling
// app.use(errorController.get404Page);

// Start the server
app.listen(3234, () => {
    console.log("Server is running on port 3234");
});
