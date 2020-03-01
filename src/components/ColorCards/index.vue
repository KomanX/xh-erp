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
  methods: {},
  render(h) {
    let slotList = [];
    let slots_d = this.$slots.default;
    slots_d.forEach((item, index) => {
      slotList.push(
        h(
          'div',
          {
            style: {
              'background-color': this.colors[index],
              'border-radius': '10px',
              'margin-right':
                index == slots_d.length - 1 ? '' : '1rem',
              flex: 'auto',
              height: '100%'
            }
          },
          [item]
        )
      );
    });
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
