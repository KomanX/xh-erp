<template>
  <div class="main">
    <input
      type="text"
      placeholder="请输入想要搜索的内容..."
      v-show="isShowInput"
      v-model="msg"
    />
    <div @click="btnClick">
      <img src="/images/search.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      msg: '',
      isShowInput: false
    };
  },
  methods: {
    showInput() {
      this.isShowInput = !this.isShowInput;
    },
    search() {
      //search
      console.log('start search!');
    },
    btnClick() {
      this.isShowInput ? this.search() : this.showInput();
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  
  > input {
    height: 100%;
    width: 600%;
    position: absolute;
    right: 100%;
    top: 0;
  }
  > :nth-child(2) {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: #e8e8e8;
    > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
