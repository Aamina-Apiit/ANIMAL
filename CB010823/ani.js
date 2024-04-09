 var headingData = {
    title: "Indigenious Animals in Sri lanka",
    description: " Sri Lanka, a South Asian island nation, is home to a diverse range of indigenous species. The island's distinct ecosystems, which range from lush rainforests to parched plains, provide habitat for a wide variety of species found nowhere else on the planet.  One of the most well-known indigenous animals is the Sri Lankan elephant (Elephas maximus maximus), a subspecies of the Asian elephant. These gentle giants wander a variety of settings, including national parks and animal reserves, helping to shape the country' cultural and natural identity. The Sri Lankan leopard (Panthera pardus kotiya) is the top predator in the island's deep rainforests. The Sri Lankan leopard, known for its striking golden coat with dark rosettes, represents the island's untamed wildness. The indigenous purple-faced langur (Semnopithecus vetulus) swings through the trees of Sri Lanka's mountain forests. This primate species, known for its bright fur and expressive facial characteristics, contributes to the island's biodiversity. "
  };
  
  
  var contentData = {
    column1: {
      paragraph1: "Sri Lanka also has a diverse bird population, including endemics such as the Sri Lanka junglefowl (Gallus lafayettii), a national bird recognised for its distinctive plumage. The island's avian treasures include the Serendib scops owl (Otus thilohoffmanni) and the Sri Lanka spurfowl (Galloperdix bicalcarata).",
      paragraph2: " As an important component of Sri Lanka's natural history, these indigenous species confront a number of conservation concerns, including habitat degradation, human-wildlife conflict, and poaching. Conservation organisations and local communities work together to safeguard and preserve these unique species, so that future generations can marvel at the incredible wildlife that lives in Sri Lanka.",
      imageUrl: "images/wildlife1.jpg"
    },
    column2: {
      yalaNational: {
        title: "Yala National",
        imageUrl: "images/ynp.webp",
        description: " Yala National Park is one of Sri Lanka's top wildlife destinations, known for its varied ecosystems and an abundance of species. It is located in the southeast of the country. Yala is a large region that consists of both scrublands and dense woods. It is distinguished by a range of ecosystems that are home to a diverse range of flora and wildlife.",
        link: "yalaNational.html"
      },
      wilpattuNational: {
        title: "Wilpattu National",
        imageUrl: "images/wnp.webp",
        description: "The biggest and one of the oldest national parks in Sri Lanka is Wilpattu National Park, which is situated in the northwest of the island. Wilpattu, a region well-known for its biodiversity and natural beauty, is made up of a variety of habitats, such as broad grassy plains, dense scrublands, and picturesque lakes, which offer a variety of settings for a variety of wildlif",
        link: "wilpattuNatinal.html"
      }
    }
  };
  

  localStorage.setItem('headingData', JSON.stringify(headingData));
  localStorage.setItem('contentData', JSON.stringify(contentData));

  var storedHeadingData = localStorage.getItem('headingData');
  var parsedHeadingData = JSON.parse(storedHeadingData);

  var storedContentData = localStorage.getItem('contentData');
  var parsedContentData = JSON.parse(storedContentData);





  function populateHeading() {
    document.getElementById('heading-description').textContent = parsedHeadingData.description;
  }

  function populateContent() {
    var column1 = contentData.column1;
    var column2 = contentData.column2;
  
    
    document.getElementById('content-paragraph1').textContent = column1.paragraph1;
    document.getElementById('content-paragraph2').textContent = column1.paragraph2;

    document.getElementById('yalaNational-image').src = column2.yalaNational.imageUrl;
    document.getElementById('yalaNational-description').textContent = column2.yalaNational.description;
    document.getElementById('yalaNational-link').href = column2.yalaNational.link;

   document.getElementById('wilpattuNational-image').src = column2.wilpattuNational.imageUrl;
   document.getElementById('wilpattuNational-description').textContent = column2.wilpattuNational.description;
   document.getElementById('wilpattuNational-link').href = column2.wilpattuNational.link;
  };
  

  populateHeading();
  populateContent();

  
  