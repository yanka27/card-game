class UserController {
    // Renders the login page
    getLoginPage(req, res) {
      res.sendFile('login.html', { root: 'views' });
    }
  
    // Renders the registration page
    getRegisterPage(req, res) {
      res.sendFile('registration.html', { root: 'views' });
    }
  
    // // Renders the forgot password page
    // getReminderPage(req, res) {
    //   res.sendFile('forgot_password.html', { root: 'views' });
    // }

    getMainPage(req, res) {
        console.log("Request session object: ", req.session)
        res.render('main', { user: req.session.user});
    }

    get404Page(req, res) {
      res.sendFile('404.html', {root: 'views'})
    }

  }
  
  module.exports = new UserController();
  
