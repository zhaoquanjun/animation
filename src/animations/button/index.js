;$(function () {
  $('.use-js')
    .on('mouseenter', function () {
      var animate = $(this).attr('data-animate')
      switch (animate) {
        case 'plus':
          $(this).addClass('use-plus')
          break
        case 'buzz':
          $(this).addClass('use-buzz')
          break
        case 'wobble':
          $(this).addClass('use-wobble')
          break
        default:
          break
      }
    })
    .on('mouseleave', function () {
      var animate = $(this).attr('data-animate')
      switch (animate) {
        case 'plus':
          $(this).removeClass('use-plus')
          break
        case 'buzz':
          $(this).removeClass('use-buzz')
          break
        case 'wobble':
          $(this).removeClass('use-wobble')
          break
        default:
          break
      }
    })
})
