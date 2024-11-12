// alert('check');

// ALL COMMENTS ARE WRITEN BY ME AND NOT GPT >:( [i have short term memory loss so i remind myself every line]

// .examplename = getting from class 
// #exmaplename = getting from id

const pasteCard = (card)=>{
    const swimlanes = document.querySelectorAll('.swimlane'); // collecting all elements within class swimlane
    const randomSwimlanes = Math.floor(Math.random() * swimlanes.length); // function random winthin length of swimlane 
    swimlanes[randomSwimlanes].appendChild(card);             // make collected elements and append in each card randomly
}



const CreateCard = (index) =>{
    const CardElement = document.createElement('div'); // 
    CardElement.className = 'card'
    CardElement.innerText = `-\xa0\xa0\xa0\xa0${index}` // "\xa0" is a no space break char in js
    CardElement.draggable = 'true'

    CardElement.addEventListener('dragstart',(e)=>{ // adding function when dragged [dragstart]
        e.target.id = 'dragged';                    // make dragged element assign "dragged" as id
    });

    CardElement.addEventListener('dragend',(e)=>{  // adding function when release [dragend]
        e.target.id = 'undragged';                 // make released element assign "undragged" as id
    });


    const DELETE_BUTTON = document.createElement('button'); // making delete button within each lane
    CardElement.appendChild(DELETE_BUTTON)                  // adding delete button as a child in lane
    DELETE_BUTTON.addEventListener('click',() => {          
        PARENT = DELETE_BUTTON.parentElement                // when lane is parent make each lane as child and remove parent (each lane)
        PARENT.remove()
});
    DELETE_BUTTON.className = 'delete'
    DELETE_BUTTON.innerText = 'DELETE'

    pasteCard(CardElement) 
}



const ADD_BUTTON = document.getElementById("btn");  // linking button
const INPUT = document.getElementById("input"); // linking input 

ADD_BUTTON.addEventListener('click',() => {         // on click button
    const Userinput = INPUT.value;              // get value in userinput
               
    if(Userinput != "" && Userinput != null){   // create card with input ( + functions in CreateCard ) when input isn't empty
        CreateCard(Userinput); };                   
    INPUT.value = "";                           // clear input box
});




// naming cards
const CreateCards = (amount) =>{
    for(let i=0; i < amount; i++){  
        const cardnames = ["ENGLISH","THAI","SPORTS","CODING","SCIENCE","HISTORY","SOCIAL","MATH","ART","MUSIC"]; // creating an array for card name 
        CreateCard(cardnames[i]); // runs i++ with the array names located in cardnames
    }
    
}

//making titles draggable
addEventListenerToSwimlanes = () => {
    const swimlanes = document.querySelectorAll('.swimlane'); // collecting all titles in swimlanes from class swimlanes + functions
    for (let i=0; i<swimlanes.length; i++){                   // giving functions to each titles in swimlanes 
        swimlanes[i].addEventListener('dragover',(e)=>{       
            e.preventDefault();                               // preventing elements not bugging + verifying titles as dragover when dragged
        });

        swimlanes[i].addEventListener('drop',(e)=>{          // preventing elements not bugging + verifying titles as drop when dropped
            e.preventDefault();

            const draggedCards = document.querySelector('#dragged'); // when id recognize as "dragged" from CreateCards
            draggedCards.parentNode.removeChild(draggedCards);  // remove the dragged card from selection 
            e.currentTarget.appendChild(draggedCards);          // append the element to said target
        })
    }
}


CreateCards(10);
addEventListenerToSwimlanes();