
<template>
  <div v-cloak>
    <router-view />
  </div>
</template>

<style lang="scss">
[v-cloak] > * { display:none }
[v-cloak]::before { content: "loading…" }
</style>

<script>

export default {
  name: "App",
  mounted() {
  }
};
</script>
