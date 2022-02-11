import toCalmelcase from '../../helpers/strings/toCamelcase';
import endpoints from '../endpoints';

class ReduxMiddleware {
  constructor () {
    this.hasElectronCallbacks = false
  }

  setElectronCallbacks = (dispatch) => {
    endpoints.map((endpoint) => {
      window.electronAPI[`${toCalmelcase(endpoint)}Success`]((_, data) => {
        const successDispatch = () => ({
          type: `${endpoint}_SUCCESS`,
          data,
        });
  
        dispatch(successDispatch());
      })

      window.electronAPI[`${toCalmelcase(endpoint)}Error`]((_, error) => {  
        const errorDispatch = () => ({
          type: `${endpoint}_ERROR`,
          error
        });
  
        dispatch(errorDispatch());
      })

      return null;
    });
    
    this.hasElectronCallbacks = true;
  }

  api = ({ dispatch }) => (next) => (action) => {
    const {
      endpoint,
      data,
    } = action;
    
    const isRequest = !!endpoint;
  
    const nextAction = isRequest ? {
      ...action,
      type: endpoint,
    } : action;
  
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(nextAction);
  
    if (isRequest) {
      if (!this.hasElectronCallbacks) this.setElectronCallbacks(dispatch);

      const functionString = toCalmelcase(endpoint);
      console.log('params ====>', data ? data : null)
      window.electronAPI[functionString](data ? data : null);
    }
  
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const reduxMiddleware = new ReduxMiddleware();

export default reduxMiddleware.api;
