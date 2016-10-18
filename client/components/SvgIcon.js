
import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  container: {
    display: 'inline-block',
    height: 24,
    width: 24,
    userSelect: 'none',
  },
});


class SvgIcon extends Component {
  static uiName = 'SvgIcon';
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    style: PropTypes.object,
    viewBox: PropTypes.string,
  }
  static defaultProps = {
    onMouseEnter: () => { },
    onMouseLeave: () => { },
    viewBox: '0 0 24 24',
    style: {},
  };

  state = {
    hovered: false,
  };

  handleMouseLeave = (event) => {
    this.setState({ hovered: false });
    this.props.onMouseLeave(event);
  };

  handleMouseEnter = (event) => {
    this.setState({ hovered: true });
    this.props.onMouseEnter(event);
  };

  render() {
    const {
      children,
      color,
      hoverColor,
      style,
      viewBox,
    } = this.props;

    const offColor = color || 'currentColor';
    const onColor = hoverColor || offColor;
    const childrenStyle = StyleSheet.create({
      style,
    });
    const inlineStyle = StyleSheet.create({
      filledStyle: {
        fill: this.state.hovered ? onColor : offColor,
      },
    });
    return (
      <svg
        className={css(styles.container, inlineStyle.filledStyle, childrenStyle.style)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        viewBox={viewBox}
      >
        {children}
      </svg>
    );
  }
}


export default SvgIcon;

