<template>
  <section class="section">
    <div class="container">
      <h1 class="title">SW2.5 データブラウザ</h1>
      <p class="subtitle">カテゴリを選んでください</p>

      <div class="buttons">
        <RouterLink to="/magic" class="button is-link" >魔法データ</RouterLink>
        <RouterLink to="/items" class="button is-info" >アイテムデータ</RouterLink>
        <RouterLink to="/monsters" class="button is-info" >魔物データ</RouterLink>
        <RouterLink to="/styles" class="button is-info" >流派データ</RouterLink>
        <!-- 将来的にルーターリンクへ切り替え -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 特にスクリプトは不要（表示のみ）
</script>
