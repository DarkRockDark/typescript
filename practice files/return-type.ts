function addMultipleReturnType(n1: number, n2: number): number {
    return n1 + n2;
}

function printResultRt(num: number) {
    console.log('Result: ' + num)
}

printResultRt(addMultipleReturnType(14,4.5));