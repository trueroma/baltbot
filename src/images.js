import { readdirSync } from 'fs'

import { InputFile, InputMediaBuilder } from 'grammy'

import { IMAGES_FOLDER, RANDOM_IMAGES_COUNT } from './constants.js'

const files = readdirSync(IMAGES_FOLDER)

let pointer = Infinity

export const getRandomImages = () => {
  if (pointer + RANDOM_IMAGES_COUNT > files.length) {
    files.sort(() => 0.5 - Math.random())

    pointer = 0
  }

  const images = files
    .slice(pointer, pointer + RANDOM_IMAGES_COUNT)
    .map(
      file => InputMediaBuilder.photo(new InputFile(`${IMAGES_FOLDER}/${file}`))
    )

  pointer += RANDOM_IMAGES_COUNT

  return images
}
