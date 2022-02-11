import { useState } from 'react';

const { exec, execSync } = window.require('child_process')

const useMongoBackup = () => {
  const [docker, setDocker] = useState({});
  
  const makeBackup = () => {
    setDocker({ loading: true });

    exec('docker-compose up -d', (error, stdout) => {
      if (error) {
        setDocker({ error });
      } else {
        const dockerContainers = execSync('docker container ls').toString().split('\n');
        const mongoContainer = dockerContainers.find((line) => line.indexOf('mongo') !== -1);
        const mongoContainerID = mongoContainer.slice(0, mongoContainer.indexOf(' '));

        setDocker({ containerID: mongoContainerID });
      }

      return () => exec(`docker stop ${docker.containerID}`);
    });
  }

  return { ...docker, makeBackup };
}

export default useMongoBackup;
