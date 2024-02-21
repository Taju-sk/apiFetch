document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.npoint.io/7bbd3a59c401f616bb89"
    );
    const data = await response.json();

    // Log the data to the console to inspect its structure
    console.log(data);

    // Check if the response has the expected property 'places' which is an array
    if (Array.isArray(data.places)) {
      displayCities(data.places);
    } else {
      console.error(
        'Data received from the API does not have the expected "places" property.'
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function displayCities(cities) {
  const container = document.getElementById("city-container");

  cities.forEach((city) => {
    const cityCard = document.createElement("div");
    cityCard.classList.add("city-card");

    const cityName = document.createElement("h2");
    cityName.textContent = city.name;

    const cityDetails = document.createElement("p");
    cityDetails.textContent = ` ${city.info}`;

    const imageContainer = document.createElement("div");
    imageContainer.id = "imageContainer";
    cityCard.appendChild(imageContainer);

    const cityImage = document.createElement("img");
    cityImage.setAttribute("src", city.image);
    cityImage.classList.add("images");

    cityCard.appendChild(cityName);
    cityCard.appendChild(cityDetails);
    imageContainer.appendChild(cityImage);

    container.appendChild(cityCard);
  });
}