function myArraySum(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

const numbers = [7, 8, 9, 0, 15];
const total = myArraySum(numbers);
console.log('La somme des elements: ' + numbers + 'est: ' + total);