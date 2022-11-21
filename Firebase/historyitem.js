class HistoryItem {
    constructor(aArg, bArg, resultArg, signArg) {
      this.number1 = aArg;
      this.number2 = bArg;
      this.result = resultArg;
      this.sign = signArg;
    }
  
    toString() {
      return `${this.number1} ${this.sign} ${this.number2} = ${this.result}`;
    }
  }
  
  export { HistoryItem };
  