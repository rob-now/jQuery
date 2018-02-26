// Executing jQuery function after DOM ready/loaded
$(document).ready(function(){
    // Select span and change it's inner text using method text()
    $("span").text("$25");
    // Select all h2 and change their titles
    $("h2").text("Changed h2 titles");
    // Selecting ID
    $("#list1");
    // Selecting class
    $(".best-price");
    // Selecting all descendant li in list2 ID
    $("#list2 li").text("all descendants");
    // Selecting only direct descendant li in list2 ID
    $("#list2 > li").text("direct descendants");
    // Selecting only first li in list2 ID
    $("#list2 li:first").text("li:first");
    // Last
    $("#list2 li:last").text("li:last");
    // Odd (direct)
    $("#list2 > li:odd").text("li:odd");
    // Even (direct)
    $("#list2 > li:even").text("li:even");
    // Multi selectors
    $("#list2 > li:first, .sub-list > li:first").text("li:first x 2");
});