import { MigrationInterface, QueryRunner } from 'typeorm'

export class ContentUpdate implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        CREATE TABLE "public"."about" (
            "id" integer DEFAULT nextval('about_id_seq') NOT NULL,
            "json_dump" character varying NOT NULL,
            "timestamp" timestamp NOT NULL,
            "lang" character varying NOT NULL,
            CONSTRAINT "PK_e7b581a8a74d0a2ea3aa53226ee" PRIMARY KEY ("id")
        ) WITH (oids = false);
    `)
    await queryRunner.query(`
        CREATE TABLE "public"."terms_and_conditions" (
            "id" integer DEFAULT nextval('terms_and_conditions_id_seq') NOT NULL,
            "json_dump" character varying NOT NULL,
            "timestamp" timestamp NOT NULL,
            "lang" character varying NOT NULL,
            CONSTRAINT "PK_e7b581a8a74d0a2ea3aa53226ee" PRIMARY KEY ("id")
        ) WITH (oids = false);
    `)
    await queryRunner.query(`
        CREATE TABLE "public"."privacy_policy" (
            "id" integer DEFAULT nextval('privacy_policy_id_seq') NOT NULL,
            "json_dump" character varying NOT NULL,
            "timestamp" timestamp NOT NULL,
            "lang" character varying NOT NULL,
            CONSTRAINT "PK_e7b581a8a74d0a2ea3aa53226ee" PRIMARY KEY ("id")
        ) WITH (oids = false);
    `)
    // ----------------- Data -------------------
    // @TODO: make these queries content up to date
    await queryRunner.query(`
        INSERT INTO "privacy_policy" ("id", "json_dump", "timestamp", "lang") VALUES
        (1,	'[{"type":"HEADING", "content":"OKY PRIVACY POLICY"},
        {"type":"CONTENT", "content":"Taking care of your information is important to Oky. We do our best so that the information you enter into the app is kept as private and as safe as possible. The information that you share about your menstrual cycle is very personal and we respect that.\n\nWhen you enter information into the app, Oky uses technology to turn that ‘data’ into helpful information that can help you learn more about your menstrual cycle patterns, to enable you to take control of your body and your health: for example, by giving you information about managing menstruation or pain.\n\nWe aim for the highest standards of privacy and security and we are committed to being transparent about how we process and use data."},
        {"type":"CONTENT", "content":"This Privacy Policy explains what happens to the data you enter when you track your period: how your information is collected, stored and used, and what steps we take to ensure your data stays safe.\n\nPlease read our Privacy Policy carefully before using Oky and refer back to it regularly to check for updates. Remember, by accessing and using the app or website, you agree to this Privacy Policy\n\nOky is made by UNICEF. Please do not hesitate to contact us if you have any questions about the use of data in Oky. There is a contact form on the Oky website:"},
        {"type":"HEADING", "content":"1. What information does Oky collect about you?"},
        {"type":"CONTENT", "content":"For the purpose of this Privacy Policy, “Personal Information” means any information that enables us to identify an individual, directly or indirectly, by reference to an identifier such as name, identification number, location data, online identifier or one or more factors specific to the individual.\n\nDescribed below are the purposes for which we obtain and process personal information and the sources and types of data processed for these purposes:"},
        {"type":"HEADING", "content":"1.1 To provide you with our services and to understand your needs"},
        {"type":"HEADING", "content":"Login information"},
        {"type":"CONTENT", "content":"In order to use the period tracker functions on the app, you need to create a login. During login creation, we ask you for a display or user name, date of birth, gender and location. We encourage you to select a display name that does not disclose your real name or other information that could identify you – especially if you are under the age of 18."},
        {"type":"HEADING", "content":"Device data"},
        {"type":"CONTENT", "content":"On the app, we collect information on the device you use to access Oky’s services, such as the model, operating system, language, location and the session’s duration."},
        {"type":"CONTENT", "content":"When you use the app, we and our third-party service providers process data about how you are interacting with the app. We use an App center together with some custom created tracking features to record these interactions."},
        {"type":"CONTENT", "content":"We do this to understand your usage of our services, for example which functions of the app you are using and to ensure all the features provided by the app are  functioning properly. We collect this information and use it to better understand which features are most useful to all our users and to communicate with you about the app and its services. \n \n \nFor instance, we are currently tracking whether the user is modifying the start of their period, as this provides insightful information regarding the accuracy of the predictions."},
        {"type":"CONTENT", "content":"We also do this to enable us to send reminders to your smartphone via in-app messages and push notifications. You can change how you receive notifications in the app and on your device at any time by going to Settings."},
        {"type":"CONTENT", "content":"In summary, we process this data to give you the best service possible through Oky."},
        {"type":"CONTENT", "content":"We do not process personal data that identifies you as a person (such as your first name, surname, email) or health-related data."},
        {"type":"CONTENT", "content":"Similarly, we use Google Analytics to track a user’s interactions with the website. This will allow us to assess which pages have been visited the most, the duration of each visit etc."},
        {"type":"HEADING", "content":"How this information is collected"},
        {"type":"CONTENT", "content":"On our website (https://okyapp.info/), we use cookies, which are small text files which identify your computer, phone, and other devices to our server. By using the website, you consent to the placement of cookies and similar technologies in your browser in accordance with this Privacy Policy. The information collected in this manner through the website includes your IP address, network location, what browser you are using, device IDs and characteristics, operating system version, language preferences, referring URLs, and information about the usage of our website."},
        {"type":"CONTENT", "content":"We also work with Google Analytics, which uses cookies and similar technologies to collect and analyze information about the use of the website and report on activities and trends. You can learn more about Google’s practices by going to https://www.google.com/policies/privacy/partners/."},
        {"type":"CONTENT", "content":"If you do not want information collected through the use of cookies, most browsers allow you to automatically decline cookies or be given the choice of declining or accepting the transfer to your computer of a particular cookie (or cookies) from a particular website. \n \n \nYou may also wish to refer to http://www.allaboutcookies.org/manage-cookies/index.html for more general information about cookies.  If, however, you do not accept our cookies, you may experience some inconvenience in your use of the website."},
        {"type":"HEADING", "content":"1.2 To give you personalized insights about your period and your health"},
        {"type":"CONTENT", "content":"The information you track using Oky about your health and activities is considered sensitive personal data. For the Oky app, most of the data is stored, including the user’s interaction with the prediction engine. \n \n \nThe user’s user name, language, theme and answers to the daily cards and quizzes are stored, and it is recorded if a user modifies their period prediction, shortens it, modifies current prediction etc."},
        {"type":"CONTENT", "content":"If the user deletes their account, all the data will be erased from the servers."},
        {"type":"HEADING", "content":"Health and sensitive data"},
        {"type":"CONTENT", "content":"Health data, such as dates of your past and current periods, and mood, body or activity events you track in the app (e.g. pain, bloating, exercise, sleep, menstrual flow) are collected and used to provide services to you – such as predicting future period dates or providing you with reminders or notifications related to menstruation and health. \n \n \nThe predictive technology used by Oky processes this data and provides you with information. However, your personal information in these regards is not shared with any other parties."},
        {"type":"CONTENT", "content":"Oky uses questions in the app to ask your feedback about the app, e.g. on the performance of the app or on the usefulness of the information Oky provides and your experience of using the app. \n \n \nInformation given by you via such surveys and questions is processed by Oky for the purposes as set out in this Privacy Policy."},
        {"type":"CONTENT", "content":"Information you enter in the Notes  remains completely private: this information is not collected, accessed or used by the app in any way."},
        {"type":"HEADING", "content":"Aggregate data"},
        {"type":"CONTENT", "content":"We may de-identify and aggregate information collected through the app for statistical analysis and other lawful purpose, including in research studies intended to improve our understanding of young people’s use of technology and digital tools. \n \n \nThe results of this research may be shared with third parties, such as our partners, supporters, educators and researchers through conferences, journals, and other publications. If we do this, all data will be aggregated and none of your data will be used to identify you: we will not process personal data that identifies you as a person (such as your first name, surname, email) or health-related data."},
        {"type":"CONTENT", "content":"Some further information that may be useful about your personal information and privacy:"},
        {"type":"CONTENT", "content":"i. We may use your Personal Information to enforce our Terms of Use, to defend our legal rights, and to comply with our legal obligations and internal policies.\n\nii. Oky has been designed to minimize the use of your personal data. We only collect and process your data for the purposes described above.\n\niii. The security of our servers is regularly checked by experts to ensure your data is protected from unauthorized access. You can contact us with any questions you may have about the security of our services, there is a contact form on the Oky website.\n\niv. We do not retain your data in an identifiable format for longer than necessary to deliver our services.\n\nv. As a user of Oky you may exercise your user rights to request information on your personal data processed by Oky. Upon your request, this information will be provided to you electronically."},
        {"type":"HEADING", "content":"2. Data Security"},
        {"type":"CONTENT", "content":"We use many reasonable measures – physical and electronic – to prevent your Personal Information against unauthorized access and disclosure. However, it is always a possibility that third parties may unlawfully intercept or access your Personal Information or private communications. \n \n \nSo, although we work extremely hard to safeguard your Personal Information, we cannot guarantee that your information or communications will always remain private."},
        {"type":"HEADING", "content":"Recommendations for protecting your data"},
        {"type":"CONTENT", "content":"We believe the biggest threat to the security and privacy of your data is if someone—probably someone you know—gains access to your device. The data you enter into Oky is private and it should stay that way. We have outlined some ways to keep your devices secure below."},
        {"type":"CONTENT", "content":"i. Activate a unique PIN or password code to create a login. Make it personal and not easy for others to guess. Do not use your date of birth or your name, for example. If you share your device with others, activating a unique PIN or password code will ensure you are the only person who can access your Oky-related data on the device."},
        {"type":"CONTENT", "content":"ii. Set up a feature that will allow you to erase all the data from your device if it’s lost or stolen."},
        {"type":"CONTENT", "content":"For Android, download and set up Find My Device (formerly Android Device Manager) from the Google Play Store and, if needed, use the connected web interface to lock or wipe your phone remotely."},
        {"type":"HEADING", "content":"3. Third parties websites"},
        {"type":"CONTENT", "content":"Our app or website may contain links to other sites that are not covered by this Privacy Policy. This Privacy Policy applies only to the processing of your Personal Information by Oky. It does not address, and we are not responsible for, the privacy, information, or other practices of any third parties, including any third party operating any site or service to which the website or app links. \n \n \nThe inclusion of a link on the website or app does not imply endorsement of the linked site or service by UNICEF. Please be aware that the terms of this Privacy Policy do not apply to these outside websites or content, or to any collection of data after you click on links to such outside websites."},
        {"type":"HEADING", "content":"4. Notifications of changes to the Privacy Policy"},
        {"type":"CONTENT", "content":"We review our security measures and our Privacy Policy and we may modify our policies as we deem appropriate. If we make changes to our privacy practices, we will post a notification to our website or app alerting that the Privacy Policy has been amended. \n \n\nSuch changes will be effective immediately upon posting them to our app or website. For this reason, we encourage you to check our Privacy Policy frequently.  The “Last Updated” date at the bottom of this page indicates when this Privacy Policy was last revised. \n \n \nYour continued use of our app or website following these changes means that you accept the revised Privacy Policy."},
        {"type":"CONTENT", "content":"Feel free to contact us if you require further information about this Privacy Policy. There is a contact form on the Oky website: https://okyapp.info/ \n\nLast updated: 16th October 2019"}]',	'2020-10-13 16:46:57.259',	'en'); 
    `)
    await queryRunner.query(`
        INSERT INTO "about" ("id", "json_dump", "timestamp", "lang") VALUES
        (1,	'[{"type":"CONTENT", "content":"Oky is a mobile phone app that helps girls to take control of their periods and their lives. Feel more confident by tracking your period, and getting the facts that all girls should know."},
        {"type":"HEADING", "content":"What is Oky?"},
        {"type":"CONTENT", "content":"Oky is a period tracking app designed for girls and by girls: it’s fun and positive because we want to reverse the shyness and bad feelings that periods can sometimes cause!"},
        {"type":"HEADING", "content":"Why did UNICEF create Oky?"},
        {"type":"CONTENT", "content":"UNICEF created Oky as part of its mission to promote girl’s education and health, by changing one of the world’s biggest taboos: menstruation."},
        {"type":"CONTENT", "content":"All women and girls have their periods. It’s natural. But girls still get shamed for it. They often lack information about what is happening to their bodies at a critical time in their lives when so much is changing."},
        {"type":"CONTENT", "content":"It can be difficult to find trustworthy, quality information online that is relevant. There is so much misinformation out there. All this can make periods stressful, when they don’t need to be. Oky is designed to help girls manage their periods with confidence, because girls should be able to make informed decisions about their bodies and their lives."},
        {"type":"HEADING", "content":"How did UNICEF create Oky?"},
        {"type":"CONTENT", "content":"We spent months talking to more than 400 girls in Mongolia and Indonesia about their periods, their fears, their hopes and their lives, and worked together to co-create Oky! Of course, we also worked with our education and medical experts to ensure that Oky reflect UNICEF’s ethics and its high health standards and guidelines."},
        {"type":"HEADING", "content":"How does Oky work?"},
        {"type":"CONTENT", "content":"OKY allows you to add information about your period, body, activities and mood, and based on this, provides predictions about you next period and ovulation cycle. There is a calendar, which acts as a diary and helps with reminders. Oky gives tips and motivation through games & quizzes too!"},
        {"type":"HEADING", "content":"How is Oky different?"},
        {"type":"CONTENT", "content":"Oky is different from other period tracking apps because it is aimed particularly at girls. Oky is not a business, it is a service for girls that aims to be inclusive and non-judgemental, and maintains the highest privacy and data protection standards."},
        {"type":"CONTENT", "content":"Oky is developed in an open way so others can learn from the process of creating a digital public health resource. This way, it can be useful to more people and contribute to changing the way our digital information is used for profit rather than for public good."}]',	'2020-10-13 16:46:57.259',	'en'); 
    `)
    await queryRunner.query(`
        INSERT INTO "terms_and_conditions" ("id", "json_dump", "timestamp", "lang") VALUES
        (1,	'[{"type":"HEADING", "content":"Oky Terms and Conditions"},
        {"type":"HEADING", "content":"By using Oky you accept these terms. If you do not agree to these terms, you must not use Oky."},
        {"type":"HEADING", "content":"Content"},
        {"type":"CONTENT", "content":"Oky is a way to monitor and learn about your menstrual cycle, as well as provide information  about your period and female health. The service is provided for free. \n\n\nPLEASE DO NOT USE “Oky” FOR CONTRACEPTIVE OR MEDICAL PURPOSES. IN CASE OF ANY INDIVIDUAL HEALTH ISSUES, CONSULT A MEDICAL PROFESSIONAL."},
        {"type":"CONTENT", "content":"Oky  is not intended to replace contraceptive measures and/or medical advice: it is only intended to provide information. By using Oky you agree to use it for the intended purpose only and particularly not for contraception and/or medical purposes."},
        {"type":"HEADING", "content":"Data and usage"},
        {"type":"CONTENT", "content":"Oky provides general informational content about female health, menstruation, fertility and related topics. It collects data that is entered by   users related to their menstrual cycle, physical activities, health and bodies. \n \n\nOky processes these  data points in correlation with medical information about the menstrual cycle (such as cycle length) and other female health information. \n\n\nThese combined data points allow the app to make associations and identify patterns between events related to the menstrual cycle and female health using simple mathematical/statistical formulas and algorithm-based calculations."},
        {"type":"CONTENT", "content":"For information about the data that we collect and use please see our Privacy Policy."},
        {"type":"HEADING", "content":"Content updates"},
        {"type":"CONTENT", "content":"Although UNICEF makes reasonable efforts to update the information on Oky, we make no representations, warranties or guarantees, whether express or implied, that the content on Oky is accurate, complete or up to date."},
        {"type":"HEADING", "content":"Changes to Terms and Conditions"},
        {"type":"CONTENT", "content":"UNICEF amends these terms from time to time. Every time you wish to use Oky, please check these terms to ensure you understand the terms that apply at that time."},
        {"type":"HEADING", "content":"Changes to the app"},
        {"type":"CONTENT", "content":"UNICEF may update and change Oky from time to time to provide updated information, links or provide new functionality and reflect changes to our users’ needs."},
        {"type":"HEADING", "content":"Suspension or withdrawal of the app"},
        {"type":"CONTENT", "content":"Oky is available free of charge. UNICEF does not guarantee that Oky, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of Oky for operational or other reasons. We will try to give you reasonable notice of any suspension or withdrawal."},
        {"type":"HEADING", "content":"Making other users aware of these Terms and Conditions"},
        {"type":"CONTENT", "content":"If anyone else uses Oky through your device, you are also responsible for ensuring that they are aware of these terms of use and other applicable terms and conditions, and that they comply with them."},
        {"type":"HEADING", "content":"Keeping login details safe"},
        {"type":"CONTENT", "content":"If you choose, or you are provided with, a user identification code, password or any other piece of information as part of UNICEF security procedures, you must treat such information as confidential. You must not disclose it to any third party."},
        {"type":"CONTENT", "content":"UNICEF has the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms of use."},
        {"type":"HEADING", "content":"Your location"},
        {"type":"CONTENT", "content":"By using Oky, you agree that the location you provide when signing up is accurate."},
        {"type":"HEADING", "content":"External links and resources"},
        {"type":"CONTENT", "content":"Oky may link to other websites and resources that are not under UNICEF’s control. The inclusion of such links does not imply an endorsement or approval by UNICEF of any website, product or service."},
        {"type":"CONTENT", "content":"UNICEF does not assume any responsibility or liability in respect of such websites, including, for example, responsibility or liability for the accuracy or reliability of any information, data, opinions, advice or statements made on those web sites."},
        {"type":"CONTENT", "content":"Everything on this site is for you and your peers, not for commercial use."},
        {"type":"HEADING", "content":"Loss or damage"},
        {"type":"CONTENT", "content":"We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation."},
        {"type":"CONTENT", "content":"Please note that we only provide Oky for personal, domestic and private use. You agree not to use Oky for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity."},
        {"type":"HEADING", "content":"Your personal information"},
        {"type":"CONTENT", "content":"We will only use your personal information as set out in our Privacy Policy."},
        {"type":"HEADING", "content":"Disputes"},
        {"type":"CONTENT", "content":"These  terms of use, their subject matter and their formation, are governed by US law. The courts of the US will have exclusive jurisdiction."},
        {"type":"HEADING", "content":"UNICEF name and emblem"},
        {"type":"CONTENT", "content":"The UNICEF name and emblem are the exclusive property of UNICEF. They are protected under international law. Unauthorized use is prohibited. They may not be copied or reproduced in any way without the prior written permission of UNICEF. If you have any questions about this please contact UNICEF."}]',	'2020-10-13 16:46:57.259',	'en'); 
    `)
  }
  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS "terms_and_conditions";
        DROP SEQUENCE IF EXISTS terms_and_conditions_id_seq;
    `)
    await queryRunner.query(`
        DROP TABLE IF EXISTS "about";
        DROP SEQUENCE IF EXISTS about_id_seq;
    `)
    await queryRunner.query(`
        DROP TABLE IF EXISTS "privacy_policy";
        DROP SEQUENCE IF EXISTS privacy_policy_id_seq;   
    `)
  }
}
