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
