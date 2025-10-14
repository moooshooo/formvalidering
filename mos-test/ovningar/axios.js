import { default as axios } from 'axios'

const results = document.getElementById("results")

async function getProducts() {
    try {
        const products = await axios.get("https://fakestoreapi.com/products")
        /* console.log(products.data[0].price)
 */
        for (let pro of products.data){
            console.log(pro.price)
            const productPrice = document.createElement("p")
            productPrice.textContent = pro.price

            results.appendChild(productPrice)
        } 
    } catch (error) {
        console.log(error)
    }
}
getProducts()

/* async function getPokemons() {
    try {
        const pokeResponse = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=9")
        console.log(pokeResponse.data.results[0].name)
    } catch (error) {
        console.log(error)
    }
}
getPokemons() */

/* 
axios.get("https://pokeapi.co/api/v2/pokemon?limit=9", {
})
    .then(function(results) {
        console.log(results)
    })
     */