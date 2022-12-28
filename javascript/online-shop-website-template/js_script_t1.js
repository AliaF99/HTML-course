"use strict";

function addProduct(){

    let product = document.getElementById('product-name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    let total = price * quantity;

    console.log(product);
        if (product == ' ') {
            alert("please write items correctly and dont leave it empty (product in letters)");
        } else if ( price == ' ')
        {
            alert("please write items correctly and dont leave it empty (price in numbers)");
        }else if ( quantity == ' ')
        {
            alert("please write items correctly and dont leave it empty (quantity in numbers)");
        } else
        document.getElementById('products').innerHTML += '<tr> <td>' + product + '</td> <td>' + price + '</td> <td>' + quantity + '</td><td>' + total + '</td> <td>Remove</td> </tr > ';
    
    }