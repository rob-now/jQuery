$(document).ready(function () {
    $(".button.g").on("click", function () {
        var message = $("<span style='display: block; text-align: center;'>Call us for the price: 334-443-344</span>");

        // Add message stored in variable before button g into the DOM
        //$(".button.g").before(message);
        // Add message as last child of container ID
        $(this).closest(".item").append(message);
        // Remove item of classes button and g
        $(this).remove();
        // We can use .append(), .prepend(), .after(), .before()
    });
});