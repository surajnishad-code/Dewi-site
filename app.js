const playBtn = document.getElementById("playVideo");
const videoBox = document.getElementById("videoBox");
const ytVideo = document.getElementById("ytVideo");

playBtn.addEventListener("click", () => {
    videoBox.style.display = "flex";
    ytVideo.src = "https://www.youtube.com/embed/Y7f98aduVJ8?autoplay=1";
});

videoBox.addEventListener("click", () => {
    videoBox.style.display = "none";
    ytVideo.src = ""; // stops video
});

let imgBtn = document.getElementById("img-play");
let backimg = document.getElementById("img-vid");
let imgvid = document.getElementById("play-img-vid");

imgBtn.addEventListener("click", () =>{
    backimg.style.display = "flex";
    imgvid.src = "https://www.youtube.com/embed/Y7f98aduVJ8?autoplay=1";
});
backimg.addEventListener("click", () =>{
    backimg.style.display = "none";
    imgvid.src = "";
})

let counters = document.querySelectorAll(".counter-num");

let options = () => {
    threshold = 0.5;
}

let updateCount = (Event) => {
    const count = Event.target;
    let target = +count.dataset.target;
    let counter = 0;

    let speed = 200;
    let incre = target / speed;

    let countup = () => {
        counter += incre;
        if (counter < target) {
            count.innerText = Math.ceil(counter);
            requestAnimationFrame(countup);
        } else {
            count.innerText = target;
        }
    }
    countup();
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            updateCount(entry);
            observer.unobserve(entry.target);
        }
    })
}, options);

counters.forEach((counteer) => {
    observer.observe(counteer);
});

let boxe = document.querySelectorAll(".boxe");

let box1 = document.getElementById("fir-box");
let box2 = document.getElementById("sec-box");
let box3 = document.getElementById("third-box");
let box4 = document.getElementById("four-box");


boxe.forEach((box) => {
    box.addEventListener("click", function () {
        boxe.forEach((bx) => {
            bx.classList.remove("activ");
        })
        box.classList.add("activ");
        if (box.classList.contains("fir-box")) {
            box1.style.display = "flex";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "none";
        } else if (box.classList.contains("sec-box")) {
            box1.style.display = "none";
            box2.style.display = "flex";
            box3.style.display = "none";
            box4.style.display = "none";
        } else if (box.classList.contains("third-box")) {
            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "flex";
            box4.style.display = "none";
        } else if (box.classList.contains("four-box")) {
            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
            box4.style.display = "flex";
        }
    })
})

let track = document.querySelector(".review-track");
let dots = document.querySelectorAll(".dote");

let index = 0;

let showSlide = (i) =>{
  index = i;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) =>{
    dot.classList.remove("activee");
  });
  dots[index].classList.add("activee");
}

dots.forEach((dot, i) =>{
    dot.addEventListener("click", () =>{
        showSlide(i);
    })
})

setInterval(() => {
    index = (index + 1) % dots.length;
    showSlide(index);
  }, 4000);


  let abtn = document.querySelectorAll(".btn");
  let all = document.getElementById("all");
  let app = document.getElementById("app");
  let prod = document.getElementById("prod");
  let brand = document.getElementById("brand");
  let book = document.getElementById("book");

  let c_app = document.querySelectorAll(".app");
  let c_prod = document.querySelectorAll(".prod");
  let c_brand = document.querySelectorAll(".brand");
  let c_book = document.querySelectorAll(".book");

  let row_box = document.querySelectorAll(".row-box");
  let sec9 = document.getElementById("sec9-2-2");


  app.addEventListener("click", () =>{
       abtn.forEach((btn) =>{
        btn.classList.remove("all");
       })
       app.classList.add("all");
       row_box.forEach((row) =>{
        row.style.display = "none";
       });
       c_app.forEach((app) =>{
        app.style.display = "block";
       })
       sec9.style.flexDirection = "row";
       row_box.forEach((rew) =>{
        rew.style.width = "100%";
       })
  });


  prod.addEventListener("click", () =>{
       abtn.forEach((btn) =>{
        btn.classList.remove("all");
       })
       prod.classList.add("all");
       row_box.forEach((row) =>{
        row.style.display = "none";
       });
       c_prod.forEach((app) =>{
        app.style.display = "block";
       })
       sec9.style.flexDirection = "row";
       row_box.forEach((rew) =>{
        rew.style.width = "100%";
       })
  });


  brand.addEventListener("click", () =>{
       abtn.forEach((btn) =>{
        btn.classList.remove("all");
       })
       brand.classList.add("all");
       row_box.forEach((row) =>{
        row.style.display = "none";
       });
       c_brand.forEach((app) =>{
        app.style.display = "block";
       })
       sec9.style.flexDirection = "row";
       row_box.forEach((rew) =>{
        rew.style.width = "100%";
       })
  });


  book.addEventListener("click", () =>{
       abtn.forEach((btn) =>{
        btn.classList.remove("all");
       })
       book.classList.add("all");
       row_box.forEach((row) =>{
        row.style.display = "none";
       });
       c_book.forEach((app) =>{
        app.style.display = "block";
       })
       sec9.style.flexDirection = "row";
       row_box.forEach((rew) =>{
        rew.style.width = "100%";
       })
  });

  all.addEventListener("click", ()=>{
    abtn.forEach((btn) =>{
        btn.classList.remove("all");
       })
       all.classList.add("all");
    row_box.forEach((row) =>{
        row.style.display = "flex";
        row.style.width = "32%";
    })
     sec9.style.flexDirection = "column";
  })