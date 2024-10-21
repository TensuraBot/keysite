const Key = require('../models/Key');

exports.manageKeys = async (req, res) => {
    if (!req.session.userId) return res.redirect('/auth/login');
    const keys = await Key.find();
    res.render('manageKeys', { keys });
};

exports.addKey = async (req, res) => {
    if (!req.session.userId) return res.redirect('/auth/login');
    const { keyValue } = req.body;
    const key = new Key({ keyValue });
    await key.save();
    res.redirect('/keys/manage');
};
