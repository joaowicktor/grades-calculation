const { google } = require('googleapis');
const logger = require('./utils/logger');
const credentials = require('./config/credentials.json');

class Auth {
  constructor() {
    try {
      logger.log('Authenticating with Google Sheets API...');
      this.jwt = new google.auth.JWT(credentials.client_email, null, credentials.private_key, ['https://www.googleapis.com/auth/spreadsheets']);
      logger.log('Authenticated');
    } catch (err) {
      logger.log('Error while trying to authenticate: ' + err)
    }
  }
}


module.exports = new Auth();