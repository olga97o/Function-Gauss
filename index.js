const memoize = (fn) => {
    let cache = {};
    let slice = Array.prototype.slice;
    return (...arguments) => {
        let args = slice.call(arguments);
        let key = JSON.stringify(args);

        console.log('cache: ',  cache);
        console.log('args', arguments)
        if (cache[key]) {
            console.log('Fetching from cache', args);
            return cache[key];
        } else {
            console.log('Calculating result', args);
            let result = fn.apply(null, args);
            cache[key] = result;
            return result;
        }
    }
}
const range = memoize ((min, max) => {
     if (!Number.isInteger(min) || !Number.isInteger(max)){
        console.log('One of parameters not a number. Check your data input.')
    } else if (min > max) {
         return console.log((max + min) * min / 2);
     } else {
        return console.log((min + max) * max / 2);
    }
});
range(1, 100);
//range('j', 8);
/*range(50/0, 3);
range(0, 1);*/
range(1, 100);