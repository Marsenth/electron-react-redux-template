import toCalmelcase from "../../strings/toCamelcase";
import generateInitialState from "./generateInitialState";

const generateReducer = (endpoints) => {
  let reducerString = `(() => {
    const initialState = ${JSON.stringify(generateInitialState(endpoints))};

    const reducer = (state = { ...initialState }, action) => {
      switch (action.type) {
  `;

  endpoints.map((endpoint) => {
    const camelcaseEndpoint = toCalmelcase(endpoint);

    reducerString += `
      case '${endpoint}':
        return {
          ...state,
          ${camelcaseEndpoint}: {
            ...state.${camelcaseEndpoint},
            loading: true,
          },
        };
      case '${endpoint}_SUCCESS':
        return {
          ...state,
          ${camelcaseEndpoint}: {
            ...state.${camelcaseEndpoint},
            loading: false,
            data: action.data,
          },
        };
      case '${endpoint}_ERROR':
        return {
          ...state,
          ${camelcaseEndpoint}: {
            ...state.${camelcaseEndpoint},
            loading: false,
            error: action.error,
          },
        };
    `;

    return null;
  });

  reducerString += `
    case 'LOGOUT':
      return { ...initialState };
    default:
      return state;
    }};
  
    return reducer;
  })()`;

  const results = eval(reducerString);

  return eval(results);
};

export default generateReducer;
