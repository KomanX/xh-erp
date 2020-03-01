<template>
  <div class="app"><router-view /></div>
</template>
script
<script>
// import { changeRem } from '@/assets/changeRem.js';
export default {
  methods: {
    
  },
  mounted() {
    // this._isMobile() && changeRem();
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
body {
  min-width: 1230px;
  overflow-anchor: none;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  cursor: default;
}
button {
  cursor: pointer;
}
[pointer] {
  cursor: pointer;
  * {
    cursor: pointer;
  }
}
[overtext] {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  * {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
[overtext-s] {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  * {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
.app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
