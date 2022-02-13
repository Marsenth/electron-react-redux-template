import { Button, List } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, removeUser } from '../redux/actions/users';
import { CloseOutlined } from '@ant-design/icons';
import UserForm from '../components/Home/UserForm';
import '../assets/styles/components/Users/users.sass';

const Users = () => {
  const { GET_USERS, ADD_USER, REMOVE_USER } = useSelector((state) => state.users)

  const dispatch = useDispatch();
  
  const onPressRemoveButton = (_id) => {
    dispatch(removeUser({ _id }));
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [ADD_USER.data, REMOVE_USER.data])

  if (GET_USERS.data.length) window.electronAPI.writeLogs({ logsContent: JSON.stringify(GET_USERS.data), type: 'success' });

  return (
    <div className='users'>
    <UserForm/>

      <br/>
      <br/>

      <List
        size="small"
        bordered
        loading={GET_USERS.loading}
        dataSource={GET_USERS.data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type='link' onClick={() => onPressRemoveButton(item._id)}>
                <CloseOutlined/>
              </Button>
            ]}
          >
            {item.name}
          </List.Item>
        )}
      />

    </div>
  );
};

export default Users
