const animate = (function ($) {
  ani = (options) => {
    class Aniamte {
      constructor(options) {
        this.name = 'animate'
        this.version = '0.01'
        this.params = Object.assign(
          {
            color: 'skyblue',
            direction: 'left'
          },
          options ? options : {}
        )
        this.control = this.params.id ? $('#' + this.params.id) : null
        this.needsJs = ['', ''];
        this.isMoreDeal = ['', '']
      }

      _init() {
        this._doBindEvent()
      }

      _doBindEvent() {
        if (this.needsJs.indexOf(this.params.eventName)) {
          this._addEvent()
        }
      }

      _addEvent() {
        this.control
          .on('mouseenter', () => {
            console.log('enter')
            this.control.addClass('ani-' + this.params.eventName)
          })
          .on('mousemove', () => {
            console.log('move')
            if (this.isMoreDeal.indexOf(this.params.eventName)) {
              [this.params.controlName + this.params.eventName]()
            }
          })
          .on('mouseleave', () => {
            console.log('leave')
            this.control.removeClass('ani-' + this.params.eventName)
          })
      }
    }

    return new Aniamte(options)._init()
  }

  return ani
})($ || window.jQuery)
