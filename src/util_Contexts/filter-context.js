import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from '../util_reducers/filter-reducer';

const defaultFilterContextVal = { val: "cardName" }
const FilterContext = createContext(defaultFilterContextVal);

const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(FilterReducer, {
        sortBy: null,
        rangeValue: 5000,
        brand: [],
        size: null
    });

    return (
        <>
            <FilterContext.Provider value={{ state, dispatch }}>
                {children}
            </FilterContext.Provider>
        </>
    );
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };