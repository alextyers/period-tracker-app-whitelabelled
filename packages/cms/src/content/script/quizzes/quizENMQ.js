const quizzes = {
  byId: {
    'bd90fe65-a893-4b23-a945-8c84e7da4b0d': {
      id: 'bd90fe65-a893-4b23-a945-8c84e7da4b0d',
      question: 'How many days should there be between each period? 🗓\n',
      answers: [
        { text: 'Between 15-20.', emoji: '', isCorrect: false },
        { text: '28 exactly', emoji: '', isCorrect: false },
        { text: 'Between 21 - 35', emoji: '', isCorrect: true },
      ],
      response: {
        correct:
          'Correct! Periods usually last between 21-35 days, and sometimes more or less than that. This varies from girl to girl and from period to period.☺️',
        in_correct:
          'Sorry, the answer was 3! Periods usually last between 21-35 days, and sometimes more or less than that. This varies from girl to girl and from period to period. ☺️',
      },
    },
    'e12f08aa-13b7-44eb-8d21-3b07efc96820': {
      id: 'e12f08aa-13b7-44eb-8d21-3b07efc96820',
      question: 'What is the correct way to wash during your period? 💦\n',
      answers: [
        { text: 'You should not wash during your period.', emoji: '', isCorrect: false },
        { text: 'Wash your private parts with clean water.', emoji: '', isCorrect: true },
        { text: 'Wash inside your vagina with water.', emoji: '', isCorrect: false },
      ],
      response: {
        correct:
          "You're right! Never wash inside your vagina as this can cause infection. Just wash with clean water on the outside of your body.🚿",
        in_correct:
          'The answer was 2  - you should wash with clean water on the outside of your body.🚿No need to wash inside your vagina as this can cause infection.',
      },
    },
    '72194614-a090-463b-9fb7-48e25b5e1d5b': {
      id: '72194614-a090-463b-9fb7-48e25b5e1d5b',
      question: 'What causes menstrual cramps? 🙄\n',
      answers: [
        { text: 'Chemicals in your body.', emoji: '', isCorrect: true },
        { text: 'Bad food', emoji: '', isCorrect: false },
        { text: 'Nobody knows.', emoji: '', isCorrect: false },
      ],
      response: {
        correct:
          "That's right! Chemicals called prostaglandins are produced by your body and cause cramps. The cramps help push the womb lining out. ⬇️",
        in_correct:
          'Oops! The answer was 1 - chemicals called prostaglandins are produced by your body and cause cramps. The cramps help push the womb lining out. ⬇️',
      },
    },
    '94a6e3a9-b574-4847-8201-320e12ac98fc': {
      id: '94a6e3a9-b574-4847-8201-320e12ac98fc',
      question: 'Why does exercising help soothe period cramps? 🏃🏽‍♀️',
      answers: [
        {
          text: "Exercising helps you lose weight and thin people don't have bad cramps.",
          emoji: '',
          isCorrect: false,
        },
        { text: 'Exercising takes your mind off the pain.', emoji: '', isCorrect: false },
        {
          text: 'Exercising increases the flow of blood around your body.',
          emoji: '',
          isCorrect: true,
        },
      ],
      response: {
        correct:
          'You got it! Exercising is a great way to get your blood flowing anywhere you might feel pain during your period. 😀',
        in_correct:
          'Wrong this time! Exercising is a great way to get your blood flowing anywhere you might feel pain during your period. 😀',
      },
    },
    '540c1f88-a8e7-44e1-8f5d-75069a300d5e': {
      id: '540c1f88-a8e7-44e1-8f5d-75069a300d5e',
      question: 'At what age do boys start puberty? 👦🏽\n',
      answers: [
        { text: 'Between 10-14', emoji: '', isCorrect: true },
        { text: 'Between 9-10', emoji: '', isCorrect: false },
        { text: 'Between 13-16', emoji: '', isCorrect: false },
      ],
      response: {
        correct:
          " That's right, puberty for boys usually starts between the ages of 10-14. That's a little later than for girls 👩🏽 where puberty can start from age 9!",
        in_correct:
          "Oops, that's incorrect! Puberty for boys usually starts between the ages of 10-14. That's a little later than for girls 🙋‍♀️ where puberty can start from age 9!",
      },
    },
    '495c8129-ef83-4602-b344-d2af64e70ed5': {
      id: '495c8129-ef83-4602-b344-d2af64e70ed5',
      question: 'What are 2 signs of puberty? 🤔\n',
      answers: [
        { text: 'Growing feet & bad breath', emoji: '', isCorrect: false },
        { text: 'Changing eye colour & hairy legs', emoji: '', isCorrect: false },
        { text: 'Smelly sweat & underarm hair', emoji: '', isCorrect: true },
      ],
      response: {
        correct:
          'You got it! When you go through puberty, you might notice your sweat smells stronger😬, and you will develop hair under your arms, as well as other changes.',
        in_correct:
          'Incorrect! When you go through puberty, you might notice your sweat smells stronger😬, and you will develop hair under your arms, as well as other changes.',
      },
    },
    '44ce8713-6cf8-4cd8-9316-03c4c5d67620': {
      id: '44ce8713-6cf8-4cd8-9316-03c4c5d67620',
      question: 'In which situation is it OK to have sex during your period? 🤷‍♀️',
      answers: [
        { text: "It's always OK.\n", emoji: '', isCorrect: false },
        { text: 'As long as both partners are OK with it.\n', emoji: '', isCorrect: true },
        { text: 'Only if you say a blessing first.', emoji: '', isCorrect: false },
      ],
      response: {
        correct:
          " Exactly right - there's nothing wrong with having sex during your period. 🙂But it's still possible to get pregnant, so make sure to use contraception!",
        in_correct:
          "The answer was 2! There's nothing wrong with having sex during your period. 🙂But it's still possible to get pregnant, so make sure to use contraception!",
      },
    },
    '78305861-5a9e-4af1-9e27-9fd635102be8': {
      id: '78305861-5a9e-4af1-9e27-9fd635102be8',
      question: 'Why do boys tease girls during their periods? 😠',
      answers: [
        { text: "Because it's their right.", emoji: '', isCorrect: false },
        { text: "Because they're confused.", emoji: '', isCorrect: true },
        { text: "Because they're bored.", emoji: '', isCorrect: false },
      ],
      response: {
        correct:
          "Right answer! Boys, like girls, aren't given enough information on periods. 😳This can make them feel confused, maybe even jealous about this special thing girls experience.",
        in_correct:
          "Incorrect! Boys, like girls, aren't given enough information on periods. 😳This can make them feel confused, maybe even jealous about this special thing girls experience.",
      },
    },
    'b3025a91-d830-446a-be37-58aff31ddccd': {
      id: 'b3025a91-d830-446a-be37-58aff31ddccd',
      question: 'Who can get periods? 🤨',
      answers: [
        { text: 'Only girls', emoji: '', isCorrect: false },
        { text: ' Girls and boys\n', emoji: '', isCorrect: false },
        { text: 'Girls and transgender men', emoji: '', isCorrect: true },
      ],
      response: {
        correct:
          'Right! Girls who feel more comfortable living as men are called transgender. They will continue getting their periods unless they take a special medicine.💊',
        in_correct:
          'The answer was 3! Girls who feel more comfortable living as men are called transgender. They will continue getting their periods unless they take a special medicine. 💊',
      },
    },
    'f5d2a24a-7e78-40c5-9910-a6d1f396e2c7': {
      id: 'f5d2a24a-7e78-40c5-9910-a6d1f396e2c7',
      question: 'How can girls prepare for their first period? 🤔',
      answers: [
        { text: 'Start wearing two pairs of underwear.', emoji: '', isCorrect: false },
        {
          text: 'Talk to other girls about what to expect.',
          emoji: '',
          isCorrect: true,
        },
        { text: 'Try not to think about it.', emoji: '', isCorrect: false },
      ],
      response: {
        correct:
          "Right - although your first period can be a shock, it really helps to talk to friends or family who've been there before. You're not alone! ☺️",
        in_correct:
          "The answer was 2 - although your first period can be a shock, it helps to talk to friends or family who've been there before. You're not alone! ☺️",
      },
    },
    'ef1ed3ae-1e3f-470d-a9c0-0730319b0883': {
      id: 'ef1ed3ae-1e3f-470d-a9c0-0730319b0883',
      question: 'What should girls avoid doing during their period? 😳\n',
      answers: [
        { text: 'Exercise', emoji: '', isCorrect: false },
        { text: 'Food preparation', emoji: '', isCorrect: false },
        { text: 'Nothing', emoji: '', isCorrect: true },
      ],
      response: {
        correct:
          'Bravo! Girls can do anything they feel like when they have their period! 👏Some rules may restrict them, but there is no scientific reason for this.',
        in_correct:
          'The answer was 3! Girls can do anything they feel like when they have their period! 👏 Some rules may restrict them, but there is no scientific reason for this.',
      },
    },
  },
  allIds: [
    'bd90fe65-a893-4b23-a945-8c84e7da4b0d',
    'e12f08aa-13b7-44eb-8d21-3b07efc96820',
    '72194614-a090-463b-9fb7-48e25b5e1d5b',
    '94a6e3a9-b574-4847-8201-320e12ac98fc',
    '540c1f88-a8e7-44e1-8f5d-75069a300d5e',
    '495c8129-ef83-4602-b344-d2af64e70ed5',
    '44ce8713-6cf8-4cd8-9316-03c4c5d67620',
    '78305861-5a9e-4af1-9e27-9fd635102be8',
    'b3025a91-d830-446a-be37-58aff31ddccd',
    'f5d2a24a-7e78-40c5-9910-a6d1f396e2c7',
    'ef1ed3ae-1e3f-470d-a9c0-0730319b0883',
  ],
}
