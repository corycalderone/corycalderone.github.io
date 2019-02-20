// going to try and add the ability to add new LISTS
$("button").on("click", function() {
    $("body").append(
        '<div id="section"><h1>To Do</h1><input type="text" placeholder = "Add new item" name="" id=""><ul></ul></div>'
    );
});

// Check off specific todos by clicking
$("body").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//deleting todos
// note: changed "ul" to "body" to allow for deletion on dynamically created lists
$("body").on("click", "span", function () {
    $(this).parent().fadeOut(250, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// adding items:
// 1. extract input
// 2. add li
// 3. remove input

$("body").on("keypress", "input[type='text']", function (e) {
    if (e.which === 13) { //enter 
        var item = $(this).val();
        $(this).val("");
        $(this).parent().find("ul").append('<li><span><i class="fa fa-trash"></i></span> ' + item + '</li>');
    }
});

// in progress: editing notebook titles
$("body").on("click", "h1", function () {
    var s = this.text();
    this.replaceWith()
    event.stopPropagation();
});