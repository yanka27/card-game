const User = require('./../models/user.js');

class AuthController {
    static async register(req, res) {
        const { login, fullName, email, password, confirmPassword } = req.body;

        // Validate form data and check passwords match
        if (password !== confirmPassword) {
            return res.status(400).send('Passwords do not match!');
        }

        const user = new User({ login, full_name: fullName, email, password });
        await user.save();
        req.session.user = user.attributes;
        res.redirect('/main');
    }

    static async login(req, res) {
        const { login, password } = req.body;
        const userModel = new User();
        const user = await userModel.findByCredentials(login, password);  // Find user method
        // console.log("")
        if (!user) {
            return res.status(401).send('Invalid login or password!');
        }

        req.session.user = user;
        res.redirect('/main');
    }

    static logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Failed to logout');
            }
            res.redirect('/');
        });
    }

    // static async passwordReminder(req, res) {
    //     const { email } = req.body;
    //     const user = await User.findByEmail(email);  // Custom method to find user by email
    //     if (!user) {
    //         return res.status(404).send('User not found!');
    //     }

    //     // Logic to send email with the password or a password reset link
    //     res.send('Password reminder sent to your email.');
    // }
}

module.exports = AuthController;
