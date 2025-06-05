<template>
    <div class="field">
      <label class="label">魔法系統</label>
      <div class="control">
        <div class="select">
          <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
            <option value="真語魔法">真語魔法</option>
            <option value="操霊魔法">操霊魔法</option>
            <option value="深智魔法">深智魔法</option>
            <option value="神聖魔法">神聖魔法</option>
            <option value="魔動機術">魔動機術</option>
            <option value="妖精魔法">妖精魔法</option>
            <option value="召異魔法">召異魔法</option>
            <option value="奈落魔法">奈落魔法</option>
          </select>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ modelValue: string }>()
  defineEmits(['update:modelValue'])
  </script>
  