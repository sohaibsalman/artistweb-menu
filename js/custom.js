$("body").ready(function () {
  setTimeout(function () {
    $(".angel_trail").append(
      '<i class="fa fa-angle-left" aria-hidden="true"></i><i class="fa fa-angle-right" aria-hidden="true"></i>'
    );
  }, 200);

  $(".menu-navigation .slider-item").hover(
    function () {
      $(".MouseTrail").css({
        transition: "0.11s",
        opacity: "0.4",
        transform: "scale(1.7)",
        margin: "-16px",
      });
      $(".angel_trail i").css({ display: "block" });
      $(".angel_trail").css({
        transition: "0.05s",
        transform: "scale(1.7)",
      });
      $("body").addClass("drag-cur");
    },
    function () {
      $(".angel_trail i").css("display", "none");
      $(".MouseTrail").css({
        transition: "0s",
        transform: "scale(1)",
        margin: "-12px",
      });
      $("body").removeClass("drag-cur");
    }
  );

  $(".work-text-slider").hover(
    function () {
      $(".MouseTrail").css({
        margin: "-16px",
      });
    },
    function () {
      $(".MouseTrail").css({ margin: "-12px" });
    }
  );
  var mouse_down = false;

  $(function () {
    var isDragging = false;
    $(".menu-navigation .slick-track")
      .mousedown(function () {
        mouse_down = true;
        isDragging = false;

        var bodyElement = document.querySelector(".menu-navigation");
        bodyElement.addEventListener("mousemove", getMouseDirection, false);

        var oldX = 0;
        var oldY = 0;

        function getMouseDirection(e) {
          //deal with the horizontal case
          if (mouse_down) {
            if (oldX < e.pageX) {
              $(".menu-main")
                .addClass("right-drag")
                .removeClass("left-drag remove-drag");
            } else {
              $(".menu-main")
                .addClass("left-drag")
                .removeClass("right-drag remove-drag");
            }

            oldX = e.pageX;
            oldY = e.pageY;
          }
        }
      })
      .mouseup(function () {
        mouse_down = false;
        $(".menu-main")
          .addClass("remove-drag")
          .removeClass("right-drag left-drag");

        highlightSlideHeading();
      });
  });
  $(function () {
    var isDragging = false;
    $(".nav-box")
      .mousedown(function () {
        isDragging = false;
      })

      .mousemove(function () {
        isDragging = true;
      })
      .mouseup(function () {
        var wasDragging = isDragging;
        isDragging = false;
        if (!wasDragging) {
          $(".main-body-content")
            .addClass("dis-none ")
            .removeClass("dis-block inner2 inner3");
          setTimeout(function () {
            $(".main-body-content").addClass("inner5");
          }, 300);

          var idname = $(this).attr("id");
          $("." + idname).addClass("inner4 dis-block");
          $(".hero-sec > div > div")
            .addClass("scale-out")
            .removeClass("scale-in");
          $(".menu-navigation").fadeOut("slow").removeClass("visi");
          $(".open-s").show();
          $(".close-s").hide();
          $(".dot-s").removeClass("big-s");
        }
      });
  });

  // mouserail bg

  var dots = [],
    mouse = {
      x: 0,
      y: 0,
    };

  var Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
      var n = document.createElement("div");
      n.className = "MouseTrail";
      document.body.appendChild(n);
      return n;
    })();
  };

  Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  };

  for (var i = 0; i < 1; i++) {
    var d = new Dot();
    dots.push(d);
  }

  function draw() {
    var x = mouse.x,
      y = mouse.y;

    dots.forEach(function (dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.6;
      y += (nextDot.y - dot.y) * 0.6;
    });
  }

  addEventListener("mousemove", function (event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  animate();

  // end mouserail bg

  // angel_trail bg

  var dots22 = [],
    mouse22 = {
      x: 0,
      y: 0,
    };

  var Dot22 = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
      var n = document.createElement("div");
      n.className = "angel_trail";
      document.body.appendChild(n);
      return n;
    })();
  };

  Dot22.prototype.draw22 = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  };

  for (var i22 = 0; i22 < 1; i22++) {
    var d22 = new Dot22();
    dots22.push(d22);
  }

  function draw22() {
    var x = mouse22.x,
      y = mouse22.y;

    dots22.forEach(function (dot22, index, dots22) {
      var nextDot = dots22[index + 1] || dots22[0];

      dot22.x = x;
      dot22.y = y;
      dot22.draw22();
      x += (nextDot.x - dot22.x) * 0.6;
      y += (nextDot.y - dot22.y) * 0.6;
    });
  }

  addEventListener("mousemove", function (event22) {
    mouse22.x = event22.pageX;
    mouse22.y = event22.pageY;
  });

  function animate22() {
    draw22();
    requestAnimationFrame(animate22);
  }

  animate22();

  // end angel_trail bg

  // hover cursor
  $(".open-close button").hover(
    function () {
      $(".MouseTrail").css({ transition: "0.2s", transform: "scale(2)" });
    },
    function () {
      $(".MouseTrail").css({ transition: "0s", transform: "scale(1)" });
    }
  );

  // hoverable movement
  var docWidth = $("body").width(),
    slidesWidth = $(".container").width(),
    rangeX = slidesWidth - docWidth,
    $images = $(".container");

  $(window).on("resize", function () {
    var docWidth = $("body").width(),
      slidesWidth = $(".container").width(),
      rangeX = slidesWidth - docWidth;
  });

  $(document).on("mousemove", function (e) {
    var mouseX = e.pageX,
      percentMouse = (mouseX * 100) / docWidth,
      offset =
        (percentMouse / 100) * slidesWidth - (percentMouse / 100) * docWidth;

    console.log(offset / 10);

    $images.css({
      "-webkit-transform": `perspective(50px) rotateY(${offset / 600}deg)`,
      transform: `perspective(50px) rotateY(${offset / 600}deg)`,
    });
  });

  // slick slider js start
  const slider = $(".slider-item");
  slider.slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    draggable: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "linear",
    rows: 1,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  slider.on("wheel", function (e) {
    e.preventDefault();

    highlightSlideHeading();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  });
  // slick slider js start

  // animate js start
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });

  wow.init();
  // animate js end
  $(".click_to_open ").on("click", function () {
    $(".dot-s").addClass("big-s");

    $(".hero-sec > div > div").addClass("scale-in").removeClass("scale-out");
    $(".main-body-content").addClass("inner2").removeClass("inner4 inner5");
    setTimeout(function () {
      $(".main-body-content").addClass("inner3");
    }, 300);

    setTimeout(function () {
      $(".menu-navigation").addClass("visi").fadeIn("slow");
    }, 1000);

    $(".close-s").show();
    $(".open-s").hide();
  });
  $(".open-s").on("click", function () {
    $(".dot-s").addClass("big-s");
    $(".hero-sec").addClass("slide-box-inner");

    $(".hero-sec > div > div").addClass("scale-in").removeClass("scale-out");
    $(".main-body-content").addClass("inner2").removeClass("inner4 inner5");
    setTimeout(function () {
      $(".main-body-content").addClass("inner3");
    }, 300);

    setTimeout(function () {
      $(".menu-navigation").addClass("visi").fadeIn("fast");
    }, 1000);

    $(".close-s").show();
    $(this).hide();
  });

  $(".close-s").on("click", function () {
    const current = $(".slick-current")[0];
    const attr = $(current).attr("aria-describedby");
    let timer = 0;

    timer = attr === "slick-slide00" ? 0 : 500;

    highlightSlideHeading();
    if (timer !== 0) {
      $(".slider-item").slick("slickGoTo", 0);
    }
    const ref = this;
    setTimeout(function () {
      $(".dot-s").removeClass("big-s");
      $(".hero-sec").removeClass("slide-box-inner");

      $(".main-body-content").addClass("inner4").removeClass("inner2 inner3");
      setTimeout(function () {
        $(".main-body-content").addClass("inner5");
      }, 500);
      const section = $(".hero-sec > div > div")[0];
      $(".hero-sec > div > div").addClass("scale-out").removeClass("scale-in");

      $(".menu-navigation").fadeOut("fast").removeClass("visi");
      $(".open-s").show();
      $(ref).hide();
    }, timer);
  });

  $(".main-head .leter").html(function (index, html) {
    return html.replace(/\S/g, "<span>$&</span>");
  });

  const sliderWork = $(".work-text-slider");
  sliderWork.slick({
    dots: false,
    arrows: false,
    infinite: true,
    draggable: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  sliderWork.on("wheel", function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  });
  $(".list-line-page").hover(
    function () {
      $(".drag-to-show-work").slideUp().fadeIn("slow");
    },
    function () {
      $(".drag-to-show-work").fadeOut("slow");
    }
  );
});

$(function () {
  const current = $(".slick-current")[0];
  const num = $(current).find(".num")[0];
  const name = $(current).find(".menu-page-name")[0];
  $(num).css("color", "white");
  $(name).css("color", "white");
});

// Wave text effect
$(function () {
  const heading = $(".main-head");
  const small = $("#leter__small");

  $(small).mouseover(function () {
    $(this).css("transform", "translateY(-14px)");
  });

  $(small).mouseout(function () {
    const ref = this;
    setTimeout(function () {
      $(ref).css("transform", "translateY(0)");
    }, 150);
  });

  let timer = 60;

  setTimeout(function () {
    for (let i = 0; i < heading.length; i++) {
      const element = heading[i];
      const spans = $(element).find(".leter span");

      for (let j = 0; j < spans.length; j++) {
        const span = spans[j];
        $(span).mouseover(function () {
          $(this).css("transform", "translateY(-14px)");
        });

        $(span).mouseout(function () {
          const ref = this;
          setTimeout(function () {
            $(ref).css("transform", "translateY(0)");
          }, 150);
        });

        moveHeadingUp(span, timer);
        moveHeadingDown(span, timer + 60);
        moveHeadingCenter(span, timer + 300);
        timer += 60;
      }
    }
    moveHeadingUp(small, timer);
    moveHeadingDown(small, timer + 60);
    moveHeadingCenter(small, timer + 300);
  }, 1000);
});

function moveHeadingUp(span, timer) {
  setTimeout(function () {
    $(span).css("opacity", "1");
    $(span).css("transform", "translateY(-20px)");
  }, timer);
}

function moveHeadingDown(span, timer) {
  setTimeout(function () {
    $(span).css("transform", "translateY(10px)");
  }, timer);
}

function moveHeadingCenter(span, timer) {
  setTimeout(function () {
    $(span).css("transform", "translateY(0px)");
  }, timer);
}

function highlightSlideHeading() {
  const current = $(".slick-current")[0];
  const num = $(current).find(".num")[0];
  const name = $(current).find(".menu-page-name")[0];
  $(num).css("color", "#303030");
  $(name).css("color", "#303030");

  setTimeout(function () {
    const current = $(".slick-current")[0];
    const num = $(current).find(".num")[0];
    const name = $(current).find(".menu-page-name")[0];
    $(num).css("color", "white");
    $(name).css("color", "white");
  }, 10);
}
