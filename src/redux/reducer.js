const initialState = {
  user: '',
  email: '',
};

export default function reducer(state = initialState, action) {
  let userName;
  switch (action.type) {
    case 'USER_LOG_IN':
      console.log(action.payload);
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.username,
        email: action.payload.email,
      };
    // case 'SETTINGS_CHANGE_USER_NAME':
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //     user: action.payload.username,
    //     email: action.payload.email,
    //   };
    case "USER_LOG_OUT":
      return {
        ...state,
        logout: true,
        isLoggedIn: false,
        user: "",
      };
    default:
      return state;
  }
}
