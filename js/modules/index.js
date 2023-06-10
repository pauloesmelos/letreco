export default function initIndex(){

}
import { Word } from "../classes/Word.js";
import { GenerateWord } from "../classes/GenerateWord.js";

// elements
const keyboards = document.querySelectorAll('.key');
const btnRemove = document.querySelector('.remove');
const btnOk = document.querySelector('.ok');
const btnReset = document.querySelector('[data-button="reset"]');
const word = new Word('[data-letter="true"]');
const randomWord = new GenerateWord('[data-letter="true"]');

// functions
const fillLetter = ({target}) => {
    word.fill(target.innerText);
};
const subtractLetter = ({target}) => {
    word.subtract();
};
const clearAll = () => {
    word.clear();
};
const checkWord = () => {
    if(!word.isIncomplet()){
        if(randomWord.check())
            word.resetCounterSquareFilled();
    }
}

// add events
keyboards.forEach((element,index) => {
    element.addEventListener('click', fillLetter);
});
btnRemove.addEventListener('click', subtractLetter);
btnOk.addEventListener('click', checkWord);
btnReset.addEventListener('click', clearAll);