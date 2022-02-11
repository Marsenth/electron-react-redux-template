/* eslint-disable no-unused-vars */
import { Button, List } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, addUser, removeUser } from '../redux/actions/users';
import { CloseOutlined } from '@ant-design/icons';
import '../assets/styles/components/Users/users.sass';

const Users = () => {
  const { GET_USERS, ADD_USER, REMOVE_USER } = useSelector((state) => state.users)

  const dispatch = useDispatch();
  
  const onPressAddButton = () => dispatch(addUser());
  const onPressRemoveButton = (_id) => {
    console.log('_id', _id)
    dispatch(removeUser({ _id }));
  }

  useEffect(() => {
    console.log('call users');
    dispatch(getUsers());
  }, [ADD_USER.data, REMOVE_USER.data])

  return (
    <div className='users'>
      <Button onClick={onPressAddButton} loading={ADD_USER.loading}>Add User</Button>

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
