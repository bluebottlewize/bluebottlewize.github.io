var interval = 1000;

function mobile(x) {
  if (x.matches) {
    interval = 400;

    console.log("mobile mode");
    document
      .getElementById("mobile-hamburger-button")
      .addEventListener("click", function (event) {
        document.getElementsByClassName("navbar")[0].style.width = "80%";
      });

    document
      .getElementsByClassName("navbar")[0]
      .addEventListener("click", function (event) {
        document.getElementsByClassName("navbar")[0].style.width = "0%";
      });

    document.getElementsByClassName("about")[0].innerHTML = "";
  }
}

//ACHIEVEMENTS LOADING

const loadProgressMapper = [
  "▯▯▯▯▯▯▯▯▯▯",
  "▮▯▯▯▯▯▯▯▯▯",
  "▮▮▯▯▯▯▯▯▯▯",
  "▮▮▮▯▯▯▯▯▯▯",
  "▮▮▮▮▯▯▯▯▯▯",
  "▮▮▮▮▮▯▯▯▯▯",
  "▮▮▮▮▮▮▯▯▯▯",
  "▮▮▮▮▮▮▮▯▯▯",
  "▮▮▮▮▮▮▮▮▯▯",
  "▮▮▮▮▮▮▮▮▮▯",
  "▮▮▮▮▮▮▮▮▮▮",
];

function showAchievements() {
  var times = 0;
  const prefix = "LOADING…";
  var suffix = "";
  var loadingBar = document.getElementsByClassName("loading")[0];
  var counter = 0;

  var toContinueLoading = setInterval(() => {
    var toDisplay = `${prefix} ${loadProgressMapper[counter++]}\n${suffix}`;
    loadingBar.innerHTML = toDisplay;
    if (counter === loadProgressMapper.length) {
      counter = 0;
      ++times;

      if (times >= 2) {
        suffix = "<br> This is taking way longer than expected...";
      }
      if (times >= 3) {
        loadingBar.innerHTML =
          "Found 1.<br>Won Malayalam Essay Writing competition in school at 8th standard.";
        clearInterval(toContinueLoading);
      }
    }
  }, 200);
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 500px)");

mobile(x);

document.getElementById("about-page").classList.add("top");

let mainNavLinks = document
  .getElementsByClassName("navbar")[0]
  .getElementsByTagName("a");
let mainSections = document.getElementsByTagName("section");

let lastId;
let cur = [];

var education = document.getElementById("terminal");
education.classList.add("slide-out");

window.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    education.classList.add("slide-out");
    education.classList.remove("slide-in");
    var code = education.getElementsByTagName("output");

    Array.from(code).forEach((line) => {
      line.classList.remove("terminal-about");
    });
  } else if (event.deltaY > 0) {
    console.log("scrolling down");
    education.classList.add("slide-in");
    education.classList.remove("slide-out");

    var code = education.getElementsByTagName("output");
    Array.from(code).forEach((line) => {
      line.classList.add("terminal-about");
    });
  }
});

const img = document.getElementById("terminal");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("code");
    } else {
      entry.target.classList.remove("code");
    }
  });
};
const options = {};

const myObserver = new IntersectionObserver(callback, options);
myObserver.observe(img);

var navItems = Array.from(
  document.getElementsByClassName("navbar")[0].getElementsByTagName("li"),
);

console.log(navItems);

navItems.forEach((navItem) => {
  console.log(navItem);
  navItem.addEventListener("click", (event) => {
    const transition_el = document.querySelector(".transition");
    var sectionId = navItem.href.substring(navItem.href.indexOf("#") + 1);

    if (sectionId == "about") {
      education.classList.toggle("slide-in");
      education.classList.toggle("slide-out");
      var code = education.getElementsByTagName("output");

      Array.from(code).forEach((line) => {
        line.classList.remove("terminal-about");
        void line.offsetWidth;
        line.classList.add("terminal-about");
      });
    } else {
      education.classList.add("slide-out");
      education.classList.remove("slide-in");

      document.getElementById("about-page").classList.remove("top");

      setTimeout(() => {
        transition_el.classList.add("is-active");
        document.getElementsByTagName("body")[0].classList.add("transition-2");
        setTimeout(() => {
          transition_el.classList.remove("is-active");
        }, 1000);
        console.log("transition ended");
      }, 500);
      console.log("transition ended");
    }

    navItem.classList.toggle("nav-active");
    navItem.classList.toggle("nav-inactive");
    navItems.forEach((otherItems) => {
      console.log(navItem.href);
      console.log(otherItems.href);

      if (navItem.href != otherItems.href) {
        otherItems.classList.add("nav-inactive");
        otherItems.classList.remove("nav-active");
        var otherSectionId = otherItems.href.substring(
          otherItems.href.indexOf("#") + 1,
        );
      }
    });
  });
});

////////////////////////////////////////////////////////////////////////////////////////

var transition_el = document.querySelector(".transition");

//////////////about menu

var about_menu = document.getElementById("about-menu");
about_menu.addEventListener("click", (event) => {
  if (document.getElementsByClassName("top")[0].id != "about-page") {
    transition_el.classList.add("is-active");
    document.getElementsByClassName("top")[0].classList.toggle("top");
    document.getElementById("about-page").classList.toggle("top");
    setTimeout(() => {
      transition_el.classList.remove("is-active");
    }, interval);
    console.log("transition ended");
  }

  // sliding of terminal
  education.classList.toggle("slide-in");
  education.classList.toggle("slide-out");

  // for terminal display
  var code = education.getElementsByTagName("output");
  Array.from(code).forEach((line) => {
    line.classList.remove("terminal-about");
    void line.offsetWidth;
    line.classList.add("terminal-about");
  });

  // disabling other buttons
  about_menu.classList.toggle("nav-active");
  about_menu.classList.toggle("nav-inactive");
  navItems.forEach((otherItems) => {
    if (about_menu.id != otherItems.id) {
      otherItems.classList.add("nav-inactive");
      otherItems.classList.remove("nav-active");
    }
  });
});

///////// education menu

var education_menu = document.getElementById("education-menu");
education_menu.addEventListener("click", (event) => {
  // sliding of terminal
  education.classList.remove("slide-in");
  education.classList.add("slide-out");

  // disabling other buttons
  education_menu.classList.add("nav-active");
  education_menu.classList.remove("nav-inactive");
  navItems.forEach((otherItems) => {
    if (education_menu.id != otherItems.id) {
      otherItems.classList.add("nav-inactive");
      otherItems.classList.remove("nav-active");
    }
  });

  transition_el.classList.add("is-active");
  document.getElementsByClassName("top")[0].classList.toggle("top");

  setTimeout(() => {
    document.getElementById("education-page").classList.toggle("top");
    transition_el.classList.remove("is-active");
  }, interval);
  console.log("transition ended");
  console.log("transition ended");
});

///////// skills menu

var skills_menu = document.getElementById("skills-menu");
skills_menu.addEventListener("click", (event) => {
  // sliding of terminal
  education.classList.remove("slide-in");
  education.classList.add("slide-out");

  // disabling other buttons
  skills_menu.classList.add("nav-active");
  skills_menu.classList.remove("nav-inactive");
  navItems.forEach((otherItems) => {
    if (skills_menu.id != otherItems.id) {
      otherItems.classList.add("nav-inactive");
      otherItems.classList.remove("nav-active");
    }
  });

  transition_el.classList.add("is-active");
  document.getElementsByClassName("top")[0].classList.toggle("top");

  setTimeout(() => {
    document.getElementById("skills-page").classList.toggle("top");
    transition_el.classList.remove("is-active");
  }, interval);
  console.log("transition ended");
  console.log("transition ended");
});

///////// achievements menu

var achievements_menu = document.getElementById("achievements-menu");
achievements_menu.addEventListener("click", (event) => {
  // sliding of terminal
  education.classList.remove("slide-in");
  education.classList.add("slide-out");

  // disabling other buttons
  achievements_menu.classList.add("nav-active");
  achievements_menu.classList.remove("nav-inactive");
  navItems.forEach((otherItems) => {
    if (achievements_menu.id != otherItems.id) {
      otherItems.classList.add("nav-inactive");
      otherItems.classList.remove("nav-active");
    }
  });

  transition_el.classList.add("is-active");
  document.getElementsByClassName("top")[0].classList.toggle("top");

  setTimeout(() => {
    document.getElementById("achievements-page").classList.toggle("top");
    transition_el.classList.remove("is-active");
  }, interval);
  console.log("transition ended");
  console.log("transition ended");

  showAchievements();
});

///////// blogs menu

var blogs_menu = document.getElementById("blogs-menu");
blogs_menu.addEventListener("click", (event) => {
  // sliding of terminal
  education.classList.remove("slide-in");
  education.classList.add("slide-out");

  // disabling other buttons
  blogs_menu.classList.add("nav-active");
  blogs_menu.classList.remove("nav-inactive");
  navItems.forEach((otherItems) => {
    if (blogs_menu.id != otherItems.id) {
      otherItems.classList.add("nav-inactive");
      otherItems.classList.remove("nav-active");
    }
  });

  transition_el.classList.add("is-active");
  document.getElementsByClassName("top")[0].classList.toggle("top");
  setTimeout(() => {
    document.getElementById("blogs-page").classList.toggle("top");
    transition_el.classList.remove("is-active");
  }, interval);
  console.log("transition ended");
  console.log("transition ended");
});

////////// dark - light button

document.getElementById("dark-light-button").addEventListener("click", (e) => {
  document.getElementsByTagName("body")[0].classList.toggle("light");
  e.currentTarget.firstElementChild.classList.toggle(
    "dark-mode-toggle__icon--moon",
  );
});