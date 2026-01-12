
  let started = false;

  window.onscroll = function () {
    if (started) return;

    if (window.scrollY > 2200) {
      started = true;

      let numbers = document.querySelectorAll(".percentage-number");

      numbers.forEach(function (el) {
        let current = 0;
        let target = el.getAttribute("data-target");

        let interval = setInterval(function () {
          current++;
          el.innerText = current + "%";

          if (current == target) {
            clearInterval(interval);
          }
        }, 20);
      });
    }
  };
