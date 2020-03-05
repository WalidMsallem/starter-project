import React from 'react'
import { Tooltip } from 'antd'

export const handleTitleLength = (str, titleMaxLength = 62) => {
  if (str.length > titleMaxLength) return `${str.slice(0, titleMaxLength)}...`
  if (str.length > titleMaxLength) return `${str.slice(0, titleMaxLength)}...`
  return str
}
export const handleDescriptionLength = (str, descriptionMaxLength = 134) => {
  if (str.length > descriptionMaxLength)
    return `${str.slice(0, descriptionMaxLength)}...`
  return str
}

export const deleteFirstCharacters = (string, number) => string.slice(number)

export const hideLongText = (text, maxLength = 20) => {
  const allText = <span>{text}</span>
  if (text.length > maxLength) {
    return (
      <Tooltip placement="right" title={allText}>
        {`${text.slice(0, maxLength)}...`}
      </Tooltip>
    )
  }
  return text
}

export const deleteExtraSpaces = string => string.replace(/\s+/g, ' ').trim()

export const stringifyString = string => JSON.stringify(string)

/**
 *
 * @param {string} string your cant pass an undefined string
 */
export const parseString = string => (string ? JSON.parse(string) : undefined)

export const generateRandomString = length => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
