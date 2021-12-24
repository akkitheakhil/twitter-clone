const fsWrite = require('fs').writeFile;

const environmentPaths = ['./src/environments/environment.prod.ts', './src/environments/environment.ts'];
const envConfig = `export const environment = {
  production: false,
  apiBaseUrl: '',
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    measurementId: '',
  }
};
`;

environmentPaths.forEach(filePath => {
  fsWrite(filePath, envConfig, function (err) {
    if (err) {
      throw console.error(err);
    } else {
      console.log(`Successfully created 'cleaned' environment file: ${filePath}`);
    }
  });
});
