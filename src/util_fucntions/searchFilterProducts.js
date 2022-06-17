export function debounce(cb, delay = 500) {
    let interval;

    return (...args) => {
        clearInterval(interval);

        interval = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}


export function filterSearch(productList, searchVal) {
    if (searchVal === "") return [...productList];

    else return [...productList].filter((item) => item?.productName?.toLowerCase().includes(searchVal));
}
