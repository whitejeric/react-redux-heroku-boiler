export const ADD_COUNT = 'ADD_COUNT';

export const SUB_COUNT = 'SUB_COUNT';

export const CHANGE_COUNT = 'CHANGE_COUNT';

export function addCount(){
  return {
    type: ADD_COUNT
  };
}

export function addCount(){
  return {
    type: SUB_COUNT
  };
}

export function changeCount(number){
  return {
    type: SUB_COUNT
    number
  };
}
