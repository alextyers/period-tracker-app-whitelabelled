export const analyticsQueries = {
  usersLocations: `
    SELECT 
    COUNT(CASE location WHEN 'Urban' then 1 else null end) as total_urban,
    COUNT(CASE location WHEN 'Rural' then 1 else null end) as total_rural
    FROM oky_user
    `,
  usersGender: `
    SELECT 
    COUNT(CASE gender WHEN 'Female' then 1 else null end) as total_female, 
    COUNT(CASE gender WHEN 'Male' then 1 else null end) as total_male,
    COUNT(CASE gender WHEN 'Other' then 1 else null end) as total_other
    FROM oky_user
    `,
  usersAgeGroups: `
    SELECT SUM(CASE WHEN (DATE_PART('year', now()::date) - DATE_PART('year', date_of_birth)) < 5 THEN 1 ELSE 0 END) AS under_5,
    SUM(CASE WHEN (DATE_PART('year', now()::date) - DATE_PART('year', date_of_birth)) BETWEEN 5 AND 10 THEN 1 ELSE 0 END) AS between_5_10,
    SUM(CASE WHEN (DATE_PART('year', now()::date) - DATE_PART('year', date_of_birth)) BETWEEN 11 AND 13 THEN 1 ELSE 0 END) AS between_11_13,
    SUM(CASE WHEN (DATE_PART('year', now()::date) - DATE_PART('year', date_of_birth)) BETWEEN 14 AND 15 THEN 1 ELSE 0 END) AS between_14_15,
    SUM(CASE WHEN (DATE_PART('year', now()::date) - DATE_PART('year', date_of_birth)) BETWEEN 16 AND 18 THEN 1 ELSE 0 END) AS between_16_18,
    SUM(CASE WHEN (DATE_PART('year', now()::date) - DATE_PART('year', date_of_birth)) BETWEEN 19 AND 20 THEN 1 ELSE 0 END) AS between_19_20,
    SUM(CASE WHEN (DATE_PART('year', now()::date) - DATE_PART('year', date_of_birth)) > 20 THEN 1 ELSE 0 END) AS greater_than_20
    FROM oky_user
    `,
  usersCountries: `
    SELECT
    country,
    COUNT(*) as value
    FROM oky_user
    GROUP BY country
  `,
  usersProvince: `
    SELECT
    country,
    province,
    COUNT(*) as value
    FROM oky_user
    GROUP BY province, country
  `,
  answeredQuizzesByID: `
    SELECT id,
    COUNT(*) as total_answers,
    COUNT(CASE isCorrect WHEN 'true' then 1 else null end) as total_correct, 
    COUNT(CASE isCorrect WHEN 'false' then 1 else null end) as total_incorrect,
    COUNT(CASE answerID WHEN '1' then 1 else null end) as total_option1,
    COUNT(CASE answerID WHEN '2' then 1 else null end) as total_option2,
    COUNT(CASE answerID WHEN '3' then 1 else null end) as total_option3
    FROM answered_quizzes
    GROUP BY id
    `,

  answeredSurveysByID: `
    SELECT id, 
    COUNT(CASE answerID WHEN '1' then 1 else null end) as total_option1,
    COUNT(CASE answerID WHEN '2' then 1 else null end) as total_option2,
    COUNT(CASE answerID WHEN '3' then 1 else null end) as total_option3,
    COUNT(CASE answerID WHEN '4' then 1 else null end) as total_option4,
    COUNT(CASE answerID WHEN '5' then 1 else null end) as total_option5
    FROM answered_surveys
    GROUP BY id
  `,
  usersShares: `
    SELECT
    DATE_TRUNC('day', created_at) AS date,
    COUNT(*) as value
    FROM app_event
    WHERE type = 'SHARE_APP'
    GROUP BY DATE_TRUNC('day', created_at)
    ORDER BY date
  `,
  directDownloads: `
    SELECT
    DATE_TRUNC('day', date_created) AS date,
    COUNT(*) as value
    FROM analytics
    WHERE type = 'DIRECT_DOWNLOAD'
    GROUP BY DATE_TRUNC('day', date_created)
    ORDER BY date
  `,
}
