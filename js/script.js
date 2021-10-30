$(document).ready(function() {
    $('.sc-01').click(function(event) {
            $('.cs-01').toggleClass('active');
    });

    $('.sc-02').click(function(event) {
        $('.cs-02').toggleClass('active');
    });

    $('.sc-03').click(function(event) {
        $('.cs-03').toggleClass('active');
    });

    $('.popup__hide,.popup__close').click(function(event) {
        $('.popup').removeClass('hide');
        $('body').removeClass('hide');
    });

    $('.shop__body-item').click(function(event) {
        $('.popup').addClass('hide');
        $('body').addClass('hide');
    });

});




$(document).ready(function() {
    $('.shop__header-btn ').click(function(event) {
        if (checkMen.checked) {
            $('.shop__body-men').removeClass('hide');
         } else 
        { 
            $('.shop__body-men').addClass('hide');


    }

        if (checkWomen.checked) {
            $('.shop__body-women').removeClass('hide');
        } else 
    { 
        $('.shop__body-women').addClass('hide');
    }

        if (checkChildren.checked) {
            $('.shop__body-children').removeClass('hide');
        } else 
        { 
        $('.shop__body-children').addClass('hide');
        }



    });


});

// input + - в карточке товара
document.addEventListener('click', function (e) {
    if (e.target.classList.contains("pcb+")) {
      ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("pcb-")) {

      --e.target.parentElement.querySelector("input").value;
      $('.pcb-').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    }
    
  })

document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider-01', {
      loop: false
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider-02', {
      loop: false
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider-03', {
      loop: false
    });
  });

  var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
