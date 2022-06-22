export const FilterReducer = (state, action) => {

    const defaultState = {
        sortBy: null,
        rangeValue: null,
        brand: [],
        size: []
    }

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
            else { return { ...state, brand: [...state.brand, action.payload] } }

        case "size":
            if (state.size.includes(action.payload)) {
                const sizeCopy = [...state.size];
                sizeCopy.splice(state.size.indexOf(action.payload), 1)
                return { ...state, size: sizeCopy }
            }
            else {
                return { ...state, size: [...state.size, action.payload] }
            }

        case "SEARCH":
            return { ...state, searchVal: action.payload.searchVal };

        case "reset":
            return defaultState;

        default:
            return state;
    }
}

