var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });


  //render 



  async function getBook(){

    let response  = await fetch("http://127.0.0.1:5000/home")
    let books = await response.json()
    console.log(books) 
     
    
   for (let i=0 ; i<=books.BOOKS.length ; i++){
  //  document.getElementById("render").innerHTML += ` <div id="render"><p class="bookname">${books.BOOKS[i].book_name}</p> </div>`
    document.getElementById("row").innerHTML += 
    `    
      
    <div class="col-md-3">
    <div class="books">
    <img src="images/summer.JPG" alt="book" class="img-fluid" style="width: 60px;height: 100px; ">
    <p class="bookname">${books.BOOKS[i].book_name}</p>
    <p class="bookname">${books.BOOKS[i].book_title}</p>
     

       </div>
           </div>
             </div>
    `    
   }
 
 
 }
 
 getBook();