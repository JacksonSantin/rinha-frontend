import { ref } from "vue";
import { isJSON, isJsonFile } from "@/core/const/util";
import Prism from "prismjs";
import 'prismjs/components/prism-json';

const homeController = () => () => {
  const loading = ref(false)
  const errorMessage = ref(false)
  const jsonScreenViewer = ref(true)
  const nameFile = ref("")
  const json = ref("")

  const handleFileUpload = (event) => {
    try {
      const file = event.target.files[0]
      nameFile.value = file.name

      if (!isJsonFile(nameFile.value)) {
        errorMessage.value = true
        return
      }

      if (file) {
        const reader = new FileReader()

        reader.onload = (e) => {
          json.value = e.target.result
        };

        reader.readAsText(file)
      }

      errorMessage.value = false
    } catch (error) {
      throw error
    }
  }

  const loadJsonTreeView = () => {
    try {
      loading.value = true

      if (!isJSON(json.value)) {
        errorMessage.value = true
        return
      }

      json.value = Prism.highlight(
        JSON.stringify(JSON.parse(json.value), null, 4),
        Prism.languages.json
      );

      errorMessage.value = false
      jsonScreenViewer.value = false
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  }

  const returnToHomeScreen = () => {
    errorMessage.value = false
    jsonScreenViewer.value = true
  }

  return {
    loading,
    errorMessage,
    nameFile,
    json,
    jsonScreenViewer,
    handleFileUpload,
    loadJsonTreeView,
    returnToHomeScreen
  }
}

export { homeController }