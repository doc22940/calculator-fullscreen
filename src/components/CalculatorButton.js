import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import tinycolor from 'tinycolor2'
import { propsChanged } from 'helpers/pureFunctions'

export const _getStyles = function (theme) {
  return {
    base: {
      fontSize: '3.3vw',
      width: '3.0vw',
      textAlign: 'center',
      display: 'inline-block',
      margin: '0.5px',
      textDecoration: 'none',
      cursor: 'pointer',
      userSelect: 'none',
    },
    inactive: {
      backgroundColor: theme.colors.canvasDark,
      ':hover': {
        color: theme.colors.primary
      }
    },
    active: {
      color: theme.colors.accent,
      backgroundColor: tinycolor(theme.colors.canvasDark).darken(12)
                        .desaturate(5).setAlpha(0.7).toString(),
      ':hover': {
        color: theme.colors.accent
      }
    }
  }
}

class CalculatorButton extends Component {
  static propTypes = {
    theKey: PropTypes.shape({
      active: PropTypes.bool,
      display: PropTypes.string.isRequired,
      keyCode: PropTypes.number.isRequired
    }).isRequired,
    getStyles: PropTypes.func,
    theme: PropTypes.object,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    getStyles: _getStyles
  }

  shouldComponentUpdate(nextProps) {
    return propsChanged(['theKey', 'theme'], this.props, nextProps)
  }

  render() {
    const {
      getStyles,
      onClick,
      theKey,
      theKey: { active, display },
      theme
    } = this.props
    const stateStyles = active ? 'active' : 'inactive'
    const styles = getStyles(theme)

    return (
      <a
        onClick={() => onClick(theKey)}
        style={[styles.base, styles[stateStyles]]}
      >
        {display}
      </a>
    )
  }
}

export default Radium(CalculatorButton)