const animate = (function ($) {
  ani = (options) => {
    class Aniamte {
      constructor(options) {
        this.name = 'animate'
        this.version = '0.01'
        this.params = Object.assign(
          {
            id: '',
            controlName: 'button',
            eventName: 'scale'
          },
          options ? options : {}
        )
        this.control = this.params.id ? $('#' + this.params.id) : null
        this.needsJs = ['Mousemove', '']
        this.isMoreDeal = ['Mousemove', '']
      }

      _init() {
        this._doBindEvent()
      }

      _doBindEvent() {
        if (this.needsJs.indexOf(this.params.eventName) > -1) {
          this._addEvent()
        }
      }

      _addEvent() {
        this.control
          .on('mouseenter', (e) => {
            e.preventDefault()
            e.stopPropagation()
            this.control.addClass('ani-' + this.params.eventName)
          })
          .on('mousemove', (e) => {
            e.preventDefault()
            e.stopPropagation()
            if (this.isMoreDeal.indexOf(this.params.eventName) > -1) {
              ;this[this.params.controlName + this.params.eventName].call(this.control, e)
            }
          })
          .on('mouseleave', (e) => {
            e.preventDefault()
            e.stopPropagation()
            this.control.removeClass('ani-' + this.params.eventName)
            if (this[this.params.controlName + 'Mouseleave']) {
              this[this.params.controlName + 'Mouseleave'].call(this.control)
            }
          })
      }

      imageMousemove(e) {
        const selfW = $(this).width()
        const selfH = $(this).height()
        const offset = $(e.target).offset()
        const disX = e.pageX - offset.left - selfW / 2
        const disY = e.pageY - offset.top - selfH / 2
        const rotateX = (disY / (selfH / 2)) * 10 + 'deg'
        const rotateY = (-disX / (selfW / 2)) * 10 + 'deg'
        $(this).css({
          transform: `perspective(300px) rotateX(${rotateX}) rotateY(${rotateY}) scale3d(1, 1, 1)`
        })
      }

      imageMouseleave() {
        $(this).css({transform: `rotateX(0deg) rotateY(0deg)`})
      }
    }

    return new Aniamte(options)._init()
  }

  return ani
})($ || window.jQuery)
