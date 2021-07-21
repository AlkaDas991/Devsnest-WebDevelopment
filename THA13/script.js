const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
    let meme_div = document.querySelector('.meme');
    meme_div.innerHTML = '';
    fetch('https://meme-api.herokuapp.com/gimme')
    .then( resp => resp.json())
    .then( data => {
        let url = data.url;
        let img = document.createElement("img");
        img.setAttribute("src", `${url}`);
        meme_div.appendChild(img);
    })
})
