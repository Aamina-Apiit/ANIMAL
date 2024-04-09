var column1 = [
      {
        title: "Wild Life conservation",
        description: " Wildlife conservation entails protecting and preserving wildlife and their habitats in order to promote ecosystem sustainability and species survival. Here are some important issues of wildlife conservation:  Wildlife conservation is a multidimensional activity that necessitates collaboration on the local, national, and international levels. It combines scientific research, community participation, policy formation, and on-the-ground initiatives to secure the survival and well-being of the planet's different species."
      }
    ];

  localStorage.setItem('column1', JSON.stringify(column1));

  var storedColumn1= localStorage.getItem('column1');
  var parsedColumn1 = JSON.parse(storedColumn1);


  function populateHeading() {
    document.getElementById('wilpattuNational-description').textContent = parsedColumn1 [0].description;
    document.getElementById('wilpattuNational-title').textContent = parsedColumn1 [0].title;
  };
  
  
  populateHeading();
