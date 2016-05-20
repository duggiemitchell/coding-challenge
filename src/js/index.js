$(function() {
  $('.tab-links a').on('click', function(e) {

    $('.tab-links .active').removeClass('active');
    $(this).addClass('active');
    var tabContent = $('.tab');
    $(tabContent).toggle();
    e.preventDefault();
  });

  $.get('code-test.json', function(response) {
    $.each(response, function(index, customer) {
      response.sort(function(a, b) {
        if (a.earnings > b.earnings)
          return -1;

        else if (a.earnings < b.earnings)
          return -1;

        else if (a.earnings === b.earnings)
          return;
      });
      var dataTable = ' <tr><td> ' +customer.name+ '</td><td>' +customer.apy+ '</td><td>' +customer.earnings+ '</td></tr>';

     $('#data').append(dataTable);
    });
  });
});



  var modal = document.getElementById('loginModal');
  var loginBtn = document.getElementById("loginBtn");
  var close = document.getElementsByClassName("close")[0];
  loginBtn.onclick = function() {
      modal.style.display = "block";
  }
  close.onclick = function() {
      modal.style.display = "none";
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
