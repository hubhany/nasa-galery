let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=o5ucpasqNPdxPPIJc1PLlxzPmUGA5uWZ8ckM1vxu';

let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=o5ucpasqNPdxPPIJc1PLlxzPmUGA5uWZ8ckM1vxu";

let gallery = document.getElementById('content');

function changeBackground(imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')";
}

function getPicture() {
    fetch(dataURL)
        .then((resp) => {
           return resp.json();
        })
        .then((data) => {
            changeBackground(data.hdurl)
        });
}

getPicture();

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let picturesList = data.photos;
            createGallery(picturesList)
            // console.log(picturesList)
        });
}

getMarsPicture();

function createGallery(dataList) {
    for(let i=0; i<9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i].img_src;
        img.src = imgPath;
        gallery.appendChild(img)
        // console.log(dataList[i].img_src)
    }
}

createGallery();