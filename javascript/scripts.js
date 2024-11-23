/* ===> Script for Home auto typing section start <=== */
document.addEventListener("DOMContentLoaded", function () {
  const profile = [
    "Web Developer",
    "UI/UX Designer",
    "Web Designer",
    "Freelancer",
  ];
  const typing = new AutoTyping(".typing", profile, {
    typeSpeed: 50,
    deleteSpeed: 50,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
  });
  typing.start();
});
/* ===> Script for Home auto typing section End <=== */

/* ===> Script for Sidebar Start <=== */
const sidebar = document.querySelector(".sidebar"); // Taking Sidebar
const navList = sidebar.querySelectorAll("li"), //Taking Navigation tab
  totalNavList = navList.length; // Total of Navigation tab links
const allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a"); //Specify the particular link or anchor
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      sidebarTogglerSectionBtn();
    }
  });
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// Script for Nav Toggler

const navTogglerBtn = document.querySelector(".nav-toggler");
const Sidebar = document.querySelector(".sidebar");
navTogglerBtn.addEventListener("click", function () {
  sidebarTogglerSectionBtn();
});
function sidebarTogglerSectionBtn() {
  Sidebar.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Script for Hire Me button
const hireMe = document.querySelector(".hire-me");
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
hireMe.addEventListener("click", function () {
  // console.log(this);
  showSection(this);
  updateNav(this);
});
