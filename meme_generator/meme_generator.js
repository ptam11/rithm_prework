var memeLink = document.querySelector("#memeLink");
var topMemeQuote = document.querySelector("#topMemeQuote");
var bottomMemeQuote = document.querySelector("#bottomMemeQuote");
var formInputs = [memeLink, topMemeQuote, bottomMemeQuote];
var previewMeme = document.querySelector("article.previewMeme");
var articleMeme = document.querySelector("article.meme");
var articleMemeDiv = document.querySelector("article.meme div");
var createButton = document.querySelector(".createButton");
var removeButton = document.querySelector(".removeButton");

//any change in preview inputs generates preview
for(let input of formInputs){
    input.addEventListener("change", function(){
        try {
            removeMeme(previewMeme);
            meme(previewMeme);
        }
        catch(err){
        }    
    })
}

createButton.addEventListener("click", function(){
    meme(articleMeme);
    removeMeme(previewMeme);
    createItem("div","previewContainer", previewMeme);
})

removeButton.addEventListener("click", function(){
    removeMeme(articleMeme);
})

function removeMeme(parentVar){
    if(parentVar === previewMeme){
        container = "previewContainer";
    } else if(parentVar === articleMeme){
        container = "memeContainer";
    }  
    var removeEle = document.querySelectorAll("div." + container);
    return removeEle.forEach(function(val){
        val.remove();
    })      
}

function meme(parentVar){
    if(parentVar === previewMeme){
        container = createItem("div","previewContainer",parentVar);
    } else if(parentVar === articleMeme){
        container = createItem("div","memeContainer",parentVar);
    }    
    newImg = createItem("img","newMemeImage", container)
    newImg.src = memeLink.value;

    newTopQuote = createItem("div","newMemeQuote top", container);
    newTopQuote.innerText = topMemeQuote.value;
    
    newBottomQuote = createItem("div","newMemeQuote bottom", container);
    newBottomQuote.innerText = bottomMemeQuote.value;

    if(parentVar === articleMeme){
        memeLink.value = null;
        topMemeQuote.value = null;
        bottomMemeQuote.value = null;
    } 
}

function createItem(eleType, classStr, parentVar){
    var newEle = document.createElement(eleType);
    newEle.className = classStr;
    parentVar.appendChild(newEle);
    return newEle;
}