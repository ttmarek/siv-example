'use strict'

const React = require('react')
const h = require('react-hyperscript')

const Layer = {
  propTypes: {
    zIndex: React.PropTypes.number,
    sivState: React.PropTypes.object.isRequired,
    sivDispatch: React.PropTypes.func.isRequired,
    extState: React.PropTypes.object.isRequired,
    extDispatch: React.PropTypes.func.isRequired
  },

  statics: {
    extId: 'kd8F',
    layerName: 'Example'
  },

  componentDidMount () {
    this.props.sivDispatch({
      type: 'ADD_CANVAS_REF',
      canvasRef: this.refs.canvas,
      extId: 'kd8F'
    })
    this.draw()
  },

  componentDidUpdate () {
    this.draw()
  },

  render () {
    return (
      h('canvas.Layer', {
        ref: 'canvas',
        'data-extid': 'kd8F',
        style: { zIndex: this.props.zIndex },
        width: this.props.sivState.viewerDimensions.width,
        height: this.props.sivState.viewerDimensions.height
      })
    )
  },

  draw () {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = '40px sans-serif'
    ctx.fillStyle = '#f1f1f1'
    ctx.fillText(this.props.extState.number, 50, 50)
    ctx.strokeStyle = 'black'
    ctx.stroke()
  }
}

module.exports = React.createClass(Layer)
