const express = require('express');
const { sendEmail } = require('./emailRoutes');

const emailRouter = express.Router();

emailRouter.route('/mail')
  .post(sendEmail);

module.exports = emailRouter;