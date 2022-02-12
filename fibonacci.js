const memoizationFib = (n, cache) => {
    if (n < 2) return cache[n];
    if (cache[n]) return cache[n];

    return (cache[n] = memoizationFib(n - 1, cache) + memoizationFib(n - 2, cache));
}

const fibonacci = (position) => {
    return memoizationFib(position, [0, 1]);
}

for (let n = 0; n <= 4; n++) {
    console.log(`fibonacci(${n}): ${fibonacci(n)}`);
}