const quizzes = {
  byId: {
    'f5e5142a-c57a-4dfd-9a52-9aabc5d9f396': {
      id: 'f5e5142a-c57a-4dfd-9a52-9aabc5d9f396',
      question: "If period blood is brown or black, it's a sign something's wrong.",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'false' },
        { text: 'False', emoji: '🍎', isCorrect: 'true' },
      ],
      response: {
        correct:
          "You're right, it was False! No need to worry: the colour of period blood can vary from pink-ish, to red, to brown, to almost black!👍",
        in_correct:
          'Oops, no, it was False! No need to worry, the colour of period blood can vary from pink-ish, to red, to brown, to almost black!👍',
      },
    },
    'aa6efbe1-95f1-42f1-82d0-a0c8c01156c4': {
      id: 'aa6efbe1-95f1-42f1-82d0-a0c8c01156c4',
      question: "If your period doesn't come, you are definitely pregnant.' 🤔",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'false' },
        { text: 'False', emoji: '🍎', isCorrect: 'true' },
      ],
      response: {
        correct:
          "You're right! Stress, extreme tiredness 😫, or poor nutrition can also make you miss your period.",
        in_correct:
          'The answer was False! Stress, extreme tiredness 😫 or poor nutrition can also make you miss your period.',
      },
    },
    'b6fafd5e-f697-47f3-8743-b0628a271e50': {
      id: 'b6fafd5e-f697-47f3-8743-b0628a271e50',
      question: "You should only use a tampon if you are no longer a virgin.' 🤔\n",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'false' },
        { text: 'False', emoji: '🍎', isCorrect: 'true' },
      ],
      response: {
        correct:
          'Correct! Anyone can use a tampon. 👍 The hymen usually stretches to let the tip of the tampon pass through.',
        in_correct:
          'Incorrect! Anyone can use a tampon. 👍 The hymen usually stretches to let the tip of the tampon pass through.\n',
      },
    },
    '81f1f97d-ea78-4a53-8fec-9c6333924903': {
      id: '81f1f97d-ea78-4a53-8fec-9c6333924903',
      question: "Eating certain foods can change the smell of your period blood.🍛'\n",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'false' },
        { text: 'False', emoji: '🍎', isCorrect: 'true' },
      ],
      response: {
        correct:
          'Correct! Nothing you eat will affect the smell of your period blood, so eat what you like! 😋',
        in_correct:
          'Incorrect! Nothing you eat will affect the smell of your period blood, so eat what you like! 😋',
      },
    },
    '7ff802c3-9d6b-4cd2-9386-52b0c129ac35': {
      id: '7ff802c3-9d6b-4cd2-9386-52b0c129ac35',
      question: "Dizziness during your period is not normal.'😵 \n",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'false' },
        { text: 'False', emoji: '🍎', isCorrect: 'true' },
      ],
      response: {
        correct:
          "That's right! Dizziness, weakness and excessive tiredness could be a sign of iron deficiency (anaemia). If you often feel this way, try and see a doctor.👩‍⚕️",
        in_correct: `Not 'true'! Dizziness, weakness and excessive tiredness could be a sign of iron deficiency (anaemia). If you often feel this way, try and see a doctor.👩‍⚕️`,
      },
    },
    'f81cb5ac-1d5e-4100-9f86-06367bc379c2': {
      id: 'f81cb5ac-1d5e-4100-9f86-06367bc379c2',
      question: " 'Puberty and adolescence are the same thing.'🧐 \n",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'false' },
        { text: 'False', emoji: '🍎', isCorrect: 'true' },
      ],
      response: {
        correct:
          "You're right, it was 'false'! Puberty is when a young person's body goes through physical changes. Adolescence is the whole journey to becoming an adult. 👦🧔",
        in_correct:
          "The answer was 'false'! Puberty is when a young person's body goes through physical changes. Adolescence is the whole journey to becoming an adult. 👦🧔\n",
      },
    },
    '8716feb1-82e5-454a-b908-d11605babd89': {
      id: '8716feb1-82e5-454a-b908-d11605babd89',
      question: "A baby is created when the sperm from a man joins an egg from a woman.'👶\n",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'true' },
        { text: 'False', emoji: '🍎', isCorrect: 'false' },
      ],
      response: {
        correct:
          "That's right! When a guy ejaculates during sex, he releases millions of tiny sperm into the vagina, which swim up towards the uterus. 😮",
        in_correct:
          "It's actually 'true'! When a guy ejaculates during sex, he releases millions of tiny sperm into the vagina, which swim up towards the uterus. 😮",
      },
    },
    'fbdd45e1-1848-4a98-9cbd-70346a3562d2': {
      id: 'fbdd45e1-1848-4a98-9cbd-70346a3562d2',
      question: "It's possible to get pregnant even if you have never had a period.'🤔 \n",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'true' },
        { text: 'False', emoji: '🍎', isCorrect: 'false' },
      ],
      response: {
        correct:
          "Yes, it's True! 😲Even if you've not started your period yet, it's possible your body might have released an egg which could be fertilised.",
        in_correct:
          "It's actually 'true'!! 😲Even if you've not started your period yet, it's possible your body might have released an egg which could be fertilised.",
      },
    },
    'f38b5418-f217-4b81-9c83-cce2d8006c3a': {
      id: 'f38b5418-f217-4b81-9c83-cce2d8006c3a',
      question: "Sex and gender are the same thing.'❓ \n",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'false' },
        { text: 'False', emoji: '🍎', isCorrect: 'true' },
      ],
      response: {
        correct:
          "That's right, sex is defined by your chromosomes (male or female) 🔬Gender are the rules set by society about how you should behave as a man or a woman.",
        in_correct: `It was 'false'! Sex is defined by your chromosomes (male or female) 🔬Gender are the rules set by society about how you should behave as a man or a woman.`,
      },
    },
    '7a09fe4e-03c0-4671-8b18-81a3b521fcf1': {
      id: '7a09fe4e-03c0-4671-8b18-81a3b521fcf1',
      question:
        "Beliefs around periods are one of the things that cause girls to be discriminated against.' 😕\n",
      answers: [
        { text: 'True', emoji: '🍏', isCorrect: 'true' },
        { text: 'False', emoji: '🍎', isCorrect: 'false' },
      ],
      response: {
        correct:
          "You're right! Incorrect beliefs around periods can lead to girls being discriminated against. 😲\n",
        in_correct: `It was 'true'! Incorrect beliefs around periods can lead to girls being discriminated against. 😲\n`,
      },
    },
  },
  allIds: [
    'f5e5142a-c57a-4dfd-9a52-9aabc5d9f396',
    'aa6efbe1-95f1-42f1-82d0-a0c8c01156c4',
    'b6fafd5e-f697-47f3-8743-b0628a271e50',
    '81f1f97d-ea78-4a53-8fec-9c6333924903',
    '7ff802c3-9d6b-4cd2-9386-52b0c129ac35',
    'f81cb5ac-1d5e-4100-9f86-06367bc379c2',
    '8716feb1-82e5-454a-b908-d11605babd89',
    'fbdd45e1-1848-4a98-9cbd-70346a3562d2',
    'f38b5418-f217-4b81-9c83-cce2d8006c3a',
    '7a09fe4e-03c0-4671-8b18-81a3b521fcf1',
  ],
}
