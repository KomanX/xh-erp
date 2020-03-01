function changeRem() {
  window.onresize = () => {
    document.documentElement.style.fontSize =
      (document.body.clientWidth / 1320) * 16 + "px";
  };
}
export { changeRem };
