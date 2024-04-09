var aboutData = {
    title: "About US",
    text: "Welcome to Sri Lankan Wildlife, The development of this website mainly focus on Sri Lankan Wildlife providing informations as well as educating regarding the latest's updates and issues in Sri Lanka. where our love for nature and commitment to wildlife conservation come together to create a platform dedicated to the wonders of the animal kingdom."
  };

  var wildlifeLocationsData = [
    {
      name: "Sinharaja Forest",
      description: "Sinharaja, a UNESCO World Heritage Site, is a tropical rainforest in southwestern Sri Lanka. It is a biodiversity location, with several indigenous plants, birds, and amphibians. Visitors can explore the lush forest, waterfalls, and other wildlife.",
      link: "https://whc.unesco.org/en/list/405/",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.899115223025!2d80.45745167478435!3d6.40699612450672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e76bd109d45f%3A0x8c0ef1010649701b!2sSinharaja%20Forest%20Reserve!5e0!3m2!1sen!2slk!4v1705645745969!5m2!1sen!2slk"
    },
    {
      name: "Udawalawe National Park",
      description: "Udawalawe, located in southern Sri Lanka, is well-known for its massive elephant population. The park surrounds the Udawalawe Reservoir and is home to buffalo, crocodiles, and a variety of birds.",
      link: "https://en.wikipedia.org/wiki/Udawalawe_National_Park",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5816879497406!2d80.89043231404776!3d6.447716825830267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae408ff88887e79%3A0xaf12e79ffbd980d7!2sUdawalawe%20National%20Park%20Safari!5e0!3m2!1sen!2slk!4v1654267478807!5m2!1sen!2slk"
    },
    {
      name: "Gal Oya National Park",
      description: "Gal Oya, located in the southeastern region of the country, is well-known for its unique boat safaris on the Senanayake Samudraya reservoir. The park is home to elephants, crocodiles, and a variety of birds.",
      link: "https://www.galoyanationalpark.com/",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.108070652248!2d81.46926377478874!3d7.228512914569703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4e2a00da92731%3A0x2792347a67187b94!2sGal%20Oya%20Valley%20National%20Park!5e0!3m2!1sen!2slk!4v1705646009372!5m2!1sen!2slk"
    }
  ];

  var animalTableData = [
    {
      image: "images/leopard2.jpg",
      name: "Leopard",
      location: "Found in various habitats across Africa and parts of Asia.",
      funFacts: "Leopards are known for their adaptability and are capable of living in diverse environments, from savannas and rainforests to mountains."
    },
    {
      image: "images/panda.jpg",
      name: "Panda",
      location: "Native to the mountainous regions of central China.",
      funFacts: "Giant pandas have a diet that consists almost entirely of bamboo, and they have a specialized 'thumb' to help them grasp bamboo stems."
    },
    {
      image: "images/ele.jpg",
      name: "Elephant",
      location: "Elephants are found in various habitats across Africa and Asia.",
      funFacts: "Elephants are known for their intelligence, strong social bonds, and their ability to use tools. They also have the largest brains among land animals."
    },
    {
      image: "images/fox.jpg",
      name: "Fox",
      location: "Inhabits the Arctic regions, including the Arctic tundra in North America, Europe, and Asia.",
      funFacts: "Arctic foxes have two layers of fur and change their fur color seasonally. They are brown in summer and white in winter for better camouflage."
    },
    {
      image: "images/hipo.jpg",
      name: "Hippopotamus",
      location: "Native to sub-Saharan Africa, where they inhabit rivers, lakes, and swamps.",
      funFacts: "Despite their appearance, hippos are considered one of the most dangerous animals in Africa. They are responsible for more human deaths on the continent than other large animals."
    }
  ];


  localStorage.setItem('aboutData', JSON.stringify(aboutData));
  localStorage.setItem('wildlifeLocationsData', JSON.stringify(wildlifeLocationsData));
  localStorage.setItem('animalTableData', JSON.stringify(animalTableData));


  window.onload = function() {
    var aboutText = document.getElementById('aboutText');
    var aboutData = JSON.parse(localStorage.getItem('aboutData'));
    aboutText.innerText = aboutData.text;

    var wildlifeLocations = document.getElementById('wildlifeLocations');
    var wildlifeLocationsData = JSON.parse(localStorage.getItem('wildlifeLocationsData'));
    wildlifeLocationsData.forEach(function(location) {
      var li = document.createElement('li');
      li.innerHTML = `<h2>${location.name}</h2><p>${location.description}</p><button><a href="${location.link}">Read More</a></button>`;
      wildlifeLocations.appendChild(li);
    });

    var animalTableBody = document.querySelector('#animalTable tbody');
    var animalTableData = JSON.parse(localStorage.getItem('animalTableData'));
    animalTableData.forEach(function(animal) {
      var tr = document.createElement('tr');
      tr.innerHTML = `<td><img src="${animal.image}" alt="${animal.name}" class="imgtable"></td><td>${animal.name}</td><td>${animal.location}</td><td>${animal.funFacts}</td>`;
      animalTableBody.appendChild(tr);
    });
  };


window.onload = function() {

    var aboutData = JSON.parse(localStorage.getItem('aboutData'));
    var wildlifeLocationsData = JSON.parse(localStorage.getItem('wildlifeLocationsData'));
    var animalTableData = JSON.parse(localStorage.getItem('animalTableData'));

    document.getElementById('aboutText').innerText = aboutData.text;

    var wildlifeLocations = document.getElementById('wildlifeLocations');
    wildlifeLocationsData.forEach(function(location) {
        var li = document.createElement('li');
        li.innerHTML = `<h2>${location.name}</h2><p>${location.description}</p><button><a href="${location.link}">Read More</a></button>`;
        wildlifeLocations.appendChild(li);
    });

    var animalTableBody = document.querySelector('#animalTable tbody');
    animalTableData.forEach(function(animal) {
        var tr = document.createElement('tr');
        tr.innerHTML = `<td><img src="${animal.image}" alt="${animal.name}" class="imgtable"></td><td>${animal.name}</td><td>${animal.location}</td><td>${animal.funFacts}</td>`;
        animalTableBody.appendChild(tr);
    });
};

  
