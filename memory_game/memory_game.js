//selecting from html
var all_cards = document.querySelectorAll(".card");
var counter = document.querySelector(".counter");

//control image selection
var back_of_card_img = "back_of_card.png";
var front_of_card_img_arr = ["1.png", "2.jpg", "2.png", "3.jpg", "4.jpg", "5.jpg", "6.jpeg", "7.jpg", "8.jpg", "9.jpeg", "10.jpeg", "11.jpg"];
var front_of_card_img_arr_concat = front_of_card_img_arr.concat(front_of_card_img_arr);

var guess_counter = 0;
var guessArr = [];
//set up
for(let card of all_cards){
    create_card(card, back_of_card_img, "card_back");
}
for(let card of all_cards){
    var frontArr = front_of_card_img_arr_concat;
    var frontArrNum = Math.round(Math.random() * (front_of_card_img_arr_concat.length - 1));
    create_card(card, frontArr[frontArrNum], "card_front invisible"); 
    frontArr.splice(frontArrNum, 1);
}    


//flipping
var unflipped_cards = document.querySelectorAll(".unflipped");
for(let flip of unflipped_cards){
    flip.addEventListener("click", function(){
        var flip_back = flip.querySelector(".card_back");
        var flip_front = flip.querySelector(".card_front");
        if(guessArr.length === 0 && !flip.classList.contains("correct")){
            swap_class(flip, flip_back, flip_front, "invisible");
            flip.classList.remove("unflipped");
            flip.classList.add("guess");
            guessArr.push(flip.id);
            console.log(guessArr)
        } else if(guessArr.length === 1 && !flip.classList.contains("guess") && !flip.classList.contains("correct")){
            swap_class(flip, flip_back, flip_front, "invisible");
            flip.classList.remove("unflipped");
            var guessCard = document.querySelector(".guess");
            var guessCard_back = guessCard.querySelector(".card_back");
            var guessCard_front = guessCard.querySelector(".card_front");
            //correct guess
            if(flip.id === guessArr[0]){
                console.log("correct " + flip);
                flip.classList.add("correct");
                guessCard.classList.add("correct");                
            } else if(flip.id !== guessArr[0]){
                console.log("incorrect "+ flip);
                flip.classList.add("unflipped");
                guessCard.classList.add("unflipped");
                setTimeout(function(){
                    swap_class(flip, flip_front, flip_back, "invisible");
                    swap_class(guessCard, guessCard_front, guessCard_back, "invisible");
                }, 1000);
            }
            guessCard.classList.remove("guess");
            guess_counter += 1;
            counter.innerText = guess_counter;
            guessArr =[];
        }    
    });
        
}



//set up
function create_card(ele, image_link, classCard){
        var newImg = document.createElement("img");
        newImg.className = classCard;
        ele.id = image_link;
        newImg.src = image_link;
        ele.appendChild(newImg);
}

//flipping
function swap_class(containerEle, ele1, ele2, classPoint){
    containerEle.classList.add(classPoint);
    ele1.classList.add(classPoint);
    ele2.classList.remove(classPoint);
    containerEle.classList.remove(classPoint);
    }



