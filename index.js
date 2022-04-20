const Pizzas = [{
    Nombre: "Pizza de Muzzarella",
    ID:1,
    Ingredientes: ["Masa", "Queso Muzzarella", "Tomate", "Provenzal","Aceitunas"],
    Precio: 600,
}, {
    Nombre: "Pizza de Fugazzeta",
    ID:2,
    Ingredientes: ["Masa", "Queso Muzzarella", "Cebolla", "Provenzal", "Aceitunas"],
    Precio: 800, 
}, {
    Nombre: "Pizza caribeña",
    ID:3,
    Ingredientes: ["Masa", "Queso Muzzarella", "Anana", "Provenzal", "Aceitunas"],
    Precio: 750,
}, {
    Nombre: "Pizza con anchoas",
    ID:4,
    Ingredientes: ["Masa", "Queso Muzzarella", "Anchoas", "Provenzal", "Aceitunas"],
    Precio: 900,
}, {
    Nombre: "Pizza Napolitana",
    ID:5,
    Ingredientes: ["Masa", "Queso Muzzarella", "Jamon", "Provenzal", "Aceitunas"],
    Precio: 700,
}, {
    Nombre: "Pizza dos caras",
    ID:6,
    Ingredientes: ["Masa", "Queso Muzzarella", "Jamon", "Cebolla", "Provenzal", "Aceitunas"],
    Precio: 850,
}]


//Pizzas con ID impar
const pizzasIdImpar = Pizzas.filter(Pizzas => Pizzas.ID%2!==0).map(Pizzas => Pizzas.Nombre)
console.log(`Las pizzas con ID impar son: ${pizzasIdImpar}.`)

// ¿Hay alguna pizza que valga menos de 600?
const pizzaMenorValor = Pizzas.filter(Pizzas => Pizzas.Precio < 600).map(Pizzas => Pizzas.Nombre)
const buscadorPrecio = () => {
    if (pizzaMenorValor == true){
        console.log(`Las pizzas con precio menor a $600 son: ${pizzaMenorValor}.`)
    } else{
        console.log("No hay pizzas con un valor menor a $600.")
    }
}
buscadorPrecio()

//Nombres de todas las Pizzas
const pizzasNombre = Pizzas.map(Pizzas => Pizzas.Nombre)
console.log(`Los nombres de nuestras Pizzas son: ${pizzasNombre}.`)

// Precio de las Pizzas:
const pizzasPrecio = Pizzas.map(Pizzas => Pizzas.Precio)
console.log(`Los precios de nuestras Pizzas son: ${pizzasPrecio}.`)

// Nombre de cada pizza con su precio
const nombrePrecio = Pizzas.map(Pizzas => {
    console.log (`La ${Pizzas.Nombre} tiene un precio de: $${Pizzas.Precio}`)
})