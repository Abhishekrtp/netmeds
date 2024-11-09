const fabookmedical = document.querySelectorAll(".fa-book-medical-1");
const fabookmedical2 = document.querySelectorAll(".fa-book-medical-2");
const fabookmedical3 = document.querySelectorAll(".fa-book-medical-3");
const fabookmedical4 = document.querySelectorAll(".fa-book-medical-4");
const fabookmedical5 = document.querySelectorAll(".fa-book-medical-5");


const navitem = document.querySelectorAll(".nav-item");
const hideitem = document.querySelectorAll(".hide-item");
const hideitem2 = document.querySelectorAll(".hide-item-2");
const hideitem3 = document.querySelectorAll(".hide-item-3");
const hideitem4 = document.querySelectorAll(".hide-item-4");
const hideitem5 = document.querySelectorAll(".hide-item-5");
const unhideitem = document.querySelector('.unhide-item');

const heroitem = document.querySelector(".container-hero");





fabookmedical.forEach((fabookmedical) => {
  fabookmedical.addEventListener("mouseover", () => {
    fabookmedical.classList.toggle("fa-book-medical-1");
    fabookmedical.classList.toggle("fa-book-medical-1");
    hideitem.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  });

  fabookmedical.addEventListener("mouseout", () =>{
    hideitem.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  })
  
})


fabookmedical2.forEach((fabookmedical2) => {
  fabookmedical2.addEventListener("mouseover", () => {
    fabookmedical2.classList.toggle("fa-book-medical-2");
    fabookmedical2.classList.toggle("fa-book-medical-2");
    hideitem2.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  });

  fabookmedical2.addEventListener("mouseout", () =>{
    hideitem2.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  })
})

fabookmedical3.forEach((fabookmedical3) => {  
  fabookmedical3.addEventListener("mouseover", () => {
    fabookmedical3.classList.toggle("fa-book-medical-3");
    fabookmedical3.classList.toggle("fa-book-medical-3");
    hideitem3.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");  
      hideitem.classList.toggle("unhide-item");
    });
  });

  fabookmedical3.addEventListener("mouseout", () =>{
    hideitem3.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  })
})


fabookmedical4.forEach((fabookmedical4) => {
  fabookmedical4.addEventListener("mouseover", () => {
    fabookmedical4.classList.toggle("fa-book-medical-4");
    fabookmedical4.classList.toggle("fa-book-medical-4");
    hideitem4.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  });

  fabookmedical4.addEventListener("mouseout", () =>{
    hideitem4.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  })
})


fabookmedical5.forEach((fabookmedical5) => {
  fabookmedical5.addEventListener("mouseover", () => {
    fabookmedical5.classList.toggle("fa-book-medical-5");
    fabookmedical5.classList.toggle("fa-book-medical-5");  
    hideitem5.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  });

  fabookmedical5.addEventListener("mouseout", () =>{
    hideitem5.forEach((hideitem) => {
      hideitem.classList.toggle("hidden");
      hideitem.classList.toggle("unhide-item");
    });
  })
    })



    heroitem.addEventListener("click", () => {
      href = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public";
      window.open(href, "_blank");
    })




    const Name = document.querySelector("#name");
    const number = document.querySelector("#number");
    const city = document.querySelector("#city");
    const pincode = document.querySelector("#pincode");
    const booknow = document.querySelector(".book-now-1");

    booknow.addEventListener("click", () => {
      if (Name.value == "" || number.value == "" || city.value == "" || pincode.value == "") {
        alert("Please fill all the details");
      }
      else {
        alert("Booking confirmed");
      }
    })



    const cart = document.querySelector(".cart");
    cart.addEventListener("click", () => {
      window.location.href = "https://www.netmeds.com/checkout/cart";
      
    })


    const signup = document.querySelector(".signup");
    signup.addEventListener("click", () => {
      window.location.href = "https://www.netmeds.com/signup";
    })


    const offers = document.querySelector(".offers");
    offers.addEventListener("click", () => {
      window.location.href = "https://www.netmeds.com/offers";
    })

    const btmlast =document.querySelector(".btm-last");
    btmlast.addEventListener("click", () => {
      window.location.href = "https://www.netmeds.com/";
    })