const fsWrite = require('fs').writeFile;

const environmentPaths = ['./src/environments/environment.prod.ts', './src/environments/environment.ts'];
const envConfig = `export const environment = {
  production: false,
  apiBaseUrl: '',
};
`;

environmentPaths.forEach(filePath => {
  fsWrite(filePath, envConfig, function (err: any) {
    if (err) {
      throw console.error(err);
    } else {
      console.log(`Successfully created 'cleaned' environment file: ${filePath}`);
    }
  });
});
