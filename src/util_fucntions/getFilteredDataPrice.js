export const getFilteredDataPrice = (productList, price) => {
    {
        if (price)
            return productList.filter((item) => item.price <= (price - 1))

        return productList
    }
}