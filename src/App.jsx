import React from 'react'
// import './App.css'
import MyRoute from './MyRoute'
// import Test from './Test'
// import { Demo, Show } from './Show'
// import { legacy_createStore } from 'redux'

import { Provider } from 'react-redux'
import store from './Store'

// import cartReducer from './redux/reducer/cardReducer'


const App = () => {
  // const store = legacy_createStore(cartReducer)
  return (
    <Provider store={store}>
    {/* <div className='testName'>This is main page</div>
    <Test/>
    <Demo/>
    <Show/> */}
    <MyRoute/>
    </Provider>
  )
}

export default App
