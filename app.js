import $ from 'jquery';
import 'slick-carousel';
import './src/scss/handbag-trends.scss';

export default {
  start: () => {
    $(document).ready(() => {
      $('.slick-test').slick({
        centerMode: false,
        // centerPadding: "15px",
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        infinite: true,
        variableWidth: false,
        speed: 1000,
      });

      // // grab the initial top offset of the navigation
      // const stickyNavTop = $('#hb-sticky-nav-bar').offset().top;

      // // our function that decides weather the navigation bar should have "fixed" css position or not.
      // const stickyNav = function () {
      //   const scrollTop = $(window).scrollTop(); // our current vertical position from the top

      //   // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      //   // otherwise change it back to relative
      //   if (scrollTop > stickyNavTop) {
      //     $('#hb-sticky-nav-bar').addClass('hb-sticky-nav');
      //   } else {
      //     $('#hb-sticky-nav-bar').removeClass('hb-sticky-nav');
      //   }
      // };

      // stickyNav();
      // // and run it again every time you scroll
      // $(window).scroll(() => {
      //   stickyNav();
      // });
    });
  },


};
