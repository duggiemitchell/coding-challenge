$(function() {

  $('.tab-links a').on('click', function(e) {
    $('.tab-links a').removeClass('active');
    $(this).addClass('active');
    $('.tab active').toggle();
    e.preventDefault();
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
