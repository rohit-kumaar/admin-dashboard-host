/* This is a function that is listening for the DOM to be ready. */
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  darkTheme();
  lightTheme();
  chart();
  sidebar();
};

// querySelectorAll function
function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

function chart() {
  const chart = qs("#chart").getContext("2d");
  // Create a new chart instance
  new Chart(chart, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
      datasets: [
        {
          label: "BTC",
          data: [
            12372, 45283, 64274, 94237, 31274, 23670, 21548, 34862, 23573,
            64529,
          ],
          borderColor: "red",
          borderWidth: 2,
        },
        {
          label: "ETH",
          data: [
            73607, 94004, 40963, 79240, 89111, 81917, 17009, 44647, 35110,
            40619,
          ],
          borderColor: "blue",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

function sidebar() {
  const menuBtn = qs("#menuBtn");
  const closeBtn = qs("#closeBtn");
  const aside = qs("#aside");

  menuBtn.addEventListener("click", () => {
    aside.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    aside.style.display = "none";
  });
}

function darkTheme() {
  const darkMode = qs("#darkMode");

  darkMode.addEventListener("click", () => {
    Change_root_Property_h_s_l("--white-h", "240");
    Change_root_Property_h_s_l("--white-s", "7%");
    Change_root_Property_h_s_l("--white-l", "8%");

    Change_root_Property_h_s_l("--light-h", "240");
    Change_root_Property_h_s_l("--light-s", "9%");
    Change_root_Property_h_s_l("--light-l", "15%");

    Change_root_Property_h_s_l("--dark-h", "0");
    Change_root_Property_h_s_l("--dark-s", "0%");
    Change_root_Property_h_s_l("--dark-l", "87%");

    Change_root_Property_h_s_l("--gray-dark-h", "246");
    Change_root_Property_h_s_l("--gray-dark-s", "6%");
    Change_root_Property_h_s_l("--gray-dark-l", "69%");
  });
}

function lightTheme() {
  const lightMode = qs("#lightMode");

  lightMode.addEventListener("click", () => {
    Change_root_Property_h_s_l("--white-h", "0");
    Change_root_Property_h_s_l("--white-s", "0%");
    Change_root_Property_h_s_l("--white-l", "100%");

    Change_root_Property_h_s_l("--light-h", "250");
    Change_root_Property_h_s_l("--light-s", "23%");
    Change_root_Property_h_s_l("--light-l", "95%");

    Change_root_Property_h_s_l("--dark-h", "233");
    Change_root_Property_h_s_l("--dark-s", "9%");
    Change_root_Property_h_s_l("--dark-l", "17%");

    Change_root_Property_h_s_l("--gray-dark-h", "247");
    Change_root_Property_h_s_l("--gray-dark-s", "5%");
    Change_root_Property_h_s_l("--gray-dark-l", "35%");
  });
}

function Change_root_Property_h_s_l(property, value) {
  const root = qs(":root");
  root.style.setProperty(property, value);
}
