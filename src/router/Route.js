import React, { Component } from "react"
import { RouterContext } from "./RouterContext"
import { matchPath } from "react-router"

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const { location } = context

            const { path, children, component, render, computedMatch } = this.props

            const match = computedMatch
              ? computedMatch
              : path ? matchPath(location.pathname, this.props) : context.match

            const props = {
              ...context,
              location,
              match
            }

            // If match
            // then children > component > render
            // else
            // children | null
            return (
              // Need to use context again to ensure the provider passes the updated props
              <RouterContext.Provider value={props}>
                {
                  match
                    ? children // Children comes first
                      ? (typeof children === "function" ? children(props) : children)
                      : (component // Component comes second
                          ? React.createElement(component, props)
                          : (render ? render(props) : null)) // Render comes last
                    : (typeof children === "function" ? children(props) : null)
                }
              </RouterContext.Provider>
            )
          }
        }
      </RouterContext.Consumer>
    )
  }
}
