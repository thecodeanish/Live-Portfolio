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
const sidebar = document.querySelector(".sidebar");
const navList = sidebar.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
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
navTogglerBtn.addEventListener("clicl", () => {
  sidebarTogglerSectionBtn();
});
function sidebarTogglerSectionBtn() {
  sidebar.classList.toggle("open");
}
