const container = document.querySelector('.container')

const createDivs = (array) => {
  array.forEach(e => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'element');
    newDiv.innerHTML = e;
    newDiv.style.height = `${30 * e}px`;
    container.appendChild(newDiv);
  });
}

const clearCanvas = () => {
  container.innerHTML = '';
}


const array = [12, 5, 8, 4, 9, 3, 7];

const quickSort = (arr) => {
  if (arr.length < 2) {
    helpingArray.push([...arr])
    return arr;
  }
  const pivot = arr[0];
  const lesser = arr.slice(1).filter((e) => e <= pivot);
  const greater = arr.slice(1).filter((e) => e > pivot);
  return [...quickSort(lesser), pivot, ...quickSort(greater)]; 
}

const helpingArray = []
const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      helpingArray.push([...arr])
    }
   
  }
  return arr;
};

bubbleSort(array);

let offset = 0;

helpingArray.map(e => {
  setTimeout(() => {
    clearCanvas();
    createDivs(e);
    console.log(e);
  }, 500 + offset);
  offset += 500;
})
