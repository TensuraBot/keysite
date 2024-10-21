const User = require('../models/User');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        req.session.userId = user._id;
        res.redirect('/keys/manage');
    } else {
        res.redirect('/auth/login?error=Invalid credentials');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
};
