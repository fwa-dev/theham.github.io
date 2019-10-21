$(document).ready(function () {
  // services navbar section
  $('.services-navbar-item').click(function () {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
      .closest('.services-section')
      .find('.services-description')
      .removeClass('active')
      .eq($(this).index())
      .addClass('active');
  });

  // work menu section
  $('.work-menu-item').click(function () {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  $('.work-menu-item').click(function () {
    let category = $(this).attr('data-target');

    $('.work-gallery-item').addClass('hide');
    setTimeout(function () {
      $(`.${category}`).removeClass('hide');
    }, 600);
  });

  // gallery section
  $('.loader').hide();
  $('.work-gallery-item').hide();
  $('.work-gallery-item').slice(0, 12).show();
  $('.load-more-btn').click(function () {
    $('.loader').show();
    setTimeout(() => {
      $('.work-gallery-item:hidden').slice(0, 12).show();
      if (!$('.work-gallery-item').is(':hidden')) {
        $(this).hide();
      }
      $('.loader').hide();
    }, 2000);
  });

  // news section
  $('.news-gallery-item').hover(
    function () {
      $(this).siblings().addClass('gray')
    },
    function () {
      $(this).siblings().removeClass('gray')
    }
  );

  // slider
  $('.review-text').hide().first().show();
  $('.client-name').hide().first().show();
  $('.client-profession').hide().first().show();
  $('.main-image').hide().first().show();

  let autoSlideID = slideAuto(3000);

  $('.stripe-img').on('click', function () {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');

    changeInfo();
    clearInterval(autoSlideID);
    autoSlideID = slideAuto(10000);
  });

  $('.slider-arrow').on('click', function () {
    if ($(this).hasClass('left')) {
      const activeIndex = $('.stripe-img.active').index();
      const newIndex = (activeIndex === 0) ? 3 : activeIndex - 1;

      $(`.stripe-img:eq(${newIndex})`)
        .addClass('active')
        .siblings()
        .removeClass('active');

      changeInfo();
      clearInterval(autoSlideID);
      autoSlideID = slideAuto(10000);
    }
    if ($(this).hasClass('rigth')) {
      const activeIndex = $('.stripe-img.active').index();
      const newIndex = (activeIndex === 3) ? 0 : activeIndex + 1;

      $(`.stripe-img:eq(${newIndex})`)
        .addClass('active')
        .siblings()
        .removeClass('active');

      changeInfo();
      clearInterval(autoSlideID);
      autoSlideID = slideAuto(10000);
    }
  });

  function slideAuto(interval) {
    return setInterval(function () {
      const activeIndex = $('.stripe-img.active').index();
      const newIndex = (activeIndex === 3) ? 0 : activeIndex + 1;

      $(`.stripe-img:eq(${newIndex})`)
        .addClass('active')
        .siblings()
        .removeClass('active');

      changeInfo();
    }, interval);
  }

  function changeInfo() {
    const activeIndex = $('.stripe-img.active').index();

    $(`.review-text:eq(${activeIndex})`)
      .fadeIn(1600)
      .siblings('.review-text')
      .hide();
    $(`.client-name:eq(${activeIndex})`)
      .fadeIn(1200)
      .siblings('.client-name')
      .hide();
    $(`.client-profession:eq(${activeIndex})`)
      .fadeIn(800)
      .siblings('.client-profession')
      .hide();
    $(`.main-image:eq(${activeIndex})`)
      .fadeIn(400)
      .siblings('.main-image')
      .hide();
  }
});