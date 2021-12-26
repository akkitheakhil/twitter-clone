const writeFile = require('fs').writeFile;
// Configure Angular `environment.ts` file path
const environmentFilePaths = ['./src/environments/environment.prod.ts', './src/environments/environment.ts'];

// Load node modules
const colors = require('colors');
const dotevn = require('dotenv');
dotevn.config();
// `environment.ts` file structure
const envConfigFile = `export const environment = {
  production: ${process.env["PRODUCTION"]},
  apiBaseUrl: '${process.env["API_BASE_URL"]}',
  firebase: {
    apiKey: '${process.env["FIREBASE_API_KEY"]}',
    authDomain: '${process.env["FIREBASE_AUTH_DOMAIN"]}',
    projectId: '${process.env["FIREBASE_PROJECT_ID"]}',
    storageBucket: '${process.env["FIREBASE_STORAGE_BUCKET"]}',
    messagingSenderId: '${process.env["FIREBASE_MESSAGING_SENDER_ID"]}',
    appId: '${process.env["FIREBASE_APP_ID"]}',
    measurementId: '${process.env["FIREBASE_MEASUREMENT_ID"]}'
  }
};
`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
environmentFilePaths.forEach(filePath => {
  writeFile(filePath, envConfigFile, function (err: any) {
    if (err) {
      throw console.error(err);
    } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${filePath} \n`));
    }
  });
});

