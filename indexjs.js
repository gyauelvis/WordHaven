let hamburger = document.querySelector(".navBar .theBox .hamburger");
let navLinks = document.querySelector(".navBar .navLinks");
let closeMenu = document.querySelector(".navBar .closeMenu img");
let navLinksUl = document.querySelector(".navBar .navLinks ul");
const toggleOn = (e) => {
  e.preventDefault;
  navLinksUl.style.animation = "ul-in 250ms ease-in-out 0s 1 normal forwards";
  navLinks.style.display = "flex";
  closeMenu.style.display = "flex";
};
const toggleOff = (e) => {
  e.preventDefault;
  navLinksUl.style.animation = "ul-off 250ms ease-in-out 0s 1 normal forwards";
  navLinks.style.display = "flex";
  closeMenu.style.display = "none";
};
hamburger.addEventListener("click", toggleOn);
closeMenu.addEventListener("click", toggleOff);

// The stugger animation of the church values
let values = document.querySelectorAll(".value");
observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";
      entry.target.style.filter = "blur(0px)";
      entry.target.style.transition = `all 500ms ease-in-out ${entry.target.dataset.delay}`;
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(50%)";
      entry.target.style.filter = "blur(5px)";
      entry.target.style.transition = `all 500ms ease-in-out ${entry.target.dataset.delay}`;
    }
  });
});
values.forEach((value) => {
  observer.observe(value);
});

let pic_anim = document.querySelectorAll(".pic_anim");
pic_anim.forEach((pic) => observer.observe(pic));

let sermons = document.querySelectorAll(".sermonImg");
sermons.forEach((sermon) => {
  sermon.addEventListener("mouseover", (e) => {
    e.target.firstElementChild.style.backgroundColor = "#58181f";
  });
});
sermons = document.querySelectorAll(".sermonImg");

sermons.forEach((sermon) => {
  sermon.addEventListener("mouseout", (e) => {
    e.target.firstElementChild.style.backgroundColor = "";
  });
});
