import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'

let post

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return ({
      activeNavigationUrl: ""
    })
  },
  render: function() {
    return (
      <div>
        <h1>testerss</h1>
      </div>
    )
  }
})

function mapStateToProps(state) {
  console.log(state.toJSON())
  return state.toJSON()
}

export const HomeContainer = connect(mapStateToProps)(Home)
