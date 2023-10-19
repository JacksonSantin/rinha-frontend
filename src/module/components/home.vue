<template>
  <div id="home" class="text-center">
    <h1>JSON Tree Viewer</h1>
    <p>Simple JSON Viewer that runs completely on-client. No data exchange</p>
    <v-file-input
      class="mt-5"
      label="Select file"
      variant="underlined"
      density="comfortable"
      show-size
      counter
      :clearable="false"
      :disabled="controller.loading.value"
      @change="controller.handleFileUpload($event)"
    ></v-file-input>
    <v-btn
      class="text-none text-subtitle-1 mt-3"
      color="#5865f2"
      size="small"
      variant="flat"
      :loading="controller.loading.value"
      :disabled="controller.loading.value || controller.errorMessage.value"
      @click="controller.loadJsonTreeView()"
    >
      Load JSON
    </v-btn>
    <p v-if="controller.errorMessage.value" class="error mt-5">
      Invalid file. Please load a valid JSON file.
    </p>
  </div>
</template>

<script setup>
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>


<style scoped>
#home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  font-size: 48px;
}
p {
  font-size: 24px;
}
.error {
  font-size: 16px;
  color: #bf0e0e;
}
</style>