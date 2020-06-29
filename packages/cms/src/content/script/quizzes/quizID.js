query: START TRANSACTION
query: SELECT * FROM current_schema()
query: SELECT * FROM "information_schema"."tables" WHERE ("table_schema" = 'public' AND "table_name" = 'quiz') OR ("table_schema" = 'public' AND "table_name" = 'article') OR ("table_schema" = 'public' AND "table_name" = 'category') OR ("table_schema" = 'public' AND "table_name" = 'did_you_know') OR ("table_schema" = 'public' AND "table_name" = 'help_center') OR ("table_schema" = 'public' AND "table_name" = 'notification') OR ("table_schema" = 'public' AND "table_name" = 'subcategory') OR ("table_schema" = 'public' AND "table_name" = 'suggestion') OR ("table_schema" = 'public' AND "table_name" = 'survey') OR ("table_schema" = 'public' AND "table_name" = 'user')
query: SELECT *, ('"' || "udt_schema" || '"."' || "udt_name" || '"')::"regtype" AS "regtype" FROM "information_schema"."columns" WHERE ("table_schema" = 'public' AND "table_name" = 'quiz') OR ("table_schema" = 'public' AND "table_name" = 'article') OR ("table_schema" = 'public' AND "table_name" = 'category') OR ("table_schema" = 'public' AND "table_name" = 'did_you_know') OR ("table_schema" = 'public' AND "table_name" = 'help_center') OR ("table_schema" = 'public' AND "table_name" = 'notification') OR ("table_schema" = 'public' AND "table_name" = 'subcategory') OR ("table_schema" = 'public' AND "table_name" = 'suggestion') OR ("table_schema" = 'public' AND "table_name" = 'survey') OR ("table_schema" = 'public' AND "table_name" = 'user')
query: SELECT "ns"."nspname" AS "table_schema", "t"."relname" AS "table_name", "cnst"."conname" AS "constraint_name", CASE "cnst"."contype" WHEN 'x' THEN pg_get_constraintdef("cnst"."oid", true) ELSE "cnst"."consrc" END AS "expression", CASE "cnst"."contype" WHEN 'p' THEN 'PRIMARY' WHEN 'u' THEN 'UNIQUE' WHEN 'c' THEN 'CHECK' WHEN 'x' THEN 'EXCLUDE' END AS "constraint_type", "a"."attname" AS "column_name" FROM "pg_constraint" "cnst" INNER JOIN "pg_class" "t" ON "t"."oid" = "cnst"."conrelid" INNER JOIN "pg_namespace" "ns" ON "ns"."oid" = "cnst"."connamespace" LEFT JOIN "pg_attribute" "a" ON "a"."attrelid" = "cnst"."conrelid" AND "a"."attnum" = ANY ("cnst"."conkey") WHERE "t"."relkind" = 'r' AND (("ns"."nspname" = 'public' AND "t"."relname" = 'quiz') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'article') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'category') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'did_you_know') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'help_center') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'notification') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'subcategory') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'suggestion') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'survey') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'user'))
query: SELECT "ns"."nspname" AS "table_schema", "t"."relname" AS "table_name", "i"."relname" AS "constraint_name", "a"."attname" AS "column_name", CASE "ix"."indisunique" WHEN 't' THEN 'TRUE' ELSE'FALSE' END AS "is_unique", pg_get_expr("ix"."indpred", "ix"."indrelid") AS "condition", "types"."typname" AS "type_name" FROM "pg_class" "t" INNER JOIN "pg_index" "ix" ON "ix"."indrelid" = "t"."oid" INNER JOIN "pg_attribute" "a" ON "a"."attrelid" = "t"."oid"  AND "a"."attnum" = ANY ("ix"."indkey") INNER JOIN "pg_namespace" "ns" ON "ns"."oid" = "t"."relnamespace" INNER JOIN "pg_class" "i" ON "i"."oid" = "ix"."indexrelid" INNER JOIN "pg_type" "types" ON "types"."oid" = "a"."atttypid" LEFT JOIN "pg_constraint" "cnst" ON "cnst"."conname" = "i"."relname" WHERE "t"."relkind" = 'r' AND "cnst"."contype" IS NULL AND (("ns"."nspname" = 'public' AND "t"."relname" = 'quiz') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'article') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'category') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'did_you_know') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'help_center') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'notification') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'subcategory') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'suggestion') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'survey') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'user'))
query: SELECT "con"."conname" AS "constraint_name", "con"."nspname" AS "table_schema", "con"."relname" AS "table_name", "att2"."attname" AS "column_name", "ns"."nspname" AS "referenced_table_schema", "cl"."relname" AS "referenced_table_name", "att"."attname" AS "referenced_column_name", "con"."confdeltype" AS "on_delete", "con"."confupdtype" AS "on_update", "con"."condeferrable" AS "deferrable", "con"."condeferred" AS "deferred" FROM ( SELECT UNNEST ("con1"."conkey") AS "parent", UNNEST ("con1"."confkey") AS "child", "con1"."confrelid", "con1"."conrelid", "con1"."conname", "con1"."contype", "ns"."nspname", "cl"."relname", "con1"."condeferrable", CASE WHEN "con1"."condeferred" THEN 'INITIALLY DEFERRED' ELSE 'INITIALLY IMMEDIATE' END as condeferred, CASE "con1"."confdeltype" WHEN 'a' THEN 'NO ACTION' WHEN 'r' THEN 'RESTRICT' WHEN 'c' THEN 'CASCADE' WHEN 'n' THEN 'SET NULL' WHEN 'd' THEN 'SET DEFAULT' END as "confdeltype", CASE "con1"."confupdtype" WHEN 'a' THEN 'NO ACTION' WHEN 'r' THEN 'RESTRICT' WHEN 'c' THEN 'CASCADE' WHEN 'n' THEN 'SET NULL' WHEN 'd' THEN 'SET DEFAULT' END as "confupdtype" FROM "pg_class" "cl" INNER JOIN "pg_namespace" "ns" ON "cl"."relnamespace" = "ns"."oid" INNER JOIN "pg_constraint" "con1" ON "con1"."conrelid" = "cl"."oid" WHERE "con1"."contype" = 'f' AND (("ns"."nspname" = 'public' AND "cl"."relname" = 'quiz') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'article') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'category') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'did_you_know') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'help_center') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'notification') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'subcategory') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'suggestion') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'survey') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'user')) ) "con" INNER JOIN "pg_attribute" "att" ON "att"."attrelid" = "con"."confrelid" AND "att"."attnum" = "con"."child" INNER JOIN "pg_class" "cl" ON "cl"."oid" = "con"."confrelid" INNER JOIN "pg_namespace" "ns" ON "cl"."relnamespace" = "ns"."oid" INNER JOIN "pg_attribute" "att2" ON "att2"."attrelid" = "con"."conrelid" AND "att2"."attnum" = "con"."parent"
query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = current_schema() AND "table_name" = 'typeorm_metadata'
query: COMMIT
{ quizzes:
   { byId:
      { '3cc38360-0a67-49c5-9e52-175d03bd4eae':
         { id: '3cc38360-0a67-49c5-9e52-175d03bd4eae',
           question:
            'Jika darah menstruasi berwarna cokelat atau hitam, itu tanda ada yang salah. 😰',
           answers:
            [ { text: 'Benar', emoji: '🍏', isCorrect: false },
              { text: 'Salah', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Kamu benar, itu Salah! Tidak perlu khawatir dengan warna darah menstruasi berbeda-beda mulai dari merah muda ke merah, cokelat ke hitam!👍',
              in_correct:
               'Oops, itu Salah! Tidak perlu khawatir, warna darah menstruasi berbeda-beda mulai dari merah muda ke merah, cokelat ke hitam.!!👍' } },
        '173c8da4-6573-4297-ad9c-3d9b6d9b411a':
         { id: '173c8da4-6573-4297-ad9c-3d9b6d9b411a',
           question:
            'Jika bulan ini kamu tidak menstruasi, kamu pasti lagi hamil. 🤔',
           answers:
            [ { text: 'Benar', emoji: '🍏', isCorrect: false },
              { text: 'Salah', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Kamu benar! Stres, capek berlebih 😫, atau kurang nutrisi bisa bikin kamu tidak menstruasi.',
              in_correct:
               'Jawabannya itu Salah! Stres, capek berlebih 😫, atau kurang nutrisi bisa bikin kamu tidak menstruasi.' } },
        '4fe59ecf-234e-4338-b1b5-17a3a02cdf9e':
         { id: '4fe59ecf-234e-4338-b1b5-17a3a02cdf9e',
           question:
            'Kamu sebaiknya menggunakan tampon jika sudah tidak perawan 🤔',
           answers:
            [ { text: 'Benar', emoji: '🍏', isCorrect: false },
              { text: 'Salah', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Benar! Siapapun bisa menggunakan tampon. 👍 Selaput dara akan meregang supaya tampon bisa masuk.',
              in_correct:
               'Salah! Siapapun bisa menggunakan tampon. 👍 Selaput dara akan meregang supaya tampon bisa masuk.' } },
        '6a28c3c2-1dac-416b-86d5-6a9ef72204eb':
         { id: '6a28c3c2-1dac-416b-86d5-6a9ef72204eb',
           question:
            'Makan makanan tertentu akan mengubah bau darah menstruasimu.🍛',
           answers:
            [ { text: 'Benar', emoji: '🍏', isCorrect: false },
              { text: 'Salah', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Benar! Makan apapun tidak akan mengubah bau darah menstruasi, jadi makanlah makanan yang kamu suka! 😋',
              in_correct:
               'Salah! Makan apapun tidak akan mengubah bau darah menstruasi, jadi makanlah apapun yang kamu suka! 😋' } },
        '156b0aea-d9e4-4e5f-a51c-0c1950d76dcd':
         { id: '156b0aea-d9e4-4e5f-a51c-0c1950d76dcd',
           question: 'Pusing saat menstruasi itu normal.\' 😵',
           answers:
            [ { text: 'Benar', emoji: '🍏', isCorrect: true },
              { text: 'Salah', emoji: '🍎', isCorrect: false } ],
           response:
            { correct:
               'Benar sekali! Pusing, lemah dan capek berlebih bisa jadi tanda kamu sedang kekurangan zat besi (anemia). Jika kamu selalu merasa seperti ini, cobalah berkonsultasi dengan dokter. 👩‍⚕️',
              in_correct:
               'Kurang tepat! Pusing, lemah dan capek berlebih bisa jadi tanda kamu sedang kekurangan zat besi (anemia). Jika kamu selalu merasa seperti ini, cobalah berkonsultasi dengan dokter. 👩‍⚕️' } },
        'ba2147e5-2bef-497b-9a00-e3829e61f323':
         { id: 'ba2147e5-2bef-497b-9a00-e3829e61f323',
           question: 'Jenis kelamin dan gender itu sama saja.❓',
           answers:
            [ { text: 'Benar', emoji: '🍏', isCorrect: false },
              { text: 'Salah', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Benar! Jenis kelamin ditentukan oleh kromosom (laki-laki dan perempuan) 🔬. Gender merupakan aturan-aturan yang dibuat oleh masyarakat tentang bagaimana kamu bersikap sebagai laki-laki atau perempuan.',
              in_correct:
               'Ini Salah! Jenis kelamin ditentukan oleh kromosom (laki-laki dan perempuan) 🔬. Gender merupakan aturan-aturan yang dibuat oleh masyarakat tentang bagaimana kamu bersikap sebagai laki-laki atau perempuan.' } },
        '7c7760c7-7323-4fd3-af97-fe11ba6b8ad3':
         { id: '7c7760c7-7323-4fd3-af97-fe11ba6b8ad3',
           question:
            'Kepercayaan seputar menstruasi bisa menyebabkan perempuan didiskriminasi.\' 😕',
           answers:
            [ { text: 'Benar', emoji: '🍏', isCorrect: true },
              { text: 'Salah', emoji: '🍎', isCorrect: false } ],
           response:
            { correct:
               'Kamu benar! Kepercayaan seputar menstruasi bisa menyebabkan perempuan mengalami diskriminasi. 😲',
              in_correct:
               'Salah - jawabannya adalah Benar! Kepercayaan seputar menstruasi bisa menyebabkan perempuan mengalami diskriminasi. 😲' } } },
     allIds:
      [ '3cc38360-0a67-49c5-9e52-175d03bd4eae',
        '173c8da4-6573-4297-ad9c-3d9b6d9b411a',
        '4fe59ecf-234e-4338-b1b5-17a3a02cdf9e',
        '6a28c3c2-1dac-416b-86d5-6a9ef72204eb',
        '156b0aea-d9e4-4e5f-a51c-0c1950d76dcd',
        'ba2147e5-2bef-497b-9a00-e3829e61f323',
        '7c7760c7-7323-4fd3-af97-fe11ba6b8ad3' ] } }
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["3cc38360-0a67-49c5-9e52-175d03bd4eae"]
query: START TRANSACTION
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["3cc38360-0a67-49c5-9e52-175d03bd4eae","Menstruasi dan siklusnya","Jika darah menstruasi berwarna cokelat atau hitam, itu tanda ada yang salah. 😰","Benar","Salah","NA","2","Oops, itu Salah! Tidak perlu khawatir, warna darah menstruasi berbeda-beda mulai dari merah muda ke merah, cokelat ke hitam.!!👍","Kamu benar, itu Salah! Tidak perlu khawatir dengan warna darah menstruasi berbeda-beda mulai dari merah muda ke merah, cokelat ke hitam!👍",0,"id"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["4fe59ecf-234e-4338-b1b5-17a3a02cdf9e"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["7c7760c7-7323-4fd3-af97-fe11ba6b8ad3"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["156b0aea-d9e4-4e5f-a51c-0c1950d76dcd"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["173c8da4-6573-4297-ad9c-3d9b6d9b411a"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["6a28c3c2-1dac-416b-86d5-6a9ef72204eb"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["ba2147e5-2bef-497b-9a00-e3829e61f323"]
query: START TRANSACTION
query: COMMIT
query: START TRANSACTION
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["156b0aea-d9e4-4e5f-a51c-0c1950d76dcd","Kesehatan","Pusing saat menstruasi itu normal.' 😵","Benar","Salah","NA","1","Kurang tepat! Pusing, lemah dan capek berlebih bisa jadi tanda kamu sedang kekurangan zat besi (anemia). Jika kamu selalu merasa seperti ini, cobalah berkonsultasi dengan dokter. 👩‍⚕️","Benar sekali! Pusing, lemah dan capek berlebih bisa jadi tanda kamu sedang kekurangan zat besi (anemia). Jika kamu selalu merasa seperti ini, cobalah berkonsultasi dengan dokter. 👩‍⚕️",0,"id"]
query: START TRANSACTION
query: START TRANSACTION
query: START TRANSACTION
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["173c8da4-6573-4297-ad9c-3d9b6d9b411a","Menstruasi dan siklusnya","Jika bulan ini kamu tidak menstruasi, kamu pasti lagi hamil. 🤔","Benar","Salah","NA","2","Jawabannya itu Salah! Stres, capek berlebih 😫, atau kurang nutrisi bisa bikin kamu tidak menstruasi.","Kamu benar! Stres, capek berlebih 😫, atau kurang nutrisi bisa bikin kamu tidak menstruasi.",0,"id"]
query: COMMIT
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["6a28c3c2-1dac-416b-86d5-6a9ef72204eb","Kesehatan","Makan makanan tertentu akan mengubah bau darah menstruasimu.🍛","Benar","Salah","NA","2","Salah! Makan apapun tidak akan mengubah bau darah menstruasi, jadi makanlah apapun yang kamu suka! 😋","Benar! Makan apapun tidak akan mengubah bau darah menstruasi, jadi makanlah makanan yang kamu suka! 😋",0,"id"]
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["4fe59ecf-234e-4338-b1b5-17a3a02cdf9e","Mengenal menstruasimu","Kamu sebaiknya menggunakan tampon jika sudah tidak perawan 🤔","Benar","Salah","NA","2","Salah! Siapapun bisa menggunakan tampon. 👍 Selaput dara akan meregang supaya tampon bisa masuk.","Benar! Siapapun bisa menggunakan tampon. 👍 Selaput dara akan meregang supaya tampon bisa masuk.",0,"id"]
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["7c7760c7-7323-4fd3-af97-fe11ba6b8ad3","Mitos dan perasaan","Kepercayaan seputar menstruasi bisa menyebabkan perempuan didiskriminasi.' 😕","Benar","Salah","NA","1","Salah - jawabannya adalah Benar! Kepercayaan seputar menstruasi bisa menyebabkan perempuan mengalami diskriminasi. 😲","Kamu benar! Kepercayaan seputar menstruasi bisa menyebabkan perempuan mengalami diskriminasi. 😲",0,"id"]
query: START TRANSACTION
query: COMMIT
query: COMMIT
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["ba2147e5-2bef-497b-9a00-e3829e61f323","Relasi dan lawan jenis","Jenis kelamin dan gender itu sama saja.❓","Benar","Salah","NA","2","Ini Salah! Jenis kelamin ditentukan oleh kromosom (laki-laki dan perempuan) 🔬. Gender merupakan aturan-aturan yang dibuat oleh masyarakat tentang bagaimana kamu bersikap sebagai laki-laki atau perempuan.","Benar! Jenis kelamin ditentukan oleh kromosom (laki-laki dan perempuan) 🔬. Gender merupakan aturan-aturan yang dibuat oleh masyarakat tentang bagaimana kamu bersikap sebagai laki-laki atau perempuan.",0,"id"]
query: COMMIT
query: COMMIT
query: COMMIT
