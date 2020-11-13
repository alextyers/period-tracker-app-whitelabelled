export interface Articles {
  byId: {
    [id: string]: {
      id: string
      title: string
      content: string
      category: string
      subCategory: string
    }
  }
  allIds: string[]
}

interface AvatarMessageItem {
  id: string
  content: string
}
export interface AvatarMessages extends Array<AvatarMessageItem> {}

export interface Categories {
  byId: {
    [id: string]: {
      id: string
      name: string
      tags: {
        primary: {
          name: string
          emoji: string
        }
        secondary: {
          name: string
          emoji: string
        }
      }
      subCategories: string[]
    }
  }
  allIds: string[]
}

export interface SubCategories {
  byId: {
    [id: string]: {
      id: string
      name: string
      articles: string[]
    }
  }
  allIds: string[]
}

export interface DidYouKnows {
  byId: {
    [id: string]: {
      id: string
      isAgeRestricted: boolean
      title: string
      content: string
    }
  }
  allIds: string[]
}

export interface Quizzes {
  byId: {
    [id: string]: {
      id: string
      isAgeRestricted: boolean
      question: string
      answers: Array<{
        text: string
        emoji: string
        isCorrect: boolean
      }>
      response: {
        correct: string
        in_correct: string
      }
    }
  }
  allIds: string[]
}

export interface Surveys {
  byId: {
    [id: string]: {
      id: string
      question: string
      answers: Array<{
        text: string
        emoji: string
      }>
    }
  }
  allIds: string[]
}

interface HelpCenterItem {
  id: number
  title: string
  caption: string
  contactOne: string
  contactTwo: string
  address: string
  website: string
  lang: string
}
export interface HelpCenters extends Array<HelpCenterItem> {}

interface ContentItem {
  type: 'HEADING' | 'CONTENT'
  content: string
}

export interface PrivacyPolicy extends Array<ContentItem> {}
export interface TermsAndConditions extends Array<ContentItem> {}
export interface About extends Array<ContentItem> {}
