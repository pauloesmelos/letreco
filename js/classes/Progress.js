export class Progress{
    constructor(element){
        this.count = 0;
        this.span = document.querySelector(element);
        this.emoji = document.querySelector('[data-progress="emoji"]');
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
        else if(count > 4)
            this.emoji.style.cssText = finishStyle;
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
    }
}