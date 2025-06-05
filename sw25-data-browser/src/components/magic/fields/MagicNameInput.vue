<template>
    <div class="field">
      <label class="label">魔法名</label>
      <div class="control">
        <input class="input" type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" required />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ modelValue: string }>()
  defineEmits(['update:modelValue'])
  </script>
