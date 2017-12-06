// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('#search-first-name, #search-last-name').on('keyup', findByName); //changed at 11:48pm
    //$('.search-last-key').on('keyup', findByName); //changed from search-key at 11:34pm

    $('.help-btn').on('click', function() {
        alert("Employee Directory v3.4");
    });

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        // service.findByName($('.search-key').val()).done(function (employees) {
        //service.findByName($.trim($('.search-first-name').val()),$.trim($('.search-last-name').val())).done(function (employees) {
        var checkFirstname = $('#search-first-name').val().trim();
        var checkLastname = $('#search-last-name').val().trim();

        service.findByName(checkFirstname + checkLastname).done(function (employees) {
            var l = employees.length;
            var e;
            if (checkFirstname.length >= 2 || checkLastname.length >= 2){
              $('.employee-list').empty();
              for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
            }
            else{
              console.log("else part");
              $('.employee-list').empty();
            }
        });
    }

}());
