function greetings(greetingHandler , name) {
    greetingHandler(name);
}
// const names = 'Halim mama';
// const number = [45, 54, 78];
const laptop = {
    price: 45000,
    brand: 'Lenovo',
    memory: '8GB'
}
function greetingHandler(name){
    console.log('Good Morning',name);
}
function greetingEvening(name){
    console.log("Good Evening",name);
}
function greetNight(name){
    console.log('Good Night',name);
}
greetings(greetingHandler,'Tom hanks');
greetings(greetingHandler, 'Tom Bredy');
greetings(greetingEvening,'Tom Solaiman');
greetings(greetingEvening,'Tom Salman');
greetings(greetNight,'Rasel');
function submitHandler(){
    console.log('Submit Clicked');
}
document.getElementById('btn').addEventListener('click',submitHandler());
