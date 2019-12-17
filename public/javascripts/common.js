const moment = require('moment');

function calculate_age( birthday ){ // birthday is a string in format: "YYYY-MM-DD"

    if(moment(birthday).isValid()){
        let bday = moment(birthday);
        let ageDifMs = Date.now() - bday.valueOf();
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

module.exports = {
    calculate_age
}