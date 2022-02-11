export const initialState = {
  GET_USERS: {
    loading: false,
    data: [],
    error: null
  },
  ADD_USER: {
    loading: false,
    data: [],
    error: null
  },
  REMOVE_USER: {
    loading: false,
    data: [],
    error: null
  }
};

const usersReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        GET_USERS: {
          ...state.GET_USERS,
          loading: true,
        },
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        GET_USERS: {
          ...state.GET_USERS,
          loading: false,
          data: action.data,
        },
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        GET_USERS: {
          ...state.GET_USERS,
          loading: false,
          error: action.error,
        },
      };
    case 'ADD_USER':
      return {
        ...state,
        ADD_USER: {
          ...state.ADD_USER,
          loading: true,
        },
      };
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        ADD_USER: {
          ...state.ADD_USER,
          loading: false,
          data: action.data,
        },
      };
    case 'ADD_USER_ERROR':
      return {
        ...state,
        ADD_USER: {
          ...state.ADD_USER,
          loading: false,
          error: action.error,
        },
      };
    case 'REMOVE_USER':
      return {
        ...state,
        REMOVE_USER: {
        ...state.REMOVE_USER,
        loading: true,
        },
      };
    case 'REMOVE_USER_SUCCESS':
      return {
        ...state,
        REMOVE_USER: {
        ...state.REMOVE_USER,
        loading: false,
        data: action.data,
        },
      };
    case 'REMOVE_USER_ERROR':
      return {
        ...state,
        REMOVE_USER: {
        ...state.REMOVE_USER,
        loading: false,
        error: action.error,
        },
      };
    case 'LOGOUT':
      return { ...initialState };
    default:
      return state;
  }
};

export default usersReducer;
