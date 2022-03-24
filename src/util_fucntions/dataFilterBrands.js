export const dataFilterBrands = (productList, brand) => {

    console.log(brand.length);

    if (brand.length)
        return productList.filter((item) => brand.includes(item.brand));
    else
        return productList;

}