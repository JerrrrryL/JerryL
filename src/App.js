import React, { Component } from 'react'
import { Route, Routes } from "react-router"
import Header from './components/Header'
import Page from './components/Page'
import Publication from './components/Publication';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datasetSelected: false,
      datasetSelectedAnalyst: false,
      policy: null,
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Page />} />
          {/* <Route
              exact
              path="/"
              render={() => {
                return <Page title="homePage" />;
              }}
            /> */}
          <Route
            exact
            path="/pub"
            element={<Publication />}
          />
        </Routes>
      </div>
    )
  }
}

export default App