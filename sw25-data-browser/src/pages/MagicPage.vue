<script lang="ts">
import { RouterLink } from 'vue-router';
import MagicForm from '../components/magic/MagicForm.vue';
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">魔法データページ</h1>
        <RouterLink to="/addmagicform" class="button">魔法データ新規追加</RouterLink>
          <MagicForm />
      <div class="buttons">
        <RouterLink to="/" class="button is-link" >メインメニューに戻る</RouterLink>
      </div>
    </div>
  </section>
</template>
