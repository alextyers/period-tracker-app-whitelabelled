import { MigrationInterface, QueryRunner } from 'typeorm'

export class AnalyticsMaterializedViews implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        CREATE VIEW answered_quizzes
        AS
        SELECT payload ->> 'id' as id, payload ->> 'question' as question, payload ->> 'isCorrect' as isCorrect, payload ->> 'answerID' as answerID, payload ->> 'answer' as answer, payload ->> 'utcDateTime' as date
        FROM app_event
        WHERE type = 'ANSWER_QUIZ'
    `)
    await queryRunner.query(`
        CREATE VIEW answered_surveys
        AS
        SELECT payload ->> 'id' as id, payload ->> 'question' as question,payload ->> 'answerID' as answerID, payload ->> 'answer' as answer, payload ->> 'utcDateTime' as date
        FROM app_event
        WHERE type = 'ANSWER_SURVEY'
    `)
  }
  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        DROP VIEW answered_quizzes
    `)
    await queryRunner.query(`
        DROP VIEW answered_surveys
    `)
  }
}
