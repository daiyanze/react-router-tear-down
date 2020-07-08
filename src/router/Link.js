import React, { Component } from "react"
import { RouterContext } from "./RouterContext"

export default class Link extends Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // The current context would be RouterContext
  static contextType = RouterContext

  handleClick = e => {
    e.preventDefault()
    // Push the target location to history
    this.context.history.push(this.props.to)
  }

  render() {
    const { to, children, ...others } = this.props
    return (
      <a onClick={this.handleClick} href={to} {...others}>
        { children }
      </a>
    )
  }
}