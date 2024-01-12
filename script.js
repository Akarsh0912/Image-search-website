const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-button');
const showMoreBtn = document.getElementById('show-more-btn');
const showImage = document.querySelector('.show-image');

const accessKey= "nQPZRdHp-1Wl4hm4Xf0rumh5Uek5B1C-J9x1oW9vxpU";

let keyword;
let page=1;


async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const url_response =await fetch(url);

    const url_json = await url_response.json();

    const url_data = url_json.results;
    if(page===1){
        showImage.innerHTML='';
    }


    url_data.forEach(element => {

        const image = document.createElement('img');
        image.src  = element.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = element.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        showImage.append(imageLink)

        
        
    });
    showMoreBtn.style.display ="block"

}

document.getElementById('search-form').addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

showMoreBtn.addEventListener('click',()=>{
    page++;
    searchImage();
});



