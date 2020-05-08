$(function () {

  _initAnimateEvents()

  // animation events
  function _initAnimateEvents() {

    // common keyframe animation
    $('.animate-list')
      .find('.animate-wrapper')
      .on('mouseenter', function (e) {
        e.stopPropagation()
        var animate = $(this).attr('data-animate')
        $(this).find('img').addClass(animate)
      })
      .on('mouseleave', function (e) {
        var animate = $(this).attr('data-animate')
        $(this).find('img').removeClass(animate)
      })

    // ladder
    if ($('.animate-ladder')[0]) {
      $(window).scroll(function() {
        const scrollTop = $(this).scrollTop()
        const winH = $(window).height()
        const listTop = $('.animate-ladder').offset().top
        const list = $('.animate-ladder').find('.list-inner')
        if (scrollTop + winH > listTop) {
          for (let i = 0; i < list.length; i++) {
            const topDis = $(list[i]).offset().top
            if (scrollTop + winH > topDis + $(list[i]).height() - 200) {
              setTimeout(() => {
                $(list[i]).addClass('ladder').removeClass('hidden')
              }, i * 350)
            } else {
              $(list[i]).removeClass('ladder').addClass('hidden')
            }
          }
        } else {
          list.removeClass('ladder').addClass('hidden')
        }
      })
    }
  }
})
