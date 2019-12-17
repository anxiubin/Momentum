const form = document.querySelector('.askName'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.greeting'),
    toDoList = document.querySelector('.toDoList'),
    pendingList = document.querySelector('.pendingList'),
    finishedList = document.querySelector('.finishedList'),
    name = document.querySelector('.name');

const USER_LS = 'currentUser',
    SHOWING = 'showing';

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    toDoList.classList.add(SHOWING);
    pendingList.classList.add(SHOWING);
    finishedList.classList.add(SHOWING);
    name.innerText = `${text}`;
}

function loadName(){
    const currenUser = localStorage.getItem(USER_LS);
    if(currenUser === null){
        askForName();
    } else{
        paintGreeting(currenUser);
    }
}

function init(){
    loadName();
}

init();