# How to change to multiple languages

A guide on how to port the app to other languages. There are a few moving parts here when changing the language for a new app. Namely

- App
- API
- CMS

## App

- The bundle identifier is going to need to change here. This is a platform specific change and a tool like `react-native-rename`can be used. Alternatively manually changing the bundle identifier is (`com.periodtrackerapp.newIdentifier`) and all known references followed by a removal of all node modules / clean / re-sync and rebuild will be sufficient
  Note: Removal of node_modules and reinstall is a necessity, do not skip this.

- You will then need to add the relevant translations to the `packages/components/i18n/translations` file. Using the `en.ts` as a base line for teh translation keys this can be copied and pasted with the appropriate locale identifier. Ensure this is added to teh `index.ts` in the same directory

- If you want to fix the locale of the new app, adjustments to the `packages/components/redux/reducers/appReducer` will be necessary. Adjust the `currentLocale`and `chosenRegion` to the required locale.

- If you want to allow for switching between locales, additions to the `packages/components/common/LanguageSelect.tsx` will be required. Render this where appropriate. All locations of the `LanguageSelect.tsx` can be searched for and removed / relocated / selectively rendered and changed as desired. See below for manual locale adjustment.

- There is an option to have one way locale changes referred to as Penal Code. This was a feature that was added as part of an initial requirement and serves as a good example for the locale and language changing in the app. Searching in the code base for `@TODO: PENAL CODE` comments and following the instructions there or removing the relevant code will remove the penal code functionality in its entirety.

- One final piece to remove the penal code is the penal code card on the onboarding journey. This code is a self contained entity made with removal in mind. It is located at `packages/components/screens/onboardingScreen/PenalCodeCard.tsx`. This should be removed if so desired as well as its' single line inclusion in the onboarding journey: `packages/components/screens/OnboardingScreen.tsx`.

- If you don't want the language select bar or the UI has changed the interface to the redux store is simply: `dispatch(actions.setLocale(lang))`

- The base API URL is going to need to point to the appropriate hosted api endpoint. This can be changed in `packages/mobile/env.production`

### API

- No major changes here except for the base url.

- The database credentials will need to be adjusted `packages/api/env.dist` as well as in the kubernetes .yaml file located in the `k8s` branch. See deployment guide.

### CMS

- The database credentials will need to be adjusted `packages/cms/env.dist` as well as in the kubernetes .yaml file located in the `k8s` branch. See deployment guide.

- Again the translations for the front end pages will need to change (see the steps in the App section). The folder is located at `packages/cms/src/i18n/translations`

- Important to keep in mind is that all manual SQL queries will need to target there specific schema if a separate schema is used in the configuration.

- Locales are configured with the standard i18n library and can be reconfigured in the `packages/cms/src/index.ts` file.
