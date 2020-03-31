setTimeout(
    function() {
      $('#preloader').fadeOut(1, function() { $(this).remove(); });

    }, 1);

    if ($(window).width() > 990 && $(window).width() < 1250) {
        $("#logoarea").removeClass("l4");
        $("#logoarea").addClass("l5");
        $("#googlead1").removeClass("l8");
        $("#googlead1").addClass("l7");
      }
  
      if ($(window).width() > 990) {
        $('#googlead2').insertBefore('#survey');
      }
      else {
  
        $('#googlead2').insertAfter('#amazonaa');
        $('#amazonad').insertBefore('#resultscard');
  
      }
  
  
  
  
      if ($(window).width() > 990) {
        $('#gobutton').css('display', 'none');
        $('#gobutton2').css('display', 'none');
      }
      else {
        $('#gobutton2').css('display', 'block');
        $('#gobutton').css('display', 'block');
        $('#survey').css("margin-bottom", 5);
        $('#amazontitle').css("margin-bottom", 30);
        $('#resultscard').css("padding", 0);
        $('#printresult').css("padding", 0);
        $('#amazonad').css("padding", 0);
        $('#googlead').css("padding", 0);
        $('#googlead2').css("padding", 0);
        $('#logorow').css("margin-bottom", 0);
  
      }
  
  
      $(window).resize(function() {
  
        if ($(window).width() > 990) {
          $('#googlead2').insertBefore('#survey');
          $('#gobutton').css('display', 'none');
          $('#gobutton2').css('display', 'none');
        }
        else {
          $('#gobutton').css('display', 'block');
          $('#gobutton2').css('display', 'block');
          $('#googlead2').insertBefore('#resultscard');
        }
  
        if ($(window).width() > 990 && $(window).width() < 1250) {
          $("#logoarea").removeClass("l4");
          $("#logoarea").addClass("l5");
          $("#googlead1").removeClass("l8");
          $("#googlead1").addClass("l7");
        }
        else {
          $("#logoarea").removeClass("l5");
          $("#logoarea").addClass("l4");
          $("#googlead1").removeClass("l7");
          $("#googlead1").addClass("l8");
        }
  
  
  
        if ($(window).width() > 990 && $(window).width() < 1250) {
          $("#logoarea").removeClass("l4");
          $("#logoarea").addClass("l5");
          $("#googlead1").removeClass("l8");
          $("#googlead1").addClass("l7");
        }
  
        if ($(window).width() > 990) {
          $('#googlead2').insertBefore('#survey');
          $('#amazonad').insertAfter('#amazonaa');
        }
        else {
  
          $('#googlead2').insertAfter('#amazonaa');
          $('#amazonad').insertBefore('#resultscard');
  
        }
  
        if ($(window).width() > 990) {
          $('#survey').css("margin-bottom", 16);
          $('#amazontitle').css("margin-bottom", 30);
          $('#resultscard').css("padding-right", 12);
          $('#printresult').css("padding-right", 12);
          $('#resultscard').css("padding-left", 12);
          $('#printresult').css("padding-left", 12);
          $('#amazonad').css("padding-right", 12);
          $('#googlead').css("padding-right", 12);
          $('#googlead2').css("padding-right", 12);
          $('#logorow').css("margin-bottom", 20);
  
        }
        else {
  
          $('#survey').css("margin-bottom", 5);
          $('#amazontitle').css("margin-bottom", 30);
          $('#resultscard').css("padding", 0);
          $('#printresult').css("padding", 0);
          $('#amazonad').css("padding", 0);
          $('#googlead').css("padding", 0);
          $('#googlead2').css("padding", 0);
          $('#logorow').css("margin-bottom", 0);
  
        }
  
      });
  
      var i;
  
  
      function getUrlParams() {
        var params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
          params[key] = value;
        });
        return params;
      }
      var urlparam;
      urlparam = getUrlParams();
  
      function numnify(number) {
  
        if (isNaN(Number(number))) {
  
          return 0;
        }
        else {
  
          return Number(number);
        }
      }
  
  
  
      function comnify(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }
  
      var ogeturl;
      var otarget;
      var ototaltotalc = 0;
      var ocountrymark;
      var ototalpricec = 0;
      var oeraseall;