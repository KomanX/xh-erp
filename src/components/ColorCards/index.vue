<script>
export default {
  name: 'ColorCards',
  data() {
    return {
      colors: [
        '#4C4CAD',
        '#9799D7',
        '#FF818B',
        '#1E90FF',
        '#2F4F4F',
        '#7CFC00',
        '#00FFFF'
      ]
    };
  },
  render(h) {
    let slotList = this.$slots.default.map(
      (item, index) => {
        item.data.style = Object.assign(
          {
            'background-color': this.colors[index]
          },
          item.data.style
        );
        item.data.staticClass = `color-card ${item.data.staticClass}`;
        return item;
      }
    );
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'align-items': 'center'
        }
      },
      slotList
    );
  }
};
</script>
<style lang="scss" scoped>
.color-card {
  border-radius: 10px;
  margin-right: 1rem;
  flex: auto;
  height: 100%;
}
</style>
