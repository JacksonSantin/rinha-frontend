export const isJSON = (str) => {
  try {
    return (JSON.parse(str) && !!str);
  } catch (e) {
    return false;
  }
}

export const isJsonFile = (fileName) => {
  try {
    const jsonRegex = /\.json$/i
    return jsonRegex.test(fileName)
  } catch (error) {
    throw error
  }
}