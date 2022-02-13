import { Button, List } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions';
import { CloseOutlined } from '@ant-design/icons';
import UserForm from '../components/Home/UserForm';
import '../assets/styles/components/Users/users.sass';

const { getUsers, removeUser } = actions;

const Users = () => {
  const {
    getUsers: { data: users, loading },
    addUser: { data: newUser },
    removeUser: { data: removedUserID }
  } = useSelector((state) => state.users)

  const dispatch = useDispatch();
  
  const onPressRemoveButton = (_id) => {
    dispatch(removeUser({ _id }));
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [removedUserID, newUser])

  return (
    <div className='users'>
    <UserForm/>

      <br/>
      <br/>

      <List
        size="small"
        bordered
        loading={loading}
        dataSource={users}
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
