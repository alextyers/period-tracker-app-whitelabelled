const fs = require('fs')
// to convert different languages import here
const chosenLang = 'mn'
const lang = require(`./${chosenLang}.ts`)
const languageContent = lang[chosenLang]

const about = [
  { type: 'CONTENT', content: languageContent.about_content_1 },
  { type: 'HEADING', content: languageContent.about_heading_1 },
  { type: 'CONTENT', content: languageContent.about_content_2 },
  { type: 'HEADING', content: languageContent.about_heading_2 },
  { type: 'CONTENT', content: languageContent.about_content_3 },
  { type: 'CONTENT', content: languageContent.about_content_4 },
  { type: 'CONTENT', content: languageContent.about_content_5 },
  { type: 'HEADING', content: languageContent.about_heading_3 },
  { type: 'CONTENT', content: languageContent.about_content_6 },
  { type: 'HEADING', content: languageContent.about_heading_4 },
  { type: 'CONTENT', content: languageContent.about_content_7 },
  { type: 'HEADING', content: languageContent.about_heading_5 },
  { type: 'CONTENT', content: languageContent.about_content_8 },
  { type: 'CONTENT', content: languageContent.about_content_9 },
]

const privacy = [
  { type: 'HEADING', content: languageContent.privacy_heading_1 },
  { type: 'CONTENT', content: languageContent.privacy_content_1 },
  { type: 'CONTENT', content: languageContent.privacy_content_1_1 },
  { type: 'HEADING', content: languageContent.privacy_heading_2 },
  { type: 'CONTENT', content: languageContent.privacy_content_2 },
  { type: 'HEADING', content: languageContent.privacy_heading_3 },
  { type: 'HEADING', content: languageContent.privacy_heading_4 },
  { type: 'CONTENT', content: languageContent.privacy_content_3 },
  { type: 'HEADING', content: languageContent.privacy_heading_5 },
  { type: 'CONTENT', content: languageContent.privacy_content_4 },
  { type: 'CONTENT', content: languageContent.privacy_content_5 },
  { type: 'CONTENT', content: languageContent.privacy_content_6 },
  { type: 'CONTENT', content: languageContent.privacy_content_7 },
  { type: 'CONTENT', content: languageContent.privacy_content_8 },
  { type: 'CONTENT', content: languageContent.privacy_content_9 },
  { type: 'CONTENT', content: languageContent.privacy_content_10 },
  { type: 'HEADING', content: languageContent.privacy_heading_6 },
  { type: 'CONTENT', content: languageContent.privacy_content_11 },
  { type: 'CONTENT', content: languageContent.privacy_content_12 },
  { type: 'CONTENT', content: languageContent.privacy_content_13 },
  { type: 'HEADING', content: languageContent.privacy_heading_7 },
  { type: 'CONTENT', content: languageContent.privacy_content_14 },
  { type: 'CONTENT', content: languageContent.privacy_content_15 },
  { type: 'HEADING', content: languageContent.privacy_heading_8 },
  { type: 'CONTENT', content: languageContent.privacy_content_16 },
  { type: 'CONTENT', content: languageContent.privacy_content_17 },
  { type: 'CONTENT', content: languageContent.privacy_content_18 },
  { type: 'HEADING', content: languageContent.privacy_heading_9 },
  { type: 'CONTENT', content: languageContent.privacy_content_19 },
  { type: 'CONTENT', content: languageContent.privacy_content_20 },
  { type: 'CONTENT', content: languageContent.privacy_content_21 },
  { type: 'HEADING', content: languageContent.privacy_heading_10 },
  { type: 'CONTENT', content: languageContent.privacy_content_22 },
  { type: 'HEADING', content: languageContent.privacy_heading_11 },
  { type: 'CONTENT', content: languageContent.privacy_content_23 },
  { type: 'CONTENT', content: languageContent.privacy_content_24 },
  { type: 'CONTENT', content: languageContent.privacy_content_25 },
  { type: 'CONTENT', content: languageContent.privacy_content_26 },
  { type: 'HEADING', content: languageContent.privacy_heading_12 },
  { type: 'CONTENT', content: languageContent.privacy_content_27 },
  { type: 'HEADING', content: languageContent.privacy_heading_13 },
  { type: 'CONTENT', content: languageContent.privacy_content_28 },
  { type: 'CONTENT', content: languageContent.privacy_content_29 },
]

const termsAndConditions = [
  { type: 'HEADING', content: languageContent.t_and_c_heading_1 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_2 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_3 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_1 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_2 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_4 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_3 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_4 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_5 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_5 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_6 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_6 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_7 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_7 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_8 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_8 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_9 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_9 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_10 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_10 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_11 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_11 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_12 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_12 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_13 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_14 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_15 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_13 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_17 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_18 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_14 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_19 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_15 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_20 },
  { type: 'HEADING', content: languageContent.t_and_c_heading_16 },
  { type: 'CONTENT', content: languageContent.t_and_c_content_21 },
]

const essayArray = [privacy, termsAndConditions, about]
const essayArrayNames = ['privacy', 'termsAndConditions', 'about']

essayArray.map((e, i) => {
  const name = `textDumps_sql_${chosenLang}/${essayArrayNames[i]}.json`
  let bigString = ''
  let itemsArray = []
  e.map(item => {
    itemsArray.push(
      `{"type":"${item.type}", "content":${JSON.stringify(
        item.content.replace(/^\s+|\s+$/g, '').replace(/\'/g, `’`),
      )}}`,
    )
  })
  bigString = itemsArray.join(',\n')
  bigString = `[${bigString}]`
  fs.writeFile(name, bigString, function(err) {
    if (err) return console.log(err)
    console.log(err)
  })
})
