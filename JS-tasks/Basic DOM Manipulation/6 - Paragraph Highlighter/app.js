let element = document.querySelector('p');
const highlight = (element) => {
  const color = document.querySelector('#colorPicker').value;
  element.style.backgroundColor = color;
};
