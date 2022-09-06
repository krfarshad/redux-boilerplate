import React from 'react'
import { connect } from 'react-redux'
import {callbackIncreaseNumber , callbackDecreaseNumber , callbackResetNumber }  from '../redux/actionCreator'
const Main = (props) => {
  return (
    <>
        <div>{props.number}</div>
        <div className='button-wrapper'>
               <button onClick={props.doDecrease}>decrease</button>
               <button onClick={props.doReset}>reset</button>
               <button onClick={props.doIncrease}>increase</button>
        </div>
    </>
  )
}

const mapStateToProps = state => {
    return {
        number: state
    }
}

const mapDispatchToProps = dispatch => ({
    doIncrease: () => dispatch(callbackIncreaseNumber()),
    doReset   : () => dispatch(callbackResetNumber()),
    doDecrease: () => dispatch(callbackDecreaseNumber())
})
export default connect(mapStateToProps, mapDispatchToProps)(Main);
