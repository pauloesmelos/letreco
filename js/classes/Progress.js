export class Progress{
    constructor(element,congratulations){ // element = local onde será atualizado o cont de acertos; congratulations = span exibida ao acertar as 6 palvras
        this.count = 0;
        this.span = document.querySelector(element);
        this.emoji = document.querySelector('[data-progress="emoji"]');
        this.congratulations = document.querySelector(congratulations);
    };
    checkCount(count){
        const style = `
        background-image: url("../../img/happy.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat; 
        `;
        const finishStyle = `
        background-image: url("../../img/party.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat; 
        `;
        if(count > 2 && count < 4)
            this.emoji.style.cssText = style;
        else if(count > 4 && count < 6)
            this.emoji.style.cssText = finishStyle;
        else if(count > 5){
            console.log(this.congratulations);
            this.congratulations.classList.add('show');
        }
        //console.log(Object.getOwnPropertyNames(this.emoji.style));
    }
    setCount = () => {
        ++this.count;
        this.span.innerText = this.count;
        this.checkCount(this.count);
    };
    getCount = () => {
        return this.count;
    };
    resetCount = () => {
        const style = `
        background-image: url("../../img/sad.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat; 
        `;
        this.count = 0;
        this.span.innerText = this.count; //atualizando o contador reset (0)
        this.congratulations.classList.remove('show');
        this.emoji.style.cssText = style;
    }
}