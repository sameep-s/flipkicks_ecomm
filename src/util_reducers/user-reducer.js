export const userReducer = (stateUser, action) => {

    console.log(`stateUSer`, stateUser);

    switch (action.type) {
        case 'ADD_ADDRESS':
            return {
                ...stateUser, addresses: [...stateUser.addresses, action.payload.address]
            }

        case "REMOVE__ADDRESS":
            return {
                ...stateUser, addresses: [...stateUser.addresses.filter((address) => address._id !== action.payload.address._id)]
            }
        case "EDIT__ADDRESS":
            return {
                ...stateUser, addresses: [...stateUser.addresses.filter((address) => address._id !== action.payload.address._id), action.payload.address]
            }

        case "NEW__ORDER":
            return {
                ...stateUser, orders: [action.payload.order]

            }

        case 'DEFAULT':
            return stateUser;
    }
}