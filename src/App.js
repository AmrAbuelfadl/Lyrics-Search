import React, { Component } from 'react'
import './App.module.css';
import {LyricsPage, NavBar, Search, TopTracks} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      searchTerm: "",
      event: null
    }
  }

    submitHandler = async (searchTerm, event) => {
      event.preventDefault()
      this.setState({
        searchTerm: searchTerm,
        event: event
      })
  }

  clearSearchTerm = (clear) => {
    if(clear === true){
      this.setState({
        searchTerm: ''
      })
    }
   
  }
  
  render() {
    return (
      <Router>
          <div>
              <NavBar submitHandler={this.submitHandler}/>
              <Switch>
                 <Route exact path='/' render={(props) => <TopTracks {...props} searchTerm={this.state.searchTerm} event={this.state.event} clearSearchTerm={this.clearSearchTerm}/>}/> {/* clearSearchTerm={this.clearSearchTerm} */}
                  {/* <Route exact path='/' component={TopTracks}/>  */}
                  <Route exact path='/track/:id' component={LyricsPage}/>
                  
              </Switch>
          </div>
      </Router>

    )
  }
}

export default App

