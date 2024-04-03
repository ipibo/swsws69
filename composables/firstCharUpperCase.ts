export const firstCharUpperCase = (str: string) => {
  // Return the string with the first character in uppercase
  return str.charAt(0).toUpperCase() + str.slice(1)
}
