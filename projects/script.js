
// Loop for generating our button design with a new "a href" element with a classname of "knapp"

// var x = document.getElementsByClassName("knapp");
// var i;
// for (i = 0; i < x.length; i++) {
//   var knapptxt = x[i].textContent; x[i].innerHTML='<svg id="knapp" class="knappsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 60"><path id="skugga" class="skugga" d="M234 10h8v48H10v-7.9"/><path id="rektangel" class="rektangel" d="M2 2h232v48H2z"/><path id="rektangelhover" class="rektangelhover" d="M2 2h232v48H2z"/><path id="pil" class="pil" d="M198.5 26.9h8.2v-2l2 2-2 2v-2"/><text class="txt">'+ knapptxt +'</text></svg>'
//
//   ;}


  // below will be script for lookbook. Still under development


  $(function() {
    $(".lookbook").click(function(e) {
      let current = $(this);
      let hideButton = document.querySelector("#lookbookbtn");
      $(this).toggleClass("lookbook_clicked");
      $(this).siblings().toggleClass("lookbook_opacity");
      $('#lookbookbtn').css("opacity", "0");
    });

  });

  let learnMore = document.getElementById('learnMore');
  let wrapAll = document.querySelector('.wrapall')
  let section2 = document.querySelector('.section_2')
  let section3 = document.querySelector('.section_3')
  learnMore.addEventListener('click', function() {
      let heightValue = window.innerWidth
      if (window.innerWidth >= 1024) {
        section3.scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      } else {
        section2.scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      }


  })



  //The following is under development script for the slideshow


  // Symbols page


  let organicLast =
  document.getElementById('symbols_wrap_organic').lastElementChild;

  let organicText = 'Ekologisk bomull tillverkad av fibrer odlade utan miljöfarliga syntetiska kemikalier (bekämpningsmedel, gödningsmedel, växttillväxt-regulatorer). Fairtrade-certifiering gör det möjligt för småskaliga bomullsbönder i utvecklingsländer att förbättra sina jordbruksföretag och deras samhällsliv.';

  $('.symbol').click(function() {
    let dashWrapLast = document.querySelectorAll('.dashwrap');
    let symbolsText = document.querySelector('.symbols_text_organic');
    let symbolsIngress = document.querySelector('.symbols_ingress');

    let organicIngress = 'ALLA VÅRA KLÄDER ÄR EKOLOGISKA!';
    let qualityIngress = 'ALLA VÅRA KLÄDER HÅLLER HÖG STANDARD!';
    let fairIngress = 'ALLA VÅRA KLÄDER ÄR RÄTTVISA!';
    let veganIngress = 'ALLA VÅRA KLÄDER ÄR VEGANSKA!';

    let organicText = 'Ekologisk bomull tillverkad av fibrer odlade utan miljöfarliga syntetiska kemikalier (bekämpningsmedel, gödningsmedel, växttillväxtregulatorer). Fairtrade-certifiering gör det möjligt för småskaliga bomullsbönder i utvecklingsländer att förbättra sina jordbruksföretag och deras samhällsliv.';

    let qualityText = 'Hos oss handlar du hållbara plagg med kvalité. Vi har höga krav på god passform och hållbara produkter. Du kan gå rakryggad och stolt i våra plagg, inte bara för att du gör samhället en tjänst, utan också för att du ser galet snygg ut!';

    let fairText = 'Produkterna vi säljer är rättvist och etiskt producerade från liten fiber till färdigt plagg. Det innebär att dem som tillverkat kläderna har haft rätt till bra arbetstider och levnadslöner fria från slavkontrakt. Mode utan förlorare.';

    let veganText = 'Våra produkter är fria från läder, päls, ull och dun. Vi har dessutom nolltollerans mot att produkterna vi säljer tas fram med hjälp av djurförsök. För oss är det viktigt att du kan bära kläder med gott samvete och samtidigt bidra till en rättvis behandling av djur. Inga djur ska behöva lida för vårt behov att vara fashionabla!';

    if ($(this).hasClass('symbol_organic')) {

      symbolsIngress.style.opacity = '0';
      symbolsText.style.opacity = '0';
      setTimeout(function() {
        symbolsIngress.innerText = organicIngress;
        symbolsText.innerText = organicText;
        symbolsText.style.opacity = '1';
        symbolsIngress.style.opacity = '1';
      }, 500);
    }

    if ($(this).hasClass('symbol_quality')) {
      symbolsText.style.opacity = '0';
      symbolsIngress.style.opacity = '0';
      setTimeout(function() {
        symbolsIngress.innerText = qualityIngress;
        symbolsText.innerText = qualityText;
        symbolsText.style.opacity = '1';
        symbolsIngress.style.opacity = '1';
      }, 500);
    }

    if ($(this).hasClass('symbol_fair')) {
      symbolsText.style.opacity = '0';
      symbolsIngress.style.opacity = '0';
      setTimeout(function() {
        symbolsIngress.innerText = fairIngress;
        symbolsText.innerText = fairText;
        symbolsText.style.opacity = '1';
        symbolsIngress.style.opacity = '1';
      }, 500);
    }
    if ($(this).hasClass('symbol_vegan')) {
      symbolsText.style.opacity = '0';
      symbolsIngress.style.opacity = '0';
      setTimeout(function() {
        symbolsIngress.innerText = veganIngress;
        symbolsText.innerText = veganText;
        symbolsText.style.opacity = '1';
        symbolsIngress.style.opacity = '1';
      }, 500);
    }


      // Symbol and dashes script
    if (!$(this).hasClass('symbol_clicked')) {
      $(this).addClass('symbol_clicked');
      $('.symbol').not(this).removeClass('symbol_clicked');

    }

    $('.textdashmobile').removeClass('textdash_show');
    $('.symbol').removeClass('.textdash_show');
    $('.symbol').removeClass('.symbol_clicked');
    $('.symbols_dashes_webb').removeClass('webbdash_show');

    $(this).addClass('.symbol_clicked');
    let index = $(".symbol").index(this);

    let webbDash = $(".symbols_dashes_webb")[index];
    let mobileDash = $(".textdashmobile")[index];

    webbDash.classList.add('webbdash_show');
    mobileDash.classList.add('textdash_show');

  });

  //CHANGE COLOR OF FRAME LOGOS----------------------!







let stopMe = false;
  window.addEventListener("scroll",function() {
    let frameContainer = document.getElementsByClassName('.framebox').innerHTML;
    let createFrame = document.createElement('div');


    let secOne = document.querySelector('.section_1').getBoundingClientRect().y;
    let secTwo = document.querySelector('.section_2').getBoundingClientRect().y;
    let secThree = document.querySelector('.section_3').getBoundingClientRect().y;
    let secFour = document.querySelector('.section_4').getBoundingClientRect().y;
    let secFive = document.querySelector('.section_5').getBoundingClientRect().y;
    let secSix = document.querySelector('.section_6').getBoundingClientRect().y;
    let secSeven = document.querySelector('.section_7').getBoundingClientRect().y;
    let secNine = document.querySelector('.section_9').getBoundingClientRect().y;
    let secTen = document.querySelector('.section_10').getBoundingClientRect().y;

    let frameLogo = document.querySelectorAll('.logotext');
    let frameDash = document.querySelectorAll('.logodash');

      for (frameLogo of frameLogo){

        if (secOne <= 5) {
          document.querySelector('.framebox').style.cssText = ("opacity: 1;")
          frameLogo.style.color = "white";

          for (frames of frameDash) {
            frames.style.backgroundColor = "#76C8A8";
          }

        }
         if (secTwo <= 200) {
           document.querySelector('.framebox').style.cssText = ("opacity: 0.5;")
           frameLogo.style.color = "black";

           for (frames of frameDash) {
             frames.style.backgroundColor = "black";
           }


        }
      //
        if (secThree <= 20 && window.innerWidth < 400) {

          for (frames of frameDash) {
            frames.style.backgroundColor = "white";
          }
        frameLogo.style.color = "white";
        frameLogo.style.opacity = "0.5";

        }
      //
      //
        if (secFour <= 150) {
          for (frames of frameDash) {
            frames.style.backgroundColor = "white";
            }
        frameLogo.style.color = "white";


        }
        if (secFive <= 20 && window.innerWidth <= 400) {
        document.querySelector('.logobottom').style.opacity = "0";
        frameLogo.style.color = "white";
        for (frames of frameDash) {
          frames.style.backgroundColor = "white";

        }
       }
      // }
      //   if (secSix <= 40 && window.innerWidth <= 400 ) {
      //   frameLogo.style.color = "white";
      //   document.querySelector('.logobottom').style.opacity = "0";
      // }
        if (secSeven <= 40) {
          for (frames of frameDash) {
            frames.style.backgroundColor = "black";

          }
        frameLogo.style.color = "black";
        frameLogo.style.opacity = "0.5";

      } else if (secSeven <= 40){
        frameLogo.style.color = "black";

      }
        if (secNine <= 40) {
        frameLogo.style.color = "white";
        document.querySelector('.logobottom').style.opacity = "0.5";
        for (frames of frameDash) {
          frames.style.backgroundColor = "white";
        }
      }
        if (secTen <= 20  ) {
        frameLogo.style.color = "white";
        document.querySelector('.logobottom').style.display = "none";
        for (frames of frameDash) {
          frames.style.backgroundColor = "white";
        }
      }

    }
      // INFOGRAPHICS ANIMATIONS //

    //--------------Percentage Counter for piechart ----------//
        function animatePercentage(id, start, end, duration) {

            let range = end - start;
            let current = start;
            let increment = end > start? 1 : -1;
            let stepTime = Math.abs(Math.floor(duration / range) * 2);
            let obj = document.getElementById('percentage');
            let timer = setInterval(function() {
                current += increment;

                obj.innerHTML = current + '%';
              if (current == end) {
                console.log('hej');
                  clearInterval(timer);
              }
            }, stepTime);
        }

        let pieChart = document.querySelector('circle');
        if (secSix <= 40 && stopMe == false) {
          pieChart.classList.add('circletrig');
          animatePercentage("value", 0, 98, 1500);
          stopMe = true;
          console.log('stopMe');
        }

      });
//INFO PAGE 2 animations
    let infoWrap = document.querySelector('.infographics_wrap');
        let secSix = document.querySelector('.section_6');

        infoWrap.addEventListener("scroll", () => {

          function animatePercentage(id, start, end, duration) {

              let range = end - start;
              let current = start;
              let increment = end > start? 1 : -1;
              let stepTime = Math.abs(Math.floor(duration / range) * 2);
              let obj = document.getElementById('tons');
              let timer = setInterval(function() {
                  current += increment;

                  obj.innerHTML = '&nbsp;' + current + '.000 TON&nbsp;+ ';
                if (current == end) {
                  console.log('hej');
                    clearInterval(timer);
                }
              }, stepTime);
          }

               let infoTwo = $('.infographics_2');
                let xPosOffset = $('.slide_two').offset();
                console.log(xPosOffset['left']);
                if (xPosOffset['left'] == 0  ) {
                  infoTwo.css("opacity", "1");
                  animatePercentage("value", 0, 50, 1300);
                  stopMe = true;
                }

let infoThree = $('.infographics_3');

  let xPosOffset_three = $('.slide_three').offset();
      if (xPosOffset_three['left'] == 0) {
        setTimeout(function() {
          infoThree.css("opacity", "1");

        }, 200);

      }
  console.log(xPosOffset_three['left']);
        });





//INFOGRAPHICS BUTTONS
let infoRight = document.getElementById('info-btn_right');
$('#info-btn_right, #info-btn_left').click(function() {

  let secSix = document.querySelector('.section_6');
  let infoSlideWidth = document.querySelector('.infographics_wrap');
  let widthValue = window.innerWidth;

  if ($(this).is("#info-btn_right")) {
    infoSlideWidth.scrollBy(widthValue, 0);

  } else if ($(this).is("#info-btn_left")) {
    infoSlideWidth.scrollBy(-widthValue, 0);
  }

  });

  //GOTS BUTTONS SLIDER

$('#gots-btn_swipe_left, #gots-btn_swipe_right, #gots-btn_swipe_left_webb').click(function() {
  let secSix = document.querySelector('.section_6');
  let gotsSlideWidth = document.querySelector('.navigationwrap');
  let widthValue = window.innerWidth;
  if ($(this).is("#gots-btn_swipe_left") && window.innerWidth <= 400) {
    gotsSlideWidth.scrollBy(widthValue, 0);
  } else {
    gotsSlideWidth.scrollBy(-widthValue, 0);
  }

  if ($(this).is("#gots-btn_swipe_right")) {
    gotsSlideWidth.scrollBy(widthValue, 0);
  }



});
let gotsSlideWidth = document.querySelector('.navigationwrap');
let navText = $('.navigationtext');

  gotsSlideWidth.addEventListener("scroll", () => {
let slideOneOffset = document.querySelector('.test1').getBoundingClientRect().x;
let slideTwoOffset = document.querySelector('.test2').getBoundingClientRect().x;
let slideThreeOffset = document.querySelector('.test3').getBoundingClientRect().x;
let slideFourOffset = document.querySelector('.test4').getBoundingClientRect().x;
  if (slideOneOffset >= 0) {
    $('.odling').css("color", "#76C8A8").css("transform", "scale(1)");
    $('.produktion').css("color", "#76C8A8").css("transform", "scale(1)");
    $('.frakt').css("color", "#76C8A8").css("transform", "scale(1)");
    $('.gots').css("color", "white").css("transform", "scale(1.15)");

  }
  if (slideTwoOffset <= 0 || slideTwoOffset <= 5) {
      $('.gots').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.produktion').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.frakt').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.odling').css("color", "white").css("transform", "scale(1.15)");
  }
  if (slideThreeOffset <= 40 ) {
      $('.odling').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.gots').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.frakt').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.produktion').css("color", "white").css("transform", "scale(1.15)");
  }
  if (slideFourOffset <= 40 ) {
      $('.odling').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.gots').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.produktion').css("color", "#76C8A8").css("transform", "scale(1)");
      $('.frakt').css("color", "white").css("transform", "scale(1.15)");
  }




});

// iframe

let pageUpper = document.getElementById('mapbtn');
let pageUpID = document.getElementById('pageUpID');
pageUpper.addEventListener("click", () => {


let iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1280.2062175076567!2d11.959069275677681!3d57.699417852255465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3696b4ac0dd%3A0xe221bc4cd32ce0a2!2sTHRIVE+-+Conscious+Fashion!5e0!3m2!1sen!2sse!4v1511388690548" width="100%" height="450px" frameborder="0" style="border:0" allowfullscreen></iframe>';
pageUpper.style.opacity = "0";
setTimeout(function() {
  pageUpID.innerHTML = iframe;
  pageUpper.style.display = "none";
  pageUpID.style.opacity = "1";
}, 400);



//thrivelogo
let triangle = document.querySelector('.trianglepath');

setTimeout(function() {
  triangle.classList.add('trianglepath_trig');

}, 1400);
console.log(triangle.getTotalLength());
});
