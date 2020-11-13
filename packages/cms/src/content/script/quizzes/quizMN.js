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
      { '1b7f2773-6901-4e81-b22c-3190bab72cb0':
         { id: '1b7f2773-6901-4e81-b22c-3190bab72cb0',
           question:
            'Сарын тэмдгийн цус хүрэн эсвэл хар байвал, энэ нь ямар нэгэн асуудал байгаагийн шинж.\' 😰',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: false },
              { text: 'Худал', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Чи зөв хариуллаа. Энэ бол Худал! Санаа зовох хэрэггүй. Сарын тэмдгийн өнгө ягаанаас улаан, хүрэн, бараг хар хүртэл өнгөтэй байдаг ба энэ нь хэвийн зүйл юм!👍',
              in_correct:
               'Өө, үгүй, энэ бол Худал! Санаа зовох хэрэггүй. Сарын тэмдгийн өнгө ягаанаас улаан, хүрэн, бараг хар хүртэл өнгөтэй байдаг ба энэ нь хэвийн зүйл юм!👍' } },
        'ad3e7d8f-82f4-4d62-bc13-ec12f0d56f1c':
         { id: 'ad3e7d8f-82f4-4d62-bc13-ec12f0d56f1c',
           question:
            'Хэрэв сарын тэмдэг ирэхгүй бол чи баталгаатай жирэмсэн болсон байна гэсэн үг. 🤔\n\n\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: false },
              { text: 'Худал', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Таны зөв! Стрессдэх, хэт ядрах 😫, эсвэл хоол хүнс тааруу байвал сарын тэмдэг хугацаандаа ирэхгүй алдагдах нь бий. Сарын тэмдэг нь оройтож ирсэн охидын хувьд мөчлөг алдагдах нь элбэг тохиолддог.',
              in_correct:
               'Хариулт буруу! Стрессдэх, хэт ядрах 😫 эсвэл хоол хүнс тааруу байвал сарын тэмдэг алдагдах нь бий.  Сарын тэмдэг нь оройтож ирсэн охидын хувьд мөчлөг алдагдах нь элбэг тохиолддог.' } },
        'df1f652e-0178-4a64-a850-06563e4f4bac':
         { id: 'df1f652e-0178-4a64-a850-06563e4f4bac',
           question:
            'Тампон ашигласнаар чи онгон байдлаа алдах боломжтой. 🤔\n\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: false },
              { text: 'Худал', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Зөв! Тампоныг хэн ч хэрэглэж болно. 👍Тампон заримдаа онгон хальсыг урдаг гэвч ихэнхдээ тампоныг үтрээнд оруулахад тэр хэмжээгээр онгон хальс сунадаг.',
              in_correct:
               'Буруу! Тампоныг хэн ч хэрэглэж болно. 👍Тампон заримдаа онгон хальсыг урдаг гэвч ихэнхдээ тампоныг үтрээнд оруулахад тэр хэмжээгээр онгон хальс сунадаг.' } },
        '81f74913-f128-4e3e-ba49-128779e7d799':
         { id: '81f74913-f128-4e3e-ba49-128779e7d799',
           question:
            'Зарим нэг хоол хүнс сарын тэмдгийн цусны үнэрт нөлөөлдөг.🍛\'\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: false },
              { text: 'Худал', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Зөв байна! Ямар ч хоол идсэн энэ нь сарын тэмдгийн цусны үнэрт нөлөөлөхгүй болохоор дуртай хоолоо ид! 😋',
              in_correct:
               'Буруу хариулт байна! Ямар ч хоол идсэн энэ нь сарын тэмдгийн цусны үнэрт нөлөөлөхгүй болохоор дуртай хоолоо ид! 😋' } },
        '646786db-2bd3-442f-85f8-08666011deeb':
         { id: '646786db-2bd3-442f-85f8-08666011deeb',
           question:
            'Сарын тэмдгийн үеэр толгой эргэх нь хэвийн бус зүйл 😵 \n\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: true },
              { text: 'Худал', emoji: '🍎', isCorrect: false } ],
           response:
            { correct:
               'Тиймээ! Толгой эргэх, бие сульдах, амархан ядрах нь төмрийн дутагдалд орж буйн шинж байж болно. Ихэнхдээ ийм шинж тэмдэг илэрч байвал эмчид үзүүлэх хэрэгтэй шүү!👩‍⚕️',
              in_correct:
               'Энэ нь үнэн! Толгой эргэх, бие сульдах, амархан ядрах нь төмрийн дутагдалд орж буйн шинж байж болно. Ихэнхдээ ийм шинж тэмдэг илэрч байвал эмчид үзүүлэх хэрэгтэй шүү!👩‍⚕️' } },
        'f946c089-b70a-4ef4-b2e1-c614d6fb1055':
         { id: 'f946c089-b70a-4ef4-b2e1-c614d6fb1055',
           question:
            ' \'Бэлгийн бойжилт болон өсвөр нас нь адилхан ойлголт юм\'🧐 \n\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: false },
              { text: 'Худал', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Чиний зөв, энэ бол худлаа! Бэлгийн бойжилт нь залуу хүний биед гарч буй өөрчлөлтүүд бол өсвөр нас нь нас бие гүйцсэн хүн болох аялал юм. 👦🧔',
              in_correct:
               'Зөв хариулт бол худлаа! Бэлгийн бойжилт нь залуу хүний биед гарч буй өөрчлөлтүүд бол өсвөр нас нь нас бие гүйцсэн хүн болох аялал юм. 👦🧔' } },
        '606945b6-882c-45b8-aad7-b350c0567e1e':
         { id: '606945b6-882c-45b8-aad7-b350c0567e1e',
           question:
            'Эрэгтэй хүний бэлгийн эс эмэгтэй хүний өндгөн эстэй нийлснээр хүүхэд үүснэ.\'👶\n\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: true },
              { text: 'Худал', emoji: '🍎', isCorrect: false } ],
           response:
            { correct:
               'Та асуудлаа мэдэж байна! Бэлгийн харьцааны үед эрэгтэй дур тавих үед сая сая эр бэлгийн эс ялгарч үтрээнд асгарч тэдгээр нь умайд ордог ба хүүхэд бүрэлдэхэд ердөө ганц эр бэлгийн эс л шаардлагатай! 😮',
              in_correct:
               'Яг үнэндээ энэ үнэн! Бэлгийн харьцааны үед эрэгтэй дур тавих үед сая сая эр бэлгийн эс ялгарч үтрээнд асгарч тэдгээр нь умайд ордог ба хүүхэд бүрэлдэхэд ердөө ганц эр бэлгийн эс л шаардлагатай! 😮' } },
        '609f0a40-9d89-4394-82d1-87075c346b34':
         { id: '609f0a40-9d89-4394-82d1-87075c346b34',
           question:
            'Сарын тэмдэг өмнө нь хэзээ ч ирж байгаагүй ч гэсэн жирэмсэн болж болно. 🤔 \n\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: true },
              { text: 'Худал', emoji: '🍎', isCorrect: false } ],
           response:
            { correct:
               'Тиймээ энэ үнэн! 😲 Хэдийгээр чиний сарын тэмдэг ирээгүй байсан ч гэсэн үр тогтоох боломжтой өндгөн эс боловсорсон байх боломжтой.',
              in_correct:
               'Яг үнэндээ энэ бол үнэн! 😲 Хэдийгээр чиний сарын тэмдэг ирээгүй байсан ч гэсэн үр тогтоох боломжтой өндгөн эс боловсорсон байх боломжтой.' } },
        '3abb0a2c-9bc2-477d-9ba3-18caba2836f6':
         { id: '3abb0a2c-9bc2-477d-9ba3-18caba2836f6',
           question: 'Хүйс болон жендер нь адилхан ойлголт юм.\'❓ \n\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: false },
              { text: 'Худал', emoji: '🍎', isCorrect: true } ],
           response:
            { correct:
               'Тийм шүү! Хүйс нь хромсомоор эмэгтэй эсвэл эрэгтэй гэж тодорхойлогддог бол🔬Жендер нь нийгмээс эрэгтэй болон эмэгтэй хүмүүс биеэ хэрхэн авч явах талаар тогтоосон хэм хэмжээ юм.',
              in_correct:
               'Буруу байлаа! Хүйс нь хромсомоор эмэгтэй эсвэл эрэгтэй гэж тодорхойлогддог бол🔬Жендер нь нийгмээс эрэгтэй болон эмэгтэй хүмүүс биеэ хэрхэн авч явах талаар заасан хэм хэмжээ юм.' } },
        '72ecd8f4-1a73-436c-97e8-4df3d8a1a640':
         { id: '72ecd8f4-1a73-436c-97e8-4df3d8a1a640',
           question:
            'Заримдаа сарын тэмдгийн талаарх буруу ойлголтууд нь охидыг алагчилахад хүргэдэг. 😕 \n\n',
           answers:
            [ { text: 'Үнэн', emoji: '🍏', isCorrect: true },
              { text: 'Худал', emoji: '🍎', isCorrect: false } ],
           response:
            { correct:
               'Чиний зөв!  Бүр тодруулбал, сарын тэмдгээс болж охидыг ялгаварлан гадуурхдаг гэж итгэдэг. Гэвч сарын тэмдэг бол байгалийн хэвийн зүйл бөгөөд, түүнгүйгээр хүн төрөлхтөн өсөн үржих боломжгүй гэдгийг санаарай! 😲',
              in_correct:
               'Энэ нь үнэн!  Бүр тодруулбал, сарын тэмдгээс болж охидыг ялгаварлан гадуурхдаг гэж итгэдэг. Гэвч сарын тэмдэг бол байгалийн хэвийн зүйл бөгөөд, түүнгүйгээр хүн төрөлхтөн өсөн үржих боломжгүй гэдгийг санаарай! 😲' } } },
     allIds:
      [ '1b7f2773-6901-4e81-b22c-3190bab72cb0',
        'ad3e7d8f-82f4-4d62-bc13-ec12f0d56f1c',
        'df1f652e-0178-4a64-a850-06563e4f4bac',
        '81f74913-f128-4e3e-ba49-128779e7d799',
        '646786db-2bd3-442f-85f8-08666011deeb',
        'f946c089-b70a-4ef4-b2e1-c614d6fb1055',
        '606945b6-882c-45b8-aad7-b350c0567e1e',
        '609f0a40-9d89-4394-82d1-87075c346b34',
        '3abb0a2c-9bc2-477d-9ba3-18caba2836f6',
        '72ecd8f4-1a73-436c-97e8-4df3d8a1a640' ] } }
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["1b7f2773-6901-4e81-b22c-3190bab72cb0"]
query: START TRANSACTION
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["1b7f2773-6901-4e81-b22c-3190bab72cb0","Сарын тэмдэг ба мөчлөг","Сарын тэмдгийн цус хүрэн эсвэл хар байвал, энэ нь ямар нэгэн асуудал байгаагийн шинж.' 😰","Үнэн","Худал","NA","2","Өө, үгүй, энэ бол Худал! Санаа зовох хэрэггүй. Сарын тэмдгийн өнгө ягаанаас улаан, хүрэн, бараг хар хүртэл өнгөтэй байдаг ба энэ нь хэвийн зүйл юм!👍","Чи зөв хариуллаа. Энэ бол Худал! Санаа зовох хэрэггүй. Сарын тэмдгийн өнгө ягаанаас улаан, хүрэн, бараг хар хүртэл өнгөтэй байдаг ба энэ нь хэвийн зүйл юм!👍",0,"mn"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["81f74913-f128-4e3e-ba49-128779e7d799"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["3abb0a2c-9bc2-477d-9ba3-18caba2836f6"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["f946c089-b70a-4ef4-b2e1-c614d6fb1055"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["646786db-2bd3-442f-85f8-08666011deeb"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["606945b6-882c-45b8-aad7-b350c0567e1e"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["ad3e7d8f-82f4-4d62-bc13-ec12f0d56f1c"]
query: START TRANSACTION
query: START TRANSACTION
query: START TRANSACTION
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["609f0a40-9d89-4394-82d1-87075c346b34"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["df1f652e-0178-4a64-a850-06563e4f4bac"]
query: SELECT "Quiz"."id" AS "Quiz_id", "Quiz"."topic" AS "Quiz_topic", "Quiz"."question" AS "Quiz_question", "Quiz"."option1" AS "Quiz_option1", "Quiz"."option2" AS "Quiz_option2", "Quiz"."option3" AS "Quiz_option3", "Quiz"."right_answer" AS "Quiz_right_answer", "Quiz"."wrong_answer_response" AS "Quiz_wrong_answer_response", "Quiz"."right_answer_response" AS "Quiz_right_answer_response", "Quiz"."live" AS "Quiz_live", "Quiz"."lang" AS "Quiz_lang" FROM "quiz" "Quiz" WHERE "Quiz"."id" IN ($1) -- PARAMETERS: ["72ecd8f4-1a73-436c-97e8-4df3d8a1a640"]
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["81f74913-f128-4e3e-ba49-128779e7d799","Эрүүл мэнд, хоол тэжээл ба дасгал хөдөлгөөн","Зарим нэг хоол хүнс сарын тэмдгийн цусны үнэрт нөлөөлдөг.🍛'\n","Үнэн","Худал","NA","2","Буруу хариулт байна! Ямар ч хоол идсэн энэ нь сарын тэмдгийн цусны үнэрт нөлөөлөхгүй болохоор дуртай хоолоо ид! 😋","Зөв байна! Ямар ч хоол идсэн энэ нь сарын тэмдгийн цусны үнэрт нөлөөлөхгүй болохоор дуртай хоолоо ид! 😋",0,"mn"]
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["3abb0a2c-9bc2-477d-9ba3-18caba2836f6","Хөвгүүд ба үерхэл","Хүйс болон жендер нь адилхан ойлголт юм.'❓ \n\n","Үнэн","Худал","NA","2","Буруу байлаа! Хүйс нь хромсомоор эмэгтэй эсвэл эрэгтэй гэж тодорхойлогддог бол🔬Жендер нь нийгмээс эрэгтэй болон эмэгтэй хүмүүс биеэ хэрхэн авч явах талаар заасан хэм хэмжээ юм.","Тийм шүү! Хүйс нь хромсомоор эмэгтэй эсвэл эрэгтэй гэж тодорхойлогддог бол🔬Жендер нь нийгмээс эрэгтэй болон эмэгтэй хүмүүс биеэ хэрхэн авч явах талаар тогтоосон хэм хэмжээ юм.",0,"mn"]
query: START TRANSACTION
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["f946c089-b70a-4ef4-b2e1-c614d6fb1055","Бэлгийн бойжилт"," 'Бэлгийн бойжилт болон өсвөр нас нь адилхан ойлголт юм'🧐 \n\n","Үнэн","Худал","NA","2","Зөв хариулт бол худлаа! Бэлгийн бойжилт нь залуу хүний биед гарч буй өөрчлөлтүүд бол өсвөр нас нь нас бие гүйцсэн хүн болох аялал юм. 👦🧔","Чиний зөв, энэ бол худлаа! Бэлгийн бойжилт нь залуу хүний биед гарч буй өөрчлөлтүүд бол өсвөр нас нь нас бие гүйцсэн хүн болох аялал юм. 👦🧔",0,"mn"]
query: START TRANSACTION
query: COMMIT
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["606945b6-882c-45b8-aad7-b350c0567e1e","Гэр бүл төлөвлөлт","Эрэгтэй хүний бэлгийн эс эмэгтэй хүний өндгөн эстэй нийлснээр хүүхэд үүснэ.'👶\n\n","Үнэн","Худал","NA","1","Яг үнэндээ энэ үнэн! Бэлгийн харьцааны үед эрэгтэй дур тавих үед сая сая эр бэлгийн эс ялгарч үтрээнд асгарч тэдгээр нь умайд ордог ба хүүхэд бүрэлдэхэд ердөө ганц эр бэлгийн эс л шаардлагатай! 😮","Та асуудлаа мэдэж байна! Бэлгийн харьцааны үед эрэгтэй дур тавих үед сая сая эр бэлгийн эс ялгарч үтрээнд асгарч тэдгээр нь умайд ордог ба хүүхэд бүрэлдэхэд ердөө ганц эр бэлгийн эс л шаардлагатай! 😮",0,"mn"]
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["646786db-2bd3-442f-85f8-08666011deeb","Эрүүл мэнд, хоол тэжээл ба дасгал хөдөлгөөн","Сарын тэмдгийн үеэр толгой эргэх нь хэвийн бус зүйл 😵 \n\n","Үнэн","Худал","NA","1","Энэ нь үнэн! Толгой эргэх, бие сульдах, амархан ядрах нь төмрийн дутагдалд орж буйн шинж байж болно. Ихэнхдээ ийм шинж тэмдэг илэрч байвал эмчид үзүүлэх хэрэгтэй шүү!👩‍⚕️","Тиймээ! Толгой эргэх, бие сульдах, амархан ядрах нь төмрийн дутагдалд орж буйн шинж байж болно. Ихэнхдээ ийм шинж тэмдэг илэрч байвал эмчид үзүүлэх хэрэгтэй шүү!👩‍⚕️",0,"mn"]
query: START TRANSACTION
query: COMMIT
query: COMMIT
query: COMMIT
query: START TRANSACTION
query: COMMIT
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["609f0a40-9d89-4394-82d1-87075c346b34","Гэр бүл төлөвлөлт","Сарын тэмдэг өмнө нь хэзээ ч ирж байгаагүй ч гэсэн жирэмсэн болж болно. 🤔 \n\n","Үнэн","Худал","NA","1","Яг үнэндээ энэ бол үнэн! 😲 Хэдийгээр чиний сарын тэмдэг ирээгүй байсан ч гэсэн үр тогтоох боломжтой өндгөн эс боловсорсон байх боломжтой.","Тиймээ энэ үнэн! 😲 Хэдийгээр чиний сарын тэмдэг ирээгүй байсан ч гэсэн үр тогтоох боломжтой өндгөн эс боловсорсон байх боломжтой.",0,"mn"]
query: START TRANSACTION
query: START TRANSACTION
query: COMMIT
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["ad3e7d8f-82f4-4d62-bc13-ec12f0d56f1c","Сарын тэмдэг ба мөчлөг","Хэрэв сарын тэмдэг ирэхгүй бол чи баталгаатай жирэмсэн болсон байна гэсэн үг. 🤔\n\n\n","Үнэн","Худал","NA","2","Хариулт буруу! Стрессдэх, хэт ядрах 😫 эсвэл хоол хүнс тааруу байвал сарын тэмдэг алдагдах нь бий.  Сарын тэмдэг нь оройтож ирсэн охидын хувьд мөчлөг алдагдах нь элбэг тохиолддог.","Таны зөв! Стрессдэх, хэт ядрах 😫, эсвэл хоол хүнс тааруу байвал сарын тэмдэг хугацаандаа ирэхгүй алдагдах нь бий. Сарын тэмдэг нь оройтож ирсэн охидын хувьд мөчлөг алдагдах нь элбэг тохиолддог.",0,"mn"]
query: COMMIT
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["72ecd8f4-1a73-436c-97e8-4df3d8a1a640","Төөрөгдөл ба мэдрэмж","Заримдаа сарын тэмдгийн талаарх буруу ойлголтууд нь охидыг алагчилахад хүргэдэг. 😕 \n\n","Үнэн","Худал","NA","1","Энэ нь үнэн!  Бүр тодруулбал, сарын тэмдгээс болж охидыг ялгаварлан гадуурхдаг гэж итгэдэг. Гэвч сарын тэмдэг бол байгалийн хэвийн зүйл бөгөөд, түүнгүйгээр хүн төрөлхтөн өсөн үржих боломжгүй гэдгийг санаарай! 😲","Чиний зөв!  Бүр тодруулбал, сарын тэмдгээс болж охидыг ялгаварлан гадуурхдаг гэж итгэдэг. Гэвч сарын тэмдэг бол байгалийн хэвийн зүйл бөгөөд, түүнгүйгээр хүн төрөлхтөн өсөн үржих боломжгүй гэдгийг санаарай! 😲",0,"mn"]
query: INSERT INTO "quiz"("id", "topic", "question", "option1", "option2", "option3", "right_answer", "wrong_answer_response", "right_answer_response", "live", "lang") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) -- PARAMETERS: ["df1f652e-0178-4a64-a850-06563e4f4bac","Сарын тэмдгийн эрүүл ахуйг сахих талаар","Тампон ашигласнаар чи онгон байдлаа алдах боломжтой. 🤔\n\n","Үнэн","Худал","NA","2","Буруу! Тампоныг хэн ч хэрэглэж болно. 👍Тампон заримдаа онгон хальсыг урдаг гэвч ихэнхдээ тампоныг үтрээнд оруулахад тэр хэмжээгээр онгон хальс сунадаг.","Зөв! Тампоныг хэн ч хэрэглэж болно. 👍Тампон заримдаа онгон хальсыг урдаг гэвч ихэнхдээ тампоныг үтрээнд оруулахад тэр хэмжээгээр онгон хальс сунадаг.",0,"mn"]
query: COMMIT
query: COMMIT
query: COMMIT
