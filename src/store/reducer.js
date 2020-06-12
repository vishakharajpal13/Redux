import * as actionTypes from './action';

const initialState={counter:0, results:[]};

const reducer=(state=initialState,action)=>{

    //if(action.type==='INCREMENT')
    //{
   //     return {counter: state.counter +1}
   // }

   switch(action.type){
       case actionTypes.INCREMENT:
       return { ...state , counter:state.counter+1 };//this is the right way of updating the state imutabily
       case actionTypes.DECREMENT:
           return {...state , counter: state.counter -1};
           case actionTypes.ADDITION:
           return {...state , counter: state.counter + action.val};// action.value is payload here
           case actionTypes.SUBTRACTION:
           return {...state , counter: state.counter -10};

           case actionTypes.SHOWRESULTS:
               return {
                   ...state, results: state.results.concat({value:state.counter, id: new Date()})
               }
               case actionTypes.DELETE:
            console.log(state.results.map(result=>action.deleteid +'action'))
            console.log(state.results.map(result=>result.id +'id'))
            //what filter doing here is, its checking if the ID of result is not equal the id clicked and return true otherwise 
                   return {
                       
                       ...state, results:state.results.filter(result=>result.id!==action.deleteid)
                   }
                   

   }
    return state;
}

export default reducer;