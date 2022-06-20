import toast from "react-hot-toast"

export const userReducer = (stateUser, action) => {

    switch (action.type) {

        case 'USER__INIT':
            return {
                ...action.payload.user
            }

        case 'ADD_ADDRESS':
            {
                toast.success(`Address Address Successfully`)
                return {
                    ...stateUser, addresses: [...stateUser.addresses, action.payload.address]
                }
            }

        case "REMOVE__ADDRESS": {
            return {
                ...stateUser, addresses: [...stateUser.addresses.filter((address) => address._id !== action.payload.address._id)]
            }
        }

        case "EDIT__ADDRESS":
            {
                toast.success(`Address Edited Successfully`);
                return {
                    ...stateUser, addresses: [...stateUser.addresses.filter((address) => address._id !== action.payload.address._id), action.payload.address]
                }
            }

        case "NEW__ORDER":
            return {
                ...stateUser, orders: [...stateUser.orders, action.payload.order]
            }

        case 'DEFAULT':
            return stateUser;
    }
}