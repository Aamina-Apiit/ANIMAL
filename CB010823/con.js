var column1 = [
  {
    title: "Wild Life conservation",
    description: " Wildlife conservation entails protecting and preserving wildlife and their habitats in order to promote ecosystem sustainability and species survival. Here are some important issues of wildlife conservation:  Wildlife conservation is a multidimensional activity that necessitates collaboration on the local, national, and international levels. It combines scientific research, community participation, policy formation, and on-the-ground initiatives to secure the survival and well-being of the planet's different species."
  }
];

localStorage.setItem('column1', JSON.stringify(column1));

  
function loadingPage() {
  var parsedColumn1 = JSON.parse(localStorage.getItem('column1'));
  document.getElementById('wilpattuNational-description').textContent = parsedColumn1 [0].description;
  document.getElementById('wilpattuNational-title').textContent = parsedColumn1 [0].title;
};
  

const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');

editBtn.addEventListener('click', () => {
  saveBtn.style.display = 'flex';
  editBtn.style.display = 'none';
  editContent('wilpattuNational-title');
  editContent('wilpattuNational-description');
})

saveBtn.addEventListener('click', () => {
  saveBtn.style.display = 'none';
  editBtn.style.display = 'flex';
  revertContent('wilpattuNational-title');
  revertContent('wilpattuNational-description');
})
  
loadingPage();

function editContent(elementId) {
  var element = document.getElementById(elementId);

  if (!element) {
      console.error(`Element with id '${elementId}' not found.`);
      return;
  }

  // Check if the element is <p> or <h1>
  var tagName = element.tagName.toLowerCase();

  if (tagName === 'p') {
    var textarea = document.createElement('textarea');

    // Copy attributes from <p> to <textarea>
    for (var i = 0; i < element.attributes.length; i++) {
        var attr = element.attributes[i];
        textarea.setAttribute(attr.name, attr.value);
    }

    // Set content of <textarea> and replace <p> with <textarea>
    textarea.value = element.textContent;
    element.parentNode.replaceChild(textarea, element);

  } else if (tagName === 'h1') {
    var input = document.createElement('input');
    input.type = 'text';
    
    // Copy attributes from <h1> to <input>
    for (var i = 0; i < element.attributes.length; i++) {
      var attr = element.attributes[i];
      input.setAttribute(attr.name, attr.value);
    }

    // Set content of <input> and replace <h1> with <input>
    input.value = element.textContent;
    element.parentNode.replaceChild(input, element);

  } else {
      console.error(`Element with id '${elementId}' is neither a <p> nor an <h1> tag.`);
  }
}
  
function revertContent(elementId) {
  var element = document.getElementById(elementId);

  if (!element) {
      console.error(`Element with id '${elementId}' not found.`);
      return;
  }

  var tagName = element.tagName.toLowerCase();

  var column1Data = JSON.parse(localStorage.getItem('column1')) || [];

  if (tagName === 'textarea') {
      // Update 'description' in 'column1' JSON
      if (column1Data.length > 0) {
          column1Data[0].description = element.value;
      } else {
          column1Data.push({ title: "", description: element.value });
      }
      localStorage.setItem('column1', JSON.stringify(column1Data));

      var p = document.createElement('p');

      // Copy attributes from <textarea> to <p>
      for (var i = 0; i < element.attributes.length; i++) {
          var attr = element.attributes[i];
          p.setAttribute(attr.name, attr.value);
      }

      // Set content of <p> and replace <textarea> with <p>
      p.textContent = element.value;
      element.parentNode.replaceChild(p, element);
      loadingPage();

  } else if (tagName === 'input' && element.type.toLowerCase() === 'text') {

      // Update 'title' in 'column1' JSON
      if (column1Data.length > 0) {
          column1Data[0].title = element.value;
      } else {
          column1Data.push({ title: element.value, description: "" });
      }
      localStorage.setItem('column1', JSON.stringify(column1Data));

      var h1 = document.createElement('h1');

      // Copy attributes from <input> to <h1>
      for (var i = 0; i < element.attributes.length; i++) {
          var attr = element.attributes[i];
          h1.setAttribute(attr.name, attr.value);
      }

      // Set content of <h1> and replace <input> with <h1>
      h1.textContent = element.value;
      element.parentNode.replaceChild(h1, element);
      loadingPage();

  } else {
      console.error(`Element with id '${elementId}' is neither a <textarea> nor a textbox.`);
  }
}

