function num(n) {
    const result = [];
    const length = n.length;

    for (let i = 0; i < length; i++) {
        result.push(n[i]);
        if ((i + 1) % 3 === 0 && i !== length - 1) {
            result.push(0);
        }
    }

    return result;
}

const n = [1, 2, 3, 4, 5, 6, 6, 7, 8];
console.log(num(n));
