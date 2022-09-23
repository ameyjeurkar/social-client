export const debounce = (fn, delay) => {
    let timer;
    return (input) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(input);
        }, delay);
    }
}