function calc_suffix(number) {
    let rest = number % 10;

    if(rest === 1 && number != 11) { return 'st'; }
    else if(rest === 2 && number != 12) { return 'nd'; }
    else if(rest === 3 && number != 13) { return 'rd'; }
    else { return 'th'; }
};
function truncateDecimals(number, digits) {
    return Math.trunc(number * Math.pow(10, digits)) / Math.pow(10, digits);
};
//Stringifies Numbers
function formatNumber(num) {
    if (num < 1000) return num.toString(); // No need to format numbers less than 1000

    const suffixes = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];
    let suffixIndex = 0;

    while (num >= 1000 && suffixIndex < suffixes.length - 1) {
        num /= 1000;
        suffixIndex++;
    }

    return `${num.toFixed(2)} ${suffixes[suffixIndex]}`;
};
function formatTime(inputHours) {
    // Define time units in hours
    const hour = 1;
    const minute = 1 / 60;
    const day = 24;
    const year = 365 * day;
    let remainingHours = inputHours;
    // Calculate the number of years
    const years = Math.floor(remainingHours / year);
    remainingHours %= year;
    // Calculate the number of days
    const days = Math.floor(remainingHours / day);
    remainingHours %= day;
    // Calculate the number of hours
    const hours = Math.floor(remainingHours);
    remainingHours %= hour;
    // Calculate the number of minutes
    const minutes = Math.floor(remainingHours / minute);
    // Create the result string
    let result = [];
    if (years > 0) result.push(`${years} year${years > 1 ? 's' : ''}`);
    if (days > 0) result.push(`${days} day${days > 1 ? 's' : ''}`);
    if (hours > 0) result.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    if (minutes > 0) result.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
    return result.join(' ');
  };
