import { enthusiasm } from './index'
import { incrementEnthusiasm, decrementEnthusiasm } from '../actions'

it('increments the enthusiasm when action is INCREMENT_ENTHUSIASM', () => {
  const action = incrementEnthusiasm()
  var state = { enthusiasmLevel: 0, languageName: 'Pig Latin' }
  var new_state = enthusiasm(state, action)
  expect(new_state).toEqual({enthusiasmLevel: 1, languageName: 'Pig Latin'})
})

it('decrements the enthusiasm when action is DECREMENT_ENTHUSIASM', () => {
  const action = decrementEnthusiasm()
  var state = { enthusiasmLevel: 5, languageName: 'Pig Latin' }
  var new_state = enthusiasm(state, action)
  expect(new_state).toEqual({enthusiasmLevel: 4, languageName: 'Pig Latin'})
})
