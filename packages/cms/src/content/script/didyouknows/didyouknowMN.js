query: START TRANSACTION
query: SELECT * FROM current_schema()
query: SELECT * FROM "information_schema"."tables" WHERE ("table_schema" = 'public' AND "table_name" = 'did_you_know') OR ("table_schema" = 'public' AND "table_name" = 'article') OR ("table_schema" = 'public' AND "table_name" = 'category') OR ("table_schema" = 'public' AND "table_name" = 'help_center') OR ("table_schema" = 'public' AND "table_name" = 'notification') OR ("table_schema" = 'public' AND "table_name" = 'quiz') OR ("table_schema" = 'public' AND "table_name" = 'subcategory') OR ("table_schema" = 'public' AND "table_name" = 'suggestion') OR ("table_schema" = 'public' AND "table_name" = 'survey') OR ("table_schema" = 'public' AND "table_name" = 'user')
query: SELECT *, ('"' || "udt_schema" || '"."' || "udt_name" || '"')::"regtype" AS "regtype" FROM "information_schema"."columns" WHERE ("table_schema" = 'public' AND "table_name" = 'did_you_know') OR ("table_schema" = 'public' AND "table_name" = 'article') OR ("table_schema" = 'public' AND "table_name" = 'category') OR ("table_schema" = 'public' AND "table_name" = 'help_center') OR ("table_schema" = 'public' AND "table_name" = 'notification') OR ("table_schema" = 'public' AND "table_name" = 'quiz') OR ("table_schema" = 'public' AND "table_name" = 'subcategory') OR ("table_schema" = 'public' AND "table_name" = 'suggestion') OR ("table_schema" = 'public' AND "table_name" = 'survey') OR ("table_schema" = 'public' AND "table_name" = 'user')
query: SELECT "ns"."nspname" AS "table_schema", "t"."relname" AS "table_name", "cnst"."conname" AS "constraint_name", CASE "cnst"."contype" WHEN 'x' THEN pg_get_constraintdef("cnst"."oid", true) ELSE "cnst"."consrc" END AS "expression", CASE "cnst"."contype" WHEN 'p' THEN 'PRIMARY' WHEN 'u' THEN 'UNIQUE' WHEN 'c' THEN 'CHECK' WHEN 'x' THEN 'EXCLUDE' END AS "constraint_type", "a"."attname" AS "column_name" FROM "pg_constraint" "cnst" INNER JOIN "pg_class" "t" ON "t"."oid" = "cnst"."conrelid" INNER JOIN "pg_namespace" "ns" ON "ns"."oid" = "cnst"."connamespace" LEFT JOIN "pg_attribute" "a" ON "a"."attrelid" = "cnst"."conrelid" AND "a"."attnum" = ANY ("cnst"."conkey") WHERE "t"."relkind" = 'r' AND (("ns"."nspname" = 'public' AND "t"."relname" = 'did_you_know') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'article') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'category') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'help_center') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'notification') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'quiz') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'subcategory') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'suggestion') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'survey') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'user'))
query: SELECT "ns"."nspname" AS "table_schema", "t"."relname" AS "table_name", "i"."relname" AS "constraint_name", "a"."attname" AS "column_name", CASE "ix"."indisunique" WHEN 't' THEN 'TRUE' ELSE'FALSE' END AS "is_unique", pg_get_expr("ix"."indpred", "ix"."indrelid") AS "condition", "types"."typname" AS "type_name" FROM "pg_class" "t" INNER JOIN "pg_index" "ix" ON "ix"."indrelid" = "t"."oid" INNER JOIN "pg_attribute" "a" ON "a"."attrelid" = "t"."oid"  AND "a"."attnum" = ANY ("ix"."indkey") INNER JOIN "pg_namespace" "ns" ON "ns"."oid" = "t"."relnamespace" INNER JOIN "pg_class" "i" ON "i"."oid" = "ix"."indexrelid" INNER JOIN "pg_type" "types" ON "types"."oid" = "a"."atttypid" LEFT JOIN "pg_constraint" "cnst" ON "cnst"."conname" = "i"."relname" WHERE "t"."relkind" = 'r' AND "cnst"."contype" IS NULL AND (("ns"."nspname" = 'public' AND "t"."relname" = 'did_you_know') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'article') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'category') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'help_center') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'notification') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'quiz') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'subcategory') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'suggestion') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'survey') OR ("ns"."nspname" = 'public' AND "t"."relname" = 'user'))
query: SELECT "con"."conname" AS "constraint_name", "con"."nspname" AS "table_schema", "con"."relname" AS "table_name", "att2"."attname" AS "column_name", "ns"."nspname" AS "referenced_table_schema", "cl"."relname" AS "referenced_table_name", "att"."attname" AS "referenced_column_name", "con"."confdeltype" AS "on_delete", "con"."confupdtype" AS "on_update", "con"."condeferrable" AS "deferrable", "con"."condeferred" AS "deferred" FROM ( SELECT UNNEST ("con1"."conkey") AS "parent", UNNEST ("con1"."confkey") AS "child", "con1"."confrelid", "con1"."conrelid", "con1"."conname", "con1"."contype", "ns"."nspname", "cl"."relname", "con1"."condeferrable", CASE WHEN "con1"."condeferred" THEN 'INITIALLY DEFERRED' ELSE 'INITIALLY IMMEDIATE' END as condeferred, CASE "con1"."confdeltype" WHEN 'a' THEN 'NO ACTION' WHEN 'r' THEN 'RESTRICT' WHEN 'c' THEN 'CASCADE' WHEN 'n' THEN 'SET NULL' WHEN 'd' THEN 'SET DEFAULT' END as "confdeltype", CASE "con1"."confupdtype" WHEN 'a' THEN 'NO ACTION' WHEN 'r' THEN 'RESTRICT' WHEN 'c' THEN 'CASCADE' WHEN 'n' THEN 'SET NULL' WHEN 'd' THEN 'SET DEFAULT' END as "confupdtype" FROM "pg_class" "cl" INNER JOIN "pg_namespace" "ns" ON "cl"."relnamespace" = "ns"."oid" INNER JOIN "pg_constraint" "con1" ON "con1"."conrelid" = "cl"."oid" WHERE "con1"."contype" = 'f' AND (("ns"."nspname" = 'public' AND "cl"."relname" = 'did_you_know') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'article') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'category') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'help_center') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'notification') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'quiz') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'subcategory') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'suggestion') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'survey') OR ("ns"."nspname" = 'public' AND "cl"."relname" = 'user')) ) "con" INNER JOIN "pg_attribute" "att" ON "att"."attrelid" = "con"."confrelid" AND "att"."attnum" = "con"."child" INNER JOIN "pg_class" "cl" ON "cl"."oid" = "con"."confrelid" INNER JOIN "pg_namespace" "ns" ON "cl"."relnamespace" = "ns"."oid" INNER JOIN "pg_attribute" "att2" ON "att2"."attrelid" = "con"."conrelid" AND "att2"."attnum" = "con"."parent"
query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = current_schema() AND "table_name" = 'typeorm_metadata'
query: COMMIT
{ didYouKnows:
   { byId:
      { 'fe1c6b73-15dd-4170-ba01-e57773f2e6dc':
         { id: 'fe1c6b73-15dd-4170-ba01-e57773f2e6dc',
           title: 'Сарын тэмдэг ба мөчлөг',
           content:
            'Сарын тэмдгийн үед гадагшилдаг  цусны зөвхөн хагас нь л жинхэнэ цус байдаг. 😮 Бусад нь үтрээ, умайн ханыг бүрхсэн эд эсүүд юм.' },
        '65fcc6d2-bfc2-460b-9841-5dae0df8c9fc':
         { id: '65fcc6d2-bfc2-460b-9841-5dae0df8c9fc',
           title: 'Сарын тэмдэг ба мөчлөг',
           content:
            'Нэг сарын тэмдгийн мөчлөг нь 21-ээс 31 хоногийн хооронд хэдэн ч хоног үргэлжилж болно. Бүх сарын тэмдгийн мөчлөгүүд өөр өөр байдаг! ☺️' },
        '5e8e8765-bc2c-40dd-a1f4-7d65119327ca':
         { id: '5e8e8765-bc2c-40dd-a1f4-7d65119327ca',
           title: 'Сарын тэмдэг ба мөчлөг',
           content:
            'Умайн дотор хананы салст бүрхүүл нь үр тогтсон өндгөн эсийг хүлээн авахад бэлдэн сар бүр шинэчлэгдэж байдаг. Үр тогтоогүй бол салст бүрхүүл сарын тэмдэгтэй хамт гадагшилдаг! ⤵️' },
        'd39d1029-8e19-4bee-b946-b8850ec55c9f':
         { id: 'd39d1029-8e19-4bee-b946-b8850ec55c9f',
           title: 'Сарын тэмдгийн эрүүл ахуйг сахих талаар',
           content:
            'Үтрээнийхээ дотор талыг сарын тэмдгийн үеэр, эсвэл хэзээ ч угааж болохгүй! Учир нь энэ нь халдвар орох магадлалыг ихэсгэдэг.🤒' },
        '49fe4bff-9660-482c-8072-2d6b409d7f3c':
         { id: '49fe4bff-9660-482c-8072-2d6b409d7f3c',
           title: 'Сарын тэмдгийн эрүүл ахуйг сахих талаар',
           content:
            'Умайн хананы салст бүрхүүлийг гадагшлуулахын тулд үүсдэг базлалтыг сарын тэмдгийн базлалт гэдэг.😖' },
        '818d0405-95e0-416e-bf62-0d547398a5eb':
         { id: '818d0405-95e0-416e-bf62-0d547398a5eb',
           title: 'Сарын тэмдгийн эрүүл ахуйг сахих талаар',
           content:
            'Тампон ашигласнаар онгон байдлаа алдана гэсэн үг биш юм. 👍Бэлгийн харьцаанд орсноор л онгон байдлаа алдах боломжтой.' },
        'ba36de26-5e04-44c1-9353-64999d2fd511':
         { id: 'ba36de26-5e04-44c1-9353-64999d2fd511',
           title: 'Эрүүл мэнд, хоол тэжээл ба дасгал хөдөлгөөн',
           content:
            'Сарын тэмдгийн үеэр улаан мах, навчтай ногоо гэх мэтчилэн төмрөөр баялаг хүнс түлхүү хэрэглэх хэрэгтэй!🥩🥦' },
        'ef316369-17cb-4cc8-aabc-5da24a04e3c0':
         { id: 'ef316369-17cb-4cc8-aabc-5da24a04e3c0',
           title: 'Эрүүл мэнд, хоол тэжээл ба дасгал хөдөлгөөн',
           content:
            'Хүйтэн хоол идэх нь сарын тэмдгийн базлалтанд нөлөөлдөггүй. Гэвч халуун хоол идэх нь сайн.🍚' },
        '497379bf-71b5-47f9-91f0-6a12e04cc3b4':
         { id: '497379bf-71b5-47f9-91f0-6a12e04cc3b4',
           title: 'Эрүүл мэнд, хоол тэжээл ба дасгал хөдөлгөөн',
           content:
            'Сарын тэмдгийн үеэр дасгал хөдөлгөөн хийхээс битгий цааргалаарай! Ялангуяа базлалт ихтэй үедээ дасгал хөдөлгөөн хийх хэрэгтэй.🏃‍♀️' },
        '0bb193e0-b3b8-4b8b-aa0a-0a235e377736':
         { id: '0bb193e0-b3b8-4b8b-aa0a-0a235e377736',
           title: 'Бэлгийн бойжилт',
           content:
            'Бэлгийн бойжилтын хамгийн эхний шинж тэмдэг нь хөх ургах ба түүний дараа бэлэг эрхтний ойролцоо болон суганд үс ургах, тэгээд дараа нь сарын тэмдэг! 😯' },
        'c193d88c-9e56-4665-a750-6d87e959569c':
         { id: 'c193d88c-9e56-4665-a750-6d87e959569c',
           title: 'Бэлгийн бойжилт',
           content:
            'Бэлгийн бойжилт нь чамайг жаахан охиноос нас бие гүйцсэн эмэгтэй болох үйл явц юм.👧👱‍♀️' },
        '2cdc57b1-aacd-4502-91c2-5abae88d97f9':
         { id: '2cdc57b1-aacd-4502-91c2-5abae88d97f9',
           title: 'Бэлгийн бойжилт',
           content:
            'Жин нэмэх, гэнэт өндөр болох, арьс тослог болох зэрэг нь бүгд бэлгийн бойжилт эхэлж буйн шинж тэмдэг юм. Энэ нь ядаргаатай ч гэлээ хэвийн зүйл юм! 👍' },
        'cae6e915-63b0-47ff-bf7b-eee5ab65abd7':
         { id: 'cae6e915-63b0-47ff-bf7b-eee5ab65abd7',
           title: 'Гэр бүл төлөвлөлт',
           content:
            'Сарын тэмдгийн үед жирэмслэх боломжтой. Жишээ нь, өндгөн эс чинь арай эрт гадагшилсан үед ч жирэмслэх магадлалтай. 📆' },
        '46106c06-b5ae-42ec-9fd9-7b58bee723b2':
         { id: '46106c06-b5ae-42ec-9fd9-7b58bee723b2',
           title: 'Гэр бүл төлөвлөлт',
           content:
            'Бэлгийн харьцааны үеэр бэлгэвч ашиглахгүй бол халдвар авах эрсдэлтэй ба "аюулгүй өдөр" гэх мэт зүйл байхгүй!😓‍♀️' },
        '4c7fbbb0-f54f-4f67-a359-d13135f587b2':
         { id: '4c7fbbb0-f54f-4f67-a359-d13135f587b2',
           title: 'Гэр бүл төлөвлөлт',
           content:
            'Сарын тэмдгийн үеэр хамтрагчид хоёул тохиролцсон бол бэлгийн харьцаанд орох ямар ч асуудалгүй. 🤝 Харин хамгаалалт хэрэглэхээ мартваа!' },
        '3b359990-702e-4cc3-aa52-4494652e4805':
         { id: '3b359990-702e-4cc3-aa52-4494652e4805',
           title: 'Хөвгүүд ба үерхэл',
           content:
            'Хөвгүүд ч гэсэн сарын тэмдгийн талаар анхаарч байх ёстой. Учир нь энэ нь  тэдний хайртай охид, эмэгтэйчүүдийн эрүүл мэнд, сайн сайханд нөлөөлдөг! 👫' },
        '75ec843a-9553-43cc-8365-e67c02b746e7':
         { id: '75ec843a-9553-43cc-8365-e67c02b746e7',
           title: 'Хөвгүүд ба үерхэл',
           content:
            'Сарын тэмдэг нь ирсэн үед найз охиддоо туслахыг хүссэн хөвгүүд тэднээс асуулт асууж, яриаг нь сонсохоос эхэлж болох юм. 👂' },
        '24ef36ab-35ad-4c16-833f-2127f7e8ed8b':
         { id: '24ef36ab-35ad-4c16-833f-2127f7e8ed8b',
           title: 'Хөвгүүд ба үерхэл',
           content:
            'Хөвгүүдэд умай байхгүй бөгөөд өндгөн эс ялгардаггүй учир сарын тэмдэг ирдэггүй. 🤔 Тэд харин эр бэлгийн эс боловсруулдаг.' },
        '9577d012-cca0-41f9-a5de-2c498b7b1211':
         { id: '9577d012-cca0-41f9-a5de-2c498b7b1211',
           title: 'Төөрөгдөл ба мэдрэмж',
           content:
            'Сарын тэмдэг ирсэн гэдэг нь чи гэрлэхэд бэлэн болсон гэсэн үг биш юм... Чи гэрлэхийнхээ өмнө сэтгэл зүйн хувьд бэлэн болсон байх ёстой!👏' },
        'e81963fe-fb50-409b-a917-0c9ba95422ab':
         { id: 'e81963fe-fb50-409b-a917-0c9ba95422ab',
           title: 'Төөрөгдөл ба мэдрэмж',
           content:
            'Охид сарын тэмдгийн үеэр гэрийнхнээсээ тусдаа идэж, унтах ёстой гэсэн шинжлэх ухааны үндэслэлтэй шалтгаан байхгүй. 😐' },
        'd864eaad-1921-4409-97e8-b1ce0d8a777b':
         { id: 'd864eaad-1921-4409-97e8-b1ce0d8a777b',
           title: 'Төөрөгдөл ба мэдрэмж',
           content:
            'Олон соёлд охидын анхны сарын тэмдгийг эмэгтэй хүн болж байна хэмээн тэмдэглэдэг 🎉.' },
        'fbde738d-7a5c-44d4-af18-8e766db9bb30':
         { id: 'fbde738d-7a5c-44d4-af18-8e766db9bb30',
           title: 'Сарын тэмдэг ба амьдрал',
           content:
            'Гоо сайхны хамгийн хэрэгтэй зөвөлгөө бол төрөл бүрийн хүнс ногоо хэрэглэх, хангалттай сайн ус уух, идэвхтэй байх болон сайн унтаж амрах! 🥕 💦🏃‍♀️😴' },
        '4b7b670c-b452-46a9-8269-eca67ab4557b':
         { id: '4b7b670c-b452-46a9-8269-eca67ab4557b',
           title: 'Сарын тэмдэг ба амьдрал',
           content:
            'Хэдийгээр сарын тэмдэг нь хэвийн болон эрүүл байгаагийн шинж байж болох ч чи дургүй байж бас болно😡.' },
        'dc6d86bd-689f-4fbe-ae28-071e6516b5d5':
         { id: 'dc6d86bd-689f-4fbe-ae28-071e6516b5d5',
           title: 'Сарын тэмдэг ба амьдрал',
           content:
            'Гунигтай байна уу? Гүйх, үсрэх гэх мэтчилэн дасгал хийх эсвэл бүжиглэх юм бол чи эргээд инээх болно😊' } },
     allIds:
      [ 'fe1c6b73-15dd-4170-ba01-e57773f2e6dc',
        '65fcc6d2-bfc2-460b-9841-5dae0df8c9fc',
        '5e8e8765-bc2c-40dd-a1f4-7d65119327ca',
        'd39d1029-8e19-4bee-b946-b8850ec55c9f',
        '49fe4bff-9660-482c-8072-2d6b409d7f3c',
        '818d0405-95e0-416e-bf62-0d547398a5eb',
        'ba36de26-5e04-44c1-9353-64999d2fd511',
        'ef316369-17cb-4cc8-aabc-5da24a04e3c0',
        '497379bf-71b5-47f9-91f0-6a12e04cc3b4',
        '0bb193e0-b3b8-4b8b-aa0a-0a235e377736',
        'c193d88c-9e56-4665-a750-6d87e959569c',
        '2cdc57b1-aacd-4502-91c2-5abae88d97f9',
        'cae6e915-63b0-47ff-bf7b-eee5ab65abd7',
        '46106c06-b5ae-42ec-9fd9-7b58bee723b2',
        '4c7fbbb0-f54f-4f67-a359-d13135f587b2',
        '3b359990-702e-4cc3-aa52-4494652e4805',
        '75ec843a-9553-43cc-8365-e67c02b746e7',
        '24ef36ab-35ad-4c16-833f-2127f7e8ed8b',
        '9577d012-cca0-41f9-a5de-2c498b7b1211',
        'e81963fe-fb50-409b-a917-0c9ba95422ab',
        'd864eaad-1921-4409-97e8-b1ce0d8a777b',
        'fbde738d-7a5c-44d4-af18-8e766db9bb30',
        '4b7b670c-b452-46a9-8269-eca67ab4557b',
        'dc6d86bd-689f-4fbe-ae28-071e6516b5d5' ] } }
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["fe1c6b73-15dd-4170-ba01-e57773f2e6dc"]
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["fe1c6b73-15dd-4170-ba01-e57773f2e6dc","Сарын тэмдэг ба мөчлөг","Сарын тэмдгийн үед гадагшилдаг  цусны зөвхөн хагас нь л жинхэнэ цус байдаг. 😮 Бусад нь үтрээ, умайн ханыг бүрхсэн эд эсүүд юм.",1,"mn"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["d39d1029-8e19-4bee-b946-b8850ec55c9f"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["5e8e8765-bc2c-40dd-a1f4-7d65119327ca"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["ef316369-17cb-4cc8-aabc-5da24a04e3c0"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["65fcc6d2-bfc2-460b-9841-5dae0df8c9fc"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["ba36de26-5e04-44c1-9353-64999d2fd511"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["0bb193e0-b3b8-4b8b-aa0a-0a235e377736"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["49fe4bff-9660-482c-8072-2d6b409d7f3c"]
query: START TRANSACTION
query: START TRANSACTION
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["497379bf-71b5-47f9-91f0-6a12e04cc3b4"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["818d0405-95e0-416e-bf62-0d547398a5eb"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["d39d1029-8e19-4bee-b946-b8850ec55c9f","Сарын тэмдгийн эрүүл ахуйг сахих талаар","Үтрээнийхээ дотор талыг сарын тэмдгийн үеэр, эсвэл хэзээ ч угааж болохгүй! Учир нь энэ нь халдвар орох магадлалыг ихэсгэдэг.🤒",1,"mn"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["5e8e8765-bc2c-40dd-a1f4-7d65119327ca","Сарын тэмдэг ба мөчлөг","Умайн дотор хананы салст бүрхүүл нь үр тогтсон өндгөн эсийг хүлээн авахад бэлдэн сар бүр шинэчлэгдэж байдаг. Үр тогтоогүй бол салст бүрхүүл сарын тэмдэгтэй хамт гадагшилдаг! ⤵️",1,"mn"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["ef316369-17cb-4cc8-aabc-5da24a04e3c0","Эрүүл мэнд, хоол тэжээл ба дасгал хөдөлгөөн","Хүйтэн хоол идэх нь сарын тэмдгийн базлалтанд нөлөөлдөггүй. Гэвч халуун хоол идэх нь сайн.🍚",1,"mn"]
query: START TRANSACTION
query: START TRANSACTION
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["ba36de26-5e04-44c1-9353-64999d2fd511","Эрүүл мэнд, хоол тэжээл ба дасгал хөдөлгөөн","Сарын тэмдгийн үеэр улаан мах, навчтай ногоо гэх мэтчилэн төмрөөр баялаг хүнс түлхүү хэрэглэх хэрэгтэй!🥩🥦",1,"mn"]
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["65fcc6d2-bfc2-460b-9841-5dae0df8c9fc","Сарын тэмдэг ба мөчлөг","Нэг сарын тэмдгийн мөчлөг нь 21-ээс 31 хоногийн хооронд хэдэн ч хоног үргэлжилж болно. Бүх сарын тэмдгийн мөчлөгүүд өөр өөр байдаг! ☺️",1,"mn"]
query: COMMIT
query: COMMIT
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["0bb193e0-b3b8-4b8b-aa0a-0a235e377736","Бэлгийн бойжилт","Бэлгийн бойжилтын хамгийн эхний шинж тэмдэг нь хөх ургах ба түүний дараа бэлэг эрхтний ойролцоо болон суганд үс ургах, тэгээд дараа нь сарын тэмдэг! 😯",1,"mn"]
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["c193d88c-9e56-4665-a750-6d87e959569c"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["2cdc57b1-aacd-4502-91c2-5abae88d97f9"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["cae6e915-63b0-47ff-bf7b-eee5ab65abd7"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["46106c06-b5ae-42ec-9fd9-7b58bee723b2"]
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["49fe4bff-9660-482c-8072-2d6b409d7f3c","Сарын тэмдгийн эрүүл ахуйг сахих талаар","Умайн хананы салст бүрхүүлийг гадагшлуулахын тулд үүсдэг базлалтыг сарын тэмдгийн базлалт гэдэг.😖",1,"mn"]
query: START TRANSACTION
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["4c7fbbb0-f54f-4f67-a359-d13135f587b2"]
query: COMMIT
query: COMMIT
query: START TRANSACTION
query: START TRANSACTION
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["497379bf-71b5-47f9-91f0-6a12e04cc3b4","Эрүүл мэнд, хоол тэжээл ба дасгал хөдөлгөөн","Сарын тэмдгийн үеэр дасгал хөдөлгөөн хийхээс битгий цааргалаарай! Ялангуяа базлалт ихтэй үедээ дасгал хөдөлгөөн хийх хэрэгтэй.🏃‍♀️",1,"mn"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["818d0405-95e0-416e-bf62-0d547398a5eb","Сарын тэмдгийн эрүүл ахуйг сахих талаар","Тампон ашигласнаар онгон байдлаа алдана гэсэн үг биш юм. 👍Бэлгийн харьцаанд орсноор л онгон байдлаа алдах боломжтой.",1,"mn"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["2cdc57b1-aacd-4502-91c2-5abae88d97f9","Бэлгийн бойжилт","Жин нэмэх, гэнэт өндөр болох, арьс тослог болох зэрэг нь бүгд бэлгийн бойжилт эхэлж буйн шинж тэмдэг юм. Энэ нь ядаргаатай ч гэлээ хэвийн зүйл юм! 👍",1,"mn"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["cae6e915-63b0-47ff-bf7b-eee5ab65abd7","Гэр бүл төлөвлөлт","Сарын тэмдгийн үед жирэмслэх боломжтой. Жишээ нь, өндгөн эс чинь арай эрт гадагшилсан үед ч жирэмслэх магадлалтай. 📆",1,"mn"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["46106c06-b5ae-42ec-9fd9-7b58bee723b2","Гэр бүл төлөвлөлт","Бэлгийн харьцааны үеэр бэлгэвч ашиглахгүй бол халдвар авах эрсдэлтэй ба \"аюулгүй өдөр\" гэх мэт зүйл байхгүй!😓‍♀️",1,"mn"]
query: START TRANSACTION
query: COMMIT
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["3b359990-702e-4cc3-aa52-4494652e4805"]
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["75ec843a-9553-43cc-8365-e67c02b746e7"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["4c7fbbb0-f54f-4f67-a359-d13135f587b2","Гэр бүл төлөвлөлт","Сарын тэмдгийн үеэр хамтрагчид хоёул тохиролцсон бол бэлгийн харьцаанд орох ямар ч асуудалгүй. 🤝 Харин хамгаалалт хэрэглэхээ мартваа!",1,"mn"]
query: COMMIT
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["24ef36ab-35ad-4c16-833f-2127f7e8ed8b"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["c193d88c-9e56-4665-a750-6d87e959569c","Бэлгийн бойжилт","Бэлгийн бойжилт нь чамайг жаахан охиноос нас бие гүйцсэн эмэгтэй болох үйл явц юм.👧👱‍♀️",1,"mn"]
query: COMMIT
query: COMMIT
query: COMMIT
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["9577d012-cca0-41f9-a5de-2c498b7b1211"]
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["e81963fe-fb50-409b-a917-0c9ba95422ab"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["d864eaad-1921-4409-97e8-b1ce0d8a777b"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["fbde738d-7a5c-44d4-af18-8e766db9bb30"]
query: COMMIT
query: COMMIT
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["3b359990-702e-4cc3-aa52-4494652e4805","Хөвгүүд ба үерхэл","Хөвгүүд ч гэсэн сарын тэмдгийн талаар анхаарч байх ёстой. Учир нь энэ нь  тэдний хайртай охид, эмэгтэйчүүдийн эрүүл мэнд, сайн сайханд нөлөөлдөг! 👫",1,"mn"]
query: START TRANSACTION
query: START TRANSACTION
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["24ef36ab-35ad-4c16-833f-2127f7e8ed8b","Хөвгүүд ба үерхэл","Хөвгүүдэд умай байхгүй бөгөөд өндгөн эс ялгардаггүй учир сарын тэмдэг ирдэггүй. 🤔 Тэд харин эр бэлгийн эс боловсруулдаг.",1,"mn"]
query: START TRANSACTION
query: COMMIT
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["4b7b670c-b452-46a9-8269-eca67ab4557b"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["dc6d86bd-689f-4fbe-ae28-071e6516b5d5"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["e81963fe-fb50-409b-a917-0c9ba95422ab","Төөрөгдөл ба мэдрэмж","Охид сарын тэмдгийн үеэр гэрийнхнээсээ тусдаа идэж, унтах ёстой гэсэн шинжлэх ухааны үндэслэлтэй шалтгаан байхгүй. 😐",1,"mn"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["d864eaad-1921-4409-97e8-b1ce0d8a777b","Төөрөгдөл ба мэдрэмж","Олон соёлд охидын анхны сарын тэмдгийг эмэгтэй хүн болж байна хэмээн тэмдэглэдэг 🎉.",1,"mn"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["9577d012-cca0-41f9-a5de-2c498b7b1211","Төөрөгдөл ба мэдрэмж","Сарын тэмдэг ирсэн гэдэг нь чи гэрлэхэд бэлэн болсон гэсэн үг биш юм... Чи гэрлэхийнхээ өмнө сэтгэл зүйн хувьд бэлэн болсон байх ёстой!👏",1,"mn"]
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["75ec843a-9553-43cc-8365-e67c02b746e7","Хөвгүүд ба үерхэл","Сарын тэмдэг нь ирсэн үед найз охиддоо туслахыг хүссэн хөвгүүд тэднээс асуулт асууж, яриаг нь сонсохоос эхэлж болох юм. 👂",1,"mn"]
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["fbde738d-7a5c-44d4-af18-8e766db9bb30","Сарын тэмдэг ба амьдрал","Гоо сайхны хамгийн хэрэгтэй зөвөлгөө бол төрөл бүрийн хүнс ногоо хэрэглэх, хангалттай сайн ус уух, идэвхтэй байх болон сайн унтаж амрах! 🥕 💦🏃‍♀️😴",1,"mn"]
query: START TRANSACTION
query: COMMIT
query: COMMIT
query: COMMIT
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["4b7b670c-b452-46a9-8269-eca67ab4557b","Сарын тэмдэг ба амьдрал","Хэдийгээр сарын тэмдэг нь хэвийн болон эрүүл байгаагийн шинж байж болох ч чи дургүй байж бас болно😡.",1,"mn"]
query: START TRANSACTION
query: COMMIT
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["dc6d86bd-689f-4fbe-ae28-071e6516b5d5","Сарын тэмдэг ба амьдрал","Гунигтай байна уу? Гүйх, үсрэх гэх мэтчилэн дасгал хийх эсвэл бүжиглэх юм бол чи эргээд инээх болно😊",1,"mn"]
query: COMMIT
query: COMMIT
