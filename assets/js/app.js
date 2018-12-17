/**
 * Created by Mohammed Shifreen <mshifreen@gmail.com>
 */

jQuery(document).ready(function($) {
    var $root = $('html, body');

    $('body').on('click', 'a.learn-more', function() {
        var target = $(this).attr('href');

        $root.animate({
            scrollTop: $(target).offset().top
        }, 500);

        return false;
    });

    $('.copyright-year').text((new Date().getFullYear()));
});