/** Hide all content */
/*$("#customerContent").css("display","none");*/

/** Display all content */
/*$("#itemContent").css("display","block");*/

$("#mainForm").css("display","block");
$("#foodsectionContent").css("display","block");
$("#catalouge").css("display","block");
$("#desertsectionContent").css("display","block");
$("#carddesertContent").css("display","block");

$("#customerContent").css("display","none");

$("#itemContent").css("display","none");

$("#placeOrderContent").css("display","none");

$("#footersectionContent").css("display","block");


/** Dashboard Section */
$("#linkDashboard").click(function () {

    $("#mainForm").css("display","block");
    $("#foodsectionContent").css("display","block");
    $("#catalouge").css("display","block");
    $("#desertsectionContent").css("display","block");
    $("#carddesertContent").css("display","block");

    $("#customerContent").css("display","none");

    $("#itemContent").css("display","none");

    $("#placeOrderContent").css("display","none");

    $("#footersectionContent").css("display","block");

});

/** Customer Section */
$("#linkCustomer").click(function () {

    $("#mainForm").css("display","none");
    $("#foodsectionContent").css("display","none");
    $("#catalouge").css("display","none");
    $("#desertsectionContent").css("display","none");
    $("#carddesertContent").css("display","none");

    $("#customerContent").css("display","block");

    $("#itemContent").css("display","none");

    $("#placeOrderContent").css("display","none");

    $("#footersectionContent").css("display","block");

});

/** Item Section */
$("#linkItem").click(function () {

    $("#mainForm").css("display","none");
    $("#foodsectionContent").css("display","none");
    $("#catalouge").css("display","none");
    $("#desertsectionContent").css("display","none");
    $("#carddesertContent").css("display","none");

    $("#customerContent").css("display","none");

    $("#itemContent").css("display","block");

    $("#placeOrderContent").css("display","none");

    $("#footersectionContent").css("display","block");

});

/** Place Order Section */
$("#linkPlaceOrder").click(function () {

    $("#mainForm").css("display","none");
    $("#foodsectionContent").css("display","none");
    $("#catalouge").css("display","none");
    $("#desertsectionContent").css("display","none");
    $("#carddesertContent").css("display","none");

    $("#customerContent").css("display","none");

    $("#itemContent").css("display","none");

    $("#placeOrderContent").css("display","block");

    $("#footersectionContent").css("display","block");

});

