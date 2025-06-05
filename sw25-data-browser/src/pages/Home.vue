<script setup lang="ts">
// 特にスクリプトは不要（表示のみ）
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">SW2.5 データブラウザ</h1>

      <div class="buttons">
        <RouterLink to="/magic" class="button is-info" >魔法データ</RouterLink>
        <RouterLink to="/enhancer" class="button is-info" >練技データ</RouterLink>
        <RouterLink to="/alchemist" class="button is-info" >賦術データ</RouterLink>
        <RouterLink to="/equestrian_art" class="button is-info" >騎芸データ</RouterLink>
        <RouterLink to="/items" class="button is-info" >アイテムデータ</RouterLink>
        <RouterLink to="/martial_arts" class="button is-info" >流派データ</RouterLink>
        <RouterLink to="/monsters" class="button is-info" >魔物データ</RouterLink>
        
        <!-- 将来的にルーターリンクへ切り替え -->
      </div>
    </div>
  </section>
</template>
