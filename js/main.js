$(document).ready(function(){



    new Swiper(".mainSwiper", {
        direction: "vertical",
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 0,
        mousewheel: true,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        on: {
            slideChange: function () {
              
            }
          }
      });
      


    //메인페이지 페이지네이션 이미지 추가
    const pagination = document.querySelector('.main-wrap .swiper-pagination .swiper-pagination-current');
    let paginationSlice = document.querySelector('.main-wrap .swiper-pagination').innerText
    console.log(paginationSlice); 
    // console.log(document.querySelector('.main-wrap .swiper-pagination').innerText.split("\n")[1]);
    let paginationLine = document.createElement('span')
    paginationLine.innerHTML = '<img src="../img/icon/icon-pagination-line.svg" alt="image"/>'
    pagination.after(paginationLine);



})