export class ConversionTypeComponent {
    constructor(container) {
        this.container = container;
    }

    render() {
        const div = document.createElement("div");
        const label = document.createElement("label");
        const select = document.createElement("select");
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");

        label.innerText = "Zamiana na";
        option1.innerText = "EUR -> PLN";
        option2.innerText = "PLN -> EUR";
        select.id = "conversionType";

        div.appendChild(label);
        div.appendChild(select);
        select.appendChild(option1);
        select.appendChild(option2);
    
        this.container.appendChild(div);
}