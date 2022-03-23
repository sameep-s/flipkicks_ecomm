export const FilterReducer = (state, action) => {

    switch (action.type) {
        case "sortBy":
            return { ...state, sortBy: action.payload }

        case "range":
            return { ...state, rangeValue: action.payload }

        case "brand":
            return { ...state, brand: action.payload }

        case "size":
            return { ...state, size: action.payload }

        default:
            return state;
    }
}

