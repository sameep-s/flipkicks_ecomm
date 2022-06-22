import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from '../util_reducers/filter-reducer';

const defaultFilterContextVal = { val: "cardName" }
const FilterContext = createContext(defaultFilterContextVal);

const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(FilterReducer, {
        sortBy: null,
        rangeValue: null,
        brand: [],
        size: [],
        searchVal: ""
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