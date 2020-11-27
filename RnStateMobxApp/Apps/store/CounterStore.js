/* eslint-disable prettier/prettier */

import { observable } from "mobx";


class CounterStore {
  @observable
  counter = [{ counterNum: 0 }];

  //addConter : 카운터 추가 버튼
  handleAddCounter = () => {
    console.log('AddCounter');
    console.log(this.counter.length);
    this.counter.push({ counterNum: 0 });
    console.log(this.counter.length);
  };
  //카운터 삭제 버튼
  handleRemoveCounter = () => {
    console.log('RemoveCounter');
    this.counter.pop();
  };
  //+ 버튼
  handleIncrement = ({ index }) => { };
  //- 버튼
  handleDecrement = ({ index }) => { };
}

// decorate({CounterStore}, {
//   counter: observable,
//   handleAddCounter: action,
//   handleRemoveCounter: action,
// });

export default new CounterStore();
