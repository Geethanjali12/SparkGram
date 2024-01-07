const Auth = require('../models/AuthModal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const jwtSecretKey = process.env.JWT_SECRET;

const authController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await Auth.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    status_code: 400,
                    status: false,
                    error: 'Email not found'
                });
            }
        } catch (error) {
            
        }
    }
}