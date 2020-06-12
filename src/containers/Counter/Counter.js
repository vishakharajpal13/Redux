import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect}  from 'react-redux';
import * as actionType from '../../store/action';



class Counter extends Component {
    

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.OnIncrement} />
                <CounterControl label="Decrement" clicked={this.props.OnDecerement}  />
                <CounterControl label="Add 5" clicked={this.props.OnAddition}  />
                <CounterControl label="Subtract 5" clicked={this.props.OnSubtraction}  />
            <div>
            <button onClick={this.props.showresult}>Click Here</button>
            <ul> {this.props.result.map(shw=>{
{shw.value}
return   <li key={shw.id} onClick={()=>this.props.deleteresult(shw.id)}>
{shw.value}
                </li>
            }
)} 
              
            </ul>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{

    return  {
        ctr:state.counter ,
    result:state.results};
};

const mapDispatchToProps=Dispatch=>{
    return {
        OnIncrement:()=>Dispatch({type:actionType.INCREMENT}),
        OnDecerement:()=>Dispatch({type:actionType.DECREMENT}),
        OnAddition:()=>Dispatch({type:actionType.ADDITION,val:10}),
        OnSubtraction:()=>Dispatch({type:actionType.SUBTRACTION}),
        showresult:()=>Dispatch({type:actionType.SHOWRESULTS}),
        deleteresult:(id)=>Dispatch({type:actionType.DELETE,deleteid:id})
        

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);