// https://gist.github.com/scmx/1f79adde2e9c69912fee520a246ec9e5
document.addEventListener("DOMContentLoaded", () => {
  var idleMouseTimer;
  var forceMouseHide = false;

  document.body.style.cursor = "none";

  document.body.addEventListener("mousemove", ev => {
    if (forceMouseHide) {
      return;
    }

    document.body.style.cursor = "";

    clearTimeout(idleMouseTimer);

    idleMouseTimer = setTimeout(() => {
      document.body.style.cursor = "none";

      forceMouseHide = true;

      setTimeout(function() {
        forceMouseHide = false;
      }, 200);
    }, 1000);
  });
});
