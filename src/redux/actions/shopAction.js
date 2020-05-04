
export const CLEAR_SHOP = "CLEAR_SHOP"
export const IMPORT_SHOP = "IMPORT_SHOP"
export const UPDATE_SHOP = "UPDATE_SHOP"
export const importShop = (id) => {
	return {
		type: IMPORT_SHOP,
		payload: id,
	};
};
export const updateShop = (orders) => {
    return {
        type: UPDATE_SHOP,
        payload: orders
    }
}
export const clearShop = (id) => {
	return {
		type: CLEAR_SHOP,
	};
};