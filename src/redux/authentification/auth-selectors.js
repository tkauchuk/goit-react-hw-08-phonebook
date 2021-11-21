const getIsUserLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;

const authSelectors = {getIsUserLoggedIn, getUserEmail};

export default authSelectors;