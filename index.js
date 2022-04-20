function first(array,n=1){
    return array.slice(0,n)
}
console.log(first([7,9,0,-2]));x
console.log(first([]));
console.log(first([7,9,0,-2],3));
console.log(first([7,9,0,-2],6))
console.log(first([7,9,0,-2],-3))