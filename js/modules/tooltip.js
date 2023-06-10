export default function initTooltip(){

}
const iconHelp = document.querySelector('.ajuda');
const tooltip = document.querySelector('.tooltip');
//
const action = ({type}) => { // desestruturando o event.type
    type === 'mouseover' ? tooltip.classList.add('active') : tooltip.classList.remove('active');
};
const events = ['mouseover','mouseout'];
events.forEach((e,i) => {
    iconHelp.addEventListener(e,action);
});