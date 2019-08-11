<template>
<div class="flex-container container-align-center">
  <div class="flex-cell cell-1of3">
    <app-header />
    <app-content />
    <app-footer />
  </div>
</div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppContent from "./AppContent.vue";
import AppFooter from "./AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
};
</script>
