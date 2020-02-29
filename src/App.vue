<template>
  <div class="app"><router-view /></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
.app {
  width: 100vw;
  height: 100vh;
}
</style>
