/* jshint strict: false */
/* jshint esversion: 6 */

import React from 'react';

const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69 ,90 ,1 ,6 ,7 ,64 ,43 ,9 ,73 ,80 ,98 ,46 ,27 ,22 ,87 ,49 ,83 ,6 ,39 ,42 ,51 ,54 ,84, 34, 53, 78, 40, 14, 5];

function App() {

  const linearSearch = (data, input) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i], input);
      if (data[i] == input) {
        return `Found ${input} in ${i + 1} tries`;
      }
    }
    return `${input} not in data set. Searched ${data.length} times`;
  };

  const binarySearch = (data, input, start, end, numOfSearches) => {
    let starter = start === undefined ? 0 : start;
    let ender = end === undefined ? data.length : end;
    let searches = numOfSearches === undefined ? 0 : numOfSearches;

    if (starter > ender) {
      return `${input} does not exist in data set. Searched ${numOfSearches} times`;
    }
    const index = Math.floor((starter + ender) / 2);
    const item = data[index];

    console.log('starter:', starter, 'ender:', ender);
    if (item == input) {
      return `Found ${input} in ${searches} searches.`;
    } else if (item < input) {
      searches++;
      return binarySearch(data, input, index + 1, ender, searches)
    } else if (item > input) {
        searches++;
        return binarySearch(data, input, starter, index - 1, searches);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.numberInput.value;
    console.log('input: ',input);
    // alert(linearSearch(data, input));

    const sortedData = data.sort((a, b) => {
      return a - b;
    });
    console.log('sorted data:', sortedData);
    alert(binarySearch(sortedData, input));
  };

  return (
    <main className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="findNumber">Find Number</label>
        <input id ='numberInput' type='text' name='numberInput' />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}

export default App;