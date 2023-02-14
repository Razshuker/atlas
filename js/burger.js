// ב HTML
// צריך לשים איי די גם לאייקון של הבורגר
// וגם לנאב עצמו


function declareBtns() {
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");
  nav_open.innerHTML += `<div id="close_btn" class="d-lg-none">&times
  </div>`;
  burger_btn.addEventListener("click", function () {
    nav_open.style.display = "flex";
    burger_btn.style.display = "none";
    nav_open.classList.toggle('visible');

  })
  let close_light_btn = document.querySelector("#close_btn");
  close_light_btn.addEventListener("click", function () {
    nav_open.style.display = "none";
    burger_btn.style.display = "block";
    nav_open.classList.toggle('visible');


  })
}

declareBtns();
