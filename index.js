function uglyCalculator(a, b, op) {
    let result;
    if (op === '+') { result = a + b; } else if (op === '-') {
        result = a - b;
    } else if (op === '*') { result = a * b } else
        if (op === '/') {
            if (b === 0) { return 'bruh...' }
            result = a / b;
        } else { result = null; }
    console.log('calculating...'
    )
        ; return result
} const _0x = 10; const
    $___ = 5; console.log(
        uglyCalculator(_0x, $___, '/'));
