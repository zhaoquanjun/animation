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
        this.needsJs = ['', '']
      }

      _init() {
        this._doBindEvent()
      }

      _doBindEvent() {
        if (this.indexOf(this.params.eventName)) {
          this._addEvent()
        }
      }

      _addEvent() {
        if ([this.params.controlName + this.params.eventName]) {
          [this.params.controlName + this.params.eventName]()
        }
      }

      buttonScale() {
        this.control
          .on('mouseenter', () => {
            console.log('enter')
            
          })
          .on('mousemove', () => {
            console.log('move')
          })
          .on('mouseleave', () => {
            console.log('leave')
          })
      }

      imagaScale() {
        this.control
          .on('mouseenter', () => {
            console.log('enter')
            
          })
          .on('mousemove', () => {
            console.log('move')
          })
          .on('mouseleave', () => {
            console.log('leave')
          })
      }
    }

    return new Aniamte(options)._init()
  }

  return ani
})($ || window.jQuery)
