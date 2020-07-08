import React from 'react'
import BrowserRouter from './router/BrowserRouter'
import Link from './router/Link'
import Route from './router/Route'

function App() {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <BrowserRouter>
        <Link to="/hello">hello</Link>
        <Link to="/world">world</Link>

        <Route path="/hello" render={() => <div>hello</div>} />
        <Route path="/world" render={() => <div>world</div>} />
      </BrowserRouter>
    </div>
  )
}

export default App
