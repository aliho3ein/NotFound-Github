const area = document.querySelector("body");
let p1 = area.querySelector(".p1");
let p2 = area.querySelector(".p2");
let p3 = area.querySelector(".p3");
let p3_s = area.querySelector(".p3-s");
let p4 = area.querySelector(".p4");

area.addEventListener("mousemove", function (event) {
  let x = event.clientX;
  let y = event.clientY;

  // let item1 = getComputedStyle(p1).right + 800;
  //   p1.style.left = ;
  //   console.log((x / ex) * 10);

  /* Right side */
  p1.style.right = parseInt(p1.getAttribute("right")) - x / 180 + "px";
  p2.style.right = parseInt(p2.getAttribute("right")) + x / 200 + "px";
  p3.style.right = parseInt(p3.getAttribute("right")) - x / 60 + "px";
  p3_s.style.right = parseInt(p3_s.getAttribute("right")) - x / 60 + "px";
  p4.style.right = parseInt(p4.getAttribute("right")) + x / 300 + "px";
  /* Top side */
  p1.style.top = parseInt(p1.getAttribute("top")) + y / 250 + "px";
  p2.style.top = parseInt(p2.getAttribute("top")) + y / 210 + "px";
  p3.style.top = parseInt(p3.getAttribute("top")) - y / 30 + "px";
  p3_s.style.top = parseInt(p3_s.getAttribute("top")) + y / 45 + "px";
  p4.style.top = parseInt(p4.getAttribute("top")) + y / 190 + "px";
});
