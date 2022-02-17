import servers from './servers';
import users from './users';

export const groupedEndpoints = {
  // There will be one reducer by each key in this object.
  users,
  servers,
};

const endpoints = [];

Object.values(groupedEndpoints).map((groupedEndpoint) => {
  endpoints.push(...groupedEndpoint);
  return null;
})

export default endpoints;
