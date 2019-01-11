export function add(s: string): number {

    if(s.length == 0) {
        return 0;
    }

    let numbers = s.split(',');
    if(numbers.length == 1) {
        return parseInt(numbers[0]);
    }

    return 0;

}