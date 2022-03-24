export const dataFilterBrands = (productList, brand) => {
    if (brand.length)
        return productList.filter((item) => brand.includes(item.brand));

    return productList;
}