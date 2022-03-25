export const productsReducer = (state_Products, action) => {

    switch (action.type) {

        case "SUCCESS":
            return { ...state_Products, products: action.payload, loading: false }

        case "ERROR":
            return { ...state_Products, error: action.payload }
    }

}