const memoize = (fn) => {
    let cache = {};
    const slice = Array.prototype.slice;
    return (...arguments) => {
        let args = slice.call(arguments);
        let key = JSON.stringify(args);
        console.log('cache:args ', cache, args);
        if (key in cache) {
            console.log('Fetching from cache', key);
            return cache[key];
        } else {
            console.log('Calculating result', key);
            let result = fn.apply(null, args);
            cache[key] = result;
            return result;
        }
    }
}

const sum = memoize((min, max) => {
    if (min < max) {
        return ((min + max) * (max - min) / 2);
    }
});

const range = (min, max) => {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        console.log('One of parameters not a number. Check your data input.')
    } else if (min > max) {
        console.log('Min is bigger than max. Check your data.')
    } else {
        let result = sum(min, max);
        if (result > Number.MAX_SAFE_INTEGER) {
            console.log('Your sum is bugger than ')
        } else {
            console.log(result);
        }
    }
};
range(1, 100);
range('j', 8);
range(50 / 0, 3);
range(0, 1);
range(1, 100);