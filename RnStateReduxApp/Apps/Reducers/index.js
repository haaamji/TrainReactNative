/* eslint-disable prettier/prettier */
const initialState = {
    counter: [
        {
            counterNum: 0,
        },
    ],
};

const counter = (state = initialState, action) => {
    const {counter} = state;

    switch (action.type) {//순수함수 실제 로직 처리
        case 'INCREMENT':
            return ({
                counter:[//나부터 인덱스 값과 같은 것은 나두고
                    ...counter.slice(0, action.index),
                    {
                        //현재 인덱스 값에 있는 수에서 1증가
                        counterNum: counter[action.index].counterNum + 1,
                        // counterNum: counter[action.index].counterNum + action.index,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            }); //실제 순수함수 로직 * 값증가
        case 'DECREMENT':
            return ({
                counter:[//Increment값처리만 다름
                    ...counter.slice(0, action.index),
                    {
                        counterNum: counter[action.index].counterNum - 1,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],
             }); //값 감소
        case 'ADD':
            return ({
                counter: [
                    ...counter,
                    {
                        counterNum: 0,
                    },
                ],
             }); //값 추가
        case 'REMOVE':
            return ({
                //0(최초)부터 길이 만큼에서 1 지움, 마지막이 삭제된다
                counter: counter.slice(0, counter.length - 1),
            }); //값 삭제
        default:
            return state;
    }
};

export default counter;
