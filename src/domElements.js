function createParagraph(content){
    const para = document.createElement('p');
    para.textContent = content.toString();
    return para;
};

function createListChild(content){
    const li = document.createElement('li');
    li.textContent = content;
    return li;
};

function createHeader3(content){
    const h3 = document.createElement('h3');
    h3.textContent = content;
    return h3;
}

function createImage(src,alt = 'NA'){
    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    // img.style.height = '8rem'
    return img;
};

export {createParagraph, createListChild, createHeader3,createImage}