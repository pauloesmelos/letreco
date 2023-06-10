export default function initCurentDate(){
   getCurrentDate();
}
const getCurrentDate = () => {
    const date = new Date().getUTCFullYear();
    const span = document.querySelector('.year');
    span.innerText = date;
}