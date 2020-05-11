const animate = (function ($) {

  ani = options => {
    class Aniamte {
      constructor(options) {
        this.name = 'animate'
        this.version = '0.01'
        this.params = Object.assign(
          {
            color: 'skyblue',
            direction: 'left'
          },
          (options ? options: {})
        )
        this.control = this.params.id ? $('#' + this.params.id) : null;
      }
  
      _init() {
        this._doBindEvent(this.params.eventName)
      }
  
      _addEvent() {
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
  
      _doBindEvent(eventName) {
        return this[eventName + 'Animate']()
      }
  
      buttonAnimate() {
        switch (this.params.animateName) {
          case '':
            break
          default:
            break
        }
        this._addEvent()
      }
  
      imageAnimate() {
        switch (this.params.animateName) {
          case '':
            break
          default:
            break
        }
        this._addEvent()
      }
    }
  
    return new Aniamte(options)._init()
  }

  return ani;
  
})($ || window.jQuery)
