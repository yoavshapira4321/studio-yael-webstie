
const imageWrappers = document.querySelectorAll(".image-wrapper");
const fullWidthLabel = document.getElementById("fullWidthLabel");
const closeLabel = document.getElementById("closeLabel");
const pageOverlay = document.getElementById("pageOverlay");
const labelImage = document.getElementById("labelImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const pagination = document.getElementById("pagination");
const totalPages = imageWrappers.length - 1;
let index = 1;

document.addEventListener("DOMContentLoaded", function () {
  imageWrappers.forEach((wrapper, i) => {
    wrapper.addEventListener("click", function () {
      index = i;
      const clickedImage = wrapper.querySelector("img");
      labelImage.src = clickedImage.src;
      labelImage.alt = clickedImage.alt;
      fullWidthLabel.classList.add("visible");
      pageOverlay.classList.remove("hidden");
      updatePagination();
    });
  });

  prevButton.addEventListener("click", function () {
    if (index === 1) {
      index = imageWrappers.length - 1;
    } else {
      index--;
    }
    const clickedImage = imageWrappers[index].querySelector("img");
    labelImage.src = clickedImage.src;
    labelImage.alt = clickedImage.alt;
    updatePagination();
  });

  nextButton.addEventListener("click", function () {
    if (index === imageWrappers.length - 1) {
    index = 1;
    } else {
    index++;
    }
    const clickedImage = imageWrappers[index].querySelector("img");
    labelImage.src = clickedImage.src;
    labelImage.alt = clickedImage.alt;
    updatePagination();
    
  });

  closeLabel.addEventListener("click", function () {
    fullWidthLabel.classList.remove("visible");
    pageOverlay.classList.add("hidden");
    updatePagination();
  });
});


function updatePagination() {
  pagination.innerHTML = "";
  let firstPage = index - 2;
  let lastPage = index + 2;
  

  for (let i = firstPage; i <= lastPage; i++) {

    let seirial_number = i
    
    if (i > totalPages){
      seirial_number = i - totalPages
    } else if (i < 1){
      seirial_number = totalPages + i
    }
    let pageHtml = `<div class="page">${seirial_number}</div>`;
    
    if (i === index) {
      pageHtml = `<div class="page active-pagination">${index}</div>`;
    }
    pagination.innerHTML += pageHtml;
  } 
  const clickedImage = imageWrappers[index].querySelector("img");
  labelImage.src = clickedImage.src;
  labelImage.alt = clickedImage.alt;

}
updatePagination();


pagination.addEventListener("click", function (event) {
  if (event.target.classList.contains("page")) {
    index = parseInt(event.target.textContent);
    updatePagination();
  }
});

