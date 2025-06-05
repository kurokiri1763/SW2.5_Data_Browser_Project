<script setup lang="ts">
  import { ref } from 'vue'
  import MagicNameInput from './fields/MagicNameInput.vue'
  import MagicSystemSelect from './fields/MagicSystemSelect.vue'
  import MagicMPInput from './fields/MagicMPInput.vue'
  import MagicEffectTextarea from './fields/MagicEffectTextarea.vue'
  
  const magic = ref({
    name: '',
    system: '神聖魔法',
    mp: 0,
    effect: '',
  })
  
  const submit = () => {
    console.log('保存:', magic.value)
    // データ保存ロジックを後で追加
  }
  </script>

<template>
    <form @submit.prevent="submit">
      <MagicNameInput v-model="magic.name" />
      <MagicSystemSelect v-model="magic.system" />
      <MagicMPInput v-model.number="magic.mp" />
      <MagicEffectTextarea v-model="magic.effect" />
  
      <div class="field">
        <button class="button is-primary" type="submit">保存</button>
      </div>
    </form>
  </template>