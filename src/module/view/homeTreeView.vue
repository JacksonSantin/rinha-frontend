<template>
  <home v-if="controller.jsonScreenViewer.value" :controller="controller" />
  <json-tree-view
    v-if="!controller.jsonScreenViewer.value"
    :controller="controller"
  />
</template>

<script setup>
import { homeControllerImpl } from "../di/di";
import Home from "../components/home.vue";
import JsonTreeView from "../components/jsonTreeView.vue";
const controller = homeControllerImpl();
</script>

<style>
</style>