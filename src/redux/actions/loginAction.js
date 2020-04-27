export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const login = (username) => {
	return {
        type: LOGIN,
        username: username
	};
};
export const logout = (username) => {
	return {
		type: LOGOUT,
        username: username
	};
};
