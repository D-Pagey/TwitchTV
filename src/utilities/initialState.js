import rawData from './RawData.js';

export default function setInitialState() {
    let initialData = rawData();
    let initialState = {
        freecodecamp: initialData[0],
        macie: initialData[1],
        roy: initialData[2],
        p4wny: initialData[3],
        viss: initialData[4],
        edberg: initialData[5],
        rainbow: initialData[6]
  }
  return initialState;
}