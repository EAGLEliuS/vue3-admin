<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import { mdiMonitorCellphone, mdiAccountMultiple } from "@mdi/js"; //, mdiTableBorder, mdiTableOff
import JeTable from "@/components/JeTable.vue";
import Pagination from "@/components/Pagination.vue";
import { getQuickScreeningReagents } from "@/api/healthBuureau";

onMounted(() => {
  getQuickScreeningReagents().then((res) => {
    console.log(res);
  });
});
const titleStack = ref(["Admin", "Tables"]);
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Tables</hero-bar>
  <main-section>
    <notification color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </notification>

    <card-component
      class="mb-6"
      title="Clients"
      :icon="mdiAccountMultiple"
      has-table
    >
      <je-table checkable />
      <pagination></pagination>
    </card-component>
  </main-section>

  <bottom-other-pages-section />
</template>
