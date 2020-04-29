const container = document.querySelector('.container');
const input = document.getElementById('array-input');
const button = document.getElementById('animate');

button.addEventListener('click', () => {
  let array = input.value.split(',');
  array = array.map(e => +e.trim())
  aniamteBubbleSort(array)
})

const createDivs = ({ array, greater, lesser }) => {
  array.forEach(e => {
    const newDiv = document.createElement('div');
    if (e === lesser) {
      newDiv.setAttribute('class', 'element-greater');
    } 
    if (e === greater) {
      newDiv.setAttribute('class', 'element-lesser');
    }
    if (e !== lesser && e !== greater) {
      newDiv.setAttribute('class', 'element');

    }
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

const aniamteBubbleSort = (animatedArray) => {

  const helpingArray = [];

  const bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          helpingArray.push({ array: [...arr], greater: arr[j], lesser:  arr[j + 1] })
          continue;
        }
        helpingArray.push({ array: [...arr], greater: arr[j + 1], lesser: arr[j] })
      }
    }
    return arr;
  };
  
  bubbleSort(animatedArray);
  
  let offset = 0;

  helpingArray.map(e => {
    setTimeout(() => {
      clearCanvas();
      createDivs(e);
    }, 500 + offset);
    offset += 500;
  })
}
