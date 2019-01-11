export function add(s: string): number {

    if(s.length == 0) {
        return 0;
    }

    var buffer = s;

    var separator = ',';
    if(s.charAt(0) == '/' && s.charAt(1) == '/') {
        separator = s.charAt(2);
        buffer = buffer.slice(3);
    }

    buffer = buffer.replace('\n', separator);
    if(buffer.charAt(0) == separator) {
        buffer = buffer.slice(1);
    }
    if(buffer.charAt(-1) == separator) {
        buffer = buffer.slice(0, -1);
    }

    let numbers = buffer.split(separator);
    if(numbers.length == 1) {
        return parseInt(numbers[0]);
    }

    var sum = 0;
    for(let num of numbers) {
        if(num == '') {
            throw('Invalid input string');
        }
        sum += parseInt(num);
    }

    return sum;

}