started
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
      { 'e6daffd7-89ae-4928-990c-0a5bcfbbfcd4':
         { id: 'e6daffd7-89ae-4928-990c-0a5bcfbbfcd4',
           title: 'Menstruasi dan siklusnya',
           content:
            'Hanya setengah \'darah menstruasi\' adalah darah! 😮 Sisanya adalah sel selaput dinding rahim dan vagina.' },
        'c42f496e-db3e-4ca9-909d-3ebd9bdda4fd':
         { id: 'c42f496e-db3e-4ca9-909d-3ebd9bdda4fd',
           title: 'Menstruasi dan siklusnya',
           content:
            'Siklus menstruasi (jeda hari antara menstruasi yang satu dengan lainnya) biasanya adalah antara 21-31 hari - setiap orang itu berbeda! ☺️' },
        '266dfed1-f91b-49a3-b820-da7fa3d28b8f':
         { id: '266dfed1-f91b-49a3-b820-da7fa3d28b8f',
           title: 'Menstruasi dan siklusnya',
           content:
            'Setiap bulan, rahim menyiapkan lapisan baru sebagai tempat calon bayi. Menstruasi adalah lapisan dinding rahim yang keluar karena tidak ada telur yang dibuahi⤵️' },
        '96d625fe-bb8b-47bc-8d25-a82784d18ce6':
         { id: '96d625fe-bb8b-47bc-8d25-a82784d18ce6',
           title: 'Mengenal menstruasimu',
           content:
            'Kamu tidak perlu membersihkan vaginamu dalam (atau kapanpun!). Karena ini bisa menyebabkan infeksi. 🤒' },
        '773059fb-0a31-45e0-8af1-156ce6889fe6':
         { id: '773059fb-0a31-45e0-8af1-156ce6889fe6',
           title: 'Mengenal menstruasimu',
           content:
            'Kram menstruasi disebabkan karena rahim berusaha mengeluarkan sel selaput dinding rahim saat siklus menstruasi. 😖' },
        'b351dd57-66e6-4303-b383-6a7661f4fe6e':
         { id: 'b351dd57-66e6-4303-b383-6a7661f4fe6e',
           title: 'Mengenal menstruasimu',
           content:
            'Menggunakan tampon TIDAK membuat kamu tidak perawan 👍. Kehilangan keperawanan hanya terjadi jika kamu berhubungan seks.' },
        '47075b07-2fdf-45a7-a712-cf0155984f7a':
         { id: '47075b07-2fdf-45a7-a712-cf0155984f7a',
           title: 'Kesehatan',
           content:
            'Makan makanan yang tinggi zat besi seperti daging merah, lentil atau sayuran hijau sangat baik saat kamu menstruasi. 🥩🥦' },
        'f44f0d1a-49a5-48db-89d2-a3835b6238f2':
         { id: 'f44f0d1a-49a5-48db-89d2-a3835b6238f2',
           title: 'Kesehatan',
           content:
            'Makan makanan dingin tidak akan menyebabkan kram menstruasi. Tapi makan makanan hangat bisa membuat kamu nyaman! 🍚' },
        'c5628e86-ca0f-4ff0-b380-aa2eea4a6eb5':
         { id: 'c5628e86-ca0f-4ff0-b380-aa2eea4a6eb5',
           title: 'Kesehatan',
           content:
            'Berolahraga saat menstruasi bisa mengurangi sakit akibat kram menstruasi! 🏃‍♀️' },
        'd6ca2bb1-19eb-4192-9565-687b11767a7d':
         { id: 'd6ca2bb1-19eb-4192-9565-687b11767a7d',
           title: 'Pubertas',
           content:
            'Tanda awal pubertas biasanya tumbuh payudara, diikuti dengan tumbuhnya rambut dan bulu halus di alat kelamin, ketiak, dan terakhir menstruasi! 😯' },
        '18e6bd75-ff4b-430a-be84-803f8dd6025c':
         { id: '18e6bd75-ff4b-430a-be84-803f8dd6025c',
           title: 'Pubertas',
           content:
            'Pubertas adalah waktunya kamu tumbuh dari anak perempuan menjadi perempuan dewasa.👧👱‍♀️' },
        'b9de5559-fa36-4683-93d8-1e2e7be12175':
         { id: 'b9de5559-fa36-4683-93d8-1e2e7be12175',
           title: 'Pubertas',
           content:
            'Berat badan naik, bertambah tinggi tiba-tiba, atau kulit jadi berminyak adalah tanda pubertas. Menyebalkan, namun itu normal! 👍' },
        'e51471c5-e66a-4116-884f-b15255a21e5c':
         { id: 'e51471c5-e66a-4116-884f-b15255a21e5c',
           title: 'Relasi dan lawan jenis',
           content:
            'Laki-laki harus tahu tentang menstruasi karena itu mempengaruhi kesehatan dan kebahagiaan perempuan yang mereka cintai. 👫' },
        'efe65cbb-d772-4cab-931f-5140b737a3e7':
         { id: 'efe65cbb-d772-4cab-931f-5140b737a3e7',
           title: 'Relasi dan lawan jenis',
           content:
            'Laki-laki bisa membantu perempuan saat menstruasi dengan bertanya dan mendengarkan pengalaman perempuan. 👂' },
        '4d5add2b-c1b6-4eb2-b46d-5caa19135d5a':
         { id: '4d5add2b-c1b6-4eb2-b46d-5caa19135d5a',
           title: 'Relasi dan lawan jenis',
           content:
            'Laki-laki tidak menstruasi karena mereka tidak punya uterus atau memproduksi telur.😄Mereka produksi sperma.' },
        '6cddcaa5-a3f6-4aea-8bfb-de3aa02d1662':
         { id: '6cddcaa5-a3f6-4aea-8bfb-de3aa02d1662',
           title: 'Mitos dan perasaan',
           content:
            'Mengalami menstruasi tidak berarti kamu sudah siap untuk menikah.. Kamu perlu menjadi dewasa secara emosi juga untuk siap menikah! 👏' },
        '6274b27b-e830-406b-ba96-b66e9cf9d82f':
         { id: '6274b27b-e830-406b-ba96-b66e9cf9d82f',
           title: 'Mitos dan perasaan',
           content:
            'Tidak ada alasan ilmiah kenapa remaja perempuan harus tinggal, makan atau tidur di tempat terpisah saat menstruasi. 😐' },
        'e217f1ba-f504-45e6-adfa-88b78f9f1d4e':
         { id: 'e217f1ba-f504-45e6-adfa-88b78f9f1d4e',
           title: 'Mitos dan perasaan',
           content:
            'Di banyak budaya, remaja perempuan yang baru menstruasi dirayakan karena itu tanda mereka mulai jadi dewasa 🎉.' },
        'e6fa04e4-9a51-4e71-9abf-fbcf512fb245':
         { id: 'e6fa04e4-9a51-4e71-9abf-fbcf512fb245',
           title: 'Gaya hidup',
           content:
            'Saran kecantikan terbaik adalah makan berbagai jenis makanan, minum air putih yang banyak, tetap aktif dan tidur yang cukup! 💦😴🏃‍♀️🥒🥕' },
        '48e61493-420a-4456-a2fd-99c9acb98b85':
         { id: '48e61493-420a-4456-a2fd-99c9acb98b85',
           title: 'Gaya hidup',
           content:
            'Meskipun menstruasi itu normal dan sehat, tidak apa-apa untuk tidak menyukainya 😡.' },
        'f8457d2b-e709-482d-8de7-e6dad372a2ae':
         { id: 'f8457d2b-e709-482d-8de7-e6dad372a2ae',
           title: 'Gaya hidup',
           content:
            'Merasa sedih? Olahraga seperti lari, melompat, atau berjoget dapat mengembalikan senyum di wajahmu. 😊' } },
     allIds:
      [ 'e6daffd7-89ae-4928-990c-0a5bcfbbfcd4',
        'c42f496e-db3e-4ca9-909d-3ebd9bdda4fd',
        '266dfed1-f91b-49a3-b820-da7fa3d28b8f',
        '96d625fe-bb8b-47bc-8d25-a82784d18ce6',
        '773059fb-0a31-45e0-8af1-156ce6889fe6',
        'b351dd57-66e6-4303-b383-6a7661f4fe6e',
        '47075b07-2fdf-45a7-a712-cf0155984f7a',
        'f44f0d1a-49a5-48db-89d2-a3835b6238f2',
        'c5628e86-ca0f-4ff0-b380-aa2eea4a6eb5',
        'd6ca2bb1-19eb-4192-9565-687b11767a7d',
        '18e6bd75-ff4b-430a-be84-803f8dd6025c',
        'b9de5559-fa36-4683-93d8-1e2e7be12175',
        'e51471c5-e66a-4116-884f-b15255a21e5c',
        'efe65cbb-d772-4cab-931f-5140b737a3e7',
        '4d5add2b-c1b6-4eb2-b46d-5caa19135d5a',
        '6cddcaa5-a3f6-4aea-8bfb-de3aa02d1662',
        '6274b27b-e830-406b-ba96-b66e9cf9d82f',
        'e217f1ba-f504-45e6-adfa-88b78f9f1d4e',
        'e6fa04e4-9a51-4e71-9abf-fbcf512fb245',
        '48e61493-420a-4456-a2fd-99c9acb98b85',
        'f8457d2b-e709-482d-8de7-e6dad372a2ae' ] } }
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["e6daffd7-89ae-4928-990c-0a5bcfbbfcd4"]
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["e6daffd7-89ae-4928-990c-0a5bcfbbfcd4","Menstruasi dan siklusnya","Hanya setengah 'darah menstruasi' adalah darah! 😮 Sisanya adalah sel selaput dinding rahim dan vagina.",1,"id"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["d6ca2bb1-19eb-4192-9565-687b11767a7d"]
query: COMMIT
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["c42f496e-db3e-4ca9-909d-3ebd9bdda4fd"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["96d625fe-bb8b-47bc-8d25-a82784d18ce6"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["18e6bd75-ff4b-430a-be84-803f8dd6025c"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["266dfed1-f91b-49a3-b820-da7fa3d28b8f"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["b351dd57-66e6-4303-b383-6a7661f4fe6e"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["f44f0d1a-49a5-48db-89d2-a3835b6238f2"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["47075b07-2fdf-45a7-a712-cf0155984f7a"]
query: START TRANSACTION
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["c5628e86-ca0f-4ff0-b380-aa2eea4a6eb5"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["773059fb-0a31-45e0-8af1-156ce6889fe6"]
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["c42f496e-db3e-4ca9-909d-3ebd9bdda4fd","Menstruasi dan siklusnya","Siklus menstruasi (jeda hari antara menstruasi yang satu dengan lainnya) biasanya adalah antara 21-31 hari - setiap orang itu berbeda! ☺️",1,"id"]
query: START TRANSACTION
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["d6ca2bb1-19eb-4192-9565-687b11767a7d","Pubertas","Tanda awal pubertas biasanya tumbuh payudara, diikuti dengan tumbuhnya rambut dan bulu halus di alat kelamin, ketiak, dan terakhir menstruasi! 😯",1,"id"]
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["18e6bd75-ff4b-430a-be84-803f8dd6025c","Pubertas","Pubertas adalah waktunya kamu tumbuh dari anak perempuan menjadi perempuan dewasa.👧👱‍♀️",1,"id"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["266dfed1-f91b-49a3-b820-da7fa3d28b8f","Menstruasi dan siklusnya","Setiap bulan, rahim menyiapkan lapisan baru sebagai tempat calon bayi. Menstruasi adalah lapisan dinding rahim yang keluar karena tidak ada telur yang dibuahi⤵️",1,"id"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["b351dd57-66e6-4303-b383-6a7661f4fe6e","Mengenal menstruasimu","Menggunakan tampon TIDAK membuat kamu tidak perawan 👍. Kehilangan keperawanan hanya terjadi jika kamu berhubungan seks.",1,"id"]
query: START TRANSACTION
query: COMMIT
query: START TRANSACTION
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["f44f0d1a-49a5-48db-89d2-a3835b6238f2","Kesehatan","Makan makanan dingin tidak akan menyebabkan kram menstruasi. Tapi makan makanan hangat bisa membuat kamu nyaman! 🍚",1,"id"]
query: COMMIT
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["b9de5559-fa36-4683-93d8-1e2e7be12175"]
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["c5628e86-ca0f-4ff0-b380-aa2eea4a6eb5","Kesehatan","Berolahraga saat menstruasi bisa mengurangi sakit akibat kram menstruasi! 🏃‍♀️",1,"id"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["47075b07-2fdf-45a7-a712-cf0155984f7a","Kesehatan","Makan makanan yang tinggi zat besi seperti daging merah, lentil atau sayuran hijau sangat baik saat kamu menstruasi. 🥩🥦",1,"id"]
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["96d625fe-bb8b-47bc-8d25-a82784d18ce6","Mengenal menstruasimu","Kamu tidak perlu membersihkan vaginamu dalam (atau kapanpun!). Karena ini bisa menyebabkan infeksi. 🤒",1,"id"]
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["e51471c5-e66a-4116-884f-b15255a21e5c"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["efe65cbb-d772-4cab-931f-5140b737a3e7"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["4d5add2b-c1b6-4eb2-b46d-5caa19135d5a"]
query: START TRANSACTION
query: COMMIT
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["773059fb-0a31-45e0-8af1-156ce6889fe6","Mengenal menstruasimu","Kram menstruasi disebabkan karena rahim berusaha mengeluarkan sel selaput dinding rahim saat siklus menstruasi. 😖",1,"id"]
query: COMMIT
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["b9de5559-fa36-4683-93d8-1e2e7be12175","Pubertas","Berat badan naik, bertambah tinggi tiba-tiba, atau kulit jadi berminyak adalah tanda pubertas. Menyebalkan, namun itu normal! 👍",1,"id"]
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["6cddcaa5-a3f6-4aea-8bfb-de3aa02d1662"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["6274b27b-e830-406b-ba96-b66e9cf9d82f"]
query: COMMIT
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["e51471c5-e66a-4116-884f-b15255a21e5c","Relasi dan lawan jenis","Laki-laki harus tahu tentang menstruasi karena itu mempengaruhi kesehatan dan kebahagiaan perempuan yang mereka cintai. 👫",1,"id"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["efe65cbb-d772-4cab-931f-5140b737a3e7","Relasi dan lawan jenis","Laki-laki bisa membantu perempuan saat menstruasi dengan bertanya dan mendengarkan pengalaman perempuan. 👂",1,"id"]
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["e217f1ba-f504-45e6-adfa-88b78f9f1d4e"]
query: COMMIT
query: START TRANSACTION
query: START TRANSACTION
query: COMMIT
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["e6fa04e4-9a51-4e71-9abf-fbcf512fb245"]
query: START TRANSACTION
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["48e61493-420a-4456-a2fd-99c9acb98b85"]
query: COMMIT
query: SELECT "DidYouKnow"."id" AS "DidYouKnow_id", "DidYouKnow"."title" AS "DidYouKnow_title", "DidYouKnow"."content" AS "DidYouKnow_content", "DidYouKnow"."live" AS "DidYouKnow_live", "DidYouKnow"."lang" AS "DidYouKnow_lang" FROM "did_you_know" "DidYouKnow" WHERE "DidYouKnow"."id" IN ($1) -- PARAMETERS: ["f8457d2b-e709-482d-8de7-e6dad372a2ae"]
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["6cddcaa5-a3f6-4aea-8bfb-de3aa02d1662","Mitos dan perasaan","Mengalami menstruasi tidak berarti kamu sudah siap untuk menikah.. Kamu perlu menjadi dewasa secara emosi juga untuk siap menikah! 👏",1,"id"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["6274b27b-e830-406b-ba96-b66e9cf9d82f","Mitos dan perasaan","Tidak ada alasan ilmiah kenapa remaja perempuan harus tinggal, makan atau tidur di tempat terpisah saat menstruasi. 😐",1,"id"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["4d5add2b-c1b6-4eb2-b46d-5caa19135d5a","Relasi dan lawan jenis","Laki-laki tidak menstruasi karena mereka tidak punya uterus atau memproduksi telur.😄Mereka produksi sperma.",1,"id"]
query: START TRANSACTION
query: START TRANSACTION
query: COMMIT
query: COMMIT
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["f8457d2b-e709-482d-8de7-e6dad372a2ae","Gaya hidup","Merasa sedih? Olahraga seperti lari, melompat, atau berjoget dapat mengembalikan senyum di wajahmu. 😊",1,"id"]
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["e6fa04e4-9a51-4e71-9abf-fbcf512fb245","Gaya hidup","Saran kecantikan terbaik adalah makan berbagai jenis makanan, minum air putih yang banyak, tetap aktif dan tidur yang cukup! 💦😴🏃‍♀️🥒🥕",1,"id"]
query: START TRANSACTION
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["e217f1ba-f504-45e6-adfa-88b78f9f1d4e","Mitos dan perasaan","Di banyak budaya, remaja perempuan yang baru menstruasi dirayakan karena itu tanda mereka mulai jadi dewasa 🎉.",1,"id"]
query: COMMIT
query: COMMIT
query: INSERT INTO "did_you_know"("id", "title", "content", "live", "lang") VALUES ($1, $2, $3, $4, $5) -- PARAMETERS: ["48e61493-420a-4456-a2fd-99c9acb98b85","Gaya hidup","Meskipun menstruasi itu normal dan sehat, tidak apa-apa untuk tidak menyukainya 😡.",1,"id"]
query: COMMIT
query: COMMIT
query: COMMIT
