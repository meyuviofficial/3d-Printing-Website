$(document).ready(function () {
    $("#AboutUsButton").click(function () {
        $('#AboutUsModal').modal('show');
    });
    $("#TrainingButton").click(function () {
        $('#TrainingModal').modal('show');
    });
    $("#NavBarDropDown").click(function()
    {
        $('.ui.dropdown').dropdown('toggle');
    });
});