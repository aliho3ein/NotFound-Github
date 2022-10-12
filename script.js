const area = document.querySelector("body");
let p1 = area.querySelector(".p1");
let p2 = area.querySelector(".p2");
let p3 = area.querySelector(".p3");
let p3_s = area.querySelector(".p3-s");
let p4 = area.querySelector(".p4");

/* Get item right from css */
let item1 = parseInt(getComputedStyle(p1).right.replace("px", ""));
let item2 = parseInt(getComputedStyle(p2).right.replace("px", ""));
let item3 = parseInt(getComputedStyle(p3).right.replace("px", ""));
let item3_s = parseInt(getComputedStyle(p3_s).right.replace("px", ""));
let item4 = parseInt(getComputedStyle(p4).right.replace("px", ""));

area.addEventListener("mousemove", function (event) {
  let x = event.clientX;
  let y = event.clientY;

  /*  changeRight side */
  p1.style.right = item1 - x / 200 + "px";
  p2.style.right = item2 + x / 200 + "px";
  p3.style.right = item3 - x / 60 + "px";
  p3_s.style.right = item3_s - x / 60 + "px";
  p4.style.right = item4 + x / 300 + "px";
  /* Get Top from Attribute and change Top side */
  p1.style.top = parseInt(p1.getAttribute("top")) + y / 250 + "px";
  p2.style.top = parseInt(p2.getAttribute("top")) + y / 210 + "px";
  p3.style.top = parseInt(p3.getAttribute("top")) - y / 30 + "px";
  p3_s.style.top = parseInt(p3_s.getAttribute("top")) + y / 45 + "px";
  p4.style.top = parseInt(p4.getAttribute("top")) + y / 190 + "px";
});

//console.log(`%c ${item1}`, "color:red");
