export class GenerateWord{
    // Classe responsável por fazer a lógica das palavras inseridas pelo usuário com as palvras corretas
    constructor(element){
        this.words = ["porco", "arara", "tigre", "zebra", "touro", "peixe", "pombo", "polvo", "panda", "mosca", "cobra", "cabra", "ponei", "hiena", "garca", "corvo", "furao", "gamba", "lesma", "lebre", "pavao", "pulga", "sabia", "vespa"];
        this.squares = document.querySelectorAll(element);
        this.classes = ['.a','.b','.c','.d','.e','.f'];
        this.activeLine = 0; // linha ativa - 0 = '.a', 1 = '.b' ...
        this.activeSquare = document.querySelectorAll(this.classes[this.activeLine]);// 0 = .a, 1 = .b ... etc
    };
    removeClass(){
        const classes = ['correct','incorrect'];
        this.activeSquare.forEach(e => {
            classes.forEach(c => e.classList.remove(c));
        })
    }
    iterate(string){
        const bool = this.words.includes(string);
        this.removeClass();
        if(bool){
            this.activeSquare.forEach(e => e.classList.add('correct')); 
            ++this.activeLine;
            this.activeSquare = document.querySelectorAll(this.classes[this.activeLine]);
        }
        else
            this.activeSquare.forEach(e => e.classList.add('incorrect'));
        return bool;
    };
    check(){
        let string = '';
        const e = this.activeSquare;//passar o elemento de forma dinâmica
        e.forEach((e,i) => string += e.innerText);
        return this.iterate(string.toLowerCase());
    };
}