// alert('check');

const pasteCard = (card)=>{
    const swimlanes = document.querySelectorAll('.swimlane');
    const randomSwimlanes = Math.floor(Math.random() * swimlanes.length);
    swimlanes[randomSwimlanes].appendChild(card);
}

const CreateCard = (index) =>{
    const CardElement = document.createElement('div');
    CardElement.className = 'card'
    CardElement.innerText = `CARD  -  ${index}`
    CardElement.draggable = 'true'

    CardElement.addEventListener('dragstart',(e)=>{
        e.target.id = 'dragged';
    });

    CardElement.addEventListener('dragend',(e)=>{
        e.target.id = 'undragged';
    });

    pasteCard(CardElement)
}



// naming cards
const CreateCards = (amount) =>{
    for(let i=0; i < amount; i++){  
        const cardnames = ["I","II","III","IV","V","VI","VII","VIII","IX","X"]; // creating an array for card name 
        CreateCard(cardnames[i]); // runs i++ with the array names located in cardnames
    }
}

addEventListenerToSwimlanes = () => {
    const swimlanes = document.querySelectorAll('.swimlane');
    for (let i=0; i<swimlanes.length; i++){
        swimlanes[i].addEventListener('dragover',(e)=>{
            e.preventDefault();
        });

        swimlanes[i].addEventListener('drop',(e)=>{
            e.preventDefault();

            const draggedCards = document.querySelector('#dragged');
            draggedCards.parentNode.removeChild(draggedCards);
            e.currentTarget.appendChild(draggedCards);
        })
    }
}

CreateCards(10);
addEventListenerToSwimlanes();