// 액션 객체를 만드는 함수 ( 그 떄 그 때 만들기 힘드니까 )

import * as types from './ActionTypes';

// () => ({}) 는 function() { return{} } 와 같음
export const increment = () => ({
    type : types.INCREMENT
});

export const decrement = () => ({
    type : types.DECREMENT
});

export const setColor = (color) => ({
    type : types.SET_COLOR,
    color
});
