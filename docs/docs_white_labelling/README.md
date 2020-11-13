# White labeling the app

A guide on removal for all brand specific assets: separated into:

- App
- CMS
- Website

Note: there will be UI implications here as the assets occupy physical screen space. Decisions will need to be case by case on whether the remaining UI is centered / filled etc.

## App

### Remove the assets themselves

- Navigate to the `packages/components/src/assets`

- The folders of relevance here will be `general`,`static` and potentially the `avatars`/ `lottie` section as they may be considered branding.

- Delete the relevant images within each of these folders, broad examples include:

  - `general/unicef_logo.png`, `general/icn_oky_brand_full.png`
  - `static/icn_oky` etc.

- Open the `index.ts` and remove all keys here that required those images.

### Remove all references to the assets and make adjustments

- This is an extensive process and as mentioned will be case by case. This will be an overview with a detailed example:

- In order to ensure every possible image reference is removed, good use of the search feature will prove helpful.
  - Take note of the keys removed above and search for those keys in the `components` directory
  - You will find one or multiple `<Image source={exampleKey}></Image>`.
  - At this point you can simply remove this image tag piece of code but you risk impacting the UI. Here are a couple alternatives:
    - Replace the source with a new icon source applicable to the replacement (minimal UI impact)
    - Replace the Image tag with an empty view with the same styling and a transparent background: `<View style={oldImageStyle}></View>`
- Rinse and repeat for all removed assets

## CMS

### Remove the assets themselves

- Navigate to the `packages/cms/public/assets/images`

- Delete the relevant images here, (there aren't many):

  - `oky_logo.png`, `favicon.ico`

- There is no index here and the images are directly required in the tags.

### Remove all references to the assets and make adjustments

- This is an extensive process and as mentioned will be case by case. This will be an overview with a detailed example:

- In order to ensure every possible Image reference is removed good use of the search feature will prove helpful.
  - Take not of the keys removed above and search for those keys in the `cms` directory
  - You will find one or multiple `<img src="exampleKey" alt="" class="some_class">`.
  - At this point you can simply remove this image tag piece of code but you risk impacting the UI. Here are a couple alternatives:
    - Replace teh source with a new icon source applicable to the replacement (minimal UI impact)
    - Replace the Image tag with an empty view with same styling and a transparent background: `<div style={oldImageStyle}></div>`
- Rinse and repeat for all removed assets

## Website

### Remove the assets themselves

- Navigate to the `packages/website/src/img`

- The folders of relevance here will be `desktop`,`favicon` and `mobile`

- Delete the relevant images within each of these folders, broad examples include:

  - `desktop/img_oky.png`, `desktop/logo_oky.png`

- There is no index here and the images are directly required in the tags.

### Remove all references to the assets and make adjustments

- This is an extensive process and as mentioned will be case by case. This will be an overview with a detailed example:

- In order to ensure every possible Image reference is removed good use of the search feature will prove helpful.
  - Take not of the keys removed above and search for those keys in the `website` directory
  - You will find one or multiple `<img src="exampleKey" alt="" class="some_class">`.
  - At this point you can simply remove this image tag piece of code but you risk impacting the UI. Here are a couple alternatives:
    - replace teh source with a new icon source applicable to the replacement (minimal UI impact)
    - Replace the Image tag with an empty view with same styling and a transparent background: `<div style={oldImageStyle}></div>`
- Rinse and repeat for all removed assets

- A good glance over the `main.js` would be advised to ensure the javascript is not trying to manually set the source attributes. An example would be the `.lang-button` click event.
