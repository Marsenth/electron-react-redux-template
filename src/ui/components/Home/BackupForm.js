import { Form, Button, Input, Row, Col } from 'antd';
import { useEffect } from 'react';
import '../../assets/styles/components/Home/backup-form.sass';
import useMongoBackup from '../../hooks/mongoBackup';

const BackupForm = () => {
  const { makeBackup, loading, error, containerID } = useMongoBackup();

  const onFinish = (value) => {
    console.log('onFinish', value);
    makeBackup();
  };

  const onFinishFailed = () => null;

  useEffect(() => {
    if (error) alert('Ha ocurrido un error inesperado.');
  }, [error]);

  return (
    <Form
      layout="vertical"
      className="backup-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {containerID && <p>{containerID}</p>}

      <Row gutter={20}>
        <Col lg={12}>
          <Form.Item
            label="Source"
            name="source"
            rules={[{ required: true, message: 'Mongodb string source is required' }]}
          >
            <Input placeholder="Paste here mongodb string source" disabled={loading}/>
          </Form.Item>
        </Col>

        <Col lg={12}>
          <Form.Item
            label="Destiny"
            name="destiny"
            rules={[{ required: true, message: 'Mongodb string destiny is required' }]}
          >
            <Input placeholder="Paste here mongodb string destiny" disabled={loading}/>
          </Form.Item>
        </Col>
      </Row>
      
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>Crear Backup</Button>
      </Form.Item>
    </Form>
  );
}

export default BackupForm;
