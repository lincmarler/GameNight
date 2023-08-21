

export class Player {
    name
    score
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    greeting() {
        console.log('hello my name is', this.name, this.score)
    }
    get cardTemplate() {
        return `
        <div class="col-4 bg-light rounded elevation-2">
            ${this.name} - ${this.score}
        </div>
        <button class="btn" onclick="app.PlayersController.manageScore('${this.name}')">manage score</button>
        `
    }
}