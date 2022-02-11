import { Form, Button, Input, Row, Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/actions/users';

const UserForm = () => {
  const [form] = Form.useForm();
  const { ADD_USER } = useSelector((state) => state.users)
  
  const dispatch = useDispatch();

  const onFinish = (params) => {
    console.log('onFinish', params);
    dispatch(addUser(params))
  };

  const onFinishFailed = () => null;

  useEffect(() => {
    form.resetFields();
  }, [ADD_USER.data]);

  useEffect(() => {
    if (ADD_USER.error) alert('Ha ocurrido un error inesperado.');
  }, [ADD_USER.error]);

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
            <Input placeholder="Escriba aquí el nombre de usuario" disabled={ADD_USER.loading}/>
          </Form.Item>
        </Col>
      </Row>
      
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={ADD_USER.loading}>Agregar</Button>
      </Form.Item>
    </Form>
  );
}

export default UserForm;
