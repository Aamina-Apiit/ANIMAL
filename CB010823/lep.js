
var nationalParks = [
  {
    name: "Udawalawe National Park",
    description: "Udawalawe National Park, located in Sri Lanka's south, is a biodiverse sanctuary known for its stunning scenery and abundance of species. The park is well-known for its large population of Asian elephants, but its vast grasslands, scrublands, and the Udawalawe reservoir also provide home for a variety of animals. While the park is well known for its elephant herds, it is also home to secretive leopards who seek refuge in the area's diverse environs. Udawalawe provides tourists with a unique opportunity to see these amazing beasts, as well as other wildlife such as water buffalo, spotted deer, and a diverse range of bird species.The park's attraction is enhanced by organised safaris, which allow nature lovers to embark on exhilarating trips over its diverse terrain, catching the essence of Sri Lanka's natural splendour. Aside from its position as a tourist attraction, Udawalawe National Park is important for animal conservation, helping to preserve the country's unique biodiversity and demonstrating the peaceful coexistence of numerous species in this pristine natural haven.",
    imageUrl: "images/leapords1jpg"
  }
];

var hortonplains = [
  {
    name: "Horton Plains National Park",
    description: "Horton Plains National Park, located in Sri Lanka's central highlands, is a breathtaking expanse of montane grasslands and cloud forests that provide a unique and scenic setting. This one-of-a-kind park is distinguished by its rolling plains, steep cliffs, and deep forests, which provide a sanctuary for various flora and species. Horton Plains, home to notable animals like the elusive Sri Lankan leopard, supports a diverse range of biodiversity, including sambar deer, rare bird species, and colourful butterflies. The park's most well-known feature is World's End, a spectacular cliff with panoramic views of the surrounding regions. Visitors to Horton Plains can go on gorgeous treks, explore the well-maintained paths, and see the area's distinct ecosystems.Horton Plains National Park, with its temperate climate, high-altitude beauty, and diverse wildlife, exemplifies the natural treasures that abound in Sri Lanka's central highlands.",
    imageUrl: "images/leopard2.jpg"
  }
];

var wasgamuwapark = [
{
  name: "Wasgamuwa National Park",
  description: "Wasgamuwa National Park, located in Sri Lanka's Matale and Polonnaruwa districts, is a breathtaking expanse that exhibits the country's abundant biodiversity. The park's different ecosystems, which include grasslands, woods, and wetlands, provide a safe home for a diversity of wildlife. Wasgamuwa is well known for its large population of Asian elephants, but it also has leopards, sloth bears, spotted deer, and a diverse range of birds. The gorgeous environment, embellished with picturesque riverine ecosystems, contributes to the park's allure, allowing visitors to view the splendour of Sri Lanka's natural beauties. Safari trips at Wasgamuwa National Park give an immersive experience, allowing visitors to view and appreciate the coexistence of various animals in this protected area.Wasgamuwa, as a key conservation area, is critical to preserving Sri Lanka's unique flora and fauna, as well as contributing to the country's overall efforts to maintain an ecological balance.",
  imageUrl: "images/leopard5.webp"
}
];

var threats = [
  {
    name: "Habitat Loss and Fragmentation",
    description: "Human activities such as deforestation and urbanisation cause habitat loss and fragmentation, which pose a severe danger to leopard populations in Sri Lanka. Leopards are having difficulty establishing acceptable territories as their natural habitats disappear, resulting in greater human-wildlife conflict.",
    imageUrl: "images/leopard6.webp",
    mechanism: "To mitigate habitat loss, conservation efforts focus on reforestation projects, creating wildlife corridors, and promoting sustainable land-use practices. Protected area management and community education are also crucial to reducing human-leopard conflicts"
  }
];

var threats2 = [
  {
    name: "Illegal Wildlife Trade",
    description: "Illegal wildlife trade, especially the trafficking of leopard parts and live cubs, is a major threat to leopard populations. Poaching for leopard skin, bones, and other body parts adds to the fall in leopard population.",
    imageUrl: "images/leopard7.webp",
    mechanism: "Efforts to combat the illegal wildlife trade include enhancing anti-poaching measures, improving law enforcement, and raising awareness about the importance of leopard conservation. Collaboration with foreign organisations is also critical for addressing the global components of the illegal wildlife trafficking."
}
];

localStorage.setItem('nationalParks', JSON.stringify(nationalParks));
localStorage.setItem('hortonplains', JSON.stringify(hortonplains));
localStorage.setItem('wasgamuwapark', JSON.stringify(wasgamuwapark));

localStorage.setItem('threats', JSON.stringify(threats));
localStorage.setItem('threats2', JSON.stringify(threats2));

function loadingPage() {
  var storedNationalParks = localStorage.getItem('nationalParks');
  var parsedNationalParks = JSON.parse(storedNationalParks);

  var storedHortonPlains = localStorage.getItem('hortonplains');
  var parsedHortonPlains = JSON.parse(storedHortonPlains);

  var storedWasgamuwaPark = localStorage.getItem('wasgamuwapark');
  var parsedWasgamuwaPark = JSON.parse(storedWasgamuwaPark);

  var storedThreats = localStorage.getItem('threats');
  var parsedThreats = JSON.parse(storedThreats);

  var storedThreats2 = localStorage.getItem('threats2');
  var parsedThreats2 = JSON.parse(storedThreats2);

  document.getElementById('nationalParkDescription').textContent = parsedNationalParks[0].description;
  document.getElementById('threatDescription').textContent = parsedThreats[0].description;
  document.getElementById('hortonplainsDescription').textContent = parsedHortonPlains[0].description;
  document.getElementById('wasgamuwaparkDescription').textContent = parsedWasgamuwaPark[0].description;
  document.getElementById('threatmechanism').textContent = parsedThreats[0].mechanism;
  document.getElementById('threat2Description').textContent = parsedThreats2[0].description;
  document.getElementById('threat2mechanism').textContent = parsedThreats2[0].mechanism;
}

const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');

editBtn.addEventListener('click', () => {
  saveBtn.style.display = 'flex';
  editBtn.style.display = 'none';
  editContent('nationalParkDescription');
  editContent('hortonplainsDescription');
  editContent('wasgamuwaparkDescription');
  editContent('threatDescription');
  editContent('threatmechanism');
  editContent('threat2Description');
  editContent('threat2mechanism');
})

saveBtn.addEventListener('click', () => {
  saveBtn.style.display = 'none';
  editBtn.style.display = 'flex';
  revertContent('nationalParkDescription');
  revertContent1('hortonplainsDescription');
  revertContent2('wasgamuwaparkDescription');
  revertContent3('threatDescription');
  revertContent3('threatmechanism');
  revertContent3('threat2Description');
  revertContent3('threat2mechanism');
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

function revertContent(elementId) {
  var element = document.getElementById(elementId);

  if (!element) {
      console.error(`Element with id '${elementId}' not found.`);
      return;
  }

  var storedData = JSON.parse(localStorage.getItem('nationalParks')) || [];

  storedData[0].description = element.value;
  localStorage.setItem('nationalParks', JSON.stringify(storedData));

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
}

function revertContent1(elementId) {
  var element = document.getElementById(elementId);

  if (!element) {
      console.error(`Element with id '${elementId}' not found.`);
      return;
  }

  var storedData = JSON.parse(localStorage.getItem('hortonplains')) || [];

  storedData[0].description = element.value;
  localStorage.setItem('hortonplains', JSON.stringify(storedData));

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
}

function revertContent2(elementId) {
  var element = document.getElementById(elementId);

  if (!element) {
      console.error(`Element with id '${elementId}' not found.`);
      return;
  }

  var storedData = JSON.parse(localStorage.getItem('wasgamuwapark')) || [];

  storedData[0].description = element.value;
  localStorage.setItem('wasgamuwapark', JSON.stringify(storedData));

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
}

function revertContent3(elementId) {
  var element = document.getElementById(elementId);

  if (!element) {
      console.error(`Element with id '${elementId}' not found.`);
      return;
  }

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
}

loadingPage();
