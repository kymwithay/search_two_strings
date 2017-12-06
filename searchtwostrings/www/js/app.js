// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('#search-first-name, #search-last-name').on('keyup', findByName);
    $('.help-btn').on('click', function() {
        alert("Employee Directory v3.4");
    });


    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {

        var checkFirstname = $('#search-first-name').val().trim();
        var checkLastname = $('#search-last-name').val().trim();

        service.findByName(checkFirstname + checkLastname).done(function (employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            if (checkFirstname.length >= 2 || checkLastname.length >= 2){
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
            }
            else{
             $('.employee-list').empty();
            }
        });
    }
}());
