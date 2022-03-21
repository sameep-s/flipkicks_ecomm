import React from 'react';


function CardProduct() {
    return (
        <>

            <div class="pList-card-wrapper pos-rel">
                <div class="pList-card-img">
                    <img src="https://images.unsplash.com/photo-1610870372593-a8647b04451f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>

                <div class="pList-card-body">
                    <div class="pList-card-title mt-1">
                        Nike Air Jordan 1 x Off-White
                    </div>
                    <div class="pList-card-subtitle mt-1 txt-gray">
                        Men's Shoe
                    </div>

                    <div class="pList-card-price mt-1">$6000</div>
                    <button class="pList-card-btn">BUY</button>
                </div>
            </div>

        </>
    );
}

export default CardProduct;