'use strict'
const React = require('react')
const h = require('react-hyperscript')
const Btn = require('siv-components').btn

const Controls = {
  propTypes: {
    sivState: React.PropTypes.object.isRequired,
    sivDispatch: React.PropTypes.func.isRequired,
    extState: React.PropTypes.object.isRequired,
    extDispatch: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired
  },

  statics: {
    extId: 'kd8F',
    extName: 'Example'
  },

  render () {
    const updateNumber = (increment) => {
      this.props.extDispatch({
        type: 'UPDATE_NUMBER',
        num: currentNum + increment
      })
    }
    const currentNum = this.props.extState.number
    return (
      h('div', [
        h(Btn, {
          btnName: '+1',
          btnType: 'regular',
          onClick: updateNumber.bind(null, 1)
        }),
        h(Btn, {
          btnName: '-1',
          btnType: 'regular',
          onClick: updateNumber.bind(null, -1)
        })
      ])
    )
  }
}

module.exports = React.createClass(Controls)
