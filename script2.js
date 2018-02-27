$(document).ready(function () {
    // Event delegation - listening for clicks only on A tags inside item class
    $(".item").on("click", "a", function () {
        var item = $(this).closest(".item");
        var price = item.data("price");
        var message = $("<span style='display: block; text-align: center;'>The price is $" +price+ "</span>");

        item.append(message);
        $(this).remove();
    });
});