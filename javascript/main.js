
$(document).ready(function () {

  $("#lang").click(function () {
    let display = $(".options").css("display");
    if (display == "none") {
      $(".options").css("display", "block");
    } else {
      $(".options").css("display", "none");
    }
  });
  $("#USD").click(function () {
    alert("ok");
  });
  $("#EUR").click(function () {
    alert("ok");
  });
  $(document).scroll(function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      $(".top-heading").addClass("d-none");
      $("#button2top").removeClass("d-none");
      $("#h1 .main-heading").addClass("d-none");
      $("#h2").removeClass("d-none");
      $("#h1").addClass("height");
    } else {
      $(".top-heading").removeClass("d-none");
      $("#button2top").addClass("d-none");
      $("#h1 .main-heading").removeClass("d-none");
      $("#h2").addClass("d-none");
      $("#h1").removeClass("height");
    }
  });

  $("#button2top").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  $(".image-container").hover(function () {
    $(".image-overlay", this).css({ "diplay": "block", "opacity": "1" });
    $(".image-overlay button", this).addClass("animated fadeInUp ")
  }, function () {
    $(".image-overlay", this).css({ "diplay": "none", "opacity": "0" });
    $(".image-overlay button", this).removeClass("animated fadeInUp")
  })

  $(".block-items").hover(function () {
    $(".overlay", this).css({ "diplay": "block", "opacity": "1" });
    $(".overlay div", this).addClass("animated fadeInUp ")
  }, function () {
    $(".overlay", this).css({ "diplay": "none", "opacity": "0" });
    $(".overlay div", this).removeClass("animated fadeInUp")
  })

  if (sessionStorage.getItem("count") == null || isNaN(sessionStorage.getItem("count"))) {
    console.log("he")
    $("#items-count").text("0");
    $(".minus-plus input").val("0");
  } else {
    console.log("yox")
    $("#items-count").text(sessionStorage.getItem("count"));
    let key = sessionStorage.getItem("count");
    $(".minus-plus input").val(key);
  }
  $("button").click(function () {
    let text = $.trim($(this).text());
    if (text == "Add to card" || $(this).attr("value") == "+") {
      let count = parseInt($("#items-count").text());
      count++;
      sessionStorage.setItem("count", count);
      $("#items-count").text(sessionStorage.getItem("count"));
      let key = sessionStorage.getItem("count");
      $(this).prev().val(key);
    } else if ($(this).attr("value") == "-") {
      let count = parseInt($("#items-count").text());
      count--;
      sessionStorage.setItem("count", count);
      $("#items-count").text(sessionStorage.getItem("count"));
      let key = sessionStorage.getItem("count");
      $(this).next().val(key);
    }

    if (text == "Add to card") {
      Swal.fire(
        'Item Added to Your List!',
        'Go to Features page to costimize your list',
        'info'
      )
    }
  })

  $('#play').click(() => {
    Swal.fire(
      'Commercial video',
      '<iframe width="100%" height="300" src="https://www.youtube.com/embed/Nt8ZrWY2Cmk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    )
  });

  $("#user").click(function(){
    let display = $("#login").attr("class");
    if(display=="d-none"){
      $("#login").removeClass("d-none");
    }else{
      $("#login").addClass("d-none");
    }
  })

  $(".icon").click(function(){
    let classname = $(".menu").attr("class");
    if(classname=="menu"){
      $(".menu").addClass("responsive");
    }else{
      $(".menu").removeClass("responsive");
    }
  })
});
