var images = [
  {
    description: 'dog1',
    link:
      'http://cdn3-www.dogtime.com/assets/uploads/2011/03/puppy-development-460x306.jpg'
  },
  {
    description: 'dog2',
    link:
      'https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456.jpg?w=590&h=393&526ED1E1-34FF-4472-B348B8B4769AB2A1'
  },
  {
    description: 'dog3',
    link:
      'http://cdn2-www.dogtime.com/assets/uploads/2016/08/corgi-puppy-6.jpg'
  },
  {
    description: 'dog4',
    link: 'http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg'
  },
  {
    description: 'dog5',
    link:
      'http://pawsitivepuppies.com/wp-content/uploads/2011/08/DSC_7822.jpg'
  },
  {
    description: 'dog6',
    link: 'http://elcamion.co.uk/assets/2015/03/Chihuahua-Puppies.jpg'
  }
];

var header = document.createElement('div');
var mainContainer = document.createElement('div');
var pictureContainer = document.createElement('div');

var modal = document.querySelector('.modal');




header.textContent = 'PuppyGram';


header.classList.add('header-text');
mainContainer.classList.add("main-container");
pictureContainer.classList.add("picture-container")

document.querySelector('body').appendChild(header);
document.querySelector('body').appendChild(mainContainer);
document.querySelector('.main-container').appendChild(pictureContainer)

var toggleHandler = function () {
  modal.classList.toggle('show-modal')
  console.log(image)
}


for (var i = 0; i < images.length; i++) {
  (function() {
    var selectImage = document.querySelector('.picture-container')
    var thumbNailDiv = document.createElement('div');
    var newImage = document.createElement('img');
    var image = images[i]

    // var toggleHandler = function () {
    //   modal.classList.toggle('show-modal')
    //   console.log(image)
    // }

    selectImage.addEventListener('click', toggleHandler);

    newImage.src = images[i].link;
    thumbNailDiv.setAttribute('data-index', i);



    selectImage.appendChild(thumbNailDiv);
    thumbNailDiv.appendChild(newImage);
  })();
}