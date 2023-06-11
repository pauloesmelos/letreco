export class Word{
    // Classe responsável por manipular os quadradinhos que contêm as letras
    constructor(element){
        this.squares = document.querySelectorAll(element);
        this.squareFilled = 0;
        this.squareGlobal = 0;
    }
    fill(string){
        if(this.squareFilled < 5){
            this.squares[this.squareGlobal].innerText = string;
            ++this.squareFilled;
            ++this.squareGlobal;
        }
    }
    subtract(){
        if(this.squareFilled > 0){
            --this.squareFilled;
            --this.squareGlobal;
        }
        this.squares[this.squareGlobal].innerText = '';
    }
    clear(){
        const classes = ['correct','incorrect','repeat'];
        this.squares.forEach(e => {
            e.innerText = '';
            classes.forEach(classe => e.classList.remove(classe));
        });
        this.squareFilled = 0;
        this.squareGlobal = 0;
    }
    resetCounterSquareFilled(){
        this.squareFilled = 0;
    }
    isIncomplet(){
        return this.squareFilled < 5 ? true : false;
    }
}