let num=6;

function checkPrime(num){
    for (let i=2; i<=num-1; i++){
        if(num%i=0){
            return false
        }
    }
}
console.log(checkPrime(8))
console.log(checkPrime(7))


