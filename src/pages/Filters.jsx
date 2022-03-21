import React from 'react';
import '../pages-css/main.css';

const Filters = () => {
    return (
        <>
            {/* <!-- sidebar --> */}
            <aside class="aside-pList-wrap mb-1">
                <div class="aside-pList-content">
                    <div class="aside-pList-heading">Filters</div>
                    <div class="pList-content-container">
                        <div class="pList-container-heading">Sort By</div>
                        <hr />

                        <div class="pList-container-body">
                            <div class="pList-item-container mt-1">
                                <input
                                    type="radio"
                                    name="pList-radio"
                                    id="pList-radio-high"
                                    class="pList-radio"
                                />
                                <label for="pList-radio-high" class="pList-label">
                                    Price Low To High</label
                                >
                            </div>
                            <div class="pList-item-container mt-1">
                                <input
                                    type="radio"
                                    name="pList-radio"
                                    id="pList-radio-high"
                                    class="pList-radio"
                                />
                                <label for="pList-radio-high" class="pList-label">
                                    Price Low To High</label
                                >
                            </div>
                        </div>
                    </div>

                    {/* <!-- container 2 --> */}
                    <div class="pList-content-container">
                        <div class="pList-container-heading">Price</div>
                        <hr />

                        <div class="pList-container-body">
                            <div class="range-upper txt-gray">
                                <div class="upper-left">Min</div>
                                <upper class="upper-right">Max</upper>
                            </div>
                            <div class="pList-item-container mt-1">
                                <input
                                    type="range"
                                    class="price-slider mb-1"
                                    id="range-price"
                                    min="500"
                                    max="50000"
                                />

                                <label for="range-price"> </label>
                            </div>
                            <div class="range-under">
                                <div class="under-left">
                                    <input
                                        type="text"
                                        placeholder="500"
                                        name=""
                                        id=""
                                        class="input-l-under"
                                    />
                                </div>

                                <div class="under-right">
                                    <input
                                        type="text"
                                        placeholder="50000"
                                        name=""
                                        id=""
                                        class="input-r-under"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- container 3 --> */}
                    <div class="pList-content-container">
                        <div class="pList-container-heading">Brand</div>
                        <hr />

                        <div class="pList-container-body">
                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label">
                                    Jordan</label
                                >
                            </div>
                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label">
                                    Nike Sportswear</label
                                >
                            </div>
                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label">
                                    NikeLab</label
                                >
                            </div>

                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label">
                                    Jordan X Off-White</label
                                >
                            </div>

                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label">
                                    Nike Pro</label
                                >
                            </div>

                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label">
                                    Nike</label
                                >
                            </div>
                        </div>
                    </div>

                    {/* <!-- container 4 --> */}
                    <div class="pList-content-container">
                        <div class="pList-container-heading">Size</div>
                        <hr />

                        <div class="pList-container-body">
                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label"> 4.5</label>
                            </div>
                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label"> 5</label>
                            </div>
                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label"> 6</label>
                            </div>

                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label"> 7</label>
                            </div>

                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label"> 9</label>
                            </div>

                            <div class="pList-item-container mt-1">
                                <input
                                    type="checkbox"
                                    id="pList-checkbox"
                                    class="pList-checkbox"
                                />
                                <label for="pList-checkbox" class="pList-label"> 11</label>
                            </div>
                        </div>
                    </div>

                    {/* <!-- vart space --> */}
                    <div class="vert-space"></div>
                </div>
            </aside>
        </>
    )
}

export default Filters;