const foo = (...args) => {
    document.getElementById("respond").append("|");
}
// Throttle.
const throttle = (func, limit) => {
    let inThrottle
    return (...args) => {
        if (!inThrottle) {
            func(...args)
            inThrottle = setTimeout(() => inThrottle = false, limit)
        }
    }
}
// On Click.
const onClick = throttle(foo, 1000);
// Button - Click.



