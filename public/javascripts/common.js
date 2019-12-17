
function calculate_age( birthday ){ // birthday is a string in format: "YYYY-MM-DD"
    let bday = new Date(birthday);
    let ageDifMs = Date.now() - bday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
};

module.exports = {
    calculate_age
}