export function getNowDate() {
    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;

    var currentYear = date.getFullYear();
    return currentYear + "-" + currentMonth + "-" + currentDay;
}