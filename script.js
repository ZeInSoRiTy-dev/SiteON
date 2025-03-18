const containers = document.querySelectorAll(".container");
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];



containers.forEach((item, i) => {


  let containerDimensions = item.getBoundingClientRect();

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerDimensions.width;
  })
  preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerDimensions.width;
  })
})