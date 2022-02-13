import toCalmelcase from '../../helpers/strings/toCamelcase';
import endpoints from '../endpoints';

const actions = {};

endpoints.map((endpoint) => {
  const functionName = toCalmelcase(endpoint);
  actions[functionName] = (data) => ({ endpoint, data });

  return null;
})

export default actions;
