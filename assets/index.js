import "./style.css";

import ancientsData from "../data/ancients.js";


import cardsDataBlue from "../data/mythicCards/blue/index";
import cardsDataBrown from "../data/mythicCards/brown/index";
import cardsDataGreen from "../data/mythicCards/green/index";



const ancient = document.querySelectorAll('.ancient__card');
const home = document.querySelector('.app');
const levelContainer = document.querySelector('.level__container');
const level = document.querySelectorAll('.level');
const playContainer = document.querySelector('.play__container')
const span = document.createElement('span');
const cart = document.createElement('div');
const playCart = document.createElement('div');





function createPlayDesk(){
    span.classList.add('button');
    playContainer.append(span);
    span.textContent = 'Замешать колоду';
}
function deletePlayDesk(){
    span.remove();
}




function createCurrentPlay(){
    span.remove();
    const currentState = document.createElement('div');
    currentState.classList.add('current_state');
    playContainer.append(currentState);
    for(let i=0; i<3; i++){
        let stageContainer = document.createElement('div');
        const stageText = document.createElement('span');
        const dotsContainer = document.createElement('div');
        const greenDot = document.createElement('div');
        const brownDot = document.createElement('div');
        const dotBlue = document.createElement('div');
        stageContainer.classList.add('stage_container');
        currentState.append(stageContainer);
        stageText.classList.add('stage_text');
        stageContainer.append(stageText)
        dotsContainer.classList.add('dots_container');
        stageContainer.append(dotsContainer)
        greenDot.classList.add('green');
        greenDot.classList.add('dot');
        dotsContainer.append(greenDot)
        brownDot.classList.add('brown');
        brownDot.classList.add('dot');
        dotsContainer.append(brownDot)
        dotBlue.classList.add('blue');
        dotBlue.classList.add('dot');
        dotsContainer.append(dotBlue);
        let arr = Array.prototype.slice.call(ancient)
        let m = 0;
        arr.forEach((n)=>{
            if (n.classList.contains('active')){
                m = (arr.indexOf(n))
            }
            return m
        })
    if (i == 0){
        greenDot.textContent = `${ancientsData[m].firstStage.greenCards}`
        brownDot.textContent = `${ancientsData[m].firstStage.brownCards}`
        dotBlue.textContent = `${ancientsData[m].firstStage.blueCards}`
        greenDot.classList.add('first')
        brownDot.classList.add('first')
        dotBlue.classList.add('first')
        stageText.textContent = 'Первая стадия';
    }
    else if (i == 1){
        greenDot.textContent = `${ancientsData[m].secondStage.greenCards}`
        brownDot.textContent = `${ancientsData[m].secondStage.brownCards}`
        dotBlue.textContent = `${ancientsData[m].secondStage.blueCards}`
        greenDot.classList.add('second')
        brownDot.classList.add('second')
        dotBlue.classList.add('second')
        stageText.textContent = 'Вторая стадия';
    }
    else if  (i == 2){
        greenDot.textContent = `${ancientsData[m].thirdStage.greenCards}`
        brownDot.textContent = `${ancientsData[m].thirdStage.brownCards}`
        dotBlue.textContent = `${ancientsData[m].thirdStage.blueCards}`
        greenDot.classList.add('third')
        brownDot.classList.add('third')
        dotBlue.classList.add('third')
        stageText.textContent = 'Третья стадия';
    }
    
}
    cart.classList.add('cart');
    currentState.append(cart);
    cart.style.backgroundImage = `url('./img/fon/mythicCardBackground.png')`
    playCart.classList.add('play-cart');
    currentState.append(playCart);
      changingThePlayingField()
}


home.style.backgroundImage = `url('./img/fon/home.png')`


function assignBackgroundToAncient(){
    ancient[0].style.backgroundImage = `url(${ancientsData[0].cardFace})`;
    ancient[1].style.backgroundImage = `url(${ancientsData[1].cardFace})`;
    ancient[2].style.backgroundImage = `url(${ancientsData[2].cardFace})`;
    ancient[3].style.backgroundImage = `url(${ancientsData[3].cardFace})`;
}

function selectActiveAncient(){
    for (let i = 0; i<ancient.length ; i++){
    ancient[i].addEventListener('click',function(){
        ancient.forEach(i => {
            i.classList.remove("active"); 
        });
        ancient[i].classList.add('active')
        levelContainer.style.display = 'flex';
        for (let j = 0; j<level.length ; j++){
          level[j].addEventListener('click',function(){
            level.forEach(j => {
                deletePlayDesk(); 
                j.classList.remove("active"); 
            });
            level[j].classList.add('active')
            createPlayDesk()
            span.addEventListener('click',createCurrentPlay)
            const currentState = document.querySelector('.current_state')
            if(currentState != undefined){
            currentState.remove();
            }
          })
        }
        const currentState = document.querySelector('.current_state')
        if(currentState != undefined){
        currentState.remove();
        createPlayDesk()
        }
    })
  }
}

function changingThePlayingField(){
    const shuffle = () => {
        cardsDataGreen.sort(() => Math.round(Math.random() * 100) - 50);
        cardsDataBrown.sort(() => Math.round(Math.random() * 100) - 50);
        cardsDataBlue.sort(() => Math.round(Math.random() * 100) - 50);
        for (let i = 0; i<cardsDataGreen.length; i++){
        let greenMix = cardsDataGreen[i]
        return greenMix
        }
      return
    }
    shuffle()
    let arr =[];
    const dots = document.querySelectorAll('.dot')
    for (let i = 0; i<dots.length;i++){
    let number = Number(dots[i].textContent)
    arr.push(number)
    }
    const cart = document.querySelector('.cart')
    if(cart != undefined){
    let g=0;
    let br=0;
    let bl=0;
    cart.addEventListener('click',function(){
    ShowPlayCart()
    for (let j = 0; j < arr.length; j++){
      while (arr[j] > 0){
        if (arr[j] > 0){
            arr[j]=arr[j]-1     
                document.querySelector('.green.first').textContent = `${arr[0]}`
                document.querySelector('.brown.first').textContent = `${arr[1]}`
                document.querySelector('.blue.first').textContent = `${arr[2]}`
                document.querySelector('.green.second').textContent = `${arr[3]}`
                document.querySelector('.brown.second').textContent = `${arr[4]}`
                document.querySelector('.blue.second').textContent = `${arr[5]}`
                document.querySelector('.green.third').textContent = `${arr[6]}`
                document.querySelector('.brown.third').textContent = `${arr[7]}`
                document.querySelector('.blue.third').textContent = `${arr[8]}`
                }return 
            }
        }

function ShowPlayCart(){
    const level = document.querySelectorAll('.level');
    let b = 0;
    function ShowActiveLevel(){
    for(let i = 0; i<level.length; i++){
        if (level[i].classList.contains('active')){
            b = i
        }
    }
     return b
    }
    function getLevelName(){
        let levelName = '';
        if (ShowActiveLevel() == 0){
            levelName = 'easy'
            return levelName
        }
        if (ShowActiveLevel() == 1){
            levelName = 'easy-normal'
            return levelName
        }
        if (ShowActiveLevel() == 2){
            levelName = 'normal'
            return levelName
        }
        if (ShowActiveLevel() == 3){
            levelName = 'hard-normal'
            return levelName
        }
        if (ShowActiveLevel() == 4){
            levelName = 'hard'
            return levelName
        }
        return
    }


    
    let first = document.querySelector('.green.first').textContent

    let second = document.querySelector('.brown.first').textContent

    let third = document.querySelector('.blue.first').textContent

    let four = document.querySelector('.green.second').textContent

    let five = document.querySelector('.brown.second').textContent

    let six = document.querySelector('.blue.second').textContent

    let seven = document.querySelector('.green.third').textContent

    let eight = document.querySelector('.brown.third').textContent

    let nine = document.querySelector('.blue.third').textContent



function getGreenId(){
    let green = []
    let greenArr =[]
    if (getLevelName() =='easy' || getLevelName() =='hard'){
    for (let i = 0; i<cardsDataGreen.length; i++){
        green = [cardsDataGreen[i].id]
        if(cardsDataGreen[i].difficulty == getLevelName()){
        greenArr.push(...green)
        }
    }
    console.log(greenArr.length)
    for (let i = 0; i<cardsDataGreen.length; i++){
        if(greenArr.length < 6){
            if(cardsDataGreen[i].difficulty == 'normal'){
            green = [cardsDataGreen[i].id]
            greenArr.push(...green)  
        }
    }
}
} else if(getLevelName() =='easy-normal'){
    for (let i = 0; i<cardsDataGreen.length; i++){
        green = [cardsDataGreen[i].id]
        if(cardsDataGreen[i].difficulty == 'easy'){
        greenArr.push(...green)
        }
    }
    for (let i = 0; i<greenArr.length; i++){
        if(greenArr.length <= 5){
            if(cardsDataGreen[i].difficulty == 'normal'){
            green = [cardsDataGreen[i].id]
            greenArr.unshift(...green)   
        }
    }
}
}else if(getLevelName() =='normal'){
    for (let i = 0; i<cardsDataGreen.length; i++){
        green = [cardsDataGreen[i].id]
        greenArr.push(...green)
    }
}else if(getLevelName() =='hard-normal'){
    for (let i = 0; i<cardsDataGreen.length; i++){
        green = [cardsDataGreen[i].id]
        if(cardsDataGreen[i].difficulty == 'hard'){
        greenArr.push(...green)
        }
    }
    console.log(greenArr.length)
    for (let i = 0; i<greenArr.length; i++){
        if(greenArr.length == 5){
            if(cardsDataGreen[i].difficulty == 'normal'){
            green = [cardsDataGreen[i].id]
            greenArr.unshift(...green)  
            greenArr.unshift(...green)  
        }
    }
}
}

    return greenArr
}

function getBlueId(){
    let blue = []
    let blueArr =[]
    if (getLevelName() =='easy' || getLevelName() =='hard'){
    for (let i = 0; i<cardsDataBlue.length; i++){
        blue = [cardsDataBlue[i].id]
        if(cardsDataBlue[i].difficulty == getLevelName()){
        blueArr.push(...blue)
        }
    }
} else if(getLevelName() =='easy-normal'){
    for (let i = 0; i<cardsDataBlue.length; i++){
        blue = [cardsDataBlue[i].id]
        if(cardsDataBlue[i].difficulty == 'easy'){
        blueArr.push(...blue)
        }
    }
    console.log(blueArr.length)
    for (let i = 0; i<blueArr.length; i++){
        if(blueArr.length == 5){
            if(cardsDataBlue[i].difficulty == 'normal'){
            blue = [cardsDataBlue[i].id]
            blueArr.unshift(...blue)  
            blueArr.unshift(...blue)  
            blueArr.unshift(...blue)  
        }
    }
}
}else if(getLevelName() =='normal'){
    for (let i = 0; i<cardsDataBlue.length; i++){
        blue = [cardsDataBlue[i].id]
        blueArr.push(...blue)
    }
}else if(getLevelName() =='hard-normal'){
    for (let i = 0; i<cardsDataBlue.length; i++){
        blue = [cardsDataBlue[i].id]
        if(cardsDataBlue[i].difficulty == 'hard'){
        blueArr.push(...blue)
        }
    }
    console.log(blueArr.length)
    for (let i = 0; i<blueArr.length; i++){
        if(blueArr.length == 5){
            if(cardsDataBlue[i].difficulty == 'normal'){
            blue = [cardsDataBlue[i].id]
            blueArr.unshift(...blue)  
            blueArr.unshift(...blue)  
        }
    }
}
}
return blueArr
}

console.log(getGreenId())

function getBrownId(){
    let brown = []
    let brownArr =[]
    if (getLevelName() =='easy' || getLevelName() =='hard'){
    for (let i = 0; i<cardsDataBrown.length; i++){
        brown = [cardsDataBrown[i].id]
        if(cardsDataBrown[i].difficulty == getLevelName()){
          brownArr.push(...brown)
        }
    }
    console.log(brownArr.length)
    for (let i = 0; i<cardsDataBrown.length; i++){
        if(brownArr.length < 9){
            if(cardsDataBrown[i].difficulty == 'normal'){
            brown = [cardsDataBrown[i].id]
            brownArr.push(...brown)  
        }
    }
}
}if(getLevelName() =='easy-normal'){
    for (let i = 0; i<cardsDataBrown.length; i++){
        brown = [cardsDataBrown[i].id]
        if(cardsDataBrown[i].difficulty == 'easy'){
        brownArr.push(...brown)
        }
    }
    for (let i = 0; i<brownArr.length; i++){
        if(brownArr.length <9){
            if(cardsDataBrown[i].difficulty == 'normal'){
            brown = [cardsDataBrown[i].id]
            brownArr.push(...brown)  
        }
    }
}
}else if(getLevelName() =='hard-normal'){
    for (let i = 0; i<cardsDataBrown.length; i++){
        brown = [cardsDataBrown[i].id]
        if(cardsDataBrown[i].difficulty == 'hard'){
        brownArr.push(...brown)
        }
    }
    console.log(brownArr.length)
    for (let i = 0; i<brownArr.length; i++){
        if(brownArr.length < 9){
            if(cardsDataBrown[i].difficulty == 'normal'){
            brown = [cardsDataBrown[i].id]
            brownArr.unshift(...brown)  
        }
    }
}
}else if(getLevelName() =='normal'){
    for (let i = 0; i<cardsDataBrown.length; i++){
        brown = [cardsDataBrown[i].id]
        brownArr.push(...brown)
    }
}
return brownArr
}



let greenarr =[];
let bluearr =[];
let brownarr=[];


function getGrImgName(){
        if(first>0 && first!==0||(second ==0 && third==0 && four>0)||(six==0 && seven>0)){
        let tmp = g;
        g = tmp;
        if(g<=getGreenId().length){
            greenarr.push(getGreenId()[g]); 
            g++
        }
        return greenarr
    }
}

function getBrImgName(){
        if(second>0 && first==0||(four==0 && five>0)||(seven==0 && eight>0)){
        let tmp = br;
        br = tmp;
        brownarr.push(getBrownId()[br])
        br++
        }
        return brownarr
    } 

function getblImgName(){
        if(third>0 && second==0||(five==0 && six>0)||(eight==0 && nine>0)){
        let tmp = bl;
        bl = tmp;
        bluearr.push(getBlueId()[bl])
        bl++
        }return bluearr
    } 
    

    if(first>0 && first!==0||(first ==0 && second ==0 && third==0 && four>0)||(four==0 && five==0 && six==0 && seven>0)){
        playCart.style.backgroundImage = `url('./img/MythicCards/green/${getGrImgName()[0]}.png')`
    }
    if(second>0 && first==0||(second ==0 && third==0 && four==0 && five>0)||(six==0 && seven==0 && eight>0)){
        playCart.style.backgroundImage = `url('./img/MythicCards/brown/${getBrImgName()[0]}.png')`
    }
    if(third>0 && second==0||(five==0 && six>0)||(eight==0 && nine>0)){
        playCart.style.backgroundImage = `url('./img/MythicCards/blue/${getblImgName()[0]}.png')`
    }
    if((eight==0 && nine==0)){
        playCart.style.backgroundImage = ``;
        const bcg = document.createElement('div');
        playContainer.append(bcg)
        bcg.classList.add('bcg')
        const finishGame = document.createElement('div');
        playContainer.append(finishGame)
        finishGame.classList.add('finish')
        finishGame.textContent = 'Игра окончена!'
        bcg.addEventListener('click', function(){
            location.reload()
        })
        
    }
}
      })
    }
    for (let i = 0; i<ancient.length ; i++){
        ancient[i].addEventListener('click',function(){
            for (let j = 0; j<level.length ; j++)
            if(level[j].classList.contains('active')){
                location.reload()
            }

        })
        level[i].addEventListener('click',function(){
            if(level[i].classList.contains('active')){
                location.reload()
            }
        })
    }
}



assignBackgroundToAncient()
selectActiveAncient()
changingThePlayingField()





