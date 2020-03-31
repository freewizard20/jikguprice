function gofb() {
    var tmp = ogeturl;
    var tmp2;
    $.get({
      url: 'https://tinyurl.com/api-create.php?url=' + tmp,
      success: function(response) {
        console.log(response);
        tmp = response; // Evaluate the J-Son response object.
        tmp2 = 'https://www.facebook.com/sharer/sharer.php?u=' + tmp.id;
        $("#fblink").attr("href", tmp2);
        $("#fblink").css("display", "block");
      }
    });


  }

  function gotw() {
    console.log("twtw");
    var tmp = ogeturl;
    var tmp2;
    var linktext = "%EC%A7%81%EA%B5%AC+%EC%B5%9C%EC%A2%85+%EA%B0%80%EA%B2%A9%EC%9D%80+" + ototaltotalc + "%EC%9B%90+%EC%9E%85%EB%8B%88%EB%8B%A4%28" + ocountrymark + ototalpricec + "%29.%0D%0A%0D%0A%EB%A7%81%ED%81%AC%EB%A1%9C+%EA%B3%84%EC%82%B0%EA%B2%B0%EA%B3%BC+%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0+-%0D%0A";

    $.ajax({

      url: '',
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: '{ longUrl: "' + tmp + '"}',
      dataType: 'json',
      success: function(response) {
        tmp = response // Evaluate the J-Son response object.
        tmp2 = 'https://twitter.com/intent/tweet?text=' + linktext + '&url=' + tmp.id;

        $("#twlink").attr("href", tmp2);
        $("#twlink").css("display", "block");
      }
    });
  }

  //end of getshipprice


  //initialize


  function upurl() {
    window.history.replaceState(null, null, "/index.html" + otarget);
  }

  // code for smooth scroll
  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
  });

  // code for clipboard link share
  $(document).ready(function() {
    var ajfldkvk = new Clipboard('#clipper');
  });

  // code for kakao share
  Kakao.init('75f00ee6dcb105f17719b96593414cb2');

  function kakao() {
    var linktext = "직구 최종 가격은 " + ototaltotalc + "원 입니다(" + ocountrymark + ototalpricec + ").";
    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
            content: {
      title: linktext,
      description: '직구 계산과 배대지 비교 - 직구프라이스',
      imageUrl: 'https://jikguprice.com/img/logo.png',
      link: {
        mobileWebUrl: ogeturl,
        webUrl: ogeturl
      }
    },
    social: {
      likeCount: 1364,
      sharedCount: 845
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: ogeturl,
          webUrl: ogeturl
        }
      }
    ]
    });
  }

  // smooth scroll
  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  // prepare modals at load
  $(document).ready(function() {
    $("a[rel*=link1]").leanModal({ overlay: 0.5, closeButton: ".modal_close" });
    $("a[rel*=link2]").leanModal({ overlay: 0.5, closeButton: ".modal_close" });
    $("a[rel*=link3]").leanModal({ overlay: 0.5, closeButton: ".modal_close" });
    $("a[rel*=link4]").leanModal({ overlay: 0.5, closeButton: ".modal_close" });
    $("a[rel*=link5]").leanModal({ overlay: 0.5, closeButton: ".modal_close" });
  });
  // Script for Line share
  function sendLine() {
    var sns_title = "최종 가격은 " + ototaltotalc + "원 입니다(" + ocountrymark + ototalpricec + ")."; //title
    var sns_summary = "그래서, 집 앞까지 얼만데? 관세 계산기 직구프라이스";
    var sns_br = "\n";
    var sns_link = ogeturl;
    var sns_img = "";
    var line = "http://line.me/R/msg/text/?" + encodeURIComponent(sns_title + sns_br + sns_summary + sns_br + sns_link);
    window.open(line, "_blank");
  }