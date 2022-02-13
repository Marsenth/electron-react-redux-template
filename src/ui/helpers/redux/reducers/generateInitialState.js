import toCalmelcase from "../../strings/toCamelcase";

const generateInitialState = (endpoints) => {
  const results = {};

  endpoints.map((endpoint) => {
    const camelcaseEndpoint = toCalmelcase(endpoint);
    results[camelcaseEndpoint] = {
      loading: false,
      data: [],
      error: null
    };

    return null;
  })

  return results;
};

export default generateInitialState;
