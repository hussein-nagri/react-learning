const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'



function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First Redux Action'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM
  }
}

const initalState = {
  numOfCakes: 10,
  numOfIceCreams: 20
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
    default:
      return state
  }
}


const store = createStore(reducer)
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log("updated state: ", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()