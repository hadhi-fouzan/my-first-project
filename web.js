$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});
$(document).ready(function(){
    $("#email").validate({
        rules:{
            fouz:{
                required:true,
                email:true
            }
        },
        messages:{
            fouz:{
                required:"enter email"
            }
        }
    })
})
