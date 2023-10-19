export const isJSON = (str) => {
  try {
    return (JSON.parse(str) && !!str);
  } catch (e) {
    return false;
  }
}

export const formatJSON = (str) => {
  try {
    const withoutBraces = str.replace(/^\{|\}$/g, '');
    const formattedJson = withoutBraces.replace(/"([^"]+)":/g, '$1:');
    return formattedJson;
  } catch (error) {
    throw error
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