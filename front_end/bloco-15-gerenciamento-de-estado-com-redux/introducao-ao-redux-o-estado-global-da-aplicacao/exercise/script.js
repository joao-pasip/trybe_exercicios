const buttonNext = document.getElementById("next");
const buttonPrevious = document.getElementById("previous");

const showValue = (storeGlobal) => {
  const paragrafh = document.getElementById("value");
  paragrafh.innerText = storeGlobal.colors[storeGlobal.index];
};


const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

const actionNextColor = () => {
  store.dispatch({
    type: NEXT_COLOR,
  })
  console.log('passei no next');
}
buttonNext.addEventListener('click', actionNextColor);

const actionPreviousColor = () => {
  store.dispatch({
    type: PREVIOUS_COLOR,
  })
  console.log('passei no previous');
}

buttonPrevious.addEventListener('click', actionPreviousColor);

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index !== state.colors.length - 1 ? state.index + 1 : 0,
      }
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : state.colors.length - 1,
      }
  }
}


const store = Redux.createStore(reducer);

store.subscribe(() => {
  const storeGlobal = store.getStore();
  console.log(storeGlobal);
})
console.log(store);