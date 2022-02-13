import { Form, Button, Input, Row, Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';

const { addUser } = actions;

const UserForm = () => {
  const [form] = Form.useForm();
  const { addUser: { data: addedUser, addingUser, error: errorAddingUser }, } = useSelector((state) => state.users)
  
  const dispatch = useDispatch();

  const onFinish = (params) => {
    console.log('onFinish', params);
    dispatch(addUser(params))
  };

  const onFinishFailed = () => null;

  useEffect(() => {
    form.resetFields();
  }, [addedUser]);

  useEffect(() => {
    if (errorAddingUser) alert('Ha ocurrido un error inesperado.');
  }, [errorAddingUser]);

  return (
    <Form
      form={form}
      layout="vertical"
      className="backup-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={20}>
        <Col lg={12}>
          <Form.Item
            label="Nombre del usuario"
            name="name"
            rules={[{ required: true, message: 'Es requerido un nombre de usuario para relizar esta acción' }]}
          >
            <Input placeholder="Escriba aquí el nombre de usuario" disabled={addingUser}/>
          </Form.Item>
        </Col>
      </Row>
      
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={addingUser}>Agregar</Button>
      </Form.Item>
    </Form>
  );
}

export default UserForm;
