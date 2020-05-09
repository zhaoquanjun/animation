$(function() {

  _initImageAnimateEvents();

  function _initImageAnimateEvents () {

    // mouse move 
    $('.ani-move-bymouse').on('mouseenter', function() {
      $(this).css({'will-change': 'transform'})
    }).on('mousemove', function(e) {
      e.preventDefault();
      const selfW = $(this).width();
      const selfH = $(this).height();
      const offset = $(e.target).offset();
      const disX = e.pageX - offset.left - selfW / 2;
      const disY = e.pageY - offset.top - selfH / 2;
      const rotateX = disY / (selfH / 2) * 10 + 'deg'
      const rotateY = -disX / (selfW / 2) * 10 + 'deg'
      $(this).css({transform: `perspective(300px) rotateX(${rotateX}) rotateY(${rotateY}) scale3d(1, 1, 1)`})
    }).on('mouseleave', function() {
      $(this).css({'will-change': 'auto', transform: `rotateX(0deg) rotateY(0deg)`})
    })



  }







})