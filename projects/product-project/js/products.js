/* global $ _ opspark */

$(document).ready(function () {
  // ALL YOUR CODE GOES BELOW HERE //
$.getJSON("data/product.json", function(products) {
        createProductList(products).appendTo('.flex-container');
        productList(products);
        searchInput(products);
        newList(products);
        filterType(products);
        lowest(products);
        highest(products);
        
    }).fail(function() {
        console.log("getJSON on product data failed!");
    });

function productList(products) {
    $('.thumbnail').on('click', function(event) {
        $('.modal-body').empty();
        var imageUrl = $(event.currentTarget).attr('url');
        var specs = $(event.currentTarget).attr('specs');
        var price = $(event.currentTarget).attr('price');
        var stock = $(event.currentTarget).attr('stock');
        $('.modal-body')
            .append($('<img>')
            .attr('src', imageUrl)
            .attr('id', 'temp-image')
            .addClass('col-sm-6 col-md-6'))
            .append($('<p>')
            .html('Price: $' + price + '<hr>' + specs + '<hr>' +'Stock remaining: ' + stock )
            .addClass('col-sm-6 col-md-6'));
        $('#modalBox').modal('show');
        $('.close').one('click', function() {
            $('.modal-body').empty();
        });
    });
}

function productKey(desc, price, stock) {
    desc = $('<div>')
        .addClass('desc')
        .html(desc);
    price = $('<div>')
        .addClass('price')
        .html(price);
    stock = $('<div>')
        .addClass('stock')
        .html(stock);
    return $('<div>').addClass('product-details').append(desc, price, stock);
}

function productListItem(product) {
    return $('<li>')
        .attr('id', 'li-product')
        .addClass('thumbnail')
        .attr('url', 'img/product/' + product.image)
        .attr('specs', product.specs)
        .attr('price', product.price)
        .attr('stock', product.stock)
        .append(imageContainer('img/product/thumbs/' + product.image))
        .append(productKey(product.desc, 'Price: $' + product.price, 'In Stock: ' + product.stock));
}

function createProductList(products) {
    return $('<ul>')
        .attr('id', 'list-products')
        .addClass('list-products')
        .append(_.map(products, function(product, index) {
            return productListItem(product);
        }));
}

 

function imageContainer(url) {
    return $('<div>').addClass('image-div')
        .append($('<img>').attr('src', url).addClass('image'));
}

function search(collection, input){
    return _.reduce(collection, function(e, value){
        if(typeof value === 'object'){
            if(search(value, input).length){
                e.push(value);
            }
        } else {
            if(_.contains(value.toString().toLowerCase(), input.toLowerCase())){
                e.push(value);
            } 
        } return e;
    }, []);    
}

function newList(products) {
    $('.allproducts').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        var newList = _.map(products, function(product) {
            productListItem(product).appendTo('.flex-container');
        });
        productList();
        return newList;
    });
}

function searchInput(products) {
    $('#button-search').on('click', function(event) {
        event.preventDefault();
        $('.list-products').hide();
        $('.thumbnail').hide();
        
        var target = document.getElementById('input').value;
        _.map(search(products, target), function(product) {
            return productListItem(product).appendTo('.flex-container');
        });
        productList(products);
    }); 
}

function filterType(products) {
  
    var pluckType = _.unique(_.pluck(products, "type"));
    var filtered = _.map(pluckType, function(pluckedType) {
        return $('<li>')
            .attr('id', 'type')
            .append($('<a href="#">').html(pluckedType))
            .prependTo('.dropdown-menu')
            .on('click', function() {
                $('.list-products').hide();
                $('.thumbnail').hide();
                _.map(products, function(product) {
                    if (product.type === pluckedType) {
                        return productListItem(product).appendTo('.flex-container');
                    }
                });
                productList(products);
            });
    });
    return filtered;
}

function getLowest(products, key) {
    return products.sort(function(a, b) {
        return a[key] - b[key];
    });
}

function lowest(products) {
    $('.lowest').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        _.map(getLowest(products, "price"), function(product) {
            return productListItem(product).appendTo('.flex-container');
        });
        productList(products);
    });

}

function getHighest(products, key) {
    return products.sort(function(a, b) {
        return b[key] - a[key];
    });
}

function highest(products) {
    $('.highest').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        _.map(getHighest(products, "price"), function(product) {
            return productListItem(product).appendTo('.flex-container');
        });
        productList(products);
    });
}

    // ALL YOUR CODE GOES ABOVE HERE //
 });

