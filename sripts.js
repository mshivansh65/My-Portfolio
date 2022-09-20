console.log(`Hey`);
const projDisEl = document.querySelectorAll(".project-discription");
const sectionCentersEl = document.querySelectorAll(".container-center");
// console.log(projDisEl);
projDisEl.forEach((div) => {
  div.classList.add("hidden");
  div.closest(".section").classList.add("section-1");
});
// object.addEventListener("mouseover", myScript);

sectionCentersEl.forEach((sectionCenterEl) =>
  sectionCenterEl.addEventListener("mouseenter", (e) => {
    // console.log(e);

    showProjectDetail(e.target);
  })
);
// sectionCentersEl.forEach((sectionCenterEl) =>
//   sectionCenterEl.addEventListener("mouseleave", (e) => {
//     // console.log(e);

//     hideProjectDetail(e.target);
//   })
// );
function showProjectDetail(sec) {
  projDisEl.forEach((projEl) => {
    if (projEl.closest(".container-center") === sec) {
      projEl.classList.remove("hidden");
      projEl.closest("section").classList.remove("section-1");
    } else {
      projEl.closest("section").classList.add("section-1");
      projEl.classList.add("hidden");
    }
  });
}
// function hideProjectDetail(sec) {
//   projDisEl.forEach((projEl) => {
//     if (projEl.closest(".container-center") === sec) {
//       projEl.closest("section").classList.add("section-1");
//       projEl.classList.add("hidden");
//     }
//   });
// }
