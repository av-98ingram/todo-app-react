import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler Livro',
    list: [{
      _id: 1,
      description: 'Pagar Fatura cartão',
      done: true
    }, {
      _id: 2,
      description: 'Reunião com equipe às 10:00',
      done: false
    }, {
      _id: 3,
      description: 'Consulta médica',
      done: false
    }]
  })  
})

export default rootReducer