import generateReducer from '../../helpers/redux/reducers/generateReducer';
import { groupedEndpoints } from '../endpoints'

const reducers = {};

Object.keys(groupedEndpoints).map((reducer) => {
  reducers[reducer] = generateReducer(groupedEndpoints[reducer]);
  return null;
});

export default reducers;
