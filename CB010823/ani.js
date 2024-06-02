var headingData = {
  title: "Indigenious Animals in Sri lanka",
  description: " Sri Lanka, a South Asian island nation, is home to a diverse range of indigenous species. The island's distinct ecosystems, which range from lush rainforests to parched plains, provide habitat for a wide variety of species found nowhere else on the planet.  One of the most well-known indigenous animals is the Sri Lankan elephant (Elephas maximus maximus), a subspecies of the Asian elephant. These gentle giants wander a variety of settings, including national parks and animal reserves, helping to shape the country' cultural and natural identity. The Sri Lankan leopard (Panthera pardus kotiya) is the top predator in the island's deep rainforests. The Sri Lankan leopard, known for its striking golden coat with dark rosettes, represents the island's untamed wildness. The indigenous purple-faced langur (Semnopithecus vetulus) swings through the trees of Sri Lanka's mountain forests. This primate species, known for its bright fur and expressive facial characteristics, contributes to the island's biodiversity. "
};


var contentData = {
  paragraph1: "Sri Lanka also has a diverse bird population, including endemics such as the Sri Lanka junglefowl (Gallus lafayettii), a national bird recognised for its distinctive plumage. The island's avian treasures include the Serendib scops owl (Otus thilohoffmanni) and the Sri Lanka spurfowl (Galloperdix bicalcarata).",
  paragraph2: " As an important component of Sri Lanka's natural history, these indigenous species confront a number of conservation concerns, including habitat degradation, human-wildlife conflict, and poaching. Conservation organisations and local communities work together to safeguard and preserve these unique species, so that future generations can marvel at the incredible wildlife that lives in Sri Lanka.",
  imageUrl: "images/wildlife1.jpg",
  title1: "Yala National",
  imageUrl1: "images/ynp.webp",
  description1: " Yala National Park is one of Sri Lanka's top wildlife destinations, known for its varied ecosystems and an abundance of species. It is located in the southeast of the country. Yala is a large region that consists of both scrublands and dense woods. It is distinguished by a range of ecosystems that are home to a diverse range of flora and wildlife.",
  link1: "yalaNational.html",
  title2: "Wilpattu National",
  imageUrl2: "images/wnp.webp",
  description2: "The biggest and one of the oldest national parks in Sri Lanka is Wilpattu National Park, which is situated in the northwest of the island. Wilpattu, a region well-known for its biodiversity and natural beauty, is made up of a variety of habitats, such as broad grassy plains, dense scrublands, and picturesque lakes, which offer a variety of settings for a variety of wildlif",
  link2: "wilpattuNatinal.html"
};
  
localStorage.setItem('headingData', JSON.stringify(headingData));
localStorage.setItem('contentData', JSON.stringify(contentData));
  
function loadingPage() {
  var storedHeadingData = localStorage.getItem('headingData');
  var parsedHeadingData = JSON.parse(storedHeadingData);

  var storedContentData = localStorage.getItem('contentData');
  var parsedContentData = JSON.parse(storedContentData);
  document.getElementById('heading-description').textContent = parsedHeadingData.description;
  
  document.getElementById('content-paragraph1').textContent = parsedContentData.paragraph1;
  document.getElementById('content-paragraph2').textContent = parsedContentData.paragraph2;

  document.getElementById('yalaNational-image').src = parsedContentData.imageUrl1;
  document.getElementById('yalaNational-description').textContent = parsedContentData.description1;
  document.getElementById('yalaNational-link').href = parsedContentData.link1;

  document.getElementById('wilpattuNational-image').src = parsedContentData.imageUrl2;
  document.getElementById('wilpattuNational-description').textContent = parsedContentData.description2;
  document.getElementById('wilpattuNational-link').href = parsedContentData.link2;
};

const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');

editBtn.addEventListener('click', () => {
  saveBtn.style.display = 'flex';
  editBtn.style.display = 'none';
  editContent('heading-description');
  editContent('content-paragraph1');
  editContent('content-paragraph2');
  editContent('yalaNational-description');
  editContent('wilpattuNational-description');
})

saveBtn.addEventListener('click', () => {
  saveBtn.style.display = 'none';
  editBtn.style.display = 'flex';
  revertContent('heading-description', 'headingData', 'description');
  revertContent('content-paragraph1', 'contentData', 'paragraph1');
  revertContent('content-paragraph2', 'contentData', 'paragraph2');
  revertContent('yalaNational-description', 'contentData', 'description1');
  revertContent('wilpattuNational-description', 'contentData', 'description2');
})

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

// Function to revert content and save changes to localStorage
function revertContent(elementId, localStorageKey, jsonPath) {
  var element = document.getElementById(elementId);

  if (!element) {
      console.error(`Element with id '${elementId}' not found.`);
      return;
  }

  var storedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  var value = element.tagName.toLowerCase() === 'textarea' ? element.value : element.textContent;

  // Update the JSON path value
  var keys = jsonPath.split('.');
  var lastKey = keys.pop();
  var target = keys.reduce((obj, key) => obj[key], storedData);
  target[lastKey] = value;

  // Save updated data back to localStorage
  localStorage.setItem(localStorageKey, JSON.stringify(storedData));

  // Create replacement element
  var replacementElement = document.createElement(element.tagName.toLowerCase() === 'textarea' ? 'p' : 'h1');

  for (var i = 0; i < element.attributes.length; i++) {
      var attr = element.attributes[i];
      replacementElement.setAttribute(attr.name, attr.value);
  }

  replacementElement.textContent = value;
  element.parentNode.replaceChild(replacementElement, element);
  loadingPage();
}


loadingPage();

  
  