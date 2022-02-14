// players heading style using DOM Operation.
document.getElementById('top-players').style.color = '#eb4d4b';

// change blogs background using dom
document.getElementById('blogs').style.backgroundColor =
  'rgba(226, 225, 225, 0.8)';

//   create new element and add on ul
document.getElementById('add').addEventListener('click', function () {
  // Create an li
  const createLi = document.createElement('li');
  // Create a text node
  const textnode = document.createTextNode('New item added.');
  // Append the text node to the li node
  createLi.appendChild(textnode);
  // Append the li node to the list
  document.getElementById('unordered-list').appendChild(createLi);
});

// increase input value
document.getElementById('increase').addEventListener('click', function () {
  const initialValue = document.getElementById('input').value;
  const getNumberValue = parseInt(initialValue);
  if (getNumberValue < 5) {
    document.getElementById('input').value = getNumberValue + 1;
  } else {
    document.getElementById('increase').disabled = true;
  }
});
