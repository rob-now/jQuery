// Executing jQuery function after DOM is ready/fully loaded
$(document).ready(function(){
    //Checking number of li items in document
    alert($("li").length);
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
    
    // TRAVERSING the DOM - faster than CSS selectors
    // Finding sub-list class in list3 ID using traversing
    $("#list3").find(".sub-list");
    // Find first li in sub-list class in list3 ID
    $("#list3 .sub-list li").first().text("find first");
    // Find last li in list3 ID
    //$("#list3 li").last().text("find last");
    // Find previous to last li in list3 ID
    $("#list3 li").last().prev().text("find previous to last");
    // Finding parent of discount class
    $(".discount").parent().text("parent of discount class");
    // Finding all children (only direct) li of list3 ID
    $("#list3").children("li");

});