const { google } = require('googleapis');
const { jwt } = require('./auth');
const logger = require("./utils/logger");

class Sheets {
  constructor() {
    this.spreadsheetId = process.argv[2];
    this.defaultSheetRange = 'engenharia_de_software!A1:H';
    this.sheetsService = google.sheets({ version: 'v4', auth: jwt });
  }

  async getRows() {
    logger.log('Getting sheet rows...');
    try {  
      const { data } = await this.sheetsService.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: this.defaultSheetRange
      });
      
      return data.values;
    } catch (err) {
      logger.log('Google Sheets API returned an error while trying to get rows: ' + err);
      return null;
    }
  }

  async updateValues(range, values) {
    logger.log('Updating students situation at spreadsheet...');
    try {
      await this.sheetsService.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        valueInputOption: 'USER_ENTERED',
        range,
        resource: { values }
      })
    } catch (err) {
      logger.log('Google Sheets API returned an error while trying to update values: ' + err);
    }
  }
}

module.exports = new Sheets();