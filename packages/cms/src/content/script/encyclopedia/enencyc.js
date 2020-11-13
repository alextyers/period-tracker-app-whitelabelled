
const categories= 
   { byId:
      { 'f4fc2e27-af8b-44b7-ab8b-b5149fc57813':
         { id: 'f4fc2e27-af8b-44b7-ab8b-b5149fc57813',
           name: 'MENSTRUASI DAN SIKLUSNYA',
           tags: { primary: { name: 'periods', emoji: '🔴' } },
           subCategories:
            [ '11f8a576-288e-4f49-a94d-f863f45fd77a',
              'c13240f8-8a2e-4c92-a290-48dfd5823caf',
              '37fdd66b-d98a-45a0-ad84-a7ca0fcbedbf' ] },
        '75a8544d-2716-4a14-97ac-94cbe26b9d64':
         { id: '75a8544d-2716-4a14-97ac-94cbe26b9d64',
           name: 'MENGENAL MENSTRUASIMU',
           tags: { primary: { name: 'care', emoji: '🚺' } },
           subCategories:
            [ '003ff911-9f1a-4a43-8f0b-53f1fb4926dd',
              '946011f2-3581-457a-a7ad-9415d76cf3eb',
              'd7e67c80-4455-450c-8dec-6d87112ab0ee' ] },
        'd4294393-a910-4041-8d19-d5b71e6b0bfb':
         { id: 'd4294393-a910-4041-8d19-d5b71e6b0bfb',
           name: 'KESEHATAN',
           tags: { primary: { name: 'health', emoji: '💚' } },
           subCategories:
            [ '82b8b0a4-2fc3-44a2-8d7b-dab92534e422',
              'ce14ff21-7235-4160-b328-8192cada3e30' ] },
        'c0365ddc-ea93-48f7-8ee6-653fff3df031':
         { id: 'c0365ddc-ea93-48f7-8ee6-653fff3df031',
           name: 'Pubertas',
           tags: { primary: { name: 'pubertas', emoji: '🌷' } },
           subCategories: [ 'ca2367e7-7852-4b45-9292-180d0ed237be' ] },
        'e04b0321-f8c5-4fcf-96cf-f386cda7c42d':
         { id: 'e04b0321-f8c5-4fcf-96cf-f386cda7c42d',
           name: 'RELASI DAN LAWAN JENIS',
           tags: { primary: { name: 'family', emoji: '👪' } },
           subCategories:
            [ 'e38a93b3-32f7-4274-b29e-9a37c6cdcd43',
              '052fe6a5-7144-4bc2-b887-7ea4ad7a9bd4' ] },
        'ec4975e6-52d6-4387-8e75-124afc3325cf':
         { id: 'ec4975e6-52d6-4387-8e75-124afc3325cf',
           name: 'MITOS DAN PERASAAN',
           tags: { primary: { name: 'boys', emoji: '👫' } },
           subCategories:
            [ '455f68ae-98f1-480a-8f88-48ab6988cbef',
              '6df5b777-0e80-470c-9d11-d12e23ae9154',
              '123e0359-ccf6-41f9-8ae8-3cb2ab66d9a6',
              '152e5809-9980-41ba-bf66-f0e77fb536cc' ] },
        'ccece518-78d6-4cbe-8460-9b0d1d373cd7':
         { id: 'ccece518-78d6-4cbe-8460-9b0d1d373cd7',
           name: 'Gaya hidup',
           tags: { primary: { name: 'cloud', emoji: '☁️' } },
           subCategories:
            [ 'cdd466a9-9d5d-4abe-89d8-899a528ac56b',
              'd606e88d-2a98-41ac-acce-310bda3a633d',
              'c736230d-c240-4ea3-a716-2aa670247d5c' ] } },
     allIds:
      [ 'f4fc2e27-af8b-44b7-ab8b-b5149fc57813',
        '75a8544d-2716-4a14-97ac-94cbe26b9d64',
        'd4294393-a910-4041-8d19-d5b71e6b0bfb',
        'c0365ddc-ea93-48f7-8ee6-653fff3df031',
        'e04b0321-f8c5-4fcf-96cf-f386cda7c42d',
        'ec4975e6-52d6-4387-8e75-124afc3325cf',
        'ccece518-78d6-4cbe-8460-9b0d1d373cd7' ] },
  const subCategories =
   { byId:
      { '11f8a576-288e-4f49-a94d-f863f45fd77a':
         { id: '11f8a576-288e-4f49-a94d-f863f45fd77a',
           name: 'Menstruasi',
           articles:
            [ '540e585a-28af-49bb-ae7e-255c2679beb7',
              '1a47c32e-eabe-481d-bb63-37150208fc2a',
              'eca08870-841c-4f05-872a-e37593c2fd97',
              'a0359649-d027-421b-a969-5c942aba102d',
              'c3fd5590-36f1-4fbd-868b-02de1d5b7f84',
              '0ee3b556-53f5-45fc-a09e-161a18bb3f58',
              '60901f63-6b96-4fda-99a5-0eec25901c6f',
              'c3dd5359-61c7-43b5-911d-2d4a001a4191',
              '412ee891-1e23-471e-a570-c7eed85f02dc',
              '074c29fa-73f6-49a1-b620-caea73f57a84',
              'e1d32dfe-a43d-4843-acd6-7a4464de61a6' ] },
        'c13240f8-8a2e-4c92-a290-48dfd5823caf':
         { id: 'c13240f8-8a2e-4c92-a290-48dfd5823caf',
           name: 'Mens yang tidak teratur',
           articles:
            [ '7e6a00ec-ce46-49b2-abf5-ae867a180071',
              'c84dbc62-ca1a-4c4d-ac6d-f68f75fdadd7' ] },
        '37fdd66b-d98a-45a0-ad84-a7ca0fcbedbf':
         { id: '37fdd66b-d98a-45a0-ad84-a7ca0fcbedbf',
           name: 'Darah mens dan keputihan',
           articles:
            [ 'b84e3a90-7926-4094-9965-9c3810910344',
              '090f8430-eb00-458a-9e3a-60a0f2e5543a',
              '84171d32-68e9-4776-86be-b86e96814f9a',
              '74d1b188-cb21-4cc3-90f2-c9dfcdd04989',
              '5a1c815e-5686-478b-9fd6-78982e8bda8e',
              '1fe9d59f-590c-456c-9c6d-c2e5c7249eb6',
              'cf3c0658-cc0e-4f22-b902-179e78b2b02e' ] },
        '003ff911-9f1a-4a43-8f0b-53f1fb4926dd':
         { id: '003ff911-9f1a-4a43-8f0b-53f1fb4926dd',
           name: 'Kebersihan',
           articles:
            [ 'bcef8d84-3972-4138-8731-5c523f2a78a3',
              'e88781f7-62f4-465e-a982-690632863c67',
              '7c530bdb-b324-4a8b-9a0a-9766fb2ce069',
              'fdc3940d-4c94-40c7-a723-8877254f9c63' ] },
        '946011f2-3581-457a-a7ad-9415d76cf3eb':
         { id: '946011f2-3581-457a-a7ad-9415d76cf3eb',
           name: 'Tentang pembalut',
           articles:
            [ '53c8ffd5-52b2-4cfb-ae7c-4d64b11144cb',
              'f348864b-11ee-4caf-8b6c-6d168c2d8014',
              '93a069be-c578-4cf4-84a7-b43115d9114c',
              'f596e15a-6529-4c30-93e0-ac3c8a4b3115',
              'f260d76a-658c-492e-a446-fe633c3a8e92',
              'ef954164-4a24-4674-af59-b95d01bf9020',
              'ca71a2ec-cc38-4213-b7b9-aafefd00aff8',
              'c0291282-6e02-4b1e-8b4e-6ec1f8a5ed9e',
              'ed205fda-f1f3-49dc-98a5-619c5b3d5588',
              'a6b4740d-505b-4d8c-a4dd-4028931435df',
              '7e1a884e-ba6c-4b30-adfb-b8867cb18763',
              '40ec679c-6f30-4ae8-9e2e-c9b605577521',
              'e1dc3beb-effc-416c-a38d-1098cebff52f',
              '699df610-5d70-484d-99f4-70defbb47481' ] },
        'd7e67c80-4455-450c-8dec-6d87112ab0ee':
         { id: 'd7e67c80-4455-450c-8dec-6d87112ab0ee',
           name: 'Sebelum dan saat mens',
           articles:
            [ '82fcfecd-98cb-4048-a745-fc9e347e8bff',
              'a4937abf-07db-47c8-8b52-c56c194654e3',
              '978b30f1-b724-4472-8dac-ff5eb09b5811',
              '1d2986ab-49ac-4010-9442-ea86124e56b4',
              'dfc59f3f-08a7-4a32-8db6-4679e92f6269' ] },
        '82b8b0a4-2fc3-44a2-8d7b-dab92534e422':
         { id: '82b8b0a4-2fc3-44a2-8d7b-dab92534e422',
           name: 'Nutrisi dan pola makan',
           articles:
            [ 'feb718f3-29ca-461b-b018-78e90ed1ed64',
              '638cafee-1f56-48f4-a1d4-b53ce239118a',
              '6dac7057-0dd0-4cd1-b318-516bddddf75d',
              'ad8fae28-18b6-436d-87f0-09c64a74224d',
              'ddf2a252-58f1-47e6-a1e5-6407f2529ce2' ] },
        'ce14ff21-7235-4160-b328-8192cada3e30':
         { id: 'ce14ff21-7235-4160-b328-8192cada3e30',
           name: 'Olahraga',
           articles: [ 'a5b05710-c66b-4bde-a494-16063baea2fb' ] },
        'ca2367e7-7852-4b45-9292-180d0ed237be':
         { id: 'ca2367e7-7852-4b45-9292-180d0ed237be',
           name: 'Pubertas',
           articles:
            [ 'cf6a911f-f8a2-42ae-b782-1ff577505c90',
              '23cafa08-dabe-48d7-93c1-20da8f1687f2',
              '2343f03d-b1d3-48c3-99eb-a4db6ce18bea',
              '2de20595-dc3e-4742-8a6f-3ca903aa2a71',
              'f35a3711-223d-4d14-a660-840cefd739ab' ] },
        'e38a93b3-32f7-4274-b29e-9a37c6cdcd43':
         { id: 'e38a93b3-32f7-4274-b29e-9a37c6cdcd43',
           name: 'Laki-laki',
           articles:
            [ '89a796ec-c6f5-471d-8267-6ca01d86a561',
              '1300b4ea-bcd2-4e4e-9f11-07c4b5107d2a',
              '216000d0-61f0-4eff-91f4-dbfe7f414300',
              'fedff6c2-e5f6-4f75-8da0-a566284482ee',
              'a6487cd1-bffc-4cc4-b8bf-c5863d558bcb' ] },
        '052fe6a5-7144-4bc2-b887-7ea4ad7a9bd4':
         { id: '052fe6a5-7144-4bc2-b887-7ea4ad7a9bd4',
           name: 'Peran sosial',
           articles: [ '7cee47dd-c0b1-47f7-b16b-a8f5b8f6cf11' ] },
        '455f68ae-98f1-480a-8f88-48ab6988cbef':
         { id: '455f68ae-98f1-480a-8f88-48ab6988cbef',
           name: 'Takut',
           articles: [ '1c81dcb4-aec5-4709-ab5f-c84468a3dc02' ] },
        '6df5b777-0e80-470c-9d11-d12e23ae9154':
         { id: '6df5b777-0e80-470c-9d11-d12e23ae9154',
           name: 'Malu',
           articles:
            [ '9aa289eb-f397-44bf-9da7-ca3d820aef88',
              'ffc7d775-e7fe-43cd-8007-8035e126e3d1' ] },
        '123e0359-ccf6-41f9-8ae8-3cb2ab66d9a6':
         { id: '123e0359-ccf6-41f9-8ae8-3cb2ab66d9a6',
           name: 'Mitos',
           articles:
            [ '68f2537d-e2ba-4ed5-9e24-d3016be4e481',
              'ed1b44d3-4a20-4f43-938a-4a5213f4f56c',
              'b2adf685-90ab-4475-96d5-0e68f790185f',
              'faae985a-2d22-4c09-a285-c9608707efd3',
              '9d002f72-7ca0-4611-8888-3bd0715ac98d',
              '1cd63251-6cd5-41b4-8003-2118637aeaba',
              'ebd3bcfb-6172-42c6-a116-43b3c2a15da9',
              'db765ada-f7f2-4865-b15a-b409ca22c2ac',
              'e37d0315-6c86-4438-80ff-ac98cf2d652f',
              'ff5529da-2d75-492d-8394-e33579ae1122',
              '115070d5-44b5-4596-844f-27c0f822cec9',
              'a9068dbe-6099-4fda-b6f1-84e2a12fa751',
              '613dc878-eaec-4f86-bedc-48b007bb81b8',
              '8f5913e0-0629-4731-814c-81c1e9194c95',
              '04b65718-5ba0-4f04-98e6-5962505450cf' ] },
        '152e5809-9980-41ba-bf66-f0e77fb536cc':
         { id: '152e5809-9980-41ba-bf66-f0e77fb536cc',
           name: 'Perasaan',
           articles: [ '5e6a3872-d03e-4004-8e6d-114937e6e89d' ] },
        'cdd466a9-9d5d-4abe-89d8-899a528ac56b':
         { id: 'cdd466a9-9d5d-4abe-89d8-899a528ac56b',
           name: 'Motivasi',
           articles:
            [ 'a2fa5872-0fc7-4664-a221-b8669aa904ae',
              '1f090ebd-cc74-4aac-be9a-a2b3fc006edb',
              '23afde3a-8381-47dd-8bfe-a8766bec79d7',
              '17a029f1-db4a-4ee7-a334-5acbcdb98b03',
              '0291c7fc-60db-4748-b3cd-950098deab1b',
              'a0b0fc8d-2f6d-42eb-be9b-22ecb8874f44',
              '0ddfd3bb-52d7-4218-b50c-b075a48776d7' ] },
        'd606e88d-2a98-41ac-acce-310bda3a633d':
         { id: 'd606e88d-2a98-41ac-acce-310bda3a633d',
           name: 'Activitas',
           articles: [ '427ba43d-3c14-4fb5-b8f6-321a2e76dc84' ] },
        'c736230d-c240-4ea3-a716-2aa670247d5c':
         { id: 'c736230d-c240-4ea3-a716-2aa670247d5c',
           name: 'Kecantikan dan fashion',
           articles:
            [ 'c2282301-f184-4fa2-8832-2c6555574210',
              '678e2ddb-1438-4893-a398-cdcec0188d0f',
              'd3945f99-04a4-428f-82f4-c1a59110bdac' ] } },
     allIds:
      [ '11f8a576-288e-4f49-a94d-f863f45fd77a',
        'c13240f8-8a2e-4c92-a290-48dfd5823caf',
        '37fdd66b-d98a-45a0-ad84-a7ca0fcbedbf',
        '003ff911-9f1a-4a43-8f0b-53f1fb4926dd',
        '946011f2-3581-457a-a7ad-9415d76cf3eb',
        'd7e67c80-4455-450c-8dec-6d87112ab0ee',
        '82b8b0a4-2fc3-44a2-8d7b-dab92534e422',
        'ce14ff21-7235-4160-b328-8192cada3e30',
        'ca2367e7-7852-4b45-9292-180d0ed237be',
        'e38a93b3-32f7-4274-b29e-9a37c6cdcd43',
        '052fe6a5-7144-4bc2-b887-7ea4ad7a9bd4',
        '455f68ae-98f1-480a-8f88-48ab6988cbef',
        '6df5b777-0e80-470c-9d11-d12e23ae9154',
        '123e0359-ccf6-41f9-8ae8-3cb2ab66d9a6',
        '152e5809-9980-41ba-bf66-f0e77fb536cc',
        'cdd466a9-9d5d-4abe-89d8-899a528ac56b',
        'd606e88d-2a98-41ac-acce-310bda3a633d',
        'c736230d-c240-4ea3-a716-2aa670247d5c' ] },
  const articles =
   { byId:
      { '540e585a-28af-49bb-ae7e-255c2679beb7':
         { id: '540e585a-28af-49bb-ae7e-255c2679beb7',
           title: 'Apa itu menstruasi/ haid?',
           content:
            'Menstruasi adalah fungsi alami tubuh yang membuat perempuan bisa hamil dan memiliki bayi. Saat menstruasi, sel-sel selaput dinding rahim keluar dari tubuh melalui vagina. Menstruasi itu normal dan sehat bagi perempuan!',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        '1a47c32e-eabe-481d-bb63-37150208fc2a':
         { id: '1a47c32e-eabe-481d-bb63-37150208fc2a',
           title: 'Apakah menstruasi itu normal?',
           content:
            'Iya! Ini proses normal dan jadi bagian dari siklus menstruasi remaja dan perempuan. Ini juga tanda kamu tumbuh dewasa dan sehat.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        'eca08870-841c-4f05-872a-e37593c2fd97':
         { id: 'eca08870-841c-4f05-872a-e37593c2fd97',
           title: 'Kenapa perempuan menstruasi?',
           content:
            'Menstruasi merupakan bagian dari sistem reproduksi yang membuat kita bisa memiliki anak.\n\nSetiap siklus menstruasi, dinding rahim-mu menebal karena darah dan sel-sel jaringannya untuk tempat calon bayi. Jika telur kamu dibuahi oleh sperma, telur kamu akan menempel di dinding rahim dan berkembang menjadi bayi. Tapi jika tidak ada pembuahan, maka dinding rahim ini akan dipaksa keluar melalui vaginamu.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        'a0359649-d027-421b-a969-5c942aba102d':
         { id: 'a0359649-d027-421b-a969-5c942aba102d',
           title: 'Apa itu siklus menstruasi?',
           content:
            'Siklus menstruasi dimulai saat hari pertama kamu menstruasi dan selesai saat kamu menstruasi dibulan selanjutnya. Dinamakan siklus karena ini selalu berulang setiap bulan.\n\nPada masa siklus, hormon (zat kimia dalam tubuh) naik turun dan mengubah bagian tubuh lainnya.\n\nSiklus menstruasi biasanya antara 21-38 hari untuk kebanyakan orang, tapi durasinya berubah dari waktu ke waktu.\n\nSetiap orang berbeda dan memiliki siklus menstruasi yang berbeda-beda itu normal. Di tahun-tahun pertama remaja perempuan mendapatkan menstruasi, siklus mereka cenderung tidak rutin. Bahkan, kadang kamu bisa mens bulan ini tapi tidak bulan depannya.\n\nMungkin butuh waktu beberapa tahun agar siklus menstruasi-mu menjadi rutin. Membandingkan siklus-mu dengan orang lain atau mencari tahu apa yang disebut \'siklus normal\' bisa membuatmu merasa ada yang salah. Berbeda itu biasa!\n\nOky bisa membantu melacak menstruasimu untuk melihat mana yang normal BAGIMU. Sehingga, jika ada hal yang tidak biasa kamu bisa bertanya ke orang tua, guru, dokter, bidan atau perawat.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        'c3fd5590-36f1-4fbd-868b-02de1d5b7f84':
         { id: 'c3fd5590-36f1-4fbd-868b-02de1d5b7f84',
           title: 'Apa yang terjadi saat siklus menstruasi?',
           content:
            'Siklus menstruasi dimulai dengan menstruasi-mu yang mungkin lamanya antara 2-7 hari.\n\nSaat awal siklus menstruasi, sebuah telur di ovari kamu matang dan selaput dinding rahim-mu menebal. Saat telur siap dibuahi, ia akan berenang keluar dari ovarium (indung telur) lalu berjalan melalui saluran bernama tuba falopi ke arah rahim.\n\nJika telur tidak dibuahi, selaput dinding rahim yang tebal tidak diperlukan karena tidak ada perkembangan bayi sehingga ia harus dipaksa keluar melalui vagina. Inilah yang dialami perempuan saat menstruasi.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        '0ee3b556-53f5-45fc-a09e-161a18bb3f58':
         { id: '0ee3b556-53f5-45fc-a09e-161a18bb3f58',
           title:
            'Kapan perempuan pertama kali menstruasi? Pada usia berapa berhenti menstruasi?',
           content:
            'Remaja perempuan biasanya mulai menstruasi di usia 9-15 tahun, 2 tahun setelah buah dada mulai berkembang. Rata-rata perempuan menstruasi awal usia 12-13 tahun, tapi paling cepat mulai usia 8 dan terakhir usia 16 tahun.\n\nPerempuan biasanya berhenti menstruasi usia 45-55 tahun.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        '60901f63-6b96-4fda-99a5-0eec25901c6f':
         { id: '60901f63-6b96-4fda-99a5-0eec25901c6f',
           title: 'Apa itu menarche?',
           content:
            'Menarche adalah menstruasi pertama remaja perempuan dalam bahasa ilmiah.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        'c3dd5359-61c7-43b5-911d-2d4a001a4191':
         { id: 'c3dd5359-61c7-43b5-911d-2d4a001a4191',
           title: 'Berapa hari perempuan menstruasi?',
           content:
            'Biasanya antara 2-7 hari perempuan menstruasi tapi bisa lebih lama lagi.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        '412ee891-1e23-471e-a570-c7eed85f02dc':
         { id: '412ee891-1e23-471e-a570-c7eed85f02dc',
           title: 'Apa orang lain tahu kalau saya lagi menstruasi?',
           content:
            'Tidak, kecuali kamu bilang. Saat pertama kali menstruasi, kamu bisa bilang ke ibu, kakak perempuan atau orang dewasa yang kamu percaya. Mereka mungkin bisa menjawab pertanyaan-pertanyaan yang kamu punya.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        '074c29fa-73f6-49a1-b620-caea73f57a84':
         { id: '074c29fa-73f6-49a1-b620-caea73f57a84',
           title: 'Apa itu masa subur?',
           content:
            'Masa subur adalah waktu saat tubuh sedang mengeluarkan telur yang sudah matang ke dalam rahim. Pada masa ini, perempuan mempunyai risiko mengalami kehamilan lebih tinggi dari hari biasanya jika melakukan hubungan seksual.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        'e1d32dfe-a43d-4843-acd6-7a4464de61a6':
         { id: 'e1d32dfe-a43d-4843-acd6-7a4464de61a6',
           title: 'Bagaimana Oky memperkirakan masa subur?',
           content:
            'Jika kamu punya siklus reguler (kamu selalu menstruasi setiap 26 - 32 hari), Oky menggunakan panjang siklusmu untuk memprediksi masa subur. \n\nKamu sebaiknya TIDAK menggunakan prediksi masa subur Oky untuk mencegah kehamilan karena waktu telur matang mungkin berganti tiap bulannya.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Menstruasi' },
        '7e6a00ec-ce46-49b2-abf5-ae867a180071':
         { id: '7e6a00ec-ce46-49b2-abf5-ae867a180071',
           title: 'Apa artinya kalau saya tidak menstruasi bulan ini?',
           content:
            'Remaja perempuan bisa tidak menstruasi selama sebulan atau beberapa bulan dan ini wajar saja.\n\nHal-hal yang mempengaruhi menstruasimu: \n- stres\n- obat-obatan \n- pemakaian alat pencegah kehamilan\n- pola makan, terutama jika itu membuatmu sangat kurus\n- olahraga berlebihan\n- sedang berpergian\n\nJika perempuan berhubungan seks setelah ia menstruasi, tidak menstruasi bisa jadi tanda kalau ia hamil.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Mens yang tidak teratur' },
        'c84dbc62-ca1a-4c4d-ac6d-f68f75fdadd7':
         { id: 'c84dbc62-ca1a-4c4d-ac6d-f68f75fdadd7',
           title: 'Siklus menstruasi saya tidak rutin, apakah itu masalah?',
           content:
            'Siklus yang tidak rutin itu sangat normal, terutama pada tahun-tahun awal menstruasi. Ini adalah suatu hal yang sehat dan normal.\n\nMenggunakan Oky bisa membantumu untuk tahu kapan siklusmu yang normal.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Mens yang tidak teratur' },
        'b84e3a90-7926-4094-9965-9c3810910344':
         { id: 'b84e3a90-7926-4094-9965-9c3810910344',
           title: 'Berapa banyak darah yang keluar selama menstruasi?',
           content:
            'Darah menstruasi biasanya keluar sebanyak 2-4 sendok makan (30 - 60 ml), tapi bisa juga antara 5-80 ml.\n\nKebanyakan perempuan keluar banyak darah menstruasi di awal dan menjadi lebih sedikit menjelang selesai menstruasi.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Darah mens dan keputihan' },
        '090f8430-eb00-458a-9e3a-60a0f2e5543a':
         { id: '090f8430-eb00-458a-9e3a-60a0f2e5543a',
           title: 'Terbuat dari apa darah menstruasi itu?',
           content:
            'Darah menstruasi terdiri dari darah, sel-sel jaringan yang menebal di dinding rahim (untuk menyiapkan kemungkinan hamil).',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Darah mens dan keputihan' },
        '84171d32-68e9-4776-86be-b86e96814f9a':
         { id: '84171d32-68e9-4776-86be-b86e96814f9a',
           title: 'Darah menstruasi saya keluar banyak, apa itu normal?',
           content:
            'Kamu disebut keluar darah menstruasi banyak saat menggunakan lebih dari 16 pembalut atau tampon dalam satu kali menstruasi. Ini mungkin normal buatmu.\n\nJika kamu keluar darah menstruasi banyak dan kamu kuatir, tanyakan itu kepada petugas kesehatan.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Darah mens dan keputihan' },
        '74d1b188-cb21-4cc3-90f2-c9dfcdd04989':
         { id: '74d1b188-cb21-4cc3-90f2-c9dfcdd04989',
           title: 'Darah menstruasi saya keluar sedikit, apa itu normal?',
           content:
            'Darah menstruasi yang keluar itu berbeda-beda antara tiap perempuan dan menstruasi tiap bulan. Jadi penting untuk tahu apa yang disebut normal untukmu. Darah menstruasi yang keluar sedikit mungkin saja normal buatmu.\n\nMenggunakan Oky bisa melacak perubahan menstruasi yang terjadi. Jika darah menstruasimu lebih sedikit dari biasanya, mungkin saja itu disebabkan oleh kehamilan, stres, penyakit, naik atau turunnya berat badan, umur, atau alat kontrasepsi yang mengandung hormon.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Darah mens dan keputihan' },
        '5a1c815e-5686-478b-9fd6-78982e8bda8e':
         { id: '5a1c815e-5686-478b-9fd6-78982e8bda8e',
           title:
            'Ada banyak gumpalan pada darah menstruasi saya, apa itu normal?',
           content:
            'Iya, itu normal saat darah menstruasi punya banyak gumpalan. Darah menstruasi terdiri dari darah dan sel jaringan dari dinding rahim. Karena itulah erdapat banyak gumpalan di dalamnya.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Darah mens dan keputihan' },
        '1fe9d59f-590c-456c-9c6d-c2e5c7249eb6':
         { id: '1fe9d59f-590c-456c-9c6d-c2e5c7249eb6',
           title:
            'Warna darah menstruasi saya berubah - kadang itu warnanya gelap dan kadang lebih terang, apa itu normal?',
           content:
            'Warna darah menstruasi yang berubah-ubah itu normal saja! Contohnya, warna itu bisa berubah karena terkena udara. Warna yang berbeda tidak selalu ada kaitannya dengan kesehatan.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Darah mens dan keputihan' },
        'cf3c0658-cc0e-4f22-b902-179e78b2b02e':
         { id: 'cf3c0658-cc0e-4f22-b902-179e78b2b02e',
           title: 'Saya lihat cairan putih di celana dalam, apa ini normal?',
           content:
            'Iya, itu normal. Cairan putih ini namanya keputihan dan semua perempuan memilikinya.\n\n- Biasanya setelah menstruasi, kamu akan mengalami keputihan selama beberapa hari. Cairan ini biasanya lengket, berwarna putih atau kekuningan.\n- Saat telur sedang dikeluarkan oleh ovarium, keputihan berwarna terang, licin dan mirip seperti putih telur.\n- Setelah telur dikeluarkan, keputihan menjadi tidak terlalu lengket dan sedikit buram.\n\nPerubahan warna atau jenis keputihan bisa jadi merupakan tanda adanya masalah kesehatan, misalnya:\n- kalau keputihan berwarna abu-abu, hijau, kuning atau cokelat\n- kalau keputihan sangat banyak, terutama jika ada rasa gatal atau sakit\n- keputihan yang lebih banyak atau sedikit dari biasanya atau terlalu menggumpal bentuknya\n- ada bau amis atau logam\n\nKamu sebaiknya konsultasi dengan petugas kesehatan jika mengalami hal-hal di atas.',
           category: 'Menstruasi dan siklusnya',
           subCategory: 'Darah mens dan keputihan' },
        'bcef8d84-3972-4138-8731-5c523f2a78a3':
         { id: 'bcef8d84-3972-4138-8731-5c523f2a78a3',
           title: 'Bagaimana menjaga kebersihan saat menstruasi?',
           content:
            'Mendapatkan menstruasi pada waktu yang tidak terduga bisa membuat kita merasa kotor, tapi perlu diingat bahwa ini adalah proses alami.\n\nCara menjaga kebersihan itu mudah:\n\n- Bersihkan bagian luar vagina (dan paha atas jika terkena darah) dengan air bersih sekali atau dua kali sehari jika bisa.\n- Bersihkan baju yang terkena darah menstruasi dengan air dingin dan sabun. \n- Ganti pembalut atau tampon segera ketika itu sudah penuh untuk mencegah kebocoran (tampon harus diganti setiap 4-8 jam).',
           category: 'Mengenal menstruasimu',
           subCategory: 'Kebersihan' },
        'e88781f7-62f4-465e-a982-690632863c67':
         { id: 'e88781f7-62f4-465e-a982-690632863c67',
           title: 'Apakah saya harus mandi saat menstruasi?',
           content:
            'Iya, kamu harus mandi setiap hari seperti biasanya. Jika bisa, bersihkan bagian luar vagina (vulva) dua kali sehari dengan air. Keringkan badan kemudian gunakan pembalut bersih di celana dalam-mu.\n\nJangan mencoba membersihkan vagina bagian dalam dengan air atau apapun karena itu bisa menyebabkan infeksi.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Kebersihan' },
        '7c530bdb-b324-4a8b-9a0a-9766fb2ce069':
         { id: '7c530bdb-b324-4a8b-9a0a-9766fb2ce069',
           title:
            'Mereka bilang sebaiknya tidak mandi saat menstruasi, apa itu benar?',
           content:
            'Tidak! Mandi dan membersihkan diri itu sangat penting. Ini akan membuat kamu merasa bersih dan segar serta membantu mencegah infeksi.\n\nJangan mencoba membersihkan vagina bagian dalam dengan air atau apapun karena itu bisa menyebabkan infeksi.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Kebersihan' },
        'fdc3940d-4c94-40c7-a723-8877254f9c63':
         { id: 'fdc3940d-4c94-40c7-a723-8877254f9c63',
           title:
            'Apa saya perlu membersihkan bagian dalam vagina saat menstruasi?',
           content:
            'Tidak! Jangan mencoba membersihkan vagina bagian dalam dengan air atau apapun karena itu bisa menyebabkan infeksi.\n\nVagina bisa membersihkan dirinya sendiri, membersihkannya dengan air atau cairan lainnya akan mengganggu proses alami dan menyebabkan infeksi. Kamu hanya perlu membersihkan bagian luarnya dengan air.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Kebersihan' },
        '53c8ffd5-52b2-4cfb-ae7c-4d64b11144cb':
         { id: '53c8ffd5-52b2-4cfb-ae7c-4d64b11144cb',
           title:
            'Apa yang sebaiknya saya gunakan untuk menampung darah menstruasi?',
           content:
            'Ada berbagai cara untuk menampung darah menstruasimu.\n\nContohnya: pembalut sekali pakai, pembalut kain, tampon, cawan menstruasi, dan celana dalam menstruasi. \n\nCari tahu mana saja yang bisa kamu dapatkan di daerahmu. Kamu bisa mencoba beberapa cara untuk melihat mana yang paling cocok untukmu!',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'f348864b-11ee-4caf-8b6c-6d168c2d8014':
         { id: 'f348864b-11ee-4caf-8b6c-6d168c2d8014',
           title: 'Apa itu pembalut?',
           content:
            'Pembalut adalah bantalan yang terbuat dari bahan yang mudah menyerap cairan  untuk menyerap darah menstruasi. Pembalut sekali pakai digunakan satu kali kemudian dibuang. Pembalut kain adalah pembalut yang bisa dicuci, dikeringkan dan digunakan berkali-kali.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        '93a069be-c578-4cf4-84a7-b43115d9114c':
         { id: '93a069be-c578-4cf4-84a7-b43115d9114c',
           title: 'Apa saja jenis-jenis pembalut?',
           content:
            'Ada dua jenis pembalut: pembalut sekali pakai dan pembalut kain. Bentuk, ukuran serta kapasitas untuk menyerap darah menstruasi setiap pembalut berbeda-beda. Misalnya ada pembalut untuk darah menstruasi yang sedang banyak atau sedikit.\n\nKamu bisa mencoba beberapa jenis pembalut untuk melihat mana yang paling cocok dengan kebutuhanmu, serta banyak atau sedikitnya darah menstruasimu.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'f596e15a-6529-4c30-93e0-ac3c8a4b3115':
         { id: 'f596e15a-6529-4c30-93e0-ac3c8a4b3115',
           title: 'Bagaimana cara menggunakan pembalut?',
           content:
            'Letakkan pembalut di celana dalammu, jangan masukkan ke dalam vagina. Ganti pembalut setiap 2-6 jam atau lebih sering jika kamu rasa pembalutmu sudah penuh.\n\nJika menggunakan pembalut kain, bersihkan dulu dengan air dingin kemudian cuci dengan air hangan dan sabun lalu keringkan di bawah sinar matahari atau setrika pembalut kain sebelum menggunakannya lagi.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'f260d76a-658c-492e-a446-fe633c3a8e92':
         { id: 'f260d76a-658c-492e-a446-fe633c3a8e92',
           title: 'Bagaimana membuang pembalut bekas pakai?',
           content:
            'Bungkus pembalut bekas pakai dengan kertas atau plastik dan masukkan ke dalam tempat sampah. Jika tidak ada kertas atau plastik, masukkan langsung ke dalam tempat sampah.\n\nJangan membuangnya di dalam lubang jamban karena itu bisa menyebabkan toilet mampet.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'ef954164-4a24-4674-af59-b95d01bf9020':
         { id: 'ef954164-4a24-4674-af59-b95d01bf9020',
           title: 'Seberapa sering kita perlu mengganti pembalut?',
           content:
            'Saat menstruasi, gantilah pembalut sesering yang dibutuhkan untuk mencegah kebocoran darah menstruasi. \n\nKamu nanti akan tahu berapa lama harus menunggu sebelum mengganti pembalut seiring berjalannya waktu. Secara umum, pembalut sebaiknya diganti 4 - 6 kali sehari atau lebih darah menstruasimu sedang banyak.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'ca71a2ec-cc38-4213-b7b9-aafefd00aff8':
         { id: 'ca71a2ec-cc38-4213-b7b9-aafefd00aff8',
           title: 'Apa itu cawan menstruasi?',
           content:
            'Sebuah cawan menstruasi (menstrual cup) adalah sebuah cawan yang fleksibel, berbentuk seperti lonceng yang fungsinya mengumpulkan darah menstruasi.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'c0291282-6e02-4b1e-8b4e-6ec1f8a5ed9e':
         { id: 'c0291282-6e02-4b1e-8b4e-6ec1f8a5ed9e',
           title: 'Bagaimana cara menggunakan cawan menstruasi?',
           content:
            'Masukkan cawan ke dalam vaginamu sesuai dengan petunjuk penggunaan, dan biarkan itu berada di dalam vagina. Saat dimasukkan dengan benar, tepi cawan membuat sebuah segel di dinding vagina untuk menghindari kebocoran. Kamu bisa menggunakannya hingga 12 jam atau sampai cawan terasa penuh.\n\nUntuk mengeluarkannya, pegang ujung cawan erat-erat dengan jempol dan jari telunjuk kemudian tarik keluar. \n\nBuang darah menstruasi, bersihkan cawan dan tepinya dengan air kemudian kamu bisa menggunakannya lagi. \n\nSetelah selesai menstruasi, bersihkan cawan dengan air mendidih dan keringkan. Saat ingin menggunakannya lagi, pastikan cawan dalam keadaan bersih sebelum menggunakannya.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'ed205fda-f1f3-49dc-98a5-619c5b3d5588':
         { id: 'ed205fda-f1f3-49dc-98a5-619c5b3d5588',
           title: 'Seberapa sering sebaiknya kita mengganti cawan menstruasi?',
           content:
            'Cawan menstruasi perlu dikeluarkan dan dibersihkan setiap 12 jam. Kebanyakan cawan bisa digunakan antara 2 - 10 tahun. Kamu harus mengganti cawanmu jika itu rusak, terdapat lubang atau tidak dalam kondisi yang baik.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'a6b4740d-505b-4d8c-a4dd-4028931435df':
         { id: 'a6b4740d-505b-4d8c-a4dd-4028931435df',
           title: 'Apa itu tampon?',
           content:
            'Tampon adalah penyumbat kecil yang terbuat dari katun dan bisa dimasukkan ke dalam vaginamu untuk menyerap darah menstruasi. Beberapa tampon memiliki alat bantu untuk memasukkannya ke dalam vagina. \n\nTampon memiliki tali yang di ujungnya sehingga kamu bisa menariknya keluar dengan mudah. ',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        '7e1a884e-ba6c-4b30-adfb-b8867cb18763':
         { id: '7e1a884e-ba6c-4b30-adfb-b8867cb18763',
           title: 'Bagaimana cara menggunakan tampon?',
           content:
            'Pilihlah tipe tampon sesuai dengan banyak atau sedikitnya darah menstruasimu. Sebaiknya gunakan tampon yang bisa bertahan beberapa jam.\n\nBersihkan tanganmu kemudian masukkan tampon ke dalam vagina dengan menggunakan alat bantu atau jarimu, tergantung dari jenis tampon yang kamu punya. \n\nSetelah 4 - 8 jam, ganti tamponmu dengan cara menarik talinya pelan-pelan. Bungkus tampon dengan kertas/ tisu lalu buang di tempat sampah - jangan membuangnya di dalam lubang jamban atau toilet. \n\nJangan gunakan tampon lebih dari 8 jam. Kamu bisa menggunakan tampon saat tidur dengan cara memakainya sebelum tidur dan mengganti secepatnya saat bangun tidur.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        '40ec679c-6f30-4ae8-9e2e-c9b605577521':
         { id: '40ec679c-6f30-4ae8-9e2e-c9b605577521',
           title:
            'Apa itu Toxic Shock Syndrome/ TSS? Apa saya bisa kena itu jika menggunakan tampon?',
           content:
            'Jika tampon berada di dalam vagina pada waktu yang lama, itu bisa menyebabkan penyakit yang disebut toxic shock syndrome/TSS ataugejala keracunan darah. TSS sangat jarang sekali terjadi, namun ini adalah infeksi serius. \n\nJika kamu menggunakan tampon dan muntah, demam tinggi, diare, nyeri otot, sakit tenggorokan, pusing, pingsan atau merasa lemah, dan mengalami tipe ruam seperti terbakar matahari, segera keluarkan tampon dan carilah pertolongan medis secepatnya. \n\nNamun, jangan biarkan fakta ini membuat kamu menjadi takut! Banyak remaja perempuan menggunakan tampon dengan aman tanpa mengalami TSS. \n\nSebaiknya, gunakan tampon dengan daya serap rendah sehingga kamu bisa menggantinya setiap 4 - 8 jam atau sesering yang dibutuhkan. Kamu juga bisa menggunakan pembalut dari waktu ke waktu.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        'e1dc3beb-effc-416c-a38d-1098cebff52f':
         { id: 'e1dc3beb-effc-416c-a38d-1098cebff52f',
           title: 'Seberapa sering kita perlu mengganti tampon?',
           content:
            'Kamu perlu mengganti tampon tiap 4 - 8 jam sekali, tergantung banyaknya darah menstruasimu. \n\nTampon yang dibiarkan terlalu lama di dalam vagina dapat menimbulkan masalah kesehatan seperti toxic shock syndrome/TSS (gejala keracunan darah). Namun, jika digunakan dengan benar, tampon tidak menimbulkan masalah kesehatan.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        '699df610-5d70-484d-99f4-70defbb47481':
         { id: '699df610-5d70-484d-99f4-70defbb47481',
           title: 'Apakah menggunakan tampon bisa menghilangkan keperawanan?',
           content:
            'Tidak, keperawanan hilang hanya jika kamu berhubungan seksual. \n\nOrang sering berpikir bahwa keperawanan identik dengan selaput dara. Selaput dara adalah sel-sel jaringan elastis yang mengelilingi atau menutup sebagian atau semua lubang vagina. \n\nSelaput dara perempuan itu berbeda-beda dan itu melebar karena aktivitas fisik, olahraga, penggunaan tampon atau cawan menstruasi, memasukkan jari ke dalam vagina atau berhubungan seksual. \n\nKetika kamu memasukkan tampon pertama kalinya, selaput dara kamu kemungkinan besar akan meregang dan membiarkannya masuk ke dalam vagina.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Tentang pembalut' },
        '82fcfecd-98cb-4048-a745-fc9e347e8bff':
         { id: '82fcfecd-98cb-4048-a745-fc9e347e8bff',
           title: 'Apa menstruasi itu menyakitkan?',
           content:
            'Pengalaman menstruasi setiap orang itu berbeda-beda. \n\nBeberapa remaja perempuan tidak merasa sakit sama sekali, beberapa merasa sedikit sakit, dan beberapa lainnya merasa sakit yang parah sehingga perlu minum obat pereda nyeri. Menstruasi biasanya lebih sakit saat masa remaja.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Sebelum dan saat mens' },
        'a4937abf-07db-47c8-8b52-c56c194654e3':
         { id: 'a4937abf-07db-47c8-8b52-c56c194654e3',
           title: 'Apa penyebab kram menstruasi?',
           content:
            'Kram disebabkan oleh zat-zat kimia bernama prostaglandin, yang diproduksi oleh tubuh untuk membuat otot-otot di rahim berkontraksi. \n\nOtot yang berkontraksi mendorong sel-sel selaput dinding rahim keluar dari rahim melalui vagina saat menstruasi.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Sebelum dan saat mens' },
        '978b30f1-b724-4472-8dac-ff5eb09b5811':
         { id: '978b30f1-b724-4472-8dac-ff5eb09b5811',
           title: 'Apakah normal merasa sakit saat menstruasi?',
           content:
            'Tentu saja! Banyak perempuan merasakan sakit, seperti rasa kram atau sakit punggung bagian bawah saat menstruasi. Beberapa orang mengalami mual, kelelahan, atau pingsan, sakit kepala atau rasa tidak nyaman secara umum. \n\nTingkat rasa sakit  tiap orang berbeda dan juga berbeda tiap siklus menstruasi. Hal ini juga berubah seiring berjalannya waktu.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Sebelum dan saat mens' },
        '1d2986ab-49ac-4010-9442-ea86124e56b4':
         { id: '1d2986ab-49ac-4010-9442-ea86124e56b4',
           title:
            'Apa yang bisa dilakukan untuk mengatasi rasa sakit menstruasi?',
           content:
            'Ada beberapa cara untuk mengurangi kram: \n\n- Minum obat pereda rasa nyeri yang bisa dibeli di toko atau warung seperti paracetamol, ibuprofen, naproxen, atau acetaminophen. Ikuti petunjuk penggunaan.\n- Olahraga.\n- Taruh botol minum berisi air hangat atau koyo di perutmu atau di punggung belakang bagian bawah.\n- Mandi air hangat.\n- Istirahat.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Sebelum dan saat mens' },
        'dfc59f3f-08a7-4a32-8db6-4679e92f6269':
         { id: 'dfc59f3f-08a7-4a32-8db6-4679e92f6269',
           title: 'Apa itu Pre Menstrual Syndrome/PMS?',
           content:
            'Pre Menstrual Syndrome/PMS (gejala menjelang menstruasi) adalah kumpulan gejala fisik maupun emosi yang terjadi seminggu atau dua minggu menjelang menstruasi. \n\nContohnya adalah nyeri otot, sakit kepala, rasa lelah, naiknya berat badan, perut terasa kembung, sakit di bagian payudara, munculnya jerawat, dan berubah mood. Tidak semua perempuan mengalami ini dan gejalanya akan berbeda dari waktu ke waktu dalam hidupmu.',
           category: 'Mengenal menstruasimu',
           subCategory: 'Sebelum dan saat mens' },
        'feb718f3-29ca-461b-b018-78e90ed1ed64':
         { id: 'feb718f3-29ca-461b-b018-78e90ed1ed64',
           title: 'Perlu makan apa saja saat menstruasi?',
           content:
            'Kamu bisa makan semua jenis makanan seperti biasanya. Sebaiknya, makan makanan yang mengandung zat besi untuk menggantikan zat besi yang hilang selama menstruasi, seperti daging sapi, kacang merah, sayur hijau. \n\nMakan buah dan makanan yang mengandung kalsium tinggi bisa meredakan beberapa gejala menstruasi. Jangan lupa minum air putih yang banyak!',
           category: 'Kesehatan',
           subCategory: 'Nutrisi dan pola makan' },
        '638cafee-1f56-48f4-a1d4-b53ce239118a':
         { id: '638cafee-1f56-48f4-a1d4-b53ce239118a',
           title:
            'Makanan apa saja yang sebaiknya TIDAK dimakan saat menstruasi?',
           content:
            'Kamu bisa makan semua makanan saat menstruasi! Sebaiknya, makan makanan yang sehat termasuk sayuran dan buah. Cobalah untuk menghindari makanan olahan jika kamu bisa.',
           category: 'Kesehatan',
           subCategory: 'Nutrisi dan pola makan' },
        '6dac7057-0dd0-4cd1-b318-516bddddf75d':
         { id: '6dac7057-0dd0-4cd1-b318-516bddddf75d',
           title: 'Apakah makan makanan yang dingin bisa menyebabkan kram?',
           content:
            'Makan makanan dingin tidak menyebabkan kram saat menstruasi. Kram disebabkan oleh zat kimia, bernama prostaglandin, yang membuat otot di rahim berkontraksi dan mendorong sel dinding rahim keluar melalui vaginamu.',
           category: 'Kesehatan',
           subCategory: 'Nutrisi dan pola makan' },
        'ad8fae28-18b6-436d-87f0-09c64a74224d':
         { id: 'ad8fae28-18b6-436d-87f0-09c64a74224d',
           title:
            'Apakah makan makanan tertentu bisa mengubah bau tubuh atau darah menstruasi?',
           content:
            'Tidak ada makanan spesifik yang bisa mengubah bau tubuh atau darah menstruasimu. Kamu bisa makan apapun yang kamu mau saat menstruasi! Jika mungkin, sebaiknya makan makanan yang mengandung zat besi dan kalsium.',
           category: 'Kesehatan',
           subCategory: 'Nutrisi dan pola makan' },
        'ddf2a252-58f1-47e6-a1e5-6407f2529ce2':
         { id: 'ddf2a252-58f1-47e6-a1e5-6407f2529ce2',
           title:
            'Apakah menstruasi menyebabkan anemia atau kekurangan zat besi?',
           content:
            'Jika kamu tidak makan makanan yang kaya akan zat besi saat menstruasi, kamu mungkin akan mengalami kondisi kekurangan zat besi atau anemia, terutama saat kamu mengeluarkan banyak darah menstruasi. \n\nSaat kamu merasa lelah, capek atau pusing yang tidak biasa, kamu mungkin mengalami anemia dan sebaiknya segera konsultasi ke petugas kesehatan. Kamu bisa mencegah anemia dengan makan makanan yang mengandung banyak zat besi atau minum tablet penambah zat besi.',
           category: 'Kesehatan',
           subCategory: 'Nutrisi dan pola makan' },
        'a5b05710-c66b-4bde-a494-16063baea2fb':
         { id: 'a5b05710-c66b-4bde-a494-16063baea2fb',
           title: 'Apa saya perlu olahraga saat menstruasi?',
           content:
            'Iya, sebaiknya kamu olahraga saat menstruasi!\n\nOlahraga meningkatkan aliran darah dan dapat mengurangi rasa sakit atau kram yang kamu miliki. Mungkin kamu merasa tidak ingin, tapi cobalah untuk ikut serta di kelas olahraga meskipun kamu sedang menstruasi.',
           category: 'Kesehatan',
           subCategory: 'Olahraga' },
        'cf6a911f-f8a2-42ae-b782-1ff577505c90':
         { id: 'cf6a911f-f8a2-42ae-b782-1ff577505c90',
           title: 'Apa itu pubertas?',
           content:
            'Pubertas adalah waktu saat tubuhmu berubah dari anak menjadi dewasa. Kamu juga akan mulai tumbuh secara emosional dan sosial. \n\nSelama pubertas, kamu menjadi matang secara seksual dan bisa mengalami kehamilan (untuk perempuan), dan membuat seseorang menjadi hamil (untuk laki-laki), jika kamu melakukan hubungan seksual.',
           category: 'Pubertas',
           subCategory: 'Pubertas' },
        '23cafa08-dabe-48d7-93c1-20da8f1687f2':
         { id: '23cafa08-dabe-48d7-93c1-20da8f1687f2',
           title: 'Kapan pubertas itu dimulai?',
           content:
            'Bagi kebanyakan remaja perempuan, pubertas dimulai antara usia 9 dan 13 tahun, tapi bisa saja mulai lebih awal atau terlambat. \n\nSetiap orang mengalami pubertas, tapi tiap orang mengalami jenis dan lama perubahan yang berbeda, itu sangat normal! Perubahan pertama yang akan terlihat adalah tumbuhnya payudara (buah dada), kebanyakan satu bagian yang akan tumbuh terlebih dahulu. \n\nRemaja laki-laki biasanya akan mulai pubertas lebih lambat daripada perempuan, biasanya di usia antara 10 - 14 tahun.',
           category: 'Pubertas',
           subCategory: 'Pubertas' },
        '2343f03d-b1d3-48c3-99eb-a4db6ce18bea':
         { id: '2343f03d-b1d3-48c3-99eb-a4db6ce18bea',
           title:
            'Apa yang terjadi pada remaja laki-laki dan perempuan saat pubertas?',
           content:
            'Saat pubertas, otakmu mengirimkan pesan kepada bagian tubuh yang berbeda untuk mulai memproduksi hormon yang bisa membuat tubuhmu berkembang. \n\nKebanyakan remaja perempuan akan akan mengalami urutan pertumbuhan ini:\n\n- Tumbuhnya payudara, biasanya satu sisi tumbuh duluan. Ini berlangsung selama dua tahun.\n- Tumbuhnya bulu-bulu halus pada alat kelamin, biasanya beberapa bulan kemudian.\n- Dinding vagina (alat kelamin) menebal dan rahim serta ovarium membesar (perepmpuan tidak sadar akan hal ini).\n- Menstruasi dimulai, biasanya 2 - 3 tahun setelah payudara mulai tumbuh. Artinya, ia sudah bisa hamil.\n- Jumlah keputihan dari vagina bertambah.\n- Tumbuhnya bulu-bulu halus di bawah ketiak dan bau keringat yang menyengat.\n- Bertambah tinggi, biasanya secara tiba-tiba.\n- Pinggul menjadi lebih lebar.\n- Suara mereka menjadi lebih rendah.\n- Kulit menjadi berminyak,kadang menyebabkan jerawat.',
           category: 'Pubertas',
           subCategory: 'Pubertas' },
        '2de20595-dc3e-4742-8a6f-3ca903aa2a71':
         { id: '2de20595-dc3e-4742-8a6f-3ca903aa2a71',
           title: 'Apa itu masa remaja?',
           content:
            'Masa remaja terjadi di usia 10 - 19 tahun, saat orang berkembang dari anak menjadi orang dewasa, secara fisik, emosi dan sosial. \n\nSelain perubahan fisik, kamu juga akan mengalami perubahan secara emosi dan sosial:\n\n- Perubahan emosi termasuk mengalami perasaan dan mood yang kuat dan cepat berubah, naiknya hasrat dan keinginan seksual. \n- Perubahan sosial seperti mau lebih banyak privasi, mau lebih mandiri dari orang tua, ingin diterima teman sebaya, lebih memilih pertemanan, dan tertarik pada cinta dan hal-hal romantis.',
           category: 'Pubertas',
           subCategory: 'Pubertas' },
        'f35a3711-223d-4d14-a660-840cefd739ab':
         { id: 'f35a3711-223d-4d14-a660-840cefd739ab',
           title: 'Apa bedanya antara pubertas dan masa remaja?',
           content:
            'Pubertas adalah perubahan di tubuh, sedangkan masa remaja termasuk SEMUA perubahan yang terjadi saat anak tumbuh menjadi orang dewasa.',
           category: 'Pubertas',
           subCategory: 'Pubertas' },
        '89a796ec-c6f5-471d-8267-6ca01d86a561':
         { id: '89a796ec-c6f5-471d-8267-6ca01d86a561',
           title: 'Kenapa laki-laki tidak menstruasi?',
           content:
            'Tidak, remaja laki-laki tidak mengalami menstruasi karena alat reproduksi mereka berbeda dari perempuan! \n\nTubuh perempuan memproduksi telur, menyiapkan tempat bagi telur yang dibuahi untuk berkembang dan menstruasi. Tubuh laki-laki memproduksi sprema, mengeluarkan cairan semen yang di dalamnya terdapat sperma untuk membuahi telur.',
           category: 'Relasi dan lawan jenis',
           subCategory: 'Laki-laki' },
        '1300b4ea-bcd2-4e4e-9f11-07c4b5107d2a':
         { id: '1300b4ea-bcd2-4e4e-9f11-07c4b5107d2a',
           title: 'Apa hubungannya antara menstruasi dengan laki-laki?',
           content:
            'Laki-laki terdampak dari pengalaman perempuan melalui peran mereka sebagai suami, ayah, saudara laki-laki, guru, pemimpin komunitas, pengusaha, pekerja dan pembuat kebijakan.\n\nMenstruasi bisa membuat stres dan memalukan bagi beberapa remaja perempuan. Ketika laki-laki  lebih pengertian dan berusaha untuk membantu, itu membuat pengalaman menstruasi yang menyenangkan bagi perempuan.',
           category: 'Relasi dan lawan jenis',
           subCategory: 'Laki-laki' },
        '216000d0-61f0-4eff-91f4-dbfe7f414300':
         { id: '216000d0-61f0-4eff-91f4-dbfe7f414300',
           title:
            'Bagaimana laki-laki bisa membantu perempuan saat menstruasi?',
           content:
            'Tumbuh dewasa dan menjadi orang yang perhatian berarti belajar untuk mendukung dan menghargai orang di sekitarmu, termasuk perempuan. \n\nLaki-laki sebaiknya berusaha mengerti kenapa menstruasi bisa pembuat stres, menyakitkan atau memalukan, lalu menunjukkan perhatian dan dukungannya. \n\nMereka sebaiknya tidak bercanda atau menggoda perempuan yang sedang menstruasi, tetapi belajar lebih banyak, memberitahu temannya tentang menstruasi, berbicara dengan ibunya, saudara perempuan dan temannya tentang menstruasi jika mereka mau.',
           category: 'Relasi dan lawan jenis',
           subCategory: 'Laki-laki' },
        'fedff6c2-e5f6-4f75-8da0-a566284482ee':
         { id: 'fedff6c2-e5f6-4f75-8da0-a566284482ee',
           title: 'Kapan sebaiknya menikah?',
           content:
            'Kamu perlu merasa siap secara fisik, mental dan keuangan untuk menikah karena pernikahan bukanlah hal yang mudah dijalani apalagi saat kamu masih remaja. Kalau memang dia cinta, maka dia bisa menunggu. \n\nDi Indonesia, orang baru boleh menikah setelah usia 19 tahun.',
           category: 'Relasi dan lawan jenis',
           subCategory: 'Laki-laki' },
        'a6487cd1-bffc-4cc4-b8bf-c5863d558bcb':
         { id: 'a6487cd1-bffc-4cc4-b8bf-c5863d558bcb',
           title: 'Kapan sebaiknya hamil?',
           content:
            'Kamu perlu merasa siap secara fisik, mental dan keuangan untuk hamil karena hal ini bisa menjadi tantangan besar kalau kamu hamil saat masih remaja. Kebutuhan orang hamil dan bayi itu banyak sehingga perlu disiapkan secara matang. \n\nKalau memang dia cinta, maka dia bisa menunggu.',
           category: 'Relasi dan lawan jenis',
           subCategory: 'Laki-laki' },
        '7cee47dd-c0b1-47f7-b16b-a8f5b8f6cf11':
         { id: '7cee47dd-c0b1-47f7-b16b-a8f5b8f6cf11',
           title: 'Apa bedanya gender dan jenis kelamin?',
           content:
            'Alat kelaminmu itu ditentukan secara biologis sebagai hasil dari kromosom, anatomi, dan hormon-hormon. \n\nGender itu dibentuk secara sosial. Gender adalah peran, tanggung jawab dan perilaku yang diharapkan dari seorang laki-laki dan perempuan hanya karena mereka terlahir dengan jenis kelaminnya tersebut. \n\nGender bervariasi tergantung dari budaya dan itu berubah dari waktu ke waktu, tapi jenis kelamin itu sama dimana saja. Contohya budaya Bissu di masyarakat Bugis.',
           category: '',
           subCategory: 'Peran sosial' },
        '1c81dcb4-aec5-4709-ab5f-c84468a3dc02':
         { id: '1c81dcb4-aec5-4709-ab5f-c84468a3dc02',
           title: 'Saya takut mengalami menstruasi pertama saya!',
           content:
            'Menunggu menstruasi pertamamu bisa jadi sangat menakutkan dan menyenangkan secara bersamaan, tapi semuanya akan baik-baik saja dan kamu tidak perlu merasa takut! \n\nKamu mungkin merasa kaget atau takut saat melihat darah pertama kali di celana dalammu, tapi ini sangat normal dan alami. \n\nUntuk mempersiapkan dirimu, bicaralah dengan remaja perempuan lainnya atau orang dewasa yang kamu percayai seperti ibu, saudara perempuan yang lebih tua, tante, nenek, teman perempuan atau perempuan yang lebih tua di komunitasmu dan ajak mereka diskusi tentang menstruasi. \n\nSaat menstruasi, kami harap kamu merasa bangga karena kamu sedang tumbuh dan menjadi perempuan dewasa. Ayo belajar lebih banyak untuk mengatur menstruasimu tiap bulan!',
           category: 'Mitos dan perasaan',
           subCategory: 'Takut' },
        '9aa289eb-f397-44bf-9da7-ca3d820aef88':
         { id: '9aa289eb-f397-44bf-9da7-ca3d820aef88',
           title: 'Saya merasa malu saat menstruasi.',
           content:
            'Menstruasimu bukanlah suatu hal yang memalukan! Menstruasi berarti tubuhmu itu sehat dan kuat. Apakah kamu tahu bahwa di beberapa tempat di dunia, menstruasi dijadikan sebagai sebuah perayaan? \n\nJadilah pemimpin di komunitasmu dan membantu teman dan tetanggamu untuk merasa lebih percaya diri saat menstruasi!',
           category: 'Mitos dan perasaan',
           subCategory: 'Malu' },
        'ffc7d775-e7fe-43cd-8007-8035e126e3d1':
         { id: 'ffc7d775-e7fe-43cd-8007-8035e126e3d1',
           title:
            'Saya malu bertanya atau diskusi tentang menstruasi dengan orang lain',
           content:
            'Merasa malu itu wajar dialami setiap orang dan menstruasi bisa jadi topik yang memalukan. \n\nOky mau bilang kalau menstruasi adalah hal yang normal dan kamu tidak perlu malu tentang ini. Semakin sering bicara tentang menstruasi, kamu akan semakin merasa tidak malu.\n\nNamun, jika kamu tidak terlalu ingin bicara tentang menstruasi, kamu tidak harus!',
           category: 'Mitos dan perasaan',
           subCategory: 'Malu' },
        '68f2537d-e2ba-4ed5-9e24-d3016be4e481':
         { id: '68f2537d-e2ba-4ed5-9e24-d3016be4e481',
           title: 'Kenapa banyak sekali mitos tentang menstruasi?',
           content:
            'Menstruasi dianggap sebuah misteri sebelum ilmu pengetahuan dapat menjelaskannya. Jadi, banyak sekali ide dan kepercayaan yang dibuat untuk menjelaskan proses menstruasi di masyarakat dan budaya yang kuno. \n\nBanyak ide dan kepercayaan yang sudah dibuktikan salah melalui ilmu pengetahuan, tapi mereka masih diikuti sampai sekarang. \n\nKita menyebut ide-ide ini sebagai mitos menstruasi atau tabu. Banyak mitos yang yang menyarankan bahwa menstruasi adalah penyakit atau kutukan sehingga muncul pemikiran kalau tubuh perempuan itu tercemar saat menstruasi. \n\nKepercayaan-kepercayaan ini menyebabkan diskriminasi kepada perempuan pada saat itu, dapat menurunkan rasa kepercayaan diri dan terbatasnya kesempatan untuk tumbuh. \n\nBicaralah dengan guru dan temanmu untuk emrencanakan bagaimana kamu bisa membantu untuk menghilangkan mitos-mitos ini!',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        'ed1b44d3-4a20-4f43-938a-4a5213f4f56c':
         { id: 'ed1b44d3-4a20-4f43-938a-4a5213f4f56c',
           title:
            'Perempuan yang sedang menstruasi itu tidak bersih, kotor, sakit atau bahkan dikutuk. Apa itu benar?',
           content:
            'Ini salah! Pemikiran ini  bukan berlandaskan ilmu pengetahuan. \n\nMenstruasi itu alami dibutuhkan oleh perempuan yang ingin hamil dan punya anak. Darah menstruasi terbuat dari campuran darah dan sel jaringan yang tidak berbahaya. \n\nMitos ini sering digunakan sebagai alasan untuk menghentikan keterlibatan perempuan dari kegaitan sosial, pekerjaan, sekolah atau keagamaan.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        'b2adf685-90ab-4475-96d5-0e68f790185f':
         { id: 'b2adf685-90ab-4475-96d5-0e68f790185f',
           title:
            'Mandi saat menstruasi itu bisa menyebabkan infeksi atau kemandulan.',
           content:
            'Ini salah! Menjaga kebersihan selama menstruasi adalah penting untuk mencegah kamu dari infeksi. \n\nNamun, hindari membersihkan vagina bagian dalam dengan air karena itu bisa menyebabkan infeksi.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        'faae985a-2d22-4c09-a285-c9608707efd3':
         { id: 'faae985a-2d22-4c09-a285-c9608707efd3',
           title:
            'Membuang pembalut bekas sembarangan akan memberikan kutukan kepada dirinya dan keluarganya. Apa ini benar?',
           content:
            'Ini salah! Penting untuk membungkus pembalut dan tampon bekas pakai dengan kertas atau plastik sebelum membuangnya di tempat sampah karena alasan kebersihan tapi hal ini tidak akan menjadikan kamu mendapatkan hal-hal buruk saat tidak melakukannya.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        '9d002f72-7ca0-4611-8888-3bd0715ac98d':
         { id: '9d002f72-7ca0-4611-8888-3bd0715ac98d',
           title:
            'Apakah menstruasi berarti seorang remaja perempuan sudah siap untuk menikah?',
           content:
            'Ini salah! Meskipun kamu sudah menstruasi, tubuhmu masih terus tumbuh dan berkembang. Menikah itu sebaiknya kamu sudah siap secara fisik, mental dan keuangan. Di Indonesia, setidaknya kamu harus berusia 19 tahun untuk menikah.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        '1cd63251-6cd5-41b4-8003-2118637aeaba':
         { id: '1cd63251-6cd5-41b4-8003-2118637aeaba',
           title:
            'Perempuan yang lagi menstruasi sebaiknya makan/ tidur/ dan tinggal terpisah dari keluarga. Ini benar?',
           content:
            'Tidak ada dasar ilmiah yang mendukung kepercayaan ini,namun beberapa kepercayaan punya aturan untuk perempuan yang sedang menstruasi.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        'ebd3bcfb-6172-42c6-a116-43b3c2a15da9':
         { id: 'ebd3bcfb-6172-42c6-a116-43b3c2a15da9',
           title:
            'Kenapa perempuan yang lagi menstruasi sebaiknya tidak melakukan aktivitas keagamaan?',
           content:
            'Tidak ada alasan medis bagi perempuan untuk tidak melakukan aktivitas keagamaan atau menyiapkan makanan, namun beberapa kepercayaan punya aturan tentang hal ini.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        'db765ada-f7f2-4865-b15a-b409ca22c2ac':
         { id: 'db765ada-f7f2-4865-b15a-b409ca22c2ac',
           title:
            'Katanya kalau melompat, berlari, berenang, jatuh atau mengangkat beban berat bisa berpengaruh pada menstruasi saya. Itu benar?',
           content:
            'Alasan ini tidak berdasarkan ilmu pengetahuan. Melompat, berlari, berenang, jatuh atau mengangkat beban berat tidak akan mempengaruhimu. Aktivitas ini tidak akan menyebabkan kamu memiliki darah menstruasi yang atau meningkatkan rasa sakit. \n\nSebaliknya, olahraga dapat membantu meningkatkan aliran darah dan mungkin membantu meredakan rasa sakit dan kram.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        'e37d0315-6c86-4438-80ff-ac98cf2d652f':
         { id: 'e37d0315-6c86-4438-80ff-ac98cf2d652f',
           title:
            'Saat menstruasi, sebaiknya kita tidak boleh keramas. Apa ini betul?',
           content:
            'Salah! Hingga saat ini, tidak ada penelitian yang mengatakan bahwa pori-pori kepala perempuan membesar saat menstruasi. Sebaiknya, menjaga kebersihan itu penting. Jadi kamu bisa tetap mandi dan keramas seperti hari-hari biasanya.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        'ff5529da-2d75-492d-8394-e33579ae1122':
         { id: 'ff5529da-2d75-492d-8394-e33579ae1122',
           title:
            'Tidak boleh minum air es saat menstruasi karena bisa menyumbat peredaran darah menstruasi. Betul begitu?',
           content:
            'Ini adalah mitos. Tubuh kita memiliki jalur yang berbeda untuk makan/minum dan untuk menstruasi. Minuman ada di jalur pencernaan, sedangkan menstruasi ada di jalur sistem reproduksi. \n\nAir es tidak akan membuat darah menstruasi menjadi beku karena mereka beda jalur. Oleh karenanya, kamu tetap bisa minum air es saat menstruasi. Namun, pastikan kalau kamu juga makan makanan yang memiliki zat besi tinggi seperti daging merah atau sayuran hijau, ya!',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        '115070d5-44b5-4596-844f-27c0f822cec9':
         { id: '115070d5-44b5-4596-844f-27c0f822cec9',
           title:
            'Minum minuman bersoda akan menghambat darah menstruasi kita. Benar?',
           content:
            'Ini adalah mitos. Tubuh kita memiliki jalur yang berbeda untuk makan/minum dan untuk menstruasi. Minuman ada di jalur pencernaan, sedangkan menstruasi ada di jalur sistem reproduksi. \n\nSoda tidak akan membuat darah menstruasi menjadi beku karena mereka beda jalur. Oleh karenanya, kamu tetap bisa minum air es saat menstruasi. Namun, pastikan kalau kamu juga makan makanan yang memiliki zat besi tinggi seperti daging merah atau sayuran hijau, ya!',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        'a9068dbe-6099-4fda-b6f1-84e2a12fa751':
         { id: 'a9068dbe-6099-4fda-b6f1-84e2a12fa751',
           title:
            'Kalau sedang menstruasi, ada banyak mahluk halus yang mengikuti perempuan. Apa itu benar?',
           content:
            'Ini adalah mitos yang berasal dari budaya tertentu. Tidak ada bukti ilmiah yang mendukung hal ini. Oleh karenanya, tetaplah aktif seperti biasanya meskipun kamu sedang menstruasi. Selama kamu menggunakan pembalut/ tampon, kamu bebas beraktivitas!',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        '613dc878-eaec-4f86-bedc-48b007bb81b8':
         { id: '613dc878-eaec-4f86-bedc-48b007bb81b8',
           title:
            'Saat sedang menstruasi, jangan dekat-dekat dengan laki-laki karena bisa hamil. Ini benar?',
           content:
            'Ini adalah mitos belaka! Perempuan bisa hamil hanya jika ia melakukan hubungan seks dengan laki-laki. \n\nTentu saja, kamu tetap bisa beraktivitas seperti biasa (bermain, belajar, kerja bersama, dll.) dengan teman atau saudara laki-lakimu dan kamu tidak akan hamil karenanya. Kamu juga bisa tunjukkan pada mereka bahwa kamu tetap aktif saat sedang menstruasi!',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        '8f5913e0-0629-4731-814c-81c1e9194c95':
         { id: '8f5913e0-0629-4731-814c-81c1e9194c95',
           title:
            'Kita harus selalu mencuci pembalut bekas pakai agar tidak ada mahluk halus yang mengikuti kita. Apa itu benar?',
           content:
            'Ini adalah mitos yang bersumber dari budaya atau agama tertentu. Pembalut bekas pakai bisa dibungkus dengan plastik, tisu, atau kertas sebelum dibuang ke tempat sampah. Kamu tidak harus mencuci pembalut bekas sebelum dibuang karena tidak ada penelitian yang menunjukkan dampak buruk akibat tidak mencuci pembalut bekas. \n\nSangat penting untuk menjaga kebersihan selama menstruasi, jangan lupa untuk selalu cuci tangan setelah mengganti pembalut.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        '04b65718-5ba0-4f04-98e6-5962505450cf':
         { id: '04b65718-5ba0-4f04-98e6-5962505450cf',
           title:
            'Ada yang bilang kalau perempuan yang sedang menstruasi sebaiknya tidak berada di dekat bau yang menyengat seperti kutek. Apa alasannya?',
           content:
            'Tidak ada bukti ilmiah tentang hal ini sehingga tidak ada alasan yang jelas kenapa perempuan yang sedang menstruasi tidak boleh dekat dengan bau yang menyengat.',
           category: 'Mitos dan perasaan',
           subCategory: 'Mitos' },
        '5e6a3872-d03e-4004-8e6d-114937e6e89d':
         { id: '5e6a3872-d03e-4004-8e6d-114937e6e89d',
           title:
            'Saya disuruh untuk tidak membenci menstruasi, tapi ada beberapa hari saya kesal dengan hal itu! Apa saya salah?',
           content:
            'Apapun yang kamu rasakan itu tidak apa-apa! Kamu tidak perlu merasa malu dengan menstruasimu, tapi kamu tidak harus selalu menyukainya! Kadang hari-hari buruk saat menstruasi itu terjadi. \n\nKamu mungkin punya perasaan yang berbeda-beda tentang menstruasimu dan perasaan itu berubah-ubah - ini sangat tidak masalah. \n\nJaga dirimu, dan jika kamu merasa tidak nyaman, ceritakan kepada orang yang kamu percaya seperti temanmu. Itu mungkin akan membantu!',
           category: 'Mitos dan perasaan',
           subCategory: 'Perasaan' },
        'a2fa5872-0fc7-4664-a221-b8669aa904ae':
         { id: 'a2fa5872-0fc7-4664-a221-b8669aa904ae',
           title: '',
           content:
            'Jika kamu berusaha menjadi normal, kamu mungkin tidak pernah tahu bahkan kamu bisa menjadi orang yang luar biasa! (Maya Angelou)',
           category: 'Gaya hidup',
           subCategory: 'Motivasi' },
        '1f090ebd-cc74-4aac-be9a-a2b3fc006edb':
         { id: '1f090ebd-cc74-4aac-be9a-a2b3fc006edb',
           title: '',
           content:
            'Rayakan kekuatan unikmu! Kamu pantas mendapatkan apapun yang kamu harapkan!',
           category: 'Gaya hidup',
           subCategory: 'Motivasi' },
        '23afde3a-8381-47dd-8bfe-a8766bec79d7':
         { id: '23afde3a-8381-47dd-8bfe-a8766bec79d7',
           title: '',
           content:
            'Untuk memuji diri sendiri, pujilah remaja perempuan lainnya - itu rasanya akan menyenangkan!',
           category: 'Gaya hidup',
           subCategory: 'Motivasi' },
        '17a029f1-db4a-4ee7-a334-5acbcdb98b03':
         { id: '17a029f1-db4a-4ee7-a334-5acbcdb98b03',
           title: '',
           content:
            'Menjadi cantik artinya menjadi dirimu sendiri. Kamu itu cantik!',
           category: 'Gaya hidup',
           subCategory: 'Motivasi' },
        '0291c7fc-60db-4748-b3cd-950098deab1b':
         { id: '0291c7fc-60db-4748-b3cd-950098deab1b',
           title: '',
           content:
            'Percayalah pada dirimu sendiri dan kamu akan menjadi orang yang tidak bisa dihentikan!',
           category: 'Gaya hidup',
           subCategory: 'Motivasi' },
        'a0b0fc8d-2f6d-42eb-be9b-22ecb8874f44':
         { id: 'a0b0fc8d-2f6d-42eb-be9b-22ecb8874f44',
           title: '',
           content:
            'Jika kamu merasa sedih, cobalah menjadi aktif dengan berolahraga, menari atau melakukan aktivitas fisik - ajaklah temanmu untuk bergabung atau kamu juga bisa menari seperti sendiri seperti tidak ada orang yang sedang melihatmu!',
           category: 'Gaya hidup',
           subCategory: 'Motivasi' },
        '0ddfd3bb-52d7-4218-b50c-b075a48776d7':
         { id: '0ddfd3bb-52d7-4218-b50c-b075a48776d7',
           title: '',
           content: 'Menstruasi itu.. Bukanlah masalah besar!',
           category: 'Gaya hidup',
           subCategory: 'Motivasi' },
        '427ba43d-3c14-4fb5-b8f6-321a2e76dc84':
         { id: '427ba43d-3c14-4fb5-b8f6-321a2e76dc84',
           title: 'Apa saya boleh sekolah kalau lagi menstruasi?',
           content:
            'Ya! Perempuan yang menstruasi bebas untuk ikut kegiatan apapun seperti biasanya. \n\nUntuk menyiapkan diri, kamu mungkin ingin memastikan barang-barang penting, seperti celana dalam, pembalut, dan hal-hal lain yang kamu biasanya butuhkan saat menstruasi, pastikan kamu menaruhnya di tas sekolahmu. \n\nJika kamu merasa tidak siap menghadapi mentruasimu, silahkan bertanya kepada teman atau orang dewasa (cth. guru, perawat, dokter, pekerja sosial) yang bisa dipercaya.',
           category: 'Gaya hidup',
           subCategory: 'Activitas' },
        'c2282301-f184-4fa2-8832-2c6555574210':
         { id: 'c2282301-f184-4fa2-8832-2c6555574210',
           title: 'Apa saran kecantikan saat menstruasi?',
           content:
            'Saran kecantikan yang terbaik adalah tetap sehat! Tidurlah dengan cukup, minum air putih yang banyak, makan makanan bergizi dan tetap aktif dengan berolahraga! Dan juga menjadi dirimu sendiri! Jadilah dirimu yang uni karena kamu cantik apa adanya (meskipun mungkin ada hari-hari dimana kamu merasa tidak demikian)!',
           category: 'Gaya hidup',
           subCategory: 'Kecantikan dan fashion' },
        '678e2ddb-1438-4893-a398-cdcec0188d0f':
         { id: '678e2ddb-1438-4893-a398-cdcec0188d0f',
           title: 'Baju apa yang perlu saya pakai saat menstruasi?',
           content:
            'Pakaian berwarna gelap, warna yang membuat tenang, warna berani, apapun yang bisa membuat kamu nyaman! Menggunakan pakaian yang cukup longgar mungkin bisa membuat kamu lebih nyaman tapi gunakan apapun yang kamu suka.',
           category: 'Gaya hidup',
           subCategory: 'Kecantikan dan fashion' },
        'd3945f99-04a4-428f-82f4-c1a59110bdac':
         { id: 'd3945f99-04a4-428f-82f4-c1a59110bdac',
           title: 'Bagaimana cara tetap modis saat menstruasi?',
           content:
            'Kamu bisa menggunakan apapun saat sedang menstruasi. Saran fashion terbaik adalah: Jadilah dirimu sendiri! Merasa nyaman, senang dan percaya dirilah pada pakaian yang kamu kenakan.\n\nIngat bahwa kamu tidak harus selalu keren dan trendy, ada banyak kualitas diri perempuan yang bisa menginspirasimu.',
           category: 'Gaya hidup',
           subCategory: 'Kecantikan dan fashion' } },
     allIds:
      [ '540e585a-28af-49bb-ae7e-255c2679beb7',
        '1a47c32e-eabe-481d-bb63-37150208fc2a',
        'eca08870-841c-4f05-872a-e37593c2fd97',
        'a0359649-d027-421b-a969-5c942aba102d',
        'c3fd5590-36f1-4fbd-868b-02de1d5b7f84',
        '0ee3b556-53f5-45fc-a09e-161a18bb3f58',
        '60901f63-6b96-4fda-99a5-0eec25901c6f',
        'c3dd5359-61c7-43b5-911d-2d4a001a4191',
        '412ee891-1e23-471e-a570-c7eed85f02dc',
        '074c29fa-73f6-49a1-b620-caea73f57a84',
        'e1d32dfe-a43d-4843-acd6-7a4464de61a6',
        '7e6a00ec-ce46-49b2-abf5-ae867a180071',
        'c84dbc62-ca1a-4c4d-ac6d-f68f75fdadd7',
        'b84e3a90-7926-4094-9965-9c3810910344',
        '090f8430-eb00-458a-9e3a-60a0f2e5543a',
        '84171d32-68e9-4776-86be-b86e96814f9a',
        '74d1b188-cb21-4cc3-90f2-c9dfcdd04989',
        '5a1c815e-5686-478b-9fd6-78982e8bda8e',
        '1fe9d59f-590c-456c-9c6d-c2e5c7249eb6',
        'cf3c0658-cc0e-4f22-b902-179e78b2b02e',
        'bcef8d84-3972-4138-8731-5c523f2a78a3',
        'e88781f7-62f4-465e-a982-690632863c67',
        '7c530bdb-b324-4a8b-9a0a-9766fb2ce069',
        'fdc3940d-4c94-40c7-a723-8877254f9c63',
        '53c8ffd5-52b2-4cfb-ae7c-4d64b11144cb',
        'f348864b-11ee-4caf-8b6c-6d168c2d8014',
        '93a069be-c578-4cf4-84a7-b43115d9114c',
        'f596e15a-6529-4c30-93e0-ac3c8a4b3115',
        'f260d76a-658c-492e-a446-fe633c3a8e92',
        'ef954164-4a24-4674-af59-b95d01bf9020',
        'ca71a2ec-cc38-4213-b7b9-aafefd00aff8',
        'c0291282-6e02-4b1e-8b4e-6ec1f8a5ed9e',
        'ed205fda-f1f3-49dc-98a5-619c5b3d5588',
        'a6b4740d-505b-4d8c-a4dd-4028931435df',
        '7e1a884e-ba6c-4b30-adfb-b8867cb18763',
        '40ec679c-6f30-4ae8-9e2e-c9b605577521',
        'e1dc3beb-effc-416c-a38d-1098cebff52f',
        '699df610-5d70-484d-99f4-70defbb47481',
        '82fcfecd-98cb-4048-a745-fc9e347e8bff',
        'a4937abf-07db-47c8-8b52-c56c194654e3',
        '978b30f1-b724-4472-8dac-ff5eb09b5811',
        '1d2986ab-49ac-4010-9442-ea86124e56b4',
        'dfc59f3f-08a7-4a32-8db6-4679e92f6269',
        'feb718f3-29ca-461b-b018-78e90ed1ed64',
        '638cafee-1f56-48f4-a1d4-b53ce239118a',
        '6dac7057-0dd0-4cd1-b318-516bddddf75d',
        'ad8fae28-18b6-436d-87f0-09c64a74224d',
        'ddf2a252-58f1-47e6-a1e5-6407f2529ce2',
        'a5b05710-c66b-4bde-a494-16063baea2fb',
        'cf6a911f-f8a2-42ae-b782-1ff577505c90',
        '23cafa08-dabe-48d7-93c1-20da8f1687f2',
        '2343f03d-b1d3-48c3-99eb-a4db6ce18bea',
        '2de20595-dc3e-4742-8a6f-3ca903aa2a71',
        'f35a3711-223d-4d14-a660-840cefd739ab',
        '89a796ec-c6f5-471d-8267-6ca01d86a561',
        '1300b4ea-bcd2-4e4e-9f11-07c4b5107d2a',
        '216000d0-61f0-4eff-91f4-dbfe7f414300',
        'fedff6c2-e5f6-4f75-8da0-a566284482ee',
        'a6487cd1-bffc-4cc4-b8bf-c5863d558bcb',
        '7cee47dd-c0b1-47f7-b16b-a8f5b8f6cf11',
        '1c81dcb4-aec5-4709-ab5f-c84468a3dc02',
        '9aa289eb-f397-44bf-9da7-ca3d820aef88',
        'ffc7d775-e7fe-43cd-8007-8035e126e3d1',
        '68f2537d-e2ba-4ed5-9e24-d3016be4e481',
        'ed1b44d3-4a20-4f43-938a-4a5213f4f56c',
        'b2adf685-90ab-4475-96d5-0e68f790185f',
        'faae985a-2d22-4c09-a285-c9608707efd3',
        '9d002f72-7ca0-4611-8888-3bd0715ac98d',
        '1cd63251-6cd5-41b4-8003-2118637aeaba',
        'ebd3bcfb-6172-42c6-a116-43b3c2a15da9',
        'db765ada-f7f2-4865-b15a-b409ca22c2ac',
        'e37d0315-6c86-4438-80ff-ac98cf2d652f',
        'ff5529da-2d75-492d-8394-e33579ae1122',
        '115070d5-44b5-4596-844f-27c0f822cec9',
        'a9068dbe-6099-4fda-b6f1-84e2a12fa751',
        '613dc878-eaec-4f86-bedc-48b007bb81b8',
        '8f5913e0-0629-4731-814c-81c1e9194c95',
        '04b65718-5ba0-4f04-98e6-5962505450cf',
        '5e6a3872-d03e-4004-8e6d-114937e6e89d',
        'a2fa5872-0fc7-4664-a221-b8669aa904ae',
        '1f090ebd-cc74-4aac-be9a-a2b3fc006edb',
        '23afde3a-8381-47dd-8bfe-a8766bec79d7',
        '17a029f1-db4a-4ee7-a334-5acbcdb98b03',
        '0291c7fc-60db-4748-b3cd-950098deab1b',
        'a0b0fc8d-2f6d-42eb-be9b-22ecb8874f44',
        '0ddfd3bb-52d7-4218-b50c-b075a48776d7',
        '427ba43d-3c14-4fb5-b8f6-321a2e76dc84',
        'c2282301-f184-4fa2-8832-2c6555574210',
        '678e2ddb-1438-4893-a398-cdcec0188d0f',
        'd3945f99-04a4-428f-82f4-c1a59110bdac' ] } 
