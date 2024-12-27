import { sample } from '~/lib/lodash'

const placeholderCopywrites = [
  '在這裏說點什麽呢。',
  '小可愛，妳想說點什麽呢？',
  '或許此地可以留下足跡',
]
export const getRandomPlaceholder = () => sample(placeholderCopywrites)

export const MAX_COMMENT_TEXT_LENGTH = 500
