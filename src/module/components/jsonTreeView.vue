<template>
  <div id="jsonViewer">
    <v-container fluid>
      <v-card max-width="1000" :elevation="0" class="mx-auto">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class="jsonName ml-0">{{
            controller.nameFile.value
          }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-tooltip location="bottom" text="Return to home">
            <template v-slot:activator="{ props }">
              <v-btn
                class="mr-0"
                icon
                v-bind="props"
                @click="controller.returnToHomeScreen()"
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </v-toolbar>
        <pre><code class="language-json pa-5" v-html="controller.json.value"></code></pre>
      </v-card>
    </v-container>
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
code {
  display: inline-block;
  overflow-x: auto;
  width: 100%;
}
.jsonName {
  font-size: 32px;
  line-height: 2.5rem;
  font-weight: 700;
}
</style>