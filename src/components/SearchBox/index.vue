<template>
  <div name="search" class="search-box">
    <input
      type="text"
      placeholder="请输入想要搜索的内容..."
      v-show="isShowInput"
      v-model="msg"
      v-focus="isShowInput"
    />
    <div
      @click="btnClick"
      :class="{ search_now: isShowInput }"
    >
      <img src="/images/search.png" pointer/>
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
    notIsShowInput() {
      this.isShowInput = !this.isShowInput;
    },
    search() {
      //search
      console.log('start search!');
    },
    btnClick() {
      this.isShowInput
        ? this.search()
        : this.notIsShowInput();
    },
  },
  directives: {
    focus: {
      update: function(el, { value }) {
        value && el.focus();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-box {
  position: relative;
  > input {
    height: 100%;
    width: 600%;
    position: absolute;
    right: 100%;
    top: 0;
    outline: none;
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 0.2rem 0.5rem;
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
  > .search_now {
    border-radius: 0 5px 5px 0;
  }
}
</style>
