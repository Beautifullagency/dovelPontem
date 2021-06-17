$("#owl1").owlCarousel({
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000, 
    items: 1, 
    loop: true,
    autoHeight: false,
    responsiveClass: true,
    responsive: {
      0: {
        margin: 10,
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        margin: 10,
        items: 1,
        nav: false,
        dots: false,
      },
      1024: {
        margin: 60,
        items: 1,
        nav: true,  
        loop: false,
        dots: true,
      },
    },
  });

  $("#owl2").owlCarousel({
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000, 
    autoHeight: false,
    responsiveClass: true,    
    loop: false,
    responsive: {
      0: {
        margin: 10,
        items: 1,
        nav: true,
        dots: true,
      },
      600: {
        margin: 10,
        items: 2,
        nav: true,
        dots: true,
      },
      1024: {
        margin: 10,
        items: 2,
        nav: true,  
        dots: true,
      },
    },
  });





  /*Form de cv */
if (document.querySelector('#file')) {
  document.querySelector('#file').addEventListener('change', function(e) {
    var boxFile = document.querySelector('.boxFile');
    boxFile.classList.remove('attached');
    boxFile.innerHTML = boxFile.getAttribute("data-text");
    if(this.value != '') {
      var allowedExtensions = /(\.pdf|\.docx)$/i;
      if(allowedExtensions.exec(this.value)) {
        boxFile.innerHTML = e.target.files[0].name;
        console.log(e.target.files[0].name)
        boxFile.classList.add('attached');
      } else {
        this.value = '';
        alert('El archivo que intentas subir no está permitido.\nLos archivos permitidos son pdf o documentos Word');
        boxFile.classList.remove('attached');
      }
    }
  });
}

grecaptcha.ready(function() {
  grecaptcha.execute( '6LfQTrYaAAAAADQRiPh0EcANjnWETd3qXDh3YFIW', {action: 'homepage'}).then(function(token) {
      // Add your logic to submit to your backend server here.
      $('#google-response').val(token)
  });
});










const item = document.querySelectorAll('#item')
const itemPane = document.querySelectorAll('#item-pane')


for (let i = 1; i < 7; i++) {
  $(`#item${i}`).hover(
    function() {
      $(`#item-pane${i}`).animate({'height':'100%'},600)
      $(`#item-pane${i}`).css('visibility','visible')
    },
    function() {
      $(`#item-pane${i}`).animate({'height':'0%'}, 600)
      $(`#item-pane${i}`).animate({'visibility':'collapse'},700)
    }
  )
  
}

const ratings = {
  review1 : 4.5,
  review2 : 5,
  review3 : 5,
};

//total number of stars
const starTotal = 5;

for(const rating in ratings) {  
  const starPercentage = (ratings[rating] / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 
}