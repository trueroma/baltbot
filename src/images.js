import { readdirSync } from 'fs'

import { InputFile, InputMediaBuilder } from 'grammy'

import { IMAGES_FOLDER, RANDOM_IMAGES_COUNT } from './constants.js'

const files = readdirSync(IMAGES_FOLDER)

export const getRandomImages = () => files
  .sort(() => 0.5 - Math.random())
  .slice(0, RANDOM_IMAGES_COUNT)
  .map(
    file => InputMediaBuilder.photo(new InputFile(`${IMAGES_FOLDER}/${file}`))
  )
