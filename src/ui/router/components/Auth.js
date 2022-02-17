import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import Loading from '../../components/shared/Loading';

const { connectServer } = actions;

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const { connectServer: { loading: loadingServer, data: serverIsConnected, error: serverConnectionFailed } } = useSelector((state) => state.servers);
  const dispatch = useDispatch();

  const dispatchConnectServer = () => dispatch(connectServer());

  useEffect(() => {
    if (serverIsConnected !== true && !serverConnectionFailed && !loadingServer) {
      dispatchConnectServer();
    } else if (serverIsConnected === true) navigate('/home');
  }, [serverIsConnected]);

  if (serverConnectionFailed) return navigate('/');

  return loadingServer ? (
    <Loading/>
  ) : (
    children
  );
};

export default Auth;
