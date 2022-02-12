import BackupForm from '../components/Home/BackupForm';
import '../assets/styles/containers/home.sass';
import { Card } from 'antd';

const Home = () => {
  return (
    <Card className="home" bordered={false}>
      <BackupForm/>
    </Card>
  );
}

export default Home;
