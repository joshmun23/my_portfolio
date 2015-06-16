// $('#side-bar-arrow').on('click', function(e) {
//   e.preventDefault();

//   $(this).toggle('slide');
//   $('#side-bar').toggle('slide');
//   // $('#side-bar').addClass('show');
// });

// $('#side-bar').on('click', function(e) {
//   e.preventDefault();

//   $(this).toggle('slide');
//   $('#side-bar-arrow').toggle('slide');
// });

$('#side-bar-arrow').on('mouseenter', function(e) {
  e.preventDefault();

  $(this).toggle('slide');
  $('#side-bar').toggle('slide');
  // $('#side-bar').addClass('show');
});

$('#side-bar').on('mouseleave', function(e) {
  e.preventDefault();

  $(this).toggle('slide');
  $('#side-bar-arrow').toggle('slide');
});
