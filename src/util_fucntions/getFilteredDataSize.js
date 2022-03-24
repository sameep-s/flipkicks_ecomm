export const getFilteredDataSize = (productList, size = []) => {

    if (size.length)
        return productList.filter((item) => size.includes(item.size))

    return productList;
    console.log(`cart functionality`);
}