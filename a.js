const createImageItem = (index) => {
  const imageItem = document.createElement('div');
  imageItem.className = 'image-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const img = document.createElement('img');
  img.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
  img.alt = `Image ${index + 1}`;

  checkbox.addEventListener('change', () => {
      console.log(`Checkbox ${index + 1} toggled, checked:`, checkbox.checked);
      img.src = checkbox.checked ? 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png' : 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
  });

  imageItem.appendChild(checkbox);
  imageItem.appendChild(img);

  return imageItem;
};

document.getElementById('generateImages').addEventListener('click', () => {
  const count = parseInt(document.getElementById('imageCount').value);
  const container = document.getElementById('imageContainer');

  if (isNaN(count) || count < 1) {
      alert("Please enter a valid number of images.");
      return;
  }

  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
      console.log(`Generating image ${i + 1}`);
      container.appendChild(createImageItem(i));
  }
});