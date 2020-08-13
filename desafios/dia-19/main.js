const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");
const img3 = document.querySelector(".img-3");
const img4 = document.querySelector(".img-4");
const img5 = document.querySelector(".img-5");

document.addEventListener("mousemove", (e) => {
  img1.setAttribute(
    `style`,
    `top : ${e.pageY - 225}px; left:${e.pageX - 200}px`
  );
  img2.setAttribute(
    `style`,
    `top : ${e.pageY - 225}px; left:${e.pageX - 200}px`
  );
  img3.setAttribute(
    `style`,
    `top : ${e.pageY - 225}px; left:${e.pageX - 200}px`
  );
  img4.setAttribute(
    `style`,
    `top : ${e.pageY - 225}px; left:${e.pageX - 200}px`
  );
  img5.setAttribute(
    `style`,
    `top : ${e.pageY - 225}px; left:${e.pageX - 200}px`
  );
});
