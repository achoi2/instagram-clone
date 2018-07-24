var images = [
  {
    description: "dog1",
    link:
      "http://cdn3-www.dogtime.com/assets/uploads/2011/03/puppy-development-460x306.jpg"
  },
  {
    description: "dog2",
    link:
      "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456.jpg?w=590&h=393&526ED1E1-34FF-4472-B348B8B4769AB2A1"
  },
  {
    description: "dog3",
    link: "http://cdn2-www.dogtime.com/assets/uploads/2016/08/corgi-puppy-6.jpg"
  },
  {
    description: "dog4",
    link: "http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg"
  },
  {
    description: "dog5",
    link: "http://pawsitivepuppies.com/wp-content/uploads/2011/08/DSC_7822.jpg"
  },
  {
    description: "dog6",
    link: "http://elcamion.co.uk/assets/2015/03/Chihuahua-Puppies.jpg"
  }
];

var header = document.querySelector(".header-text");
header.textContent = "PuppyGram";

var mainContainer = document.querySelector(".main-container");

var modal = document.querySelector(".myModal");
var button = document.querySelector(".mybutton");

var span = document.querySelector(".close");

button.addEventListener("click", function() {
  modal.style.display = "block";
});

span.addEventListener("click", function() {
  modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

for (var image of images) {
  var listItem = document.createElement("li");
  listItem.classList.add("dog-list");

  var puppyImage = document.createElement("img");
  puppyImage.setAttribute("src", image.link);

  var description = document.createElement("h3");
  description.textContent = image.description;

  listItem.appendChild(puppyImage);
  listItem.appendChild(description);
  mainContainer.appendChild(listItem);
}

var lightBoxHandler = function(event) {
  console.log("element clicked");
};

mainContainer.addEventListener("click", lightBoxHandler);
