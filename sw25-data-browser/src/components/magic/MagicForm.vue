<script setup lang="ts">
  import { ref } from 'vue'
  import MagicForm from './MagicForm.vue'
  import MagicNameInput from './fields/MagicNameInput.vue'
  import MagicSystemSelect from './fields/MagicSystemSelect.vue'
//   import MagicMPInput from './fields/MagicMPInput.vue'
//   import MagicEffectTextarea from './fields/MagicEffectTextarea.vue'
  
  const magic = ref({
    name: '',
    system: '真語魔法',
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
      <!-- <MagicMPInput v-model.number="magic.mp" />
      <MagicEffectTextarea v-model="magic.effect" /> -->
  
      <div class="field">
        <button class="button is-primary" type="submit">保存</button>
        <RouterLink to="/magic" class="button is-link">魔法データ一覧に戻る</RouterLink>
      </div>
    </form>
  </template>