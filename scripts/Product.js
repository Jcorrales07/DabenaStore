class Product {
    #name
    #description
    #price
    #quantity 

    constructor(name, description, price, quantity) {
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#quantity = quantity;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description;
    }

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(quantity) {
        this.#quantity = quantity;
    }

}
