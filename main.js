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

var header = $('<div>');
var mainContainer = $('<div>');
var pictureContainer = $('<div>');
var footer = $('<div>');



var modal = $('.modal');
var imageSrc = $('.imageSrc');

header.text('PuppyGram');

header.addClass('header-text');

mainContainer.addClass('main-container');
pictureContainer.addClass('picture-container');
footer.addClass('footer');

$('body').append(header);
$('body').append(mainContainer);
$('.main-container').append(pictureContainer);
$('body').append(footer);


images.forEach(function(image, i) {
    var selectImage = $('.picture-container');
    var thumbNailDiv = $('<div>');
    var newImage = $('<img>');
    

    var toggleHandler = function(event) {   
        modal.toggleClass('show-modal')
        imageSrc.attr('src', image.link);
        console.log(event);
    };

    newImage.on('click', toggleHandler);    
    newImage.attr('src', image.link)
    selectImage.append(thumbNailDiv);
    thumbNailDiv.append(newImage);

});
