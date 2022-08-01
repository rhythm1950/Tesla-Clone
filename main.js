// Nav
const openMenu = () => {
  document.getElementById("backdrop").className = "backdrop active";
  document.getElementById("aside").className = "active";
};

const closeMenu = () => {
  document.getElementById("backdrop").className = "backdrop";
  document.getElementById("aside").className = "";
};

document.getElementById("menu-btn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

document.getElementById("close").onclick = (e) => {
  closeMenu();
};

document.getElementById("backdrop").onclick = (e) => {
  closeMenu();
};

// Scroll
// document.lastScrollPosition = 0;
// document.lastCentered = 0;
// document.onWayTo = null;

// document.addEventListener("scroll", () => {
//   const direction =
//     window.pageYOffset - document.lastScrollPosition > 0 ? "down" : "up";
//   const sections = [...document.querySelectorAll(".section")];

//   if (document.onWayTo === null) {
//     const destIndex =
//       direction === "up"
//         ? document.lastCentered - 1
//         : document.lastCentered + 1;
//     if (destIndex >= 0 && destIndex < sections.length) {
//       document.onWayTo = destIndex;
//       window.scroll(x, sections[destIndex].offsetTop);
//     }
//   }

//   sections.forEach((section, index) => {
//     if (window.pageYOffset === section.offsetTop) {
//       document.lastCentered = index;
//       section.className = "active";
//       if (document.onWayTo === index) {
//         document.onWayTo = null;
//       } else {
//         section.className = "";
//       }
//     }
//   });

//   document.lastScrollPosition = window.pageYOffset;
// });
