import React, { Component } from "react"
import { RouterContext } from "./RouterContext"

export default class Router extends Component {
  // Check root path
  static computeRootMatch (pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      location: props.history.location
    }

  }

  componentDidMount () {
    // update location when url changes
    this.props.history.listen(({ location }) => {
      this.setState({ location })
    })
  }

  render () {
    const { history, children } = this.props

    return (
      // Provide `history` `location` `match` to children components
      <RouterContext.Provider
        value={{
          history,
          location: this.state.location,
          match: Router.computeRootMatch(this.state.location.pathname)
        }}>
        { children }
      </RouterContext.Provider>
    )
  }
}
