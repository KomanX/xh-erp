<template>
  <div class="view-chart">
    <div class="nav">
      <xh-navigator :current="current"></xh-navigator>
    </div>
    <div class="content">Chart</div>
  </div>
</template>

<script>
import XhNavigator from '@/components/XhNavigator';
export default {
  data() {
    return {
      current: 2
    };
  },
  components: { XhNavigator }
};
</script>

<style lang="scss" scoped>
.view-chart {
  width: 100%;
  height: 100%;
  display: flex;

  > .nav {
    width: 16%;
    height: 100%;
  }
  > .content {
    width: 84%;
    height: 100%;
  }
}
</style>
