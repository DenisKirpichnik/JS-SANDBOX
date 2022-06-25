var guessNumber = function(n) { 
    return (function foo(start, end) {
        let num = ((end + start)/2)
        let g = guess(num);
        if (g === -1) {
            return foo(start, num-1)
        } else if (g === 1) {
            return foo(num+1, end)
        } else {
            return num;
        }
    })(1, n);
};