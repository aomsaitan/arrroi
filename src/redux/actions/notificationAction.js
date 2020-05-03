
export const CLEAR ="CLEAR"
export const UPDATE = "UPDATE";
export const FINISH = "FINISH";
export const updateNotification = (quantity) => {
	return {
        type: UPDATE,
        payload: quantity
	};
};
export const clearNotification = () => {
    return {
        type: CLEAR,
    }
}
export const finish = () => {
    return {
        type: FINISH
    }
}
