<template>
  <div>{{ newDate }}</div>
</template>

<script>
export default {
  name: 'DateBox',
  props: ['date'],
  data() {
    return {
      newDate: ''
    };
  },
  mounted() {
    let days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    let d = this.date ? new Date(this.date) : new Date();
    this.newDate = `${d.getDate()} ${
      months[d.getMonth()]
    } ${d.getFullYear()},${days[d.getDay()]}`;
  }
};
</script>

<style scoped lang="scss"></style>
