# Period Tracker App

A period tracker application.

### Software dependencies

Ensure you have a development environment setup for node and for android.

- [Android Studio](https://developer.android.com/studio 'Android Studio')
- [Node JS](https://nodejs.org/en/ 'Node')

<strong>Note:</strong> The recommended node version for this project is `v12.13.1`
<strong>Note:</strong> The recommended react native cli version for this project is `3.0.0-alpha.7`
<strong>Note:</strong> Follow the android studio setup recommended by react native. At the time of development the SDK build tools version used was `28.0.3` as indicated in the `build.gradle`.

These are recommendations based on what is known to work when the project was in initial development

Install react native cli:

```bash
npm i -g @react-native-community/cli@3.0.0-alpha.7
```

<strong>Note:</strong> It is not necessary to install typescript globally as it is installed as a dependency. However given that the project is a mono -repository it is crucial that the version of typescript is consistent throughout. This can be checked in the root directory with:

Install docker:

This is a virtual machine solution that interfaces with the kernel of the OS (basically cutting a number of middlewares out from traditional VM solutions).
The core interfacing parts of Period Tracker App are handled in containers and we will use the docker command line to get them working.

- [Docker Desktop](https://www.docker.com/ 'Docker')

You should log in / create a docker hub account to do test work (see Deploy the backend (CMS / API /Website) section).

- [Docker Desktop](https://www.docker.com/ 'Docker')

For a getting started guide on Docker see:

- [Docker Getting Started](https://docs.docker.com/get-started/ 'Docker Getting started')

Install yarn

Ensure you have the package manager `yarn` installed recommended by facebook.

- [Yarn install](https://classic.yarnpkg.com/en/docs/install/#mac-stable 'yarn install')

## Install

Clone the repository:

```bash
git clone git@github.com:alextyers/period-tracker-app.git
```

<strong>Note:</strong> the clone url may be different for different languages

Go to the root directory of the project:

```bash
cd period-tracker-app
```

Install the dependencies:

```bash
yarn
```

## Setup

After all dependencies are installed. Copy the following untraced files into the repository

### Environment config

Copy `.env.dist` to `.env`:

1. Copy api env file

   - `cd packages/api/`
   - `cp .env.dist .env`
   - change the following lines to the below:
     - DATABASE_SYNCHRONIZE=true
     - _This is to make sure that the database is created the first time and should be changed back to false after the first run_

2. Copy cms env file

   - Ensure you are in the root directory (and then change to `cms` as shown below)
   - `cd packages/cms/`
   - `cp .env.dist .env`

3. Copy mobile env file

   - Ensure you are in the root directory (and then change to `mobile` as shown below)
   - `cd packages/mobile/`
   - `cp .env.production .env`
   - change the following lines to the below:
     - API_BASE_URL=http://localhost:3000
     - API_BASE_CMS_URL=http://localhost:5000

4. Add a config.ts

- Add config.ts file to `packages/components/src/redux/`
- This is for redux persist encryption on the local device
- It should look like:

```
export const config = {
  REDUX_ENCRYPT_KEY: 'Example_Encryption_Key',
}
```

### config

Setup your own Firebase Project for your application and add in the config JSON file.

It should then be pasted into `period-tracker-app/packages/cms/period-tracker-app-firebase-config.json` alongside the `ormconfig.ts` file.
This file serves to link the related functionality between the app and dashboard (dashboard).

### Build the backend/website/cms/api for development

In order to test the app -api-cms interaction you will have to build the docker images for development by simply running the command in the root:

```bash
docker-compose build
```

## Start the backend/website/cms/api

To run the backend/website/cms and api simply run the command (ensure the images are built):

```bash
yarn dev
```

- _Note: Ensure DATABASE_SYNCHRONIZE=true the first time you run so that the DB tables can be created_

If the database was not created successfully the cms container will exit but the api/website/database should still be running.
Running services include

- Database (DB): Access the database at [http://localhost:8080/](http://localhost:8080/)
- API: Access the API at [http://localhost:3000/](http://localhost:3000/)
- CMS: Access the database at [http://localhost:5000/login](http://localhost:5000/login)

- Development DB credentials:

  - System: PostgresSQL
  - Server: postgres
  - DB Name: oky
  - User Name: oky
  - password: oky

- CMS Credentials:
  - Username: PeriodTrackerAppAdmin
  - Password: password

### Run a manual migration

Currently the migration is not automatic and should be run manually. A development database is currently available in `period-tracker-app/packages/cms/src/migrations/stale-database.txt`
and should be run as a SQL command in the adminer container once on environment setup.

Open up the database at [http://localhost:8080/](http://localhost:8080/), login and open a manual SQL commnad. Use the stale databse above to drop / create and insert all the relevant tables
There are 2 views that are setup. Ensure they are not Tables. These 2 views and their relevant SQL query can be found at `packages/cms/src/migrations`.

You may need to relaunch the deployment at this point if synchronize is turned on.
Stop the metro (ctrl+c) and stop the containers `docker-compose down` and re-run `yarn dev`. You should see success commands from the api and cms with which port they have started on.

## Start react native

### Run react native

Start the simulator, then run react-native for android:

```bash
cd packages/mobile
react-native run-android
```

Remember to reverse the ports to have access to the functionality of the api/cms. All should run at this point. If there are android build errors. Try open the project in Android Studio, clean build and re-sync the gradle files.

## Start the backend

Using docker and docker-compose, just run:

```bash
docker-compose build
```

Then start the containers with:

```bash
docker-compose up
```

If you are running the react native application on a device and you want to make all the services available to it run:

```bash
yarn reverse:all-ports
```

Or for just a single service (in this case API) run:

```bash
adb reverse tcp:3000 tcp:3000
```

If you want to install a npm module, without re-building the docker images, just run:

```bash
docker-compose exec server yarn add moment
```

If you want sync the public folder to dist directory, run:

```bash
docker-compose exec server yarn copy-static-assets
```

but, if you pull dependencies changes from other people, remember to:

```bash
docker-compose down && docker-compose build
```

and restart it again.

## Deploy the backend (CMS / API /Website)

- Build the docker containers for production:

```bash
docker-compose -f docker-compose.yml build --no-cache
```

- Tag each container:

```
docker tag period-tracker-app_<RELEVANT_CONTAINER>:latest <DOCKER_HUB_ACCOUNT_NAME>/<RELEVANT_CONTAINER>:v<VERSION_NUMBER>
```

eg:

```
docker tag period-tracker-app_cms:latest mydockeraccount/cms:v9
```

- Push each container:

```
docker push <DOCKER_HUB_ACCOUNT_NAME>/<RELEVANT_CONTAINER>:v<VERSION_NUMBER>
```

eg:

```
docker push mydockeraccount/cms:v9
```

- Now your container has been pushed to your account. Its time to apply that to the kubernetes cluster:
  (Note: You should make sure your kubernetes cluster is connected to the appropriate Docker Hub account)

-Checkout the k8s branch `git checkout k8s`

-Navigate to the relevant .yaml file in the k8s directory in the root of the project (ie for cms it will be `k8s/cms.yaml`)

-Bump the version number to the version of the container that was just pushed (ie v9 in the example)

-Run the following command (substitute cms for whatever container) from the root:

```
kubectl apply -f .k8s/cms.yaml
```

You are done. If you navigate to the cluster you should see updated versions on the containers.

## Deploy the APK

Add to `packages/mobile/android/local.properties`:

```
STORE_FILE=periodtrackerapp.keystore
STORE_PASSWORD=**(NotPublic)**
KEY_ALIAS=periodtrackerapp
KEY_PASSWORD=**(NotPublic)**
```

<strong>Note:</strong> Add your own key alias and key passwords with your own key store to release your own variant. `**(NotPublic)**` should be replaced. For releases to the main application request the appropriate information/ keystore files from `okyperiodtracker@gmail.com`.

<strong>Note:</strong> Do not forget to add you sdk and ndk file directories specific to your development environment:

```
// example depends on OS and specific environment set up
ndk.dir=/Users/**My_USER_NAME**/Library/Android/sdk/ndk-bundle
sdk.dir=/Users/**My_USER_NAME**/Library/Android/sdk
//... remainder of the local.properties
```

You will also need to ensure a few things:

- The build version has been bumped in `app/build.gradle`
- The firebase config .json has been included and is configured (the name matches) as mentioned above.
- You have cleaned and synced gradle files. Do it twice just to be sure ;)

Build the apk for release with (remember to sync your gradle files!):

```bash
cd packages/mobile/android
./gradlew assembleRelease
```

## Common commands

How install packages:

```bash
yarn workspace @period-tracker-app/mobile add react-native-linear-gradient
yarn workspace @period-tracker-app/components add redux
```

How run the backend in production mode:

```bash
docker-compose -f docker-compose.yml build --no-cache
docker-compose -f docker-compose.yml up
```

## Tips

### Running Tests

- There are a few unit tests added and can be expanded upon as needed.

- Two test suites can be run from the root:

1. `yarn run test:prediction-engine` runs the prediction engine test suite
2. `yarn run test:saga` runs the redux and sagas test suite
3. `yarn run test:all` will run both consecutively

### Type script errors

If you install a package and adjust the typescript version from an upgrade operation remember that typescript has / will change in the future. Make sure you have a single version across the mono repository by running:

```bash
cat yarn.lock | grep typescript
```

If there are multiple versions of typescript it may be necessary to revert:

```
git checkout origin/master -- yarn.lock // this is only necesarry if you have typescripting errors
```

### VSCode

Open the Period Tracker App project with [VS Code](https://code.visualstudio.com/), and install the following extensions:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
  You can turn on format-on-save by scoping the setting:

  ```json
  "editor.formatOnSave": false,
  ```

- [React Native Full Pack](https://marketplace.visualstudio.com/items?itemName=kelset.rn-full-pack)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

### React Developer Tools

You can use it to debug the React component hierarchy. Run:

```bash
yarn devtools
```

If you're not in a simulator then you also need to run the following in a command prompt:

```bash
adb reverse tcp:8097 tcp:8097
```

### Redux devtools

```bash
cd packages/mobile
yarn remotedev
```

Open [http://localhost:8000](http://localhost:8000), then lunch the application. You may need to run:

```bash
adb reverse tcp:8000 tcp:8000
```

### Language Changing

During Onboarding there is a region selection tool. If the user selects Indonesia they can no longer adjust their region. This was an intended feature to satisfy a requirement during development. This serves as a good development example of one way language changing if the feature were ever to be reintroduced. Please see 'docs/docs_change_lang' Readme for further information on removing this.
