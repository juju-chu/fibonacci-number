const fibonacci = (position) => {
    if (position < 2) {
        return position;
    } else {
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}

for (let n = 0; n <= 4; n++) {
    console.log(`fibonacci(${n}): ${fibonacci(n)}`);
}