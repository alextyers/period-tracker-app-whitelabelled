export type ThemeName = 'hills' | 'mosaic' | 'village' | 'desert'
export type AvatarName = 'default' | 'julia' | 'nur' | 'ari'

export interface Theme {
  id: ThemeName
  primaryBackgroundColor: string
  periodColor: string
  nonPeriodColor: string
  fertileColor: string
  fontSize: number
  lightGreen: string
  mediumGreen: string
}

export type Themes = { [key in ThemeName]: Theme }
