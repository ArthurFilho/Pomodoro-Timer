import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  PAUSE_CURRENT_CYCLE = 'PAUSE_CURRENT_CYCLE',
  START_CURRENT_CYCLE = 'START_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function PauseCurrentCycleAction() {
  return {
    type: ActionTypes.PAUSE_CURRENT_CYCLE,
  }
}

export function StartCurrentCycleAction() {
  return {
    type: ActionTypes.START_CURRENT_CYCLE,
  }
}
