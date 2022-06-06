function capitalise(string) {
    return string[0].toUpperCase() + string.substring(1);
}

function reverseString(string) {
    const chars = [];
    for (let i = string.length; i >= 0; i--) {
        chars.push(string[i]);
    }
    return chars.join('');
}

const calculator = (() => {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }

    return { add, subtract, divide, multiply };
})();

function analyseArray(arr) {
    let sum = 0;
    let min = null;
    let max = null;
    let length = 0;

    for (const num of arr) {
        sum += num;
        min = min === null ? num : Math.min(min, num);
        max = max === null ? num : Math.max(max, num);
        length += 1
    }
    return {average : sum / length, min, max, length};
}

export { capitalise, reverseString, calculator, analyseArray};