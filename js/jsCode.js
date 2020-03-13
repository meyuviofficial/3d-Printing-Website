$(document).ready(function () {

    // jQuery methods go here...
    $('.context.example .ui.sidebar')
    .sidebar({
        context: $('.context.example .bottom.segment')
    })
    .sidebar('attach events', '.context.example .menu .item')
    ;
    
});