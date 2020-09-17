//Even or Odd

function evenOrOdd(x) { 
if (x%2 === 0) {
    var result;
    result = x + ' is an even number';
    return result;
} else  { 
    var result2;
    result2 = x  +' is an odd number';
    return result2;
}
};

console.log(evenOrOdd(32))