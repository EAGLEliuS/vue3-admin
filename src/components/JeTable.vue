<script setup>
import { computed, reactive, ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import CheckboxCell from '@/components/CheckboxCell.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'

defineProps({
  checkable: Boolean
})

const mainStore = useMainStore()

const tableTrStyle = computed(() => mainStore.tableTrStyle)

const tableTrOddStyle = computed(() => mainStore.tableTrOddStyle)

const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const dataList = ref([]);

dataList.value.push({
    id:0,
    name:'eee',
    company:'bbb',
    city:'taiwan'
})
</script>

<template>
 <table>
    <thead>
      <tr>
        <th />
        <th />
        <th>Name</th>
        <th>Company</th>
        <th>City</th>
        <th>Progress</th>
        <th>Created</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(client, index) in dataList"
        :key="client.id"
        :class="[tableTrStyle, index % 2 === 0 ? tableTrOddStyle : '']"
      >
        <checkbox-cell
        />
        <td data-label="Name">
          {{ client.name }}
        </td>
        <td data-label="Company">
          {{ client.company }}
        </td>
        <td data-label="City">
          {{ client.city }}
        </td>
        <td class="actions-cell">
          <jb-buttons
            type="justify-start lg:justify-end"
            no-wrap
          >
            <jb-button
              color="info"
              :icon="mdiEye"
              small
              @click="isModalActive = true"
            />
            <jb-button
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="isModalDangerActive = true"
            />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
  </table> 
  </template>