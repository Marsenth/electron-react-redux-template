import users from './users';

export const groupedEndpoints = {
  users  
};

const endpoints = [];

Object.values(groupedEndpoints).map((groupedEndpoint) => {
  endpoints.push(...groupedEndpoint);
  return null;
})

export default endpoints;
