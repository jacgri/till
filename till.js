var apples = {
    name:"apples",
    price:0.99
}

var oranges = {
    name:"oranges",
    price:0.60
}

var bananas = {
    name:"bananas",
    price:0.16
}

var strawberries = {
    name:"strawberries",
    price:2.00
}
var products = [apples, oranges, bananas, strawberries]  

for (var productIndex = 0; productIndex < products.length; productIndex++) {
    var buttonsContainer= document.getElementById('buttons')
    var product = products[productIndex]
    var buttonsHTML = '<div class="col-md-2">'
    buttonsHTML +=      '<div class="panel panel-default">'
    buttonsHTML +=        '<div class="panel-heading">'
    buttonsHTML +=          '<h3 class="panel-title">' + product.name + '</h3>'
    buttonsHTML +=        '</div>'
    buttonsHTML +=        '<div class="panel-body">'
    buttonsHTML +=          '<p>'
    buttonsHTML +=            '<strong>Price: </strong>' + product.price
    buttonsHTML +=          '</p>'
    buttonsHTML +=          '<button type="button" class="btn btn-primary" onclick="transaction.add(\'' + product.name + '\')">Add</button>'
    buttonsHTML +=        '</div>'
    buttonsHTML +=      '</div>'
    buttonsHTML +=    '</div>'

    buttonsContainer.innerHTML += buttonsHTML

}

var transaction = {}
transaction.items = []
transaction.add = function(productName){
    for (productIndex=0; productIndex < products.length; productIndex++) {
        var currentProduct=products[productIndex]

        if (currentProduct.name===productName) {
            var selectedProduct = currentProduct
            break
        }
    }
    if (selectedProduct) {
        var newItem = {
            id: (Math.random() * 100000),
            name: selectedProduct.name,
            price: selectedProduct.price
        }
        this.items.push(newItem)
        console.log(this.items)
    }
}

