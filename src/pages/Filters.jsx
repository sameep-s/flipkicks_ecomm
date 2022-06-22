import React from 'react';
import '../pages-css/main.css';
import { useFilter } from '../util_Contexts/filter-context';

const Filters = () => {


    const { state, dispatch } = useFilter();
    const { sortBy, rangeValue, brand, size } = state;

    return (
        <>
            {/* <!-- sidebar --> */}
            <aside className="aside-pList-wrap mb-1">
                <div className="aside-pList-content">
                    <div className="aside-pList-heading">
                        <span>Filters</span>
                        <span><button onClick={() => dispatch({ type: 'reset', payload: state })}>Clear All</button></span>
                    </div>
                    <div className="pList-content-container">
                        <div className="pList-container-heading">Sort By</div>
                        <hr />

                        <div className="pList-container-body">
                            <div className="pList-item-container mt-1">
                                <input
                                    type="radio"
                                    name="pList-radio"
                                    className="pList-radio"
                                    id="pList-radio-high"
                                    checked={sortBy === "LOW_TO_HIGH"}
                                    onChange={() => dispatch({ type: "sortBy", payload: "LOW_TO_HIGH" })}
                                />
                                <label htmlFor="pList-radio-high" className="pList-label">
                                    Price Low To High
                                </label>
                            </div>
                            <div className="pList-item-container mt-1">
                                <input
                                    type="radio"
                                    name="pList-radio"
                                    className="pList-radio"
                                    id="pList-radio-low"
                                    checked={sortBy === "HIGH_TO_LOW"}
                                    onChange={() => dispatch({ type: "sortBy", payload: "HIGH_TO_LOW" })}
                                />
                                <label htmlFor="pList-radio-low" className="pList-label">
                                    Price High To Low
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* <!-- container 2 --> */}
                    <div className="pList-content-container">
                        <div className="pList-container-heading">Price</div>
                        <hr />

                        <div className="pList-container-body">
                            <div className="range-upper txt-gray">
                                <div className="upper-left">Min</div>
                                <div className="upper-right">Max</div>
                            </div>
                            <div className="pList-item-container mt-1">
                                <input
                                    type="range"
                                    className="price-slider mb-1"
                                    id="range-price"
                                    min="500"
                                    max="100000"
                                    value={rangeValue || "5000"}
                                    onChange={(e) => dispatch({ type: "range", payload: e.target.value })}
                                />

                                <label htmlFor="range-price"> </label>
                            </div>
                            <div className="range-under">
                                <div className="under-left">
                                    <input
                                        type="text"
                                        placeholder="500"
                                        name=""
                                        id=""
                                        className="input-l-under"
                                    />
                                </div>

                                <div className="under-right">
                                    <input
                                        type="text"
                                        placeholder={rangeValue || "5000"}
                                        name=""
                                        id=""
                                        className="input-r-under"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- container 3 --> */}
                    <div className="pList-content-container">
                        <div className="pList-container-heading">Brand</div>
                        <hr />

                        <div className="pList-container-body">
                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    className="pList-checkbox"
                                    checked={brand.includes("jordan")}
                                    id="pList-checkbox-jordan"
                                    onChange={() => dispatch({ type: "brand", payload: "jordan" })}
                                />
                                <label htmlFor="pList-checkbox-jordan" className="pList-label">
                                    Jordan</label
                                >
                            </div>
                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    className="pList-checkbox"
                                    id="pList-checkbox-nike-sw"
                                    checked={brand.includes("nike-sportswear")}
                                    onChange={() => dispatch({ type: "brand", payload: "nike-sportswear" })}

                                />
                                <label htmlFor="pList-checkbox-nike-sw" className="pList-label">
                                    Nike Sportswear</label
                                >
                            </div>
                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    className="pList-checkbox"
                                    id="pList-checkbox-nikelab"
                                    checked={brand.includes("nikelab")}
                                    onChange={() => dispatch({ type: "brand", payload: "nikelab" })}

                                />
                                <label htmlFor="pList-checkbox-nikelab" className="pList-label">
                                    NikeLab</label
                                >
                            </div>

                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    className="pList-checkbox"
                                    id="pList-checkbox-jxoffwhite"
                                    checked={brand.includes("jordanxoffwhite")}
                                    onChange={() => dispatch({ type: "brand", payload: "jordanxoffwhite" })}

                                />
                                <label htmlFor="pList-checkbox-jxoffwhite" className="pList-label">
                                    Jordan X Off-White</label
                                >
                            </div>

                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    className="pList-checkbox"
                                    id="pList-checkbox-nikepro"
                                    checked={brand.includes("nikepro")}
                                    onChange={() => dispatch({ type: "brand", payload: "nikepro" })}

                                />
                                <label htmlFor="pList-checkbox-nikepro" className="pList-label">
                                    Nike Pro</label
                                >
                            </div>

                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    className="pList-checkbox"
                                    id="pList-checkbox-nike"
                                    checked={brand.includes("nike")}
                                    onChange={() => dispatch({ type: "brand", payload: "nike" })}

                                />
                                <label htmlFor="pList-checkbox-nike" className="pList-label">
                                    Nike</label
                                >
                            </div>
                        </div>
                    </div>

                    {/* <!-- container 4 --> */}
                    <div className="pList-content-container">
                        <div className="pList-container-heading">Size</div>
                        <hr />

                        <div className="pList-container-body">
                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    checked={size.includes(4.5)}
                                    className="pList-checkbox"
                                    id="size-checkbox-4.5"
                                    onChange={() => dispatch({ type: "size", payload: 4.5 })}
                                />
                                <label htmlFor="size-checkbox-4.5" className="pList-label"> 4.5</label>
                            </div>
                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    checked={size.includes(5)}
                                    className="pList-checkbox"
                                    onChange={() => dispatch({ type: "size", payload: 5 })}
                                    id="size-checkbox-5"
                                />
                                <label htmlFor="size-checkbox-5" className="pList-label"> 5</label>
                            </div>
                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    checked={size.includes(6)}
                                    className="pList-checkbox"
                                    id="size-checkbox-6"
                                    onChange={() => dispatch({ type: "size", payload: 6 })}
                                />
                                <label htmlFor="size-checkbox-6" className="pList-label"> 6</label>
                            </div>

                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    checked={size.includes(7)}
                                    className="pList-checkbox"
                                    id="size-checkbox-7"
                                    onChange={() => dispatch({ type: "size", payload: 7 })}
                                />
                                <label htmlFor="size-checkbox-7" className="pList-label"> 7</label>
                            </div>

                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    checked={size.includes(9)}
                                    className="pList-checkbox"
                                    id="size-checkbox-9"
                                    onChange={() => dispatch({ type: "size", payload: 9 })}
                                />
                                <label htmlFor="size-checkbox-9" className="pList-label"> 9</label>
                            </div>

                            <div className="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    checked={size.includes(11)}
                                    className="pList-checkbox"
                                    id="size-checkbox-11"
                                    onChange={() => dispatch({ type: "size", payload: 11 })}
                                />
                                <label htmlFor="size-checkbox-11" className="pList-label"> 11</label>
                            </div>
                        </div>
                    </div>

                    {/* <!-- vart space --> */}
                    <div className="vert-space"></div>
                </div>
            </aside>
        </>
    )
}

export default Filters;