$(document).ready(function () {
  $(".visual_image_wrap").slick({
    /* general */
    autoplay: true, // 자동 slide rolling
    // horizontal: true, 기본값
    // vertical: true,
    // fade: true,
    autoplaySpeed: 2000, // slide후 대기시간 delay()
    speed: 500,

    /* slide */
    slidesToShow: 1, // 화면에 보일 slide 개수
    slidesToScroll: 1, // slide할 때 이동되는 slide 개수

    /* etc */
    pauseOnHover: true,
    infinite: true,

    /* dots */
    dots: true,

    /* arrow */
    arrows: true,
    prevArrow: ".custom_prev",
    nextArrow: ".custom_next",
  });

  // $('.story08_wrap').slick({

  //   /* general */
  //   autoplay: true, // 자동 slide rolling
  //   // horizontal: true, 기본값
  //   // vertical: true,
  //   // fade: true,
  //   autoplaySpeed: 2000, // slide후 대기시간 delay()
  //   speed: 500,

  //   /* slide */
  //   slidesToShow: 1, // 화면에 보일 slide 개수
  //   slidesToScroll: 1, // slide할 때 이동되는 slide 개수

  //   /* etc */
  //   pauseOnHover: true,
  //   infinite: true,

  //   /* dots */
  //   dots: true,

  //   /* arrow */
  //   // arrows: true,
  //   // prevArrow: '.story_prev',
  //   // nextArrow: '.story_next',

  // })

  $(".campaign_img").slick({
    /* slide */
    slidesToShow: 1, // 화면에 보일 slide 개수
    slidesToScroll: 1, // slide할 때 이동되는 slide 개수
    fade: true,

    /* etc */
    pauseOnHover: true,
    infinite: true,

    /* arrow */
    arrows: true,
    prevArrow: ".campaign_prev",
    nextArrow: ".campaign_next",

    /* responsive */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".jewelry_image_wrap").slick({
    /* slide */
    slidesToShow: 4, // 화면에 보일 slide 개수
    slidesToScroll: 1,
    dots: true, // slide할 때 이동되는 slide 개수

    /* etc */
    pauseOnHover: true,
    infinite: true,

    /* arrow */
    arrows: true,
    prevArrow: ".jewelry_prev",
    nextArrow: ".jewelry_next",

    /* responsive */
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".watch_imagebox").slick({
    /* slide */
    slidesToShow: 1, // 화면에 보일 slide 개수
    slidesToScroll: 1, // slide할 때 이동되는 slide 개수

    /* etc */
    pauseOnHover: true,
    infinite: true,

    /* arrow */
    arrows: true,
    prevArrow: ".watch_prev",
    nextArrow: ".watch_next",

    /* responsive */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".sercive_icon_wrap").slick({
    /* slide */
    slidesToShow: 4, // 화면에 보일 slide 개수
    slidesToScroll: 1, // slide할 때 이동되는 slide 개수

    /* etc */
    pauseOnHover: true,
    infinite: true,

    /* arrow */
    arrows: true,
    prevArrow: ".service_prev",
    nextArrow: ".service_next",

    /* responsive */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //모바일 버튼 클릭시 nav 나타나기
  $(".mobile_btn").click(function () {
    $("nav").animate(
      {
        left: 0,
      },
      500
    );
  });

  //모바일 버튼 클릭시 nav 사라지기
  $(".close_btn").click(function () {
    $("nav").animate(
      {
        left: "-100%",
      },
      500
    );
  });

  //브라우저 크기가 1280이상이면 nav가 나타나고 1280이하면 사라지기
  $(window)
    .resize(function () {
      var win_w = $(window).width();
      if (win_w >= 1280) {
        $("nav").css({ left: 0 });
      } else {
        $("nav").css({ left: "-100%" });
      }
    })
    .resize();

  //1280이상에서 nav 클릭시 서브메뉴 나타나기
  $(".header_lnb>li:nth-child(1)").hover(
    function () {
      $(".list_container_01").stop().slideDown();
    },
    function () {
      $(".list_container_01").stop().slideUp();
    }
  );

  $(".header_lnb>li:nth-child(2)").hover(
    function () {
      $(".list_container_02").stop().slideDown();
    },
    function () {
      $(".list_container_02").stop().slideUp();
    }
  );

  $(".header_lnb>li:nth-child(3)").hover(
    function () {
      $(".list_container_03").stop().slideDown();
    },
    function () {
      $(".list_container_03").stop().slideUp();
    }
  );

  $(".header_lnb>li:nth-child(4)").hover(
    function () {
      $(".list_container_04").stop().slideDown();
    },
    function () {
      $(".list_container_04").stop().slideUp();
    }
  );
  //SVG 애니메이션 효과
  function run_delayed() {
    $("#outline02").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline03").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline04").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline05").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline06").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline07").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline08").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline09").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline10").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline11").stop().animate({ "fill-opacity": 0 }, 500);
    $("#outline12").stop().animate({ "fill-opacity": 0 }, 500);

    //SVG 애니메이션 방식
    new Vivus(
      "svgdraw01_v",
      {
        type: "delayed",
        start: "autostart",
        delay: 250,
        duration: 300,
        //forceRender: false,
        //dashGap: 50
      },
      function () {
        $("#outline02").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline03").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline04").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline05").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline06").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline07").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline08").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline09").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline10").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline11").stop().animate({ "fill-opacity": 1 }, 500);
        $("#outline12").stop().animate({ "fill-opacity": 1 }, 500);
      }
    );
  }
  run_delayed();

  $("#svgdraw01_v").click(function (e) {
    e.preventDefault();
    if (!run_delayed.playing) {
      run_delayed();
    }
  });

  $(function () {
    function run_delayed() {
      $("#jewelry_outline01_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#jewelry_outline02_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#jewelry_outline03_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#jewelry_outline04_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#jewelry_outline05_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#jewelry_outline06_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#jewelry_outline07_id").stop().animate({ "fill-opacity": 0 }, 500);
      new Vivus(
        "svgdraw02_v",
        {
          type: "delayed",
          start: "autostart",
          delay: 150,
          duration: 300,
          //forceRender: false,
          //dashGap: 50
        },
        function () {
          $("#jewelry_outline01_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#jewelry_outline02_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#jewelry_outline03_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#jewelry_outline04_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#jewelry_outline05_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#jewelry_outline06_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#jewelry_outline07_id").stop().animate({ "fill-opacity": 1 }, 500);
        }
      );
    }
    run_delayed();

    $("#svgdraw02_v").click(function (e) {
      e.preventDefault();
      if (!run_delayed.playing) {
        run_delayed();
      }
    });
  });

  $(function () {
    function run_delayed() {
      $("#decoration_outline01_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline02_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline03_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline04_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline05_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline06_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline07_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline08_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline09_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline10_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#decoration_outline11_id").stop().animate({ "fill-opacity": 0 }, 500);

      new Vivus(
        "svgdraw03_v",
        {
          type: "delayed",
          start: "autostart",
          delay: 150,
          duration: 300,
          //forceRender: false,
          //dashGap: 50
        },
        function () {
          $("#decoration_outline01_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline02_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline03_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline04_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline05_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline06_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline07_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline08_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline09_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline10_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
          $("#decoration_outline11_id")
            .stop()
            .animate({ "fill-opacity": 1 }, 500);
        }
      );
    }
    run_delayed();

    $("#svgdraw03_v").click(function (e) {
      e.preventDefault();
      if (!run_delayed.playing) {
        run_delayed();
      }
    });
  });

  $(function () {
    function run_delayed() {
      $("#watch_outline01_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#watch_outline02_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#watch_outline03_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#watch_outline04_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#watch_outline05_id").stop().animate({ "fill-opacity": 0 }, 500);
      new Vivus(
        "svgdraw04_v",
        {
          type: "delayed",
          start: "autostart",
          delay: 150,
          duration: 300,
          //forceRender: false,
          //dashGap: 50
        },
        function () {
          $("#watch_outline01_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#watch_outline02_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#watch_outline03_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#watch_outline04_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#watch_outline05_id").stop().animate({ "fill-opacity": 1 }, 500);
        }
      );
    }
    run_delayed();

    $("#svgdraw04_v").click(function (e) {
      e.preventDefault();
      if (!run_delayed.playing) {
        run_delayed();
      }
    });
  });

  $(function () {
    function run_delayed() {
      $("#aboutus_outline01_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline02_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline03_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline04_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline05_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline06_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline07_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline08_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline09_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline10_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline11_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline12_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline13_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline014_id").stop().animate({ "fill-opacity": 0 }, 500);
      $("#aboutus_outline015_id").stop().animate({ "fill-opacity": 0 }, 500);

      new Vivus(
        "svgdraw05_v",
        {
          type: "delayed",
          start: "autostart",
          delay: 150,
          duration: 300,
          //forceRender: false,
          //dashGap: 50
        },

        function () {
          $("#aboutus_outline01_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline02_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline03_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline04_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline05_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline06_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline07_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline08_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline09_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline10_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline11_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline12_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline13_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline14_id").stop().animate({ "fill-opacity": 1 }, 500);
          $("#aboutus_outline15_id").stop().animate({ "fill-opacity": 1 }, 500);
        }
      );
    }
    run_delayed(); //페이지 로딩시 애니메이션 실행

    //Inside Swarovski 클릭시 애니메이션 실행
    $("#svgdraw05_v").click(function (e) {
      e.preventDefault();
      if (!run_delayed.playing) {
        run_delayed();
      }
    });
  });

  // $(window).scroll(function(){
  //   var win_top = $(window).scrollTop()  // 스크롤의 위치 구하기
  //   var win_height = $(window).height()  // 브라우저의 높이

  //   $('#svgdraw01_v','#svgdraw02_v','#svgdraw03_v','#svgdraw04_v','#svgdraw05_v').each(function(){
  //       var box_top = $(this).offset().top

  //       if(win_top >= box_top - 600){
  //           if(!run_delayed.playing){
  // run_delayed();
  // }
  //       }
  //   })
  // })

  //Canvas 애니메이션
  VANTA.TOPOLOGY({
    el: ".visual_image01", // 애니메이션을 적용할 요소 (CSS 선택자)
    mouseControls: true, // 마우스 움직임에 반응하도록 설정
    touchControls: true, // 터치 이벤트에 반응하도록 설정 (모바일 대응)
    gyroControls: false, // 자이로(기울기 센서) 반응 비활성화
    minHeight: 200.0, // 최소 높이 설정
    minWidth: 200.0, // 최소 너비 설정
    scale: 1.0, // 배경 스케일 조정 (1.0 = 기본 크기)
    scaleMobile: 1.0, // 모바일에서의 배경 스케일 조정
    color: 0xffc8de, // 선 색상 (핑크 계열, 16진수 색상)
    backgroundColor: "transparent", // 배경색을 투명하게 설정
  });
});
