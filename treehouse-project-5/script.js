//Search engine
//First listen for input
$('#search').on('keyup', function () {
  //Make sure to make search input to lower caser letters aswel
    const $Search = $('#search').val().toLowerCase();

//Go trough items
    $('.pictures a').each(function (i, image) {
        const $caption = $(image).attr('data-title').toLowerCase();

//Hide incorrect and show correct.
        if ($caption.includes($Search)) {
            $(image).show();
        } else {
            $(image).hide();
        }
    });
});
