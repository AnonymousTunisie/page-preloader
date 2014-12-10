/* Page preloader
 /*
 * this plugin preload the page
 *
 * author: bumbella
 * version:1.0
 * plugin page: https://github.com/bumbella/page-preloader
 *
 */

+function($) {
    pagePreloader = {
        preloaderHtml: '<section class="page-loader">' + '<div class="loading">' + '<div class="loading-spin"></div>' + 'Loading...' + '</div>' + '</section>',
        run: function() {

            $('body').prepend(this.preloaderHtml);

            $(document).ready(function() {
                jQuery(".page-loader").fadeOut('slow');
            });

        }
    };
}(jQuery);
