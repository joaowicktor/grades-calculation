const sheets = require('./sheets');
const logger = require('./utils/logger');

class GradesCalculation {
  async calculate() {
    const situations = await this.getStudentsSituation();
    await this.updateStudentsSituationAtSpreadsheet(situations);
  }

  async getStudentsSituation() {
    const rows = await sheets.getRows();
    const totalOfLessons = Number(rows[1][0].match(/\d+/g));
    const maxAbsences = totalOfLessons * 0.25;
  
    logger.log('Calculating students situation...');
    const situations = [];
    rows.map((row, index) => {
      if (index < 3) {
        return;
      }
      
      const [enrollmentNumber, studentName, absences, p1, p2, p3] = row;
      
      situations.push(this.getSituation(maxAbsences, Number(absences), Number(p1), Number(p2), Number(p3)))
    })

    return situations;
  }

  async updateStudentsSituationAtSpreadsheet(situations) {
    await sheets.updateValues(`engenharia_de_software!G4:H`, [...situations]);
  }
  
  getSituation(maxAbsences, absences, p1, p2, p3) {
    if (absences > maxAbsences) {
      return ['Reprovado por Falta', 0];
    }
    
    const average = (p1 + p2 + p3) / 3;
  
    switch (true) {
      case average < 50:
        return ['Reprovado por Nota', 0];
      case average < 70:
        return ['Exame Final', this.calcNAF(average)];
      default:
        return ['Aprovado', 0];
    }
  }
  
  calcNAF(average) {
    return Math.round(100 - average);
  }
}

module.exports = new GradesCalculation();