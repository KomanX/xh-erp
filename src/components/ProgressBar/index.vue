<template>
  <div
    class="progress-bar"
    :class="this.col ? 'col' : 'row'"
  >
    <div>
      <ul>
        <li
          v-for="(item, index) in rate"
          :key="index"
          :style="rateStyle[index]"
        ></li>
      </ul>
    </div>
    <div
      v-if="isPercentage"
      :style="{
        color: rate > errRate ? barColor : errColor
      }"
    >
      {{ rate * 100 + '%' }}
    </div>
  </div>
</template>

<script>
let defaultBarColor = '#5A7DF3';
let defaultErrColor = '#FF616F';
export default {
  name: 'ProgressBar',
  props: {
    rate: [Number, String, Array],
    percentage: {
      type: Boolean,
      default: false
    },
    col: {
      type: Boolean,
      default: false
    },
    'bar-color': {
      type: [String, Array],
      default: defaultBarColor
    },
    'err-color': {
      type: String,
      default: defaultErrColor
    },
    'err-rate': {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    isPercentage: function() {
      return typeof this.rate === 'string'
        ? this.percentage
        : false;
    },
    rateStyle: function() {
      let result = [];
      if (Array.isArray(this.rate)) {
        let rate = [...this.rate];
        let totle = rate.reduce((all, item) => {
          return all + item;
        });
        rate = rate.map(item => {
          return item / totle;
        });
        rate.forEach((item, index) => {
          let styleBuf = {
            'background-color': this.barColor[index]
              ? this.barColor[index]
              : defaultBarColor
          };
          styleBuf[this.col ? 'height' : 'width'] =
            item * 100 + '%';
          result.push(styleBuf);
        });
      } else {
        let styleBuf = {
          'background-color':
            this.rate < this.errRate
              ? this.errColor
              : this.barColor
        };
        styleBuf[this.col ? 'height' : 'width'] =
          this.rate * 100 + '%';
        result.push(styleBuf);
      }
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  > div:first-child {
    position: relative;
    border-radius: 10px;
    background-color: $back-grey;
    > ul {
      height: 100%;
      width: 100%;
      overflow: hidden;
      list-style: none;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: inherit;
      display: flex;
    }
  }
  > div:nth-child(2) {
    margin-left: 0.6rem;
    font-size: 0.7rem;
    font-weight: bolder;
  }
}
.row {
  flex-direction: row;
  > div:first-child {
    height: 100%;
    flex: auto;
    > ul {
      flex-direction: row;
      > li {
        height: 100%;
      }
    }
  }
}
.col {
  flex-direction: column;
  > div:first-child {
    width: 100%;
    flex: auto;
    > ul {
      flex-direction: column;
      > li {
        width: 100%;
      }
    }
  }
}
</style>
