$(document).ready(function () {
    // Event delegation - listening for clicks only on A tags with class price inside item class
    $(".item").on("click", "a.price", function () {
        var item = $(this).closest(".item");
        var getPrice = item.data("price");
        var price = $("<a class='button g my-price'>$" + getPrice + "</a>");
        item.append(price);
        $(this).remove();
        return false; // prevents default action for href="#" which scrolls to the top of the page after click
    });

    // Highlighting on-sale items
    $("#filters").on("click", ".on-sale", function () {
        // First remove highlighted class from everywhere
        $(".highlighted").removeClass("highlighted");
        // Add class highlighted only to elements with class on-sale
        $(".item").filter(".on-sale").addClass("highlighted");
        return false;
    });
    // Highlighting new items
    $("#filters").on("click", ".new", function () {
        $(".highlighted").removeClass("highlighted");
        $(".item").filter(".new").addClass("highlighted");
        return false;
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
        return false; // prevents default action for href="#" which scrolls to the top of the page after click
    });

    // Highlight on mouseenter and mouseleave
    function highlight() {
        $(this).addClass("highlight");
    }

    function unHighlight() {
        $(this).removeClass("highlight");
    }

    $(".item").on("mouseenter", "h2", highlight);
    $(".item").on("mouseleave", "h2", unHighlight);

    // Price * quantity
    $(".item").on("keyup", ".quantity", function () {
        // Get value entered in input field as number (+ before $)
        // and store it in variable
        var quantity = +$(this).val();
        // Get price of item as number (+ before $)
        var getPrice = +$(this).closest(".item").data("price");
        // Update the quantity text in span
        $(this).closest("div").find(".quantity-count").text($(this).val());
        // Update total (price * quantity)
        $(this).closest("div").find(".total").text(getPrice * quantity);
    });
});