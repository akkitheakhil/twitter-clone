# Twitter Clone 2.0 (in-progress)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

A Twitter clone build using Angular 13 and Firebase. It uses NgRx for state management and reactive programming design pattern.

- Angular + Firebase + NgRx

## Features completed

- Login
- Sign-up
- Profile creation
- Feed - Display posted tweets
- Profile card - Userinfo
- Post new tweet

* Screenshots

![Twitter Clone 2.0](/screenshot.PNG)

## Environment Variables

The environment variables can be found and modified in the `.env-sample` file. First, rename the file to `.env`.
They come with these default values:

```bash
PRODUCTION=false
API_BASE_URL=<API_URL>
FIREBASE_API_KEY=<FIREBASE_API_KEY>
FIREBASE_AUTH_DOMAIN=<FIREBASE_AUTH_DOMAIN>
FIREBASE_PROJECT_ID=<FIREBASE_PROJECT_ID>
FIREBASE_STORAGE_BUCKET=<FIREBASE_STORAGE_BUCKET>
FIREBASE_MESSAGING_SENDER_ID=<FIREBASE_MESSAGING_SENDER_ID>
FIREBASE_APP_ID=<FIREBASE_APP_ID>
FIREBASE_MEASUREMENT_ID=<FIREBASE_MEASUREMENT_ID>
```

# Pre-reqs

To build and run this app locally you will need a few things:

- Setup .env variables with your firbase app configs
- Run command - Run `npm run config`, which will use .env variables to environment files in angular app

  \*(Config command is added to scripts for build, serve)

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/twitter-clone` directory.
