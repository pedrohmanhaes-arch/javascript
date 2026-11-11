// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions.

//ex. static keyword, encapsulation, inheritance

//Uma classe é um recurso do ES6 que oferece uma maneira mais limpa e estruturada de criar e trabalhar com objetos em comparação com as funções construtoras tradicionais. Ela oferece recursos como métodos estáticos, encapsulamento e herança.


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price 
    }
        displayProduct(){
            console.log(`Product${this.name}`)
            console.log(`Price: $${this.price.toFixed(2)}`)
        }
        calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
}
}

/* function Product(name, price){
    
    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`)
    }

    this.calculateTotal = function(){
        return this.price + (this.price * salesTax);
    }
} */

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00)

product1.displayProduct();

const totalPrice1 = product1.calculateTotal(salesTax)
const totalPrice2 = product2.calculateTotal(salesTax)
const totalPrice3 = product3.calculateTotal(salesTax)


console.log(`Total Price (with tax): $${totalPrice1.toFixed(2)}`)
console.log(`Total Price (with tax): $${totalPrice2.toFixed(2)}`)
console.log(`Total Price (with tax): $${totalPrice3.toFixed(2)}`)

