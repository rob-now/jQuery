$(document).ready(function () {
    // Event delegation - listening for clicks only on A tags inside item class
    $(".item").on("click", "a.price", function () {
        var item = $(this).closest(".item");
        var getPrice = item.data("price");
        var price = $("<a class='button g my-price'>$" + getPrice + "</a>");
        item.append(price);
        $(this).remove();
    });

    // Highlighting on-sale items
    $("#filters").on("click", ".on-sale", function () {
        // First remove highlighted class from everywhere
        $(".highlighted").removeClass("highlighted");
        // Add class highlighted only to elements with class on-sale
        $(".item").filter(".on-sale").addClass("highlighted");
    });
    // Highlighting new items
    $("#filters").on("click", ".new", function () {
        $(".highlighted").removeClass("highlighted");
        $(".item").filter(".new").addClass("highlighted");
    });

    // Showing description
    $(".item").on("click", "a.show-desc", function () {
        var description = $(this).closest("div").find("p.description");
        var showDescBtn = $(this).closest(".show-desc");

        if (description.hasClass("hidden")) {
            description.slideDown().removeClass("hidden");
            showDescBtn.html("Hide description");
        } else {
            description.slideUp().addClass("hidden");
            showDescBtn.html("Show description");
        }
    });
});