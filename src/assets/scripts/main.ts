function buttonEventListener(){
    const buttonElement = document.getElementById('ham') !;
    const callback = (): void=>{
        if(buttonElement !== null){
            buttonElement.classList.add('remove');
        }
    }

    buttonElement.addEventListener('click',callback);
}

function eventListeners(){
    buttonEventListener();
}

export default function main(){
    eventListeners();
}

main();