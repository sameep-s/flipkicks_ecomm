export const productsReducer = (state, action) => {

    switch (action.type) {

        case "SUCCESS":
            return { ...state, products: action.payload, loading: false }

        case "ERROR":
            return { ...state, error: action.payload }
    }

}