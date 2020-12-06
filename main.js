$(document).ready(function () {
    //Change the style of the navbar button
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
    //On hover change words
    var specialWords = document.getElementsByClassName("hoverWord");
    for(let word of specialWords){
        word.addEventListener('mouseenter', function(){
            this.innerHTML = this.getAttribute('data-words').split("|")[1];
        });
        word.addEventListener('mouseleave', function(){
            this.innerHTML = this.getAttribute('data-words').split("|")[0];
        });
    }
  });


  
  