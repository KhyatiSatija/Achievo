
const hourBlocks = document.querySelectorAll('.hour-block');

hourBlocks.forEach(hourBlock => {
  hourBlock.addEventListener('click', handleHourBlockClick);
});

function handleHourBlockClick(event) {
  const hourBlock = event.target;
  const hour = hourBlock.getAttribute('data-hour');

  showColorPicker(hour);
}


function showColorPicker(hour) {
  const colorPicker = document.querySelector('.color-picker');
  const applyBtn = document.getElementById('apply-btn');


  applyBtn.removeEventListener('click', applyColor);
  applyBtn.addEventListener('click', function() {
    applyColor(hour);
  });


  colorPicker.style.display = 'flex';
}
function applyColor(hour) {
  const colorInput = document.getElementById('color');
  const tagInput = document.getElementById('tag');
  const selectedColor = colorInput.value;
  const selectedTag = tagInput.value;


  const hourBlock = document.querySelector(`[data-hour="${hour}"]`);
  hourBlock.style.backgroundColor = selectedColor;
  hourBlock.textContent = selectedTag;


  const colorPicker = document.querySelector('.color-picker');
  colorPicker.style.display = 'none';

  colorInput.value = '';
  tagInput.value = '';
}function applyColor(hour) {
  const colorInput = document.getElementById('color');
  const tagInput = document.getElementById('tag');
  const selectedColor = colorInput.value;
  const selectedTag = tagInput.value;


  const hourBlock = document.querySelector(`[data-hour="${hour}"]`);
  hourBlock.style.backgroundColor = selectedColor;
  hourBlock.textContent = selectedTag;


  const colorPicker = document.querySelector('.color-picker');
  colorPicker.style.display = 'none';

  colorInput.value = '';
  tagInput.value = '';
}
