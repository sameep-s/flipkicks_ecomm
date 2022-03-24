export const FilterReducer = (state, action) => {

    switch (action.type) {
        case "sortBy":
            return { ...state, sortBy: action.payload }

        case "range":
            return { ...state, rangeValue: action.payload }

        case "brand":
            if (state.brand.includes(action.payload)) {

                const brandCopy = [...state.brand];
                brandCopy.splice(state.brand.indexOf(action.payload), 1);

                return { ...state, brand: brandCopy }
            }
            else {
                return { ...state, brand: [...state.brand, action.payload] }

            }

        case "size":
            return { ...state, size: [action.payload] }

        default:
            return state;
    }
}

