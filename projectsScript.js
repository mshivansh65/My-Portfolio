const sections = document.querySelectorAll(".section");
// console.log(section);
// sections.map((section, index) => {
//   if (i % 2 === 0) {
//     section.classList.add("ow");
//   }
// });
sections.forEach((section, index) => {
  console.log(section);
  if (index % 2 === 0) section.classList.add("ow");
});
