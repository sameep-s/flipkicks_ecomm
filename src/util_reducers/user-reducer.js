export const userReducer = (stateUser, action) => {

    console.log(`stateUSer`, stateUser);

    switch (action.type) {
        case 'ADD_ADDRESS':
            return {
                ...stateUser, addresses: [...stateUser.addresses, action.payload.address]
            }

        case 'DEFAULT':
            return stateUser;
    }
}