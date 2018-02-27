$(document).ready(function () {
    // Event delegation - listening for clicks only on A tags inside item class
    $(".item").on("click", "a", function () {
        var item = $(this).closest(".item");
        var price = item.data("price");
        var message = $("<a class='button g my-message'>$" + price + "</a>");
        item.append(message);
        $(this).remove();
    });

    // Highlighting on-sale items
    $("#filters").on("click", ".on-sale", function () {
        $(".highlighted").removeClass("highlighted");
        $(".item").filter(".on-sale").addClass("highlighted");
    });
    // Highlighting new items
    $("#filters").on("click", ".new", function () {
        $(".highlighted").removeClass("highlighted");
        $(".item").filter(".new").addClass("highlighted");
    });
});