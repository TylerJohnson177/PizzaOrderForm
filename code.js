$(document).ready(function ()
{
    $(".nav-tabs a").on("click",showTab);
    $("button#detailsPage").on("click",pizzaDetails)
    $("button#deliveryPage").on("click", deliveryInfo)
});

function showTab(event)
{
    event.preventDefault();
    $(this).tab("show");

    //Tab Selectors
}

//This function gets the information on the details page

function pizzaDetails()
{
    //get pizza size

    let sizeSmall = $("input#small").prop("checked");
    let sizeMedium = $("input#medium").prop("checked");
    let sizeLarge = $("input#large").prop("checked");

    //get pizza crust

    let crustThin = $("input#thin").prop("checked");
    let crustPan = $("input#pan").prop("checked");
    let crustGlutenFree = $("input#glutenFree").prop("checked");

    // get the meats that have been selected

    let meatPeperoni = $("input#peperoni").prop("checked");
    let meatSausage = $("input#sausage").prop("checked");
    let meatHotDogs = $("input#hotDog").prop("checked");

    //get the veggies that have been selected

    let veggieMushrooms = $("input#mushrooms").prop("checked");
    let veggieOnions = $("input#onions").prop("checked");
    let veggiePineapples = $("input#pineapples").prop("checked");

    //find what has been selected with an if-else-if

    let totalCost = 0;

    //Size if-else-if

    if(sizeSmall)
    {
        totalCost += 7;
        $("p#sizeConfirmation").text("Size: Small");
    }
    else if(sizeMedium)
    {
        totalCost += 9;
        $("p#sizeConfirmation").text("Size: Medium");
    }
    else
    {
        totalCost += 12;
        $("p#sizeConfirmation").text("Size: Large");
    }

    // Crust if-else-if

    if(crustThin)
    {
        $("p#crustConfirmation").text("Crust: Thin");
    }
    else if(crustPan)
    {
        $("p#crustConfirmation").text("Crust: Pan");
    }
    else
    {
        $("p#crustConfirmation").text("Crust: Gluten Free");
    }

   // Meats and Veggies

    let peperoni;
    let sausage;
    let hotDogs;
    let mushrooms;
    let onions;
    let pineapples;

    if(meatPeperoni)
    {
        totalCost += 1.5;
        peperoni = "Peperoni, ";
    }
    else
    {
        peperoni = "";
    }

    if(meatSausage)
    {
        totalCost += 1.5;
        sausage = "Sausage, ";
    }
    else
    {
        sausage = "";
    }

    if(meatHotDogs)
    {
        totalCost += 1.5;
        hotDogs = "Hot Dogs, ";
    }
    else
    {
        hotDogs = "";
    }

    if(veggieMushrooms)
    {
        totalCost += 1;
        mushrooms = "Mushrooms, ";
    }
    else
    {
        mushrooms = "";
    }

    if(veggieOnions)
    {
        totalCost += 1;
        onions = "Onions, ";
    }
    else
    {
        onions = "";
    }

    if(veggiePineapples)
    {
        totalCost += 1;
        pineapples = "Pineapples, ";
    }
    else
    {
        pineapples = "";
    }

    let tax = totalCost * 0.051;
    const deliveryFee = 2;
    let totalCostIncludingTax = tax + totalCost + deliveryFee;

    $("p#cost").text("Cost: $" + totalCost.toFixed(2));
    $("p#tax").text("Tax: $" + tax.toFixed(2));
    $("p#deliveryFee").text("Delivery Fee: $" + deliveryFee.toFixed(2));
    $("p#total").text("Total Amount Due: $" + totalCostIncludingTax.toFixed(2));

    //put the data as text in a paragraph

    $("p#meatsConfirmation").text("Meats: " + peperoni + sausage + hotDogs);
    $("p#veggiesConfirmation").text("Veggies: " + mushrooms + onions + pineapples);

}

//this function gets the information on the delivery page

function deliveryInfo()
{
    //get the name

    let name = $("input#name").val();

    //get the street address

    let streetAddress = $("input#address").val();

    // get the phone number

    let phone = $("input#phone").val();

    $("p#firstName").text("Your Name: " + name);
    $("p#streetAddress").text("Street Address: " + streetAddress);
    $("p#phoneNumber").text("Phone Number: " + phone);

    //write the data to a paragraph
}