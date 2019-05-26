function timeInWords(h, m) {
    h = parseInt(h), m = parseInt(m);

    let nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];

    if (m === 0) {
        return `${nums[h]} o' clock`;
    } else if (m <= 30) {
        if (m === 15) return `quarter past ${nums[h]}`;
        if (m === 30) return `half past ${nums[h]}`;
        if (m === 1) return `${nums[m]} minute past ${nums[h]}`;
        return `${nums[m]} minutes past ${nums[h]}`;
    } else {
        if (m === 45) return `quarter to ${nums[h + 1]}`;
        return `${nums[60 - m]} minutes to ${nums[h + 1]}`;
    }
}