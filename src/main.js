import Vue from 'vue'

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


var vuecurrencybar = new Vue({
      el: '#currencybar',
      data: {
        country: '미국',
        usedcurrency: '1173',
        updatedtime: '',
        usedcurrencystd: '1149.2',
        currencytimestamp: '',
        date: '',
        hr: '',
        mn: '',
        stddate: '2/26 ~ 4'
      },
      computed: {
        datestamp: function() {
          var date = new Date(this.currencytimestamp * 1000);
          this.date = date.getDate();
          this.hr = date.getHours();
          this.mn = date.getMinutes();
        },
        currency_formatted : function(){
          return this.usedcurrency.toFixed(2);
        }
      },
      template : `
        <div class="z-depth-1">
        <p style="display:none" class="blue">{{datestamp}}</p>
        <div class="container">
          {{country}} 환율 : <span style="color:#c0071e">{{usedcurrency}}원 </span><span class="fxex2" style="font-size:12px;color:#9e9e9e;">({{hr}}:{{mn}})</span><span class="fxex" style="font-size:12px;color:#9e9e9e;">( {{date}}일 {{hr}}:{{mn}}시 기준 )</span>          | 고시환율 : <span style="color:#c0071e">{{usedcurrencystd}}원 </span>
          <span class="fxex" style="font-size:12px;color:#9e9e9e;">( {{stddate}} )</span>
        </div>
      </div>    
      `
    });

    var vueresult = new Vue({
      el: '#vueresult',
      data: {
        price1: 0,
        price2: 0,
        ship1: 0,
        ship2: 0,
        ship3: 0,
        tax1: 0,
        tax2: 0,
        tax3: 0,
        tax1rate: 0,

        tax3rate: 10,
        dis1: 0,
        dis2: 0,
        dis3: 0,
        erate: 5,
        edown: 0,
        eup: 0,
        totalbfdis: 0,
        countrymark: '$',
        totalforex: 0,
        totalship: 0,
        itemtt: '',
        shipperioddisplay: '10 ~ 14',
        shipmethoddisplay: '항공',
        shipcompdisplay: '표준',
        isrealweightdisplay: '실무게',
        weightdisplay: 0,
        weightunitdisplay: 'lbs',
        cardtypedisplay: '카드',
        fcardtypedisplay: '표준',
        compareresult: {
            malltail : 0,
            ehanex : 0,
            iporter : 0,
            postbay : 0,
            omyzip : 0,
            uniauction : 0,
            eldex : 0,
            newyorkgirls : 0,
            ginizip : 0,
        },
        compareresult_showable: [true, true, true, true, true, true, true, true, true]
      },
      template : `<div>
                    <h6 class="light-blue-text" style="font-size:20px;margin-bottom:20px;margin-top:20px;margin-left:20px;">직구프라이스 계산내역</h6>


              <div class="z-depth-1" style="margin:7px 15px;margin-bottom:12px;padding:10px 20px;border:1px solid black;border-radius:3px;">
                <div style="">
                  <img src="img/logotext.jpg" style="height:35px;display:block;position:relative;left:-3px;">
                  <img src="img/logo.png" id="logoimgg" style="height:35px;display:inline-block;margin-top:3px;">
                  <span style="font-size:22px;display:inline-block;position:relative;top:-9px;left:6px;">최종 구매가 : </span><span style="color:green;font-size:22px;display:inline-block;position:relative;top:-9px;left:12px;">{{totaltotalc}}원</span>
                </div>
                <div class="clear"></div>

                <h6 style="font-size:12px;margin-bottom:0px;margin-top:-6px;" class="grey-text">( 예상 배송기간 : {{shipperioddisplay}}일
                  <div style="display:inline-block;margin-top:3px;"> / {{shipcompdisplay}} {{shipmethoddisplay}}<span v-if="shipmethoddisplay=='해상'||shipmethoddisplay=='항공'"> {{isrealweightdisplay}} {{weightdisplay}}{{weightunitdisplay}} </span></div>
                  <div style="display:inline-block;margin-top:3px;">
                  / {{cardtypedisplay}} {{fcardtypedisplay}} )</div>
                </h6>
                <h6 style="font-size:12px;margin-bottom:15px;margin-top:0px;" class="light-blue-text">오차범위 : {{edown}} ~ {{eup}}원 ({{erate}}%)<i class="material-icons grey-text text-lighten qpopup" onclick="Materialize.toast('기본오차 2.5%<br />배송대행업체 미지정 3%<br />카드사 미지정 0.5%<br />해외결제사 미지정 0.9%',4000)" style="font-size:16px;position:relative;top:4px;left:3px;">&#xE8FD;</i></h6>
              </div>
              <p style="display:none">{{ererec}}</p>
              <div class="clear"></div>


              <ul class="collapsible" data-collapsible="expandable" style="box-shadow:none;border-right:none;border-left:none;margin-bottom:0px;">
                <li>
                  <div class="collapsible-header"><i class="material-icons">payment</i>
                    <a href="#!" class="secondary-content">
                      <i class="tiny material-icons" style="margin-right:-6px">keyboard_arrow_down
                  </i>
                    </a>
                    쇼핑몰 결제({{countrymark}} {{totalforex}})
                    <a href="#!" style="color:green;" class="secondary-content">{{pricetotalc}}원</a>

                  </div>
                  <div class="collapsible-body">
                    <ul class="collection">
                      <li class="collection-item">판매자 지불<a href="#!" class="secondary-content black-text">{{price1c}}원</a></li>
                      <li class="collection-item">카드 수수료<a href="#!" class="secondary-content black-text">{{price2c}}원</a></li>
                    </ul>

                  </div>

                </li>
                <li>
                  <div class="collapsible-header"><i class="material-icons">&#xE558;</i>전체 배송비
                  
                  <a style="margin-top:3px;" rel="link5" href="#modal_compare">
                    <div id="fixedship" style="margin-left:6px;margin-top:9.5px;" class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn"  v-if="shipmethoddisplay=='항공' || shipmethoddisplay=='해상'">
                      <h6 style="margin:7px 7px 7px 7px;">배대지 비교</h6>
                    </div>
                  </a>

                    <a href="#!" class="secondary-content "><i class="tiny material-icons " style="margin-right:-6px">keyboard_arrow_down</i></a>
                    <a href="#!" style="color:green;" class="secondary-content">{{shiptotalc}}원</a></div>
                  <div class="collapsible-body">
                    <ul class="collection">
                      <li class="collection-item">쇼핑몰 배송비({{countrymark}} {{totalship}})<a href="#!" class="secondary-content black-text">{{ship1c}}원</a></li>
                      <li class="collection-item">배송대행비
                        <a href="#!" class="secondary-content black-text">{{ship2c}}원</a>
                      </li>
                      <li class="collection-item">카드 수수료<a href="#!" class="secondary-content black-text">{{ship3c}}원</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header"><i class="material-icons">&#xE84F;</i>관부가세 {{itemtt}}
                    <a href="#!" class="secondary-content"><i class="tiny material-icons " style="margin-right:-6px">keyboard_arrow_down</i></a>
                    <a href="#!" style="color:green;" class="secondary-content">{{taxtotalc}}원</a>
                  </div>
                  <div class="collapsible-body">
                    <ul class="collection">
                      <li class="collection-item">관세({{tax1rate}}%)<a href="#!" class="secondary-content black-text">{{tax1c}}원</a></li>

                      <li class="collection-item">부가세(10%)<a href="#!" class="secondary-content black-text">{{tax3c}}원</a></li>
                      <li class="collection-item">특별세({{tax2rate}}%)<a href="#!" class="secondary-content black-text">{{tax2c}}원</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header"><i class="material-icons">&#xE8F6;</i>할인내역<span style="color:#c0071e;font-size:15px;">({{disrate}}%)</span>
                    <a href="#!" class="secondary-content light-blue-text"><i class="tiny material-icons" style="color:#c0071e;margin-right:-6px">keyboard_arrow_down</i></a>
                    <a href="#!" class="secondary-content" style="color:#c0071e">{{distotalc}}원</a>
                  </div>
                  <div class="collapsible-body">
                    <ul class="collection">
                      <li class="collection-item">쇼핑몰 추가할인({{dis1rate}}%)
                        <a href="#!" class="secondary-content black-text">{{dis1c}}원</a>
                      </li>
                      <li class="collection-item">배송대행비 추가할인({{dis2rate}}%)
                        <a href="#!" class="secondary-content black-text">{{dis2c}}원</a>
                      </li>
                      <li class="collection-item">카드 포인트/청구할인({{dis3rate}}%)
                        <a href="#!" class="secondary-content black-text">{{dis3c}}원</a>
                      </li>



                    </ul>
                  </div>
                </li>
              </ul>
              <div id="modal_compare" class="comparemodal center">
                <h5 id="modal_compare_title" style="margin-top:7px;margin-bottom:3px;color:#03a9fa;font-weight:bold;">배대지 비교 ({{weightdisplay}}lbs)</h5>
                <h6 style="margin_bottom:10px;font-weight:900;">( {{shipmethoddisplay}}, {{isrealweightdisplay}} )</h6>
                <div class="divider"></div>
                <div v-if="compareresult_showable[0]==true" class="compare_list">
                <span class="compare_name">몰테일</span> : <span class="compare_text">{{compareresult.malltail}}</span>원
                </div>
                <div v-if="compareresult_showable[1]==true" class="compare_list">
                <span class="compare_name">이하넥스</span> : <span class="compare_text">{{compareresult.ehanex}}</span>원
                </div>
                <div v-if="compareresult_showable[2]==true" class="compare_list">
                <span class="compare_name">아이포터</span> : <span class="compare_text">{{compareresult.iporter}}</span>원
                </div>
                <div v-if="compareresult_showable[3]==true" class="compare_list">
                <span class="compare_name">포스트베이</span> : <span class="compare_text">{{compareresult.postbay}}</span>원
                </div>
                <div v-if="compareresult_showable[4]==true" class="compare_list">
                <span class="compare_name">오마이집</span> : <span class="compare_text">{{compareresult.omyzip}}</span>원
                </div>
                <div v-if="compareresult_showable[5]==true" class="compare_list">
                <span class="compare_name">유니옥션</span> : <span class="compare_text">{{compareresult.uniauction}}</span>원
                </div>
                <div v-if="compareresult_showable[6]==true" class="compare_list">
                <span class="compare_name">엘덱스</span> : <span class="compare_text">{{compareresult.eldex}}</span>원
                </div>
                <div v-if="compareresult_showable[7]==true" class="compare_list">
                <span class="compare_name">뉴욕걸즈</span> : <span class="compare_text">{{compareresult.newyorkgirls}}</span>원
                </div>
                <div v-if="compareresult_showable[8]==true" class="compare_list">
                <span class="compare_name">지니집</span> : <span class="compare_text">{{compareresult.ginizip}}</span>원
                </div>
                <span style="margin:5px;font-size:13px;">* 회원 할인이나 쿠폰은 설정에서 적용해 주세요.
              </div>
            </div>
      `,
      computed: {
        dis1rate: function() {
          if (this.totalbfdis == 0) {
            return 0;
          }
          else {
            return (-(this.dis1 / this.totalbfdis) * 100).toFixed(1);
          }
        },
        dis2rate: function() {
          if (this.totalbfdis == 0) {
            return 0;
          }
          else {
            return (-(this.dis2 / this.totalbfdis) * 100).toFixed(1);
          }
        },
        dis3rate: function() {
          if (this.totalbfdis == 0) {
            return 0;
          }
          else {
            return (-(this.dis3 / this.totalbfdis) * 100).toFixed(1);
          }
        },
        disrate: function() {
          return (numnify(this.dis1rate) + numnify(this.dis2rate) + numnify(this.dis3rate)).toFixed(1);
        },
        pricetotal: function() {
          return (numnify(this.price1) + numnify(this.price2));
        },
        shiptotal: function() {
          return (numnify(this.ship1) + numnify(this.ship2) + numnify(this.ship3));
        },
        taxtotal: function() {
          return (numnify(this.tax1) + numnify(this.tax2) + numnify(this.tax3));
        },
        distotal: function() {
          return (numnify(this.dis1) + numnify(this.dis2) + numnify(this.dis3));
        },
        totaltotal: function() {
          this.totalbfdis = (numnify(this.pricetotal) + numnify(this.shiptotal) + numnify(this.taxtotal));
          return ((numnify(this.pricetotal) + numnify(this.shiptotal) + numnify(this.taxtotal) - numnify(this.distotal)));
        },
        pricetotalc: function() {
          return comnify(numnify(this.price1) + numnify(this.price2));
        },
        shiptotalc: function() {
          this.compareresult = {
            malltail : comnify(this.compareresult.malltail),
            ehanex : comnify(this.compareresult.ehanex),
            iporter : comnify(this.compareresult.iporter),
            postbay : comnify(this.compareresult.postbay),
            omyzip : comnify(this.compareresult.omyzip),
            uniauction : comnify(this.compareresult.uniauction),
            eldex : comnify(this.compareresult.eldex),
            newyorkgirls : comnify(this.compareresult.newyorkgirls),
            ginizip : comnify(this.compareresult.ginizip),
          }
          return comnify(numnify(this.ship1) + numnify(this.ship2) + numnify(this.ship3));
        },
        taxtotalc: function() {
          return comnify((numnify(this.tax1) + numnify(this.tax2) + numnify(this.tax3)));
        },
        distotalc: function() {
          return comnify(-(numnify(this.dis1) + numnify(this.dis2) + numnify(this.dis3)));
        },
        totaltotalc: function() {
          var tmp = comnify((numnify(this.pricetotal) + numnify(this.shiptotal) + numnify(this.taxtotal) - numnify(this.distotal)));
          ototaltotalc = tmp;
          return tmp;
        },
        price1c: function() {
          return comnify(this.price1);
        },
        price2c: function() {
          return comnify(this.price2);
        },
        ship1c: function() {
          return comnify(this.ship1);
        },
        ship2c: function() {
          return comnify(this.ship2);
        },
        ship3c: function() {
          return comnify(this.ship3);
        },
        tax1c: function() {
          return comnify(this.tax1);
        },
        tax2c: function() {
          return comnify(this.tax2);
        },
        tax3c: function() {
          return comnify(this.tax3);
        },
        dis1c: function() {
          return comnify(-this.dis1);
        },
        dis2c: function() {
          return comnify(-this.dis2);
        },
        dis3c: function() {
          return comnify(-this.dis3);
        },
        tax2rate: function() {
          return Math.round(numnify(this.tax2 / this.pricetotal) * 100)
        },
        ererec: function() {
          this.edown = comnify(Math.round(numnify(this.totaltotal) * (1 - (numnify(this.erate) / 100))));
          this.eup = comnify(Math.round(numnify(this.totaltotal) * (1 + (numnify(this.erate) / 100))));
        }
      }

    });

    var vueconsole = new Vue({
      el: '#vueconsole',
      data: {
        forex: {
          us: 1173.4,
          jp: 10.56,
          eu: 1250.2,
          cn: 173.2,
          uk: 1291.3
        },
        forexstd: {
          us: 1156.71,
          jp: 10.16,
          eu: 1228.06,
          cn: 168.68,
          uk: 1444.89
        },
        usedforex: 1173.4,
        usedforexstd: 1153.4,
        cardtype: 'basic',
        cardrated: 0.0028,
        cardratein: '',
        fcardtype: 'basic',
        fcardrated: 0.01,
        fcardratein: '',
        shiptype: 'basic',
        mainitem: {
          price: '',
          shipprice: '',
          weight: ''
        },
        additem: [],
        country: 'us',
        shipmethod: 'air',
        weightbutton: true,
        volumeweightbutton: false,
        volumeshipdiscount: false,
        volume: {
          x: '',
          y: '',
          z: ''
        },
        fixedshipprice: '',
        fixedshipisforex: true,
        weightunit: 'lbs',
        volumeweightunit: 'cm',

        ttt: '',
        carddisc: '',
        carddisratec: '',
        malldis: {
          type: 'forex',
          amount: ''
        },
        shipdis: {
          type: 'perc',
          amount: ''
        },
        carddis: {
          type: 'won',
          amount: ''
        },
        malldisdd: [],
        shipdisdd: [],
        carddisdd: [],
        totalitemprice: 0,
        itemtype: '1',
        itemtype2: 'none',
        isnotlist: 'false',
        tover: false,
        perover: false,
        smokev: 1,
        smokev2: 1,
        showshipad: false,
        cbm: 0,
        realweightdisplay: 0,
        volumeweightdisplay: 0,
        ssb: [true, true, true, true, true, true, true, true, true],
        target: '',
        cardrate_forex:{
          basic : 0.0105,
          visa : 0.011,
          mastercard : 0.01,
          amex : 0.014,
          maestro : 0.03,
          jcb : 0,
          bcg : 0,
          union : 0.008
      },
      cardrate_bank: {
        basic : 0.0028,
        shinhan : 0.0018,
        lotte : 0.002,
        kookmin : 0.0025,
        citi : 0.005,
        samsung : 0.0025,
        hyundai : 0.0018,
        woori : 0.003,
        nonghyup : 0.0035,
        hana : 0.003,
        bcglobal : 0.0035,
      }
      },
      template:`
      <div>
                  <h6 class="light-blue-text" style="font-size:20px;margin-bottom:10px;margin-top:20px;margin-left:20px;">직구하실 제품 정보를 알려주세요</h6>

            <div class="col s12 l12" style="padding:0px 20px;">
              <div class="divider"></div>
              <a href="#!" v-on:click="additem.push({price:'', shipprice:'', weight:''})" style="float:right;position:relative;top:5px;">
                <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" style="margin-right:-5px;">
                  <h6 style="margin:5px 10px;">합배송 추가</h6>
                </div>
              </a>
              <h5><i class="material-icons" style="margin-left:-5px;margin-right:10px;position:relative;top:4px;">payment</i>결제금액 <span v-if="(istax==false)" style="color:#bdbdbd;font-size:15px;"> (관세기준 {{countrymark}} {{safeprice}})</span></h5>
              <div class="clear"></div>
              <h6>물품가(현지세금 포함) : {{countrymark}} <input type="number" style="width:70px;margin-left:5px;" v-model="mainitem.price" class="jeoninput" placeholder="149.99"></h6>
              <h6>쇼핑몰 배송비 : {{countrymark}} <input type="number" style="width:70px;margin-left:5px;margin-bottom:15px;" v-model="mainitem.shipprice" placeholder="5.67" class="jeoninput"></h6>

              <ul class="collection" style="margin-bottom:-10px;border:none;margin-left:-20px;margin-right:-20px;">

                <template v-for="(item,index) in additem">
              <li class="collection-item jeonl jlist">
                              
                  <h5 class="light-blue-text" style="margin:5px 10px;float:right;position:relative;top:5px;left:5px;"><i style="cursor:pointer" v-on:click="additem.splice(index,1)" class="material-icons">&#xE14C;</i></h5>
                
                <h6>추가 물품가 : {{countrymark}} <input type="number" style="width:70px;margin-left:5px;" class="jeoninput" v-model="item.price" placeholder="149.99"></h6>
                <h6>쇼핑몰 배송비 : {{countrymark}} <input type="number" style="width:70px;margin-left:5px;" v-model="item.shipprice" placeholder="5.67" class="jeoninput"></h6>
                
              </li>                
                
                
              </template>

              </ul>
              <div class="z-depth-1 center-align" style="margin:12px 5px;margin-bottom:12px;padding:10px 15px;border:1px solid green;border-radius:3px;" v-if="istax==false&&totalprice!=0">
                <h6 style="color:green;font-size:18px;line-height:137%;">관부가세가 면제됩니다.<br />(총액 : {{countrymark}} {{totalpricec}})<span style="color:red;position:relative;top:5px;" v-if="((istax==false&&totalprice!=0)&&(country=='us'))&&(this.totalprice>150)"><br /><span style="font-size:13px;">* 목록통관이 아닌가요?<i onclick="Materialize.toast('목록통과 불가 품목 :<br />식품류, 술담배, 의약품, 건강기능식품, 화장품 중 (미백/자외선제품/60ml이상 향수), 동식물 등<br />정식 신고절차가 필요한 제품',9000)" class="material-icons" style="position:relative;top:4px;left:3px;cursor:pointer;font-size:17px;opacity:0.7;">&#xE8FD;</i></span><input type="checkbox" v-model="isnotlist" style="position:relative;left:4px;top:2.5px;"></span></h6>
                <div class="clear"></div>
              </div>
              <div class="z-depth-1 center-align" style="margin:12px 0px;margin-bottom:12px;padding:10px 15px;border:1px solid red;border-radius:3px;" v-if="istax==true">
                <h6 style="color:red;font-size:18px;line-height:137%;">관부가세 계산을 위해 품목을 알려주세요<i onclick="Materialize.toast('과세기준 :<br />미국 목록통관 (결제총액 $200)<br />기타 (결제총액 $150 상당)',4000)" class="material-icons" style="position:relative;top:3px;left:5px;cursor:pointer;font-size:20px;opacity:0.7;">&#xE8FD;</i><br
                  />(총액 : {{countrymark}} {{totalpricec}})</h6>
                <div class="clear"></div>
                <select style="margin:10px 0px;border:1px solid #bdbdbd;font:inherit;" v-if="istax==true" v-model="itemtype">
                  <option v-if="((country=='us'||country=='eu')||country=='uk')" value="1">무관세(FTA)</option>
                  <option value="121">시계류</option>
                  <option value="2">의류</option>
                  <option value="3">양말/스타킹</option>
                  <option value="4">선글라스/안경</option>
                  <option value="5">신발</option>
                  <option value="6">의류잡화(가방/지갑/장갑 등)</option>
                  <option value="53">보석/쥬얼리/백</option>
                  <option value="7">넥타이/스카프</option>
                  <option value="8">우산</option>
                  <option value="9">운동용품(낚시/골프/스키/수영 등)</option>
                  <option value="10">자전거/용품</option>
                  <option value="11">스포츠 의류/신발/글러브</option>
                  <option value="12">텐트</option>
                  <option value="13">자동차 부품</option>
                  <option value="14">애완용품</option>
                  <option disabled="disabled">----</option>
                  <option value="15">유모차</option>
                  <option value="16">분유/이유식</option>
                  <option value="17">목욕통</option>
                  <option value="18">기저귀</option>
                  <option value="19">완구</option>
                  <option value="20">레고/바퀴가 있는 장난감</option>
                  <option disabled="disabled">----</option>
                  <option value="21">TV</option>
                  <option value="22">핸드폰</option>
                  <option value="23">컴퓨터/부품/NAS</option>
                  <option value="24">기타 가전기기(청소기/커피머신 등)</option>
                  <option value="25">카메라(디지털)</option>
                  <option value="26">카메라(이외)</option>
                  <option value="27">캠코더/마이크/녹음기</option>
                  <option value="28">스피커/오디오/음향기기</option>
                  <option value="29">악기류</option>
                  <option value="30">도서/공책</option>
                  <option value="31">CD음반</option>
                  <option disabled="disabled">----</option>
                  <option value="32">건강보조식품</option>
                  <option value="33">화장품</option>
                  <option value="34">향수</option>
                  <option value="35">위생용품(샴푸/면도/목욕 등)</option>
                  <option value="36">의약품</option>
                  <option disabled="disabled">----</option>
                  <option value="37">초콜릿/캔디</option>
                  <option value="38">과자</option>
                  <option value="39">차/커피</option>
                  <option value="40">캡슐커피</option>
                  <option value="41">식품</option>
                  <option disabled="disabled">----</option>
                  <option value="42">미술품(원화)/수집품</option>
                  <option value="43">피규어/장난감</option>
                  <option value="44">인테리어 장식품</option>
                  <option value="45">식기/주방용품</option>
                  <option value="46">매트리스/이불/베게류</option>
                  <option value="47">양탄자</option>
                  <option disabled="disabled">----</option>
                  <option value="48">담배</option>
                  <option value="49">라이터/파이프</option>
                  <option value="50">와인/청주</option>
                  <option value="51">보드카/데킬라/위스키</option>
                  <option value="52">소주/맥주</option>
                  

                  
                  
            </select>
                <span style="font-size:13px;color:black;" v-if="istax==true&&itemtype==48"><br />담배가 몇보루인가요? <input type="number" v-model="smokev"></span>
                <span style="font-size:13px;color:black;" v-if="istax==true&&itemtype==34"><br />향수가 60ml 이상인가요? <input type="checkbox" v-model="perover"></span>
                <span style="font-size:13px;color:black;" v-if="istax==true&&itemtype==21"><br />tv가 300W 이상 & 42인치 이상인가요? <input type="checkbox" v-model="tover"></span>
                <span style="font-size:13px;color:black;" v-if="totalweight==0 || (shipmethod=='fixed' || shipmethod=='direct')"><br />* 실무게를 입력해야 관부가세 계산이 정확해집니다</span>
                <span v-if="(shipmethod=='fixed' || shipmethod=='direct')"><br /></span><input type="number" v-if="(shipmethod=='fixed' || shipmethod=='direct')" v-model="mainitem.weight" style="width:50px;margin-left:0px;margin-top:5px;" class="jeoninput"
                  placeholder="12">
                <select v-model="weightunit" style="margin-left:2px;margin:5px;" v-if="(shipmethod=='fixed' || shipmethod=='direct')">
              <option value="lbs">lbs(pounds)</option>
  <option value="kg">kg</option>
  
  <option value="g">g</option>
  <option value="ounces">ounces</option>
</select>


                <div class="clear"></div>
              </div>
              <div class='clear'></div>
              <div class="divider" style=""></div>
              <h5><i class="material-icons" style="margin-left:-5px;margin-right:10px;position:relative;top:4px;">&#xE558;</i>배송대행 정보
                <a href="#!">
                  <div id="airship" class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-bind:class="{orange:shipmethod=='air'}" v-on:click="shipmethod = 'air'">
                    <h6 style="margin:5px 10px;">항공</h6>
                  </div>
                </a>
                <a href="#!">
                  <div id="seaship" class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" v-bind:class="{orange:shipmethod=='sea'}" v-on:click="shipmethod = 'sea'">
                    <h6 style="margin:5px 10px;">해상</h6>
                  </div>
                </a>
                <a href="#!">
                  <div id="directship" class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" v-bind:class="{orange:shipmethod=='direct'}" v-on:click="shipmethod = 'direct'">
                    <h6 style="margin:5px 10px;">한국 직배송</h6>
                  </div>
                </a>
                <a href="#!">
                  <div id="fixedship" class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" v-bind:class="{orange:shipmethod=='fixed'}" v-on:click="shipmethod = 'fixed'">
                    <h6 style="margin:5px 10px;">고정배송비</h6>
                  </div>
                </a>
</h5>
                <h5 style="margin-top:0px;">

                  <h6 v-if="shipmethod=='fixed'">고정 배송비 :
                    <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-bind:class="{orange:fixedshipisforex!=true}" v-on:click="fixedshipisforex=!fixedshipisforex">
                      <h6 v-if="fixedshipisforex==true" style="margin:5px 5px;">{{countrymark}}</h6>
                      <h6 v-if="fixedshipisforex==false" style="margin:5px 5px;">원</h6>
                    </div>
                    <input type="number" style="width:70px;margin-left:5px;" v-model="fixedshipprice" class="jeoninput"></h6>

                  <a v-if="shipmethod=='air' | shipmethod == 'sea'" href="#!">
                    <div style="margin-bottom:5px;" id="weightbutton" class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:weightbutton==true}" v-on:click="weightbutton = !weightbutton">
                      <h6 style="margin:5px 10px;">실무게</h6>
                    </div>
                  </a>


                  <div v-if="(shipmethod=='air' | shipmethod == 'sea')&&weightbutton==true " id="weightinput" style="display:inline-block;">
                    : <input type="number" v-model="mainitem.weight" style="width:50px;margin-left:0px;" class="jeoninput" placeholder="12">
                    <template v-for="(item,index) in additem">
                     + <input type="number" v-model="additem[index].weight" style="width:50px;margin-left:0px;" class="jeoninput" placeholder="무게">
                    </template>
                    <select v-model="weightunit" style="margin-left:5px;margin:5px;">
              <option value="lbs">lbs(pounds)</option>
  <option value="kg">kg</option>
  
  <option value="g">g</option>
  <option value="ounces">ounces</option>
</select>
                  </div>
                </h5>
                <h5 style="margin-top:0px;margin-bottom:0px;">



                  <div v-if="shipmethod=='air' | shipmethod == 'sea'" id="volumeweightbutton" class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:volumeweightbutton==true}" v-on:click="volumeweightbutton = !volumeweightbutton">
                    <h6 style="margin:5px 10px;">부피무게</h6>
                  </div>
                  <div id="volumequestion" style="display:inline-block" v-if="(shipmethod=='air' || shipmethod == 'sea') && volumeweightbutton == false">
                    <i id="vques1" onclick="Materialize.toast('부피가 크면 부피요금이 부과될 수 있습니다.<br />크기를 입력해서 확인해 보세요',4000)" class="material-icons" style="position:relative;top:5px;left:6px;cursor:pointer;color:#bdbdbd;">&#xE8FD;</i>
                  </div>

                  <div v-if="((shipmethod=='air' || shipmethod == 'sea') && !volumeweightbutton == false)" id="volumeweightinput" style="display:inline-block;margin:5px;margin-left:0px;margin-top:0px;">

                    : <input type="number" v-model="volume.x" style="width:50px;margin-left:0px;" class="jeoninput" placeholder="10">x
                    <input type="number" v-model="volume.y" style="width:50px;margin-left:0px;" class="jeoninput" placeholder="9">x
                    <input type="number" v-model="volume.z" style="width:50px;margin-left:0px;" class="jeoninput" placeholder="8">

                    <select v-model="volumeweightunit" style="margin-left:5px;">
  <option value="cm">cm</option>
  <option value="ln">ln(inch)</option>
  <option value="ft">ft(feet)</option>
  <option value="m">m</option>
</select>

                  </div>
                  <h6 v-if="(shipmethod=='air') && !volumeweightbutton == false" style="margin-top:0px;font-size:13px;color:black;">부피무게 50% 할인<i class="material-icons qpopup" onclick="Materialize.toast('할인업체 : 몰테일, 오마이집, 뉴욕걸즈',4000)" style="font-size:16px;position:relative;top:3px;left:3px;opacity:0.7;">&#xE8FD;</i> <input type="checkbox" v-model="volumeshipdiscount"
                      style="position:relative;top:2px;left:0px;"></h6>
                </h5>

                <h6 v-if="((totalweight!=0||volumeweight!=0)&&((shipmethod=='air'&&isrealweightair==true)||(shipmethod=='sea'&&isrealweightsea==true)))" style="float:right;margin-left:15px;color:green;font-size:15px;margin-top:10px;">실무게로 계산됩니다</h6>
                <div class="clear"></div>
                <h6 v-if="((totalweight!=0||volumeweight!=0)&&((shipmethod=='air'&&isrealweightair==true)||(shipmethod=='sea'&&isrealweightsea==true)))" style="float:right;margin-left:15px;color:green;font-size:15px;margin-top:-2px;">실무게 : {{realweightdisplay}} {{displayweight}}</h6>
                <div class="clear"></div>
                <h6 v-if="((totalweight!=0||volumeweight!=0)&&((shipmethod=='air'&&isrealweightair==true)||(shipmethod=='sea'&&isrealweightsea==true)))&&(volumeweightbutton==true)" style="float:right;margin-left:15px;color:green;font-size:15px;margin-top:-2px;">부피무게 : {{volumeweightdisplay}} {{displayweight}}<span v-if="shipmethod=='sea'"> ({{displaycbm}} CBM)</span></h6>
                <h6 v-if="((totalweight!=0||volumeweight!=0)&&((shipmethod=='air'&&isrealweightair==false)||(shipmethod=='sea'&&isrealweightsea==false)))" style="float:right;margin-left:15px;color:red;font-size:15px;margin-top:10px;">부피무게로 계산됩니다</h6>
                <div class="clear"></div>
                <h6 v-if="((totalweight!=0||volumeweight!=0)&&((shipmethod=='air'&&isrealweightair==false)||(shipmethod=='sea'&&isrealweightsea==false)))" style="float:right;margin-left:15px;color:red;font-size:15px;margin-top:-2px;">실무게 : {{realweightdisplay}} {{displayweight}}</h6>
                <div class="clear"></div>
                <h6 v-if="((totalweight!=0||volumeweight!=0)&&((shipmethod=='air'&&isrealweightair==false)||(shipmethod=='sea'&&isrealweightsea==false)))&&(volumeweightbutton==true)" style="float:right;margin-left:15px;color:red;font-size:15px;margin-top:-2px;">부피무게 : {{volumeweightdisplay}} {{displayweight}}<span v-if="shipmethod=='sea'"> ({{displaycbm}} CBM)</span></h6>


                <div class="clear"></div>


                <ul class="collapsible" data-collapsible="expandable" style="overflow:hidden;box-shadow:none;margin-bottom:0px;border-right:none;border-left:none;margin-top:10px;margin-left:-20px;margin-right:-20px;">
                  <li>
                    <div class="collapsible-header" style="padding-left:10px;"><i class="material-icons">edit</i>
                      <a href="#!" class="secondary-content">
                        <i class="tiny material-icons light-blue-text" style="margin-right:0px">keyboard_arrow_down
                  </i>
                      </a>
                      상세 설정
                      <a href="#!" style="color:#9e9e9e;font-size:13px;" class="secondary-content"></a>

                    </div>
                    <div class="collapsible-body">
                      <ul class="collection">
                        <li class="collection-item" style="padding-left:11px !important;">
                          <h6 style="font-size:13px;color:#9e9e9e;margin-botton:2px;">&nbsp;🚩 계산결과는 참고용입니다. 오류 제보 부탁드려요.</h6>
                          <h6 style="font-size:13px;color:#9e9e9e;">&nbsp;✅ 설정 저장은 아래 공유 바의 저장 버튼을 이용해 주세요.</h6>
                        </li>
                        <li class="collection-item" style="padding-left:11px !important;">                        
                          <h6 style="margin-bottom:15px;margin-left:5px;"><i class="material-icons" style="margin-right:5px;position:relative;top:3px;right:5px;">&#xE8F6;</i>추가 할인 정보</h6>
                          <h6>쇼핑몰 추가할인
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-on:click="malldisdd.push({amount : '', type : 'forex'})">
                              <h6 style="margin:1px 5px;">+</h6>
                            </div>
                          </h6>
                          <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-bind:class="{orange:malldis.type=='won', 'green':malldis.type=='perc'}" v-on:click="malldis.type=='forex'?malldis.type='won':malldis.type=='won'?malldis.type='perc':malldis.type='forex'">
                            <h6 v-if="malldis.type=='forex'" style="margin:5px 5px;">{{countrymark}}</h6>
                            <h6 v-if="malldis.type=='won'" style="margin:5px 5px;">원</h6>
                            <h6 v-if="malldis.type=='perc'" style="margin:5px 5px;">%</h6>
                          </div>
                          <input type="number" style="width:70px;margin-left:5px;" v-model="malldis.amount" class="jeoninput"></h6>
                          <template v-for="(item,index) in malldisdd">
                          <div style="display:box">
                          <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-bind:class="{orange:item.type=='won', 'green':item.type=='perc'}" v-on:click="item.type=='forex'?item.type='won':item.type=='won'?item.type='perc':item.type='forex'">
                            <h6 v-if="item.type=='forex'" style="margin:5px 5px;">{{countrymark}}</h6>
                            <h6 v-if="item.type=='won'" style="margin:5px 5px;">원</h6>
                            <h6 v-if="item.type=='perc'" style="margin:5px 5px;">%</h6>
                          </div>
                          <input type="number" style="width:70px;margin-left:5px;" v-model="item.amount" class="jeoninput" ></h6>
                            <div class="white light-blue-text waves-effect waves-light jeonbutton shipbtn" style="position:relative;top:2px;margin-left:10px;" v-on:click="malldisdd.splice(index,1)">
                              <i style="cursor:pointer" class="material-icons">&#xE14C;</i>
                            </div>
                          </div>
                          </template>

                          <h6>배송대행비 추가할인
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-on:click="shipdisdd.push({amount : '', type : 'forex'})">
                              <h6 style="margin:1px 5px;">+</h6>
                            </div>
                          </h6>
                          <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-bind:class="{orange:shipdis.type=='won', 'green':shipdis.type=='perc'}" v-on:click="shipdis.type=='forex'?shipdis.type='won':shipdis.type=='won'?shipdis.type='perc':shipdis.type='forex'">
                            <h6 v-if="shipdis.type=='forex'" style="margin:5px 5px;">{{countrymark}}</h6>
                            <h6 v-if="shipdis.type=='won'" style="margin:5px 5px;">원</h6>
                            <h6 v-if="shipdis.type=='perc'" style="margin:5px 5px;">%</h6>
                          </div>
                          <input type="number" style="width:70px;margin-left:5px;" v-model="shipdis.amount" class="jeoninput"></h6>
                          <template v-for="(item,index) in shipdisdd">
                          <div style="display:box">
                          <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-bind:class="{orange:item.type=='won', 'green':item.type=='perc'}" v-on:click="item.type=='forex'?item.type='won':item.type=='won'?item.type='perc':item.type='forex'">
                            <h6 v-if="item.type=='forex'" style="margin:5px 5px;">{{countrymark}}</h6>
                            <h6 v-if="item.type=='won'" style="margin:5px 5px;">원</h6>
                            <h6 v-if="item.type=='perc'" style="margin:5px 5px;">%</h6>
                          </div>
                          <input type="number" style="width:70px;margin-left:5px;" v-model="item.amount" class="jeoninput"></h6>
                            <div class="white light-blue-text waves-effect waves-light jeonbutton shipbtn" style="position:relative;top:2px;margin-left:10px;" v-on:click="shipdisdd.splice(index,1)">
                              <i style="cursor:pointer" class="material-icons">&#xE14C;</i>
                            </div>
                          </div>
                          </template>

                          <h6>카드 할인
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-on:click="carddisdd.push({amount : '', type : 'won'})">
                              <h6 style="margin:1px 5px;">+</h6>
                            </div>
                          </h6>
                          <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-bind:class="{orange:carddis.type=='won', 'green':carddis.type=='perc'}" v-on:click="carddis.type=='forex'?carddis.type='won':carddis.type=='won'?carddis.type='perc':carddis.type='forex'">
                            <h6 v-if="carddis.type=='forex'" style="margin:5px 5px;">{{countrymark}}</h6>
                            <h6 v-if="carddis.type=='won'" style="margin:5px 5px;">원</h6>
                            <h6 v-if="carddis.type=='perc'" style="margin:5px 5px;">%</h6>
                          </div>
                          <input type="number" style="width:70px;margin-left:5px;" v-model="carddis.amount" class="jeoninput"></h6>
                          <template v-for="(item,index) in carddisdd">
                          <div style="display:box">
                          <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton shipbtn" style="margin-left:10px;" v-bind:class="{orange:item.type=='won', 'green':item.type=='perc'}" v-on:click="item.type=='forex'?item.type='won':item.type=='won'?item.type='perc':item.type='forex'">
                            <h6 v-if="item.type=='forex'" style="margin:5px 5px;">{{countrymark}}</h6>
                            <h6 v-if="item.type=='won'" style="margin:5px 5px;">원</h6>
                            <h6 v-if="item.type=='perc'" style="margin:5px 5px;">%</h6>
                          </div>
                          <input type="number" style="width:70px;margin-left:5px;" v-model="item.amount" class="jeoninput"></h6>
                            <div class="white light-blue-text waves-effect waves-light jeonbutton shipbtn" style="position:relative;top:2px;margin-left:10px;" v-on:click="carddisdd.splice(index,1)">
                              <i style="cursor:pointer" class="material-icons">&#xE14C;</i>
                            </div>
                          </div>
                          </template>




                        </li>

                        <li class="collection-item" style="padding-left:11px !important;">
                          <h6 style="margin-bottom:15px;margin-left:5px;">배송대행사 설정<i class="material-icons qpopup" v-on:click="showshipad = !showshipad" style="font-size:20px;position:relative;top:4px;left:3px;cursor:pointer;opacity:0.7;">&#xE8FD;</i> - {{shiptype2}} 표준</h6>
                          <a v-if="ssb[0]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='malltail'}" v-on:click="shiptype == 'malltail' ? shiptype = 'basic' : shiptype = 'malltail'  ">
                              <h6 style="margin:5px 10px;">몰테일</h6>
                            </div>
                          </a>
                          <a v-if="ssb[1]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='ehanex'}" v-on:click="shiptype == 'ehanex' ? shiptype = 'basic' : shiptype = 'ehanex'  ">
                              <h6 style="margin:5px 10px;">이하넥스</h6>
                            </div>
                          </a>
                          <a v-if="ssb[2]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='iporter'}" v-on:click="shiptype == 'iporter' ? shiptype = 'basic' : shiptype = 'iporter'  ">
                              <h6 style="margin:5px 10px;">아이포터</h6>
                            </div>
                          </a>
                          <a v-if="ssb[3]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='postbay'}" v-on:click="shiptype == 'postbay' ? shiptype = 'basic' : shiptype = 'postbay'  ">
                              <h6 style="margin:5px 10px;">포스트베이</h6>
                            </div>
                          </a>
                          <a v-if="ssb[4]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='omyzip'}" v-on:click="shiptype == 'omyzip' ? shiptype = 'basic' : shiptype = 'omyzip'  ">
                              <h6 style="margin:5px 10px;">오마이집</h6>
                            </div>
                          </a>
                          <a v-if="ssb[5]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='uniauction'}" v-on:click="shiptype == 'uniauction' ? shiptype = 'basic' : shiptype = 'uniauction'  ">
                              <h6 style="margin:5px 10px;">유니옥션</h6>
                            </div>
                          </a>
                          <a v-if="ssb[6]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='edx'}" v-on:click="shiptype == 'edx' ? shiptype = 'basic' : shiptype = 'edx'  ">
                              <h6 style="margin:5px 10px;">엘덱스</h6>
                            </div>
                          </a>
                          <a v-if="ssb[7]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='nyg'}" v-on:click="shiptype == 'nyg' ? shiptype = 'basic' : shiptype = 'nyg'  ">
                              <h6 style="margin:5px 10px;">뉴욕걸즈</h6>
                            </div>
                          </a>
                          <a v-if="ssb[8]" href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:shiptype=='jnj'}" v-on:click="shiptype == 'jnj' ? shiptype = 'basic' : shiptype = 'jnj'  ">
                              <h6 style="margin:5px 10px;">지니집</h6>
                            </div>
                          </a>

                          <h6 v-if="showshipad==true" style="font-size:13px;line-height:16px;">* 배송대행지별로 무게산정 및 가격정책이 매우 상이합니다. 표준 가격표 이상의 정밀한 계산은 위의 배송대행비 추가할인 탭을 이용해 배송비를 보정해 주세요(비용 추가시 음수값 입력하시면 됩니다)</h6>
                        </li>
                        <li class="collection-item" style="padding-left:11px !important;">
                          <h6 style="margin-bottom:15px;margin-left:5px;">특소세 품목지정<i onclick="Materialize.toast('60ml 이상 향수, 주류, 담배 등 사치품은 $150 면세범위 이내여도 국내 특소세 등이 부과됩니다<br />** 이 선택지는 $150 이하에서만 사용됩니다. 초과한 제품은 위에서 분류해 주세요',7000)" class="material-icons" style="position:relative;top:4px;left:5px;cursor:pointer;font-size:20px;opacity:0.7;">&#xE8FD;</i></h6>
                          <select style="font:inherit; margin:10px 5px;margin-top:3px;border:1px solid #bdbdbd;" v-model="itemtype2">
                              <option value="none">선택</option>
                              <option value="1">60ml 이상 향수</option>
                                <option value="2">와인/청주</option>
                                <option value="3">보드카/데킬라/위스키</option>
                                <option value="4">소주/맥주</option>
                                <option value="5">담배</option>
                                
                          </select>
                          <br /><span style="font-size:13px;color:black;" v-if="istax==false&&itemtype2==5">담배가 몇보루인가요? <input type="number" v-model="smokev2"></span>
                          <h6 style="font-size:13px;line-height:16px;">* 건강식품/분유 등을 자가사용분 이상으로 주문하면 직구프라이스 계산결과와 관계없이 과세될 수 있습니다.</h6>

                        </li>
                        <li class="collection-item" style="padding-left:11px !important;">
                          <h6 style="margin-bottom:15px;margin-left:5px;">카드사 설정 - {{cardrate}}</h6>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton " v-bind:class="{orange:cardtype=='shinhan'}" v-on:click="cardtype == 'shinhan' ? cardtype = 'basic' : cardtype = 'shinhan'">
                              <h6 style="margin:5px 10px;">신한</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='lotte'}" v-on:click="cardtype == 'lotte' ? cardtype = 'basic' : cardtype = 'lotte'">
                              <h6 style="margin:5px 10px;">롯데</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='kookmin'}" v-on:click="cardtype == 'kookmin' ? cardtype = 'basic' : cardtype = 'kookmin'">
                              <h6 style="margin:5px 10px;">국민</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='foreign'}" v-on:click="cardtype == 'foreign' ? cardtype = 'basic' : cardtype = 'foreign'">
                              <h6 style="margin:5px 10px;">씨티</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='samsung'}" v-on:click="cardtype == 'samsung' ? cardtype = 'basic' : cardtype = 'samsung'">
                              <h6 style="margin:5px 10px;">삼성</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='hyundai'}" v-on:click="cardtype == 'hyundai' ? cardtype = 'basic' : cardtype = 'hyundai'">
                              <h6 style="margin:5px 10px;">현대</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='woori'}" v-on:click="cardtype == 'woori' ? cardtype = 'basic' : cardtype = 'woori'">
                              <h6 style="margin:5px 10px;">우리</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='nonghyup'}" v-on:click="cardtype == 'nonghyup' ? cardtype = 'basic' : cardtype = 'nonghyup'">
                              <h6 style="margin:5px 10px;">농협</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='hana'}" v-on:click="cardtype == 'hana' ? cardtype = 'basic' : cardtype = 'hana'">
                              <h6 style="margin:5px 10px;">하나</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:cardtype=='bcglobal'}" v-on:click="cardtype == 'bcglobal' ? cardtype = 'basic' : cardtype = 'bcglobal'">
                              <h6 style="margin:5px 10px;">BC글로벌</h6>
                            </div>
                          </a>
                          <h6>직접 입력 : <input type="number" v-model="cardratein" style="width:70px;margin-right:0px;" class="jeoninput" placeholder="0.2"> %</h6>

                        </li>
                        <li class="collection-item" style="padding-left:11px !important;">
                          <h6 style="margin-bottom:15px;margin-left:5px;">해외결제사 - {{fcardrate}} </h6>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:fcardtype=='visa'}" v-on:click="fcardtype == 'visa' ? fcardtype = 'basic' : fcardtype = 'visa'">
                              <h6 style="margin:5px 10px;">VISA</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:fcardtype=='mastercard'}" v-on:click="fcardtype == 'mastercard' ? fcardtype = 'basic' : fcardtype = 'mastercard'">
                              <h6 style="margin:5px 10px;">MASTERCARD</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:fcardtype=='amex'}" v-on:click="fcardtype == 'amex' ? fcardtype = 'basic' : fcardtype = 'amex'">
                              <h6 style="margin:5px 10px;">Amex</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:fcardtype=='maestro'}" v-on:click="fcardtype == 'maestro' ? fcardtype = 'basic' : fcardtype = 'maestro'">
                              <h6 style="margin:5px 10px;">Maestro</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:fcardtype=='jcb'}" v-on:click="fcardtype == 'jcb' ? fcardtype = 'basic' : fcardtype = 'jcb'">
                              <h6 style="margin:5px 10px;">JCB</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:fcardtype=='bcg'}" v-on:click="fcardtype == 'bcg' ? fcardtype = 'basic' : fcardtype = 'bcg'">
                              <h6 style="margin:5px 10px;">BCG</h6>
                            </div>
                          </a>
                          <a href="#!">
                            <div class="z-depth-1 light-blue white-text waves-effect waves-light jeonbutton" v-bind:class="{orange:fcardtype=='union'}" v-on:click="fcardtype == 'union' ? fcardtype = 'basic' : fcardtype = 'union'">
                              <h6 style="margin:5px 10px;">UnionPay</h6>
                            </div>
                          </a>
                          <h6>직접 입력 : <input type="number" v-model="fcardratein" style="width:70px;margin-right:0px;" class="jeoninput" placeholder="1"> %</h6>
                          <div class="clear"></div>                          
                          <div class='clear'></div>
                          <p style="display:none;">{{totalprice}}{{setprice}}{{setshipprice}}{{settaxprice}}</p>
                          <p style="display:none;">{{setdiscount1}}</p>
                          <p style="display:none;">{{setdiscount2}}</p>
                          <p style="display:none;">{{setdiscount3}}</p>
                          <p style="display:none;">{{totalweight}}</p>
                          <p style="display:none;">{{volumeweight}}</p>
                          <p style="display:none;">{{countrymark}}</p>
                          <p style="display:none;">{{geterror}}</p>
                          <p style="display:none;">{{setshiptype}}</p>
                          <p style="display:none;">{{determinebutton}}</p>
                          <p style="display:none;">{{geturl}}</p>
                          <p style="display:none;">{{resetship}}</p>
                        </li>
                      </ul>

                    </div>

                  </li>

                </ul>




            </div>
            </div>
      `,
      methods: {
        weighttax : function(weightkg, country) {
      if ((country == 'us' || country == 'uk') || country == 'eu') {
        if (weightkg == 1) {
          return 18900;
        }
        else if (weightkg == 2) {
          return 29050;
        }
        else if (weightkg == 3) {
          return 35700;
        }
        else {
          return 51000 + (weightkg - 3) * 6000;
        }
      }
      else {
        if (weightkg == 1) {
          return 10500;
        }
        else if (weightkg == 2) {
          return 14140;
        }
        else if (weightkg == 3) {
          return 17150;
        }
        else {
          return 24500 + (weightkg - 3) * 2000;
        }
      }
    },

        tgq: function() {
          if (this.tgtg == 'none') {
            this.tgtg = 'inline-block';
          }
          else {
            this.tgtg = 'none';
          }
        },
        getshipprice : function(shiptype, weight, method, country) {
      var tweight;
      var table;
      var tmp;
      var z;
      if (weight == 0) {
        return [0, true];
      }
      else {

        //들어오는건 무조건 kg 나가는건 현지통화
        if (shiptype == 'basic') {
          if (method == 'air') {
            if(country=='us'){
            return [8 + 4 * weight, true];
            }else if(country=='jp'){
               tweight = Math.ceil(weight*2)/2;
              tmp = 912 + 616*(tweight-0.5);
              return [tmp,true];
            }else if(country=='eu'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight==0.5){
                tmp = 10.8;
              }else if(tweight==1){
                tmp ==13.1;
              }else{
                tmp = 13.1 + 4.12 * (tweight-1);
              }
              return [tmp * (vueconsole.forex.us / vueconsole.forex.eu),true];
            }else if(country=='cn'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 10.1 + 6.09 * (tweight-0.5);
              return [tmp * (vueconsole.forex.us / vueconsole.forex.cn),true];
            }else if(country=='uk'){
               tweight = Math.ceil(weight*2)/2;
              if(tweight==0.5){
                tmp = 15250;
              }else{
                tmp = 17400 + 6150 * (tweight-1);
              }
              return [tmp/vueconsole.forex.uk,true];
            }else{
              return [99999,true];
            }
            

          }
          else {
            if(country=='us'){
            if(weight<30){
              return[12.2,true];
            }else{
            return [12.2 + 0.4 * (weight-30), true];
            }
            }else if(country=='jp'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight==0.5){
                tmp = 21.4;
              }else{
                tmp = 21.4 + 8.3 * (tweight-0.5);
              }
              return [tmp * (vueconsole.forex.us/vueconsole.forex.jp),true];
            }else if(country=='eu'){
              if(weight<30){
              return[12.2,true];
            }else{
            return [12.2 + 0.4 * (weight-30), true];
            }
            }else if(country=='cn'){
              if(weight<=0.5){
               tmp = 9.3;
             }else if(weight<=1){
               tmp = 11.1;
             }else{
               tweight = Math.ceil(weight*2)/2;
               tmp = 12.7 + 3.5 * (tweight-1.5);
             }
             return [tmp * (vueconsole.forex.us/vueconsole.forex.cn), true];
            }else if(country=='uk'){
              if(weight<30){
              return[12.2,true];
            }else{
            return [12.2 + 0.4 * (weight-30), true];
            }
            }else{
              return [99999,true];
            }
            }

        }
        else if (shiptype == 'malltail') {
          if(method=='air'){
          /*

          몰테일 항공운송

          */
          if (country == 'us') {
            tweight = Math.ceil(weight / 0.453592);
            if(tweight<=5){
              return [10.98 + 2 * (tweight), true];
            }else{
              return [20 + 2*(tweight - 6), true];
            }
          }
          else if (country == 'eu') {

            tweight = Math.ceil(weight * 2) / 2;

            return [(17.5 + 2.25 * (tweight)) * (vueconsole.forex.us / vueconsole.forex.eu), true];
          }
          else if (country == 'jp') {
            tweight = Math.ceil(weight * 2) / 2;
            if (tweight <= 7.5) {
              switch (tweight) {
                case 0.5:
                  tmp = 14.63;
                  break;
                case 1:
                  tmp = 17.07;
                  break;
                case 1.5:
                  tmp = 21.95;
                  break;
                case 2:
                  tmp = 26.83;
                  break;
                case 2.5:
                  tmp = 30.49;
                  break;
                case 3:
                  tmp = 36.59;
                  break;
                case 3.5:
                  tmp = 42.68;
                  break;
                case 4:
                  tmp = 46.34;
                  break;
                case 4.5:
                  tmp = 50.00;
                  break;
                case 5:
                  tmp = 53.66;
                  break;
                case 5.5:
                  tmp = 58.54;
                  break;
                case 6:
                  tmp = 65.85;
                  break;
                case 6.5:
                  tmp = 70.73;
                  break;
                case 7:
                  tmp = 74.39;
                  break;
                case 7.5:
                  tmp = 79.27;
                  break;
              }
            }
            else {
              tmp = 6.1 * (Math.ceil(weight) - 8) + 85.37;
            }


            return [(tmp * (vueconsole.forex.us / vueconsole.forex.jp)), true];
          }
          else if (country == 'cn') {
            tweight = Math.ceil(weight * 2) / 2;
            if (tweight <= 7.5){
              switch(tweight){
                case 0.5:
                  tmp = 10.77;
                  break;
                case 1:
                  tmp = 13.85;
                  break;
                case 1.5:
                  tmp = 16.92;
                  break;
                case 2:
                  tmp = 20.00;
                  break;
                case 2.5:
                  tmp = 23.08;
                  break;
                case 3:
                  tmp = 26.15;
                  break;
                case 3.5:
                  tmp = 29.23;
                  break;
                case 4:
                  tmp = 32.31;
                  break;
                case 4.5:
                  tmp = 35.38;
                  break;
                case 5:
                  tmp = 38.46;
                  break;
                case 5.5:
                  tmp = 41.54;
                  break;
                case 6:
                  tmp = 44.62;
                  break;
                case 6.5:
                  tmp = 47.69;
                  break;
                case 7:
                  tmp = 50.77;
                  break;
                case 7.5:
                  tmp = 53.85;
                  break;
              }
            }else{
              tmp = (6.15 * (tweight) + 7.7) * (vueconsole.forex.us / vueconsole.forex.cn)
            }
              return [tmp, true];
          }
          else {
            return [99999, true];
          }

          /*

          몰테일 해상운송

          */
          }else{
            if(country=='jp'){
              tweight = Math.ceil(weight * 2) / 2;
            if (tweight <= 10) {
              switch (tweight) {
                case 0.5:
                  tmp = 23.4;
                  break;
                case 1:
                  tmp = 23.4;
                  break;
                case 1.5:
                  tmp = 23.4;
                  break;
                case 2:
                  tmp = 34.05;
                  break;
                case 2.5:
                  tmp = 34.05;
                  break;
                case 3:
                  tmp = 34.05;
                  break;
                case 3.5:
                  tmp = 34.05;
                  break;
                case 4:
                  tmp = 34.05;
                  break;
                case 4.5:
                  tmp = 34.05;
                  break;
                case 5:
                  tmp = 34.05;
                  break;
                case 5.5:
                  tmp = 37.55;
                  break;
                case 6:
                  tmp = 37.55;
                  break;
                case 6.5:
                  tmp = 41.05;
                  break;
                case 7:
                  tmp = 41.05;
                  break;
                case 7.5:
                  tmp = 44.55;
                  break;
                case 8:
                  tmp = 44.55;
                  break;
                case 8.5:
                  tmp = 48.05;
                  break;
                case 9:
                  tmp = 48.05;
                  break;
                case 9.5:
                  tmp = 51.55;
                  break;
                case 10:
                  tmp = 51.55;
                  break;
                }
            }
            else if(tweight>10 && tweight<=20){
              tmp = 51.55 + (Math.ceil(weight) - 10) * 4;
            }else{
              tmp = 91.55 + (Math.ceil(weight)-20) * 5;
            }


            return [(tmp * (vueconsole.forex.us / vueconsole.forex.jp)), true];
              
            }else if(country=='cn'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight<=15){
                tmp = 9.9 + 1.8*tweight;
              }else{
                tmp = 69 + 1.8*(tweight-15);
              }
              return [(tmp * (vueconsole.forex.us / vueconsole.forex.cn)), true];
            }else{
              return [99999,true];
            }
          }
          
          
          
        }
        else if(shiptype=='ehanex'){
          if(method=='air'){
            if(country=='us'){
              tweight = Math.ceil(weight/0.453592);
              if(tweight<=5){
              switch(tweight){
                case 1:
                  tmp = 9.5;
                  break;
                case 2:
                  tmp = 12;
                  break;
                case 3:
                  tmp = 14;
                  break;
                case 4:
                  tmp = 15.5;
                  break;
                case 5:
                  tmp = 17.5;
                  break;
                
              }
              }else{
                tmp = 19 + 1.5*(tweight-6);
              }
              return[tmp,true];
            }else if(country=='eu'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight==0.5){
                tmp = 11;
              }else if(tweight==1){
                tmp ==13;
              }else{
                tmp = 13 + 4.4 * (tweight-1);
              }
              return [tmp * (vueconsole.forex.us / vueconsole.forex.eu),true];
            }else if(country=='jp'){
              tweight = Math.ceil(weight*2)/2;
              
              return [(12+4*(tweight-0.5)) * (vueconsole.forex.us / vueconsole.forex.jp),true];
            }else if(country=='uk'){
              tweight = Math.ceil(weight*2)/2;
              return [(17+5*(tweight-0.5)) * (vueconsole.forex.us / vueconsole.forex.uk),true];
            }else{
              return[99999,true];
            }
          }else{
            return[99999,true];
          }
        }
        else if(shiptype=='iporter'){
          if(method=='air'){
            if(country=='us'){
              tweight = Math.ceil(weight/0.453592);
              if(tweight<=30){
                switch(tweight){
                  case 1:
                    tmp = 10.5;
                    break;
                  case 2:
                    tmp = 12.8;
                    break;
                  case 3:
                    tmp = 14.8;
                    break;
                  case 4:
                    tmp = 16.9;
                    break;
                  case 5:
                    tmp = 18.6;
                    break;
                  case 6:
                    tmp = 20.2;
                    break;
                  case 7:
                    tmp = 21.9;
                    break;
                  case 8:
                    tmp = 25.9;
                    break;
                  case 9:
                    tmp = 28.1;
                    break;
                  case 10:
                    tmp = 29.9;
                    break;
                  case 11:
                    tmp = 30.4;
                    break;
                  case 12:
                    tmp = 32.1;
                    break;
                  case 13:
                    tmp = 34.2;
                    break;
                  case 14:
                    tmp = 35.9;
                    break;
                  case 15:
                    tmp = 36.9;
                    break;
                  case 16:
                    tmp = 38.2;
                    break;
                  case 17:
                    tmp = 40.8;
                    break;
                  case 18:
                    tmp = 42.9;
                    break;
                  case 19:
                    tmp = 43.2;
                    break;
                  case 20:
                    tmp = 44.9;
                    break;
                  case 21:
                    tmp = 46.9;
                    break;
                  case 22:
                    tmp = 48.2;
                    break;
                  case 23:
                    tmp = 49.2;
                    break;
                  case 24:
                    tmp = 52.9;
                    break;
                  case 25:
                    tmp = 53.2;
                    break;
                  case 26:
                    tmp = 54.4;
                    break;
                  case 27:
                    tmp = 56.5;
                    break;
                  case 28:
                    tmp = 58.3;
                    break;
                  case 29:
                    tmp = 59.5;
                    break;
                  case 30:
                    tmp = 61.3;
                    break;
                  
                }
              }else{
                tmp = 61.3 + 1.5 * (tweight-30);
              }
              return [tmp,true];
            }else if(country=='uk'){
              tweight = Math.ceil(weight*2)/2;
              return [(12 + 5*(tweight-0.5)) * (vueconsole.forex.us / vueconsole.forex.uk),true];
            }else if(country=='cn'){
              tweight = Math.ceil(weight);
              return [(12 + 7*(tweight-1)) * (vueconsole.forex.us / vueconsole.forex.cn),true];
            }else if(country=='jp'){
              if(weight<=10){
                tweight = Math.ceil(weight*2)/2;
                switch(tweight){
                  case 0.5:
                    tmp= 13.75;
                    break;
                  case 1:
                    tmp= 16.25;
                    break;
                  case 1.5:
                    tmp= 20;
                    break;
                  case 2:
                    tmp= 23.75;
                    break;
                  case 2.5:
                    tmp= 26.25;
                    break;
                  case 3:
                    tmp= 28.75;
                    break;
                  case 3.5:
                    tmp =32.5;
                    break;
                  case 4:
                    tmp =35;
                    break;
                  case 4.5:
                    tmp =37.5;
                    break;
                  case 5:
                    tmp =40.00;
                    break;
                  case 5.5:
                    tmp =43.75;
                    break;
                  case 6:
                    tmp =46.25;
                    break;
                  case 6.5:
                    tmp =50.00;
                    break;
                  case 7:
                    tmp =53.75;
                    break;
                  case 7.5:
                    tmp =57.50;
                    break;
                  case 8:
                    tmp =61.25;
                    break;
                  case 8.5:
                    tmp =63.75;
                    break;
                  case 9:
                    tmp =67.5;
                    break;
                  case 9.5:
                    tmp =71.25;
                    break;
                  case 10:
                    tmp =75.00;
                    break;
                  
                }
              }else if(weight<=25){
                tweight = Math.ceil(weight);
                switch(tweight){
                  case 11:
                    tmp = 80;
                    break;
                  case 12:
                    tmp = 85;
                    break;
                  case 13:
                    tmp = 90;
                    break;
                  case 14:
                    tmp = 96.25;
                    break;
                  case 15:
                    tmp = 101.25;
                    break;
                  case 16:
                    tmp = 106.25;
                    break;
                  case 17:
                    tmp = 111.25;
                    break;
                  case 18:
                    tmp = 116.25;
                    break;
                  case 19:
                    tmp = 122.5;
                    break;
                  case 20:
                    tmp = 127.5;
                    break;
                  case 21:
                    tmp = 132.5;
                    break;
                  case 22:
                    tmp = 137.5;
                    break;
                  case 23:
                    tmp = 142.5;
                    break;
                  case 24:
                    tmp = 148.75;
                    break;
                  case 25:
                    tmp = 153.75;
                    break;
                }
              }else{
                tweight = Math.ceil(weight);
                tmp = 153.75 + 5 * (tweight-25);
              }
              return [tmp * (vueconsole.forex.us / vueconsole.forex.jp),true];
            }else if(country=='eu'){
              tweight = Math.ceil(weight*2)/2;
              return [(11+4.4*(tweight-0.5)) * (vueconsole.forex.us / vueconsole.forex.eu),true];
            }else{
              return [99999,true];
            }
          }else{
           if(country=='jp'){
             if(weight<=0.5){
               tmp = 19.5;
             }else if(weight<=1){
               tmp = 20.5;
             }else if(weight<=2){
               tmp = 22.5;
             }else{
               tweight = Math.ceil(weight);
               tmp = 30.5 + 2*(tweight-4);
             }
             return [tmp * (vueconsole.forex.us / vueconsole.forex.jp),true];
           }else if(country=='cn'){
             if(weight<=0.5){
               tmp = 9;
             }else if(weight<=1){
               tmp = 11;
             }else{
               tweight = Math.ceil(weight*2)/2;
               tmp = 12.5 + 3 * (tweight-1.5);
             }
             return [tmp * (vueconsole.forex.us / vueconsole.forex.cn),true];
           }else{
             return [99999,true];
           }
          }
          
        }
        else if(shiptype=='postbay'){
          if(method=='air'){
            if(country=='eu'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 14.5 + 4.5*(tweight-0.5);
              return [tmp,true];
            }else if(country=='jp'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight<=3){
                tmp = 10 + 6 * (tweight-0.5);
              }else{
                tmp = 25 + 5 * (tweight-3);
              }
              return [tmp * (vueconsole.forex.us / vueconsole.forex.jp),true];
            }else if(country=='us'){
              tweight = Math.ceil(weight/0.453592);
              tmp = 9 + 2*(tweight-1);
              return [tmp,true];
            }
          }else{
            return [99999,true];
          }
        }
        else if(shiptype=='omyzip'){
          if(method=='air'){
            if(country=='jp'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 13 + 6 * (tweight-0.5);
              return [tmp * (vueconsole.forex.us / vueconsole.forex.jp),true];
            }else if(country=='us'){
              tweight = Math.ceil(weight/0.453592);
              tmp = 7.5 + 1.74*(tweight-1);
              return [tmp, true];
            }else{
              return [99999,true];
            }
          }else{
            if(country == 'us'){
              tweight = Math.ceil(weight/0.453592);
              if(tweight<30){
                tmp = 12;
              }else{
              tmp = 12 + 0.4 * (tweight-30);
              }
              return [tmp,true];
            }else{
              return [99999,true];
            }
          }
          
        }
        else if(shiptype=='uniauction'){
          if(method=='air'){
            if(country=='us'){
              tweight = Math.ceil(weight/0.453592);
              tmp = 10.5 + 1.5*(tweight-1);
              return [tmp,true];
            }else if(country=='jp'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight<=5){
                switch(tweight){
                  case 0.5:
                    tmp = 13.5;
                    break;
                  case 1:
                    tmp = 16;
                    break;
                  case 1.5:
                    tmp = 19.6;
                    break;
                  case 2:
                    tmp = 23.5;
                    break;
                  case 2.5:
                    tmp = 26;
                    break;
                  case 3:
                    tmp = 28.5;
                    break;
                  case 3.5:
                    tmp = 32;
                    break;
                  case 4:
                    tmp = 34.5;
                    break;
                  case 4.5:
                    tmp = 37;
                    break;
                  case 5:
                    tmp = 39.5;
                    break;
                  
                }
              }else{
                tmp = 43 + 7 * (tweight - 5.5);
              }
              return [tmp * (vueconsole.forex.us / vueconsole.forex.jp),true];
            }else if(country=='eu'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 10.9 + 4.2 * (tweight-0.5);
              return [tmp * (vueconsole.forex.us / vueconsole.forex.eu),true];
            }else if(country=='cn'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 10.5 + 6 * (tweight-0.5);
              return [tmp * (vueconsole.forex.us / vueconsole.forex.cn),true];
            }else{
              return [99999,true];
            }
          }else{
            return [99999,true];
          }
        }
        else if(shiptype=='edx'){
          if(method=='air'){
            if(country=='us'){
              tweight = Math.ceil(weight/0.453592);
              if(tweight==1){
                tmp = 9.4;
              }else{
                tmp = 11.9 + 2*(tweight-2);
              }
              return [tmp,true];
            }else if(country=='jp'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 900 + 600*(tweight-0.5);
              return [tmp,true];
            }else if(country=='eu'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 14800 + 4600*(tweight-0.5);
              return [tmp/vueconsole.forex.eu,true];
            }else if(country=='uk'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight==0.5){
                tmp = 15300;
              }else{
                tmp = 17800 + 6000 * (tweight-1);
              }
              return [tmp/vueconsole.forex.uk,true];
            }else{
              return [99999,true];
            }
          }else{
            return [99999,true];
          }
        }
        else if(shiptype=='nyg'){
          if(method=='air'){
            if(country=='us'){
              tweight = Math.ceil(weight/0.453592);
              tmp = 8.6 + 1.9 *(tweight-1);
              return [tmp,false];
            }else if(country=='jp'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 15000 + 6000*(tweight-0.5);
              return [tmp/vueconsole.forex.jp,false];
            }else if(country=='eu'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight<=5){
                switch(tweight){
                  case 0.5:
                    tmp = 15000;
                    break;
                  case 1:
                    tmp = 17000;
                    break;
                  case 1.5:
                    tmp = 20000;
                    break;
                  case 2:
                    tmp = 23000;
                    break;
                  case 2.5:
                    tmp = 25000;
                    break;
                  case 3:
                    tmp = 27000;
                    break;
                  case 3.5:
                    tmp = 30000;
                    break;
                  case 4:
                    tmp = 33000;
                    break;
                  case 4.5:
                    tmp = 36000;
                    break;
                  case 5:
                    tmp = 39000;
                    break;
                }
                return [tmp/vueconsole.forex.uk,false];
              }else{
                tmp = 41500 + 5000 * (tweight-5.5);
              return [tmp/vueconsole.forex.uk,false];
              }
            }else{
              return [99999,true];
            }
          }else{
            return [99999,true];
          }
        }
        else if(shiptype=='jnj'){
          if(method=='air'){
            if(country=='us'){
              tweight = Math.ceil(weight/0.453592);
              tmp = 8.5 + 1.5 * (tweight-1);
              return [tmp,true];
            }else if(country=='jp'){
              tweight = Math.ceil(weight*2)/2;
              if(tweight<=5){
                switch(tweight){
                  case 0.5:
                    tmp = 10.5;
                    break;
                  case 1:
                    tmp = 14;
                    break;
                  case 1.5:
                    tmp = 19;
                    break;
                  case 2:
                    tmp = 24;
                    break;
                  case 2.5:
                    tmp = 27.5;
                    break;
                  case 3:
                    tmp = 33.5;
                    break;
                  case 3.5:
                    tmp = 40;
                    break;
                  case 4:
                    tmp = 43.5;
                    break;
                  case 4.5:
                    tmp = 47;
                    break;
                  case 5:
                    tmp = 51;
                    break;
                
                }
              }else{
              tmp = 55.5 + 6.65 * (tweight-5.5);
              }
              return [tmp * (vueconsole.forex.us / vueconsole.forex.jp),true];
            }else if(country=='uk'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 11.5 + 5.084 * (tweight-0.5);
              return [tmp * (vueconsole.forex.us / vueconsole.forex.uk),true];
            }else if(country=='cn'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 11 + 5.695 * (tweight-0.5);
              return [tmp * (vueconsole.forex.us / vueconsole.forex.cn),true];
            }else if(country=='eu'){
              tweight = Math.ceil(weight*2)/2;
              tmp = 17 + 6 * (tweight-0.5);
              return [tmp * (vueconsole.forex.us / vueconsole.forex.eu),true];
            }else{
              return [99999,true];
            }
          }else{
            return [99999,true];
          }
        }
        else {
          return [11111, true];
        }
      } // weight 0 


      return [88888, true];


    }
      },
      computed: {
        geturl : function(){
          var url;
          url = "?a0="+numnify(this.mainitem.price).toString()+"&b0="+numnify(this.mainitem.shipprice).toString()+"&c0="+numnify(this.mainitem.weight).toString()+"&ll="+numnify(this.additem.length+1)+"&wu="+this.weightunit;
            
          if(numnify(this.malldis.amount)!=0){
            url = url + "&dm=" + numnify(this.malldis.amount).toString();
            url = url + "&dmu=" + this.malldis.type;
          } 
          if(numnify(this.shipdis.amount)!=0){
            url = url + "&ds=" + numnify(this.shipdis.amount).toString();
            url = url + "&dsu=" + this.shipdis.type;
          } 
          if(numnify(this.carddis.amount)!=0){
            url = url + "&dc=" + numnify(this.carddis.amount).toString();
            url = url + "&dcu=" + this.carddis.type;
          } 
          for(i=0;i<this.additem.length;i++){
            
              url = url + "&a" + (i+1).toString() + "="+numnify(this.additem[i].price).toString();
              
              url = url + "&b" + (i+1).toString() + "="+numnify(this.additem[i].shipprice).toString();
              url = url + "&c" + (i+1).toString() + "="+numnify(this.additem[i].weight).toString();
            }
            for(i=0;i<this.shipdisdd.length;i++){
              url = url + "&sll=" + numnify(this.shipdisdd.length+1);
              url = url + "&ds" + (i+1).toString() + "="+numnify(this.shipdisdd[i].amount).toString(); 
              url = url + "&dsu" + (i+1).toString() + "="+this.shipdisdd[i].type;
            }
            for(i=0;i<this.malldisdd.length;i++){
              url = url + "&mll=" + numnify(this.malldisdd.length+1);
              url = url + "&dm" + (i+1).toString() + "="+numnify(this.malldisdd[i].amount).toString(); 
              url = url + "&dmu" + (i+1).toString() + "="+this.malldisdd[i].type;
            }
            for(i=0;i<this.carddisdd.length;i++){
              url = url + "&cll=" + numnify(this.carddisdd.length+1);
              url = url + "&dc" + (i+1).toString() + "="+numnify(this.carddisdd[i].amount).toString();
              url = url + "&dcu" + (i+1).toString() + "="+this.carddisdd[i].type;
            }
            
            if(this.country!='us'){
          url = url + "&d=" + this.country;
            }
            if(this.shipmethod!='air'){
              url = url + "&e=" +this. shipmethod;
            }
            if(this.volumeweightbutton==true){
              url = url + "&x=" + this.volume.x + "&y=" + this.volume.y + "&z=" + this.volume.z + "&zw="+this.volumeweightunit;
              
            }
            if(this.shipmethod=='air'&&this.volumeweightbutton==true){
              url = url + '&zd=' + this.volumeshipdiscount;
            }
            if(this.cardtype!='basic'){
              url = url + '&ct=' + this.cardtype;
            }
            if(this.fcardtype!='basic'){
              url = url + '&fct=' + this.fcardtype;
            }
            if(this.shiptype!='basic'){
              url = url + "&st=" + this.shiptype;
            }
            if(this.shipmethod=='fixed'){
              url = url + '&fsp=' + this.fixedshipprice + '&fsu=' + this.fixedshipisforex;
            }
            if(this.itemtype2!='none'){
              url = url + '&it2=' + this.itemtype2;
            }
            if(this.istax==true){
              url = url + '&it='+this.itemtype;
            }
            if(this.itemtype=='21'){
              url = url + '&tv=' + this.tover;
            }
            if(this.itemtype=='34'){
              url = url + '&po=' + this.perover;
            }
            if(this.itemtype=='48'){
              url = url + '&sm=' + this.smokev;
            }
            if(this.itemtype2=='5'){
              url = url + '&sm2=' + this.smokev2;
            }
            if(((this.istax==false&&this.totalprice!=0)&&(this.country=='us'))&&(this.totalprice>150)){
              url = url + '&inl=' + this.isnotlist;
            }
          otarget = url;
          this.target = url;
          var final = "http://jikguprice.com/" + url;
          $("#clipper").attr("data-clipboard-text",final);
         ogeturl = final;
          return final;
        },
        safeprice: function(){
          switch(this.country){
            case 'us':
              return 200;
              break;
            case 'jp':
              return (150 * (this.forexstd.us/this.forexstd.jp)).toFixed(1);
              break;
            case 'cn':
              return (150 * (this.forexstd.us/this.forexstd.cn)).toFixed(1);
              break;
            case 'uk':
              return (150 * (this.forexstd.us/this.forexstd.uk)).toFixed(1);
              break;
            case 'eu':
              return (150 * (this.forexstd.us/this.forexstd.eu)).toFixed(1);
              break;
          }
        },
        determinebutton: function() {
          if (this.shipmethod == 'air') {
            switch (this.country) {
              case 'us':
                this.ssb = [true, true, true, true, true, true, true, true, true];
                break;
              case 'jp':
                this.ssb = [true, true, true, true, true, true, true, true, true];
                break;
              case 'eu':
                this.ssb = [true, true, true, true, false, true, true, true, true];
                break;
              case 'cn':
                this.ssb = [true, false, true, false, false, true, false, false, true];
                break;
              case 'uk':
                this.ssb = [false, true, true, false, false, false, true, false, true];
                break;
            }
          }
          else if (this.shipmethod == 'sea') {
            switch (this.country) {
              case 'us':
                this.ssb = [false, false, false, false, true, false, false, false, false];
                break;
              case 'jp':
                this.ssb = [true, false, true, false, false, false, false, false, false];
                break;
              case 'eu':
                this.ssb = [false, false, false, false, false, false, false, false, false];
                break;
              case 'cn':
                this.ssb = [true, false, true, false, false, false, false, false, false];
                break;
              case 'uk':
                this.ssb = [false, false, false, false, false, false, false, false, false];
                break;
            }
          }
          else {
            this.ssb = [false, false, false, false, false, false, false, false, false];
          }
          
          vueresult.compareresult_showable = this.ssb;

        },
        resetship : function(){
            var sed = this.country;
            this.shiptype == 'basic';
        },
        geterror: function() {

          var tmp = 2.5;

          if (this.cardtype == 'basic') {
            tmp = tmp + 0.5;
          }
          if (this.fcardtype == 'basic') {
            tmp = tmp + 0.9;
          }
          if (this.shiptype == 'basic' && vueresult.ship2 != 0) {
            tmp = tmp + 3;
          }


          vueresult.erate = tmp;
          return tmp;
        },
        shiptotal: function() {

        },
        totalprice: function() {

          var total = numnify(this.mainitem.price) + numnify(this.mainitem.shipprice);
          var totalship = numnify(this.mainitem.shipprice);
          this.totalitemprice = numnify(this.mainitem.price);
          for (i = 0; i < this.additem.length; i++) {
            this.totalitemprice = this.totalitemprice + numnify(this.additem[i].price);
            totalship = totalship + numnify(this.additem[i].shipprice);
            total = total + numnify(this.additem[i].price) + numnify(this.additem[i].shipprice);
          }
          vueresult.totalship = totalship.toFixed(2);
          vueresult.totalforex = this.totalitemprice.toFixed(2);

          this.ttt = total;
          if (total < 150) {
            this.isnotlist = false;
          }
          if (total == 0) {
            this.itemtype2 = 'none';
          }
          return total;
        },
        totalpricec: function() {
          var total = comnify(numnify(this.totalprice).toFixed(2));
          ototalpricec = total;
          return total;
        },
        istax: function() {
          if (this.country == 'us') {
            if (this.totalprice > 200) {
              return true;
            }
            else if (this.totalprice > 150 && this.isnotlist == true) {
              return true;
            }
            else {
              this.itemtype = '1';
              return false;
            }
          }
          else {
            if ((this.totalprice * this.usedforexstd) / this.forexstd.us > 150) {
              return true;
            }
            else {
              return false;
            }
          }
        },
        totalweight: function() {
          if ((this.shipmethod == 'air' || this.shipmethod == 'sea') && this.weightbutton == false) {
            return 0;
          }
          var tmp = numnify(this.mainitem.weight);
          for (i = 0; i < this.additem.length; i++) {
            tmp = tmp + numnify(this.additem[i].weight);


          }

          switch (this.weightunit) {
            case 'lbs':
              tmp = tmp * 0.453592;
              break;
            case 'kg':
              break;
            case 'g':
              tmp = tmp / 1000;
              break;
            case 'ounces':
              tmp = tmp * 0.0283495;
              break;
          }
          return tmp;
        },
        volumeweight: function() {
          var tmp;
          if ((this.shipmethod == 'air' || this.shipmethod == 'sea') && this.volumeweightbutton == false) {
            return 0;
          }
          switch (this.volumeweightunit) {
            case 'cm':
              tmp = [numnify(this.volume.x) * 0.3937, numnify(this.volume.y) * 0.3937, numnify(this.volume.z) * 0.3937];
              break;
            case 'ln':
              tmp = [numnify(this.volume.x), numnify(this.volume.y), numnify(this.volume.z)];
              break;
            case 'ft':
              tmp = [numnify(this.volume.x) * 12, numnify(this.volume.y) * 12, numnify(this.volume.z) * 12];
              break;
            case 'm':
              tmp = [numnify(this.volume.x) * 39.37, numnify(this.volume.y) * 39.37, numnify(this.volume.z) * 39.37];
              break;
          }

          this.cbm = tmp[0] * tmp[1] * tmp[2] * 0.0000016;
          if (this.country == 'us') {

            if (this.volumeshipdiscount == true) {
              return (tmp[0] * tmp[1] * tmp[2]) / 332;
            }
            else {
              return (tmp[0] * tmp[1] * tmp[2]) / 166;
            }
          }
          else {
            if (this.volumeshipdiscount == true) {
              return (tmp[0] * tmp[1] * tmp[2] * 2.54 * 2.54 * 2.54) / 12000;
            }
            else {
              return (tmp[0] * tmp[1] * tmp[2] * 2.54 * 2.54 * 2.54) / 6000;
            }
          }





        },
        displaycbm: function() {
          return comnify(numnify(this.cbm.toFixed(2)));
        },
        displayweight: function() {
          if (this.shipmethod == 'air' && this.country == 'us') {
            vueresult.weightunitdisplay = 'lbs';
            return 'lbs';
          }
          else {
            vueresult.weightunitdisplay = 'kg';
            return 'kg';
          }
        },
        isrealweightair: function() {
          if (this.country == 'us') {
            if (this.shipmethod == 'air') {
              this.realweightdisplay = comnify(numnify((this.totalweight / 0.453592).toFixed(3)));
              this.volumeweightdisplay = comnify(numnify(this.volumeweight.toFixed(3)));
            }
            if (this.totalweight / 0.453592 < this.volumeweight) {
              return false;
            }
            else {
              return true;
            }
          }
          else {
            if (this.shipmethod == 'air') {
              this.realweightdisplay = comnify(numnify(this.totalweight.toFixed(2)));
              this.volumeweightdisplay = comnify(numnify(this.volumeweight.toFixed(2)));
            }
            if (this.totalweight < this.volumeweight) {
              return false;
            }
            else {
              return true;
            }
          }
        },
        isrealweightsea: function() {
          if (this.shipmethod == 'sea') {
            this.realweightdisplay = comnify(numnify(this.totalweight.toFixed(2)));
            this.volumeweightdisplay = comnify(numnify((170 * this.cbm).toFixed(2)));
          }
          if (this.totalweight < 170.00 * this.cbm) {
            return false;
          }
          else {
            return true;
          }
        },

        countrymark: function() {
          var tmp;
          
          switch (this.country) {
            case 'us':
              tmp = '$';
              $('.navlist').removeClass('colorednav');
              $("#usn").addClass('colorednav');
              this.itemtype=1;
              this.weightunit = 'lbs';
              this.volumeweightunit = 'ln';
              this.usedforex = this.forex.us;
              this.usedforexstd = this.forexstd.us;
              vuecurrencybar.country = '미국';
              vuecurrencybar.usedcurrency = (this.forex.us-10).toFixed(2);
              vuecurrencybar.usedcurrencystd = this.forexstd.us;
              break;
            case 'jp':
              tmp = '¥';
              $('.navlist').removeClass('colorednav');
              $("#jpn").addClass('colorednav');
              if(this.itemtype==1){
                this.itemtype=121;
              }
              this.weightunit = 'kg';
              this.volumeweightunit = 'cm';
              this.usedforex = this.forex.jp;
              this.usedforexstd = this.forexstd.jp;
              vuecurrencybar.country = '일본';
              vuecurrencybar.usedcurrency = (this.forex.jp-0.1).toFixed(2);
              vuecurrencybar.usedcurrencystd = this.forexstd.jp;
              break;
            case 'eu':
              tmp = '€';
              $('.navlist').removeClass('colorednav');
              $("#eun").addClass('colorednav');
              this.itemtype=1;
              this.weightunit = 'kg';
              this.volumeweightunit = 'cm';
              this.usedforex = this.forex.eu;
              this.usedforexstd = this.forexstd.eu;
              vuecurrencybar.country = '유로';
              vuecurrencybar.usedcurrency = (this.forex.eu-10).toFixed(2);
              vuecurrencybar.usedcurrencystd = this.forexstd.eu;
              break;
            case 'cn':
              tmp = '¥';
              $('.navlist').removeClass('colorednav');
              $("#cnn").addClass('colorednav');
              if(this.itemtype=1){
                this.itemtype=121;
              }
              this.weightunit = 'kg';
              this.volumeweightunit = 'cm';
              this.usedforex = this.forex.cn;
              this.usedforexstd = this.forexstd.cn;
              vuecurrencybar.country = '중국';
              vuecurrencybar.usedcurrency = (this.forex.cn-1.9).toFixed(2);
              vuecurrencybar.usedcurrencystd = this.forexstd.cn;
              break;
            case 'uk':
              tmp = '£';
              $('.navlist').removeClass('colorednav');
              $("#ukn").addClass('colorednav');
              this.itemtype=1;
              this.weightunit = 'kg';
              this.volumeweightunit = 'cm';
              this.usedforex = this.forex.uk;
              this.usedforexstd = this.forexstd.uk;
              vuecurrencybar.country = '영국';
              vuecurrencybar.usedcurrency = (this.forex.uk-13).toFixed(2);
              vuecurrencybar.usedcurrencystd = this.forexstd.uk;
              break;
          }
          ocountrymark = tmp;
          vueresult.countrymark = tmp;
          return tmp;
        },
        setprice: function() {
          var p1;
          var p2;
          p1 = this.totalitemprice;
          vueresult.price1 = Math.round(p1 * this.usedforex);

          vueresult.price2 = Math.round((this.cardrated + this.fcardrated + this.cardrated * this.fcardrated) * this.totalitemprice * this.usedforex);
          return p1 + p2;
        },
        setshiptype: function(){  
          if(this.shipmethod=='fixed'){
              this.shiptype='basic';
          }else if(this.shipmethod=='direct'){
              this.shiptype='basic';
          }else if(this.shipmethod=='sea'){
              this.shiptype='basic';
          }else{
              this.shiptype='basic';
          }
        },
        setshipprice: function() {
          var s1;
          var s2;
          var s3;
          var tmp;
          s1 = numnify(this.mainitem.shipprice);
          for (i = 0; i < this.additem.length; i++) {
            s1 = s1 + numnify(this.additem[i].shipprice);
          }
          vueresult.ship1 = Math.round(s1 * this.usedforex);
          s3 = s1 * (1 + this.fcardrated) * this.usedforex * (1 + this.cardrated) - s1 * this.usedforex;


          if (this.shipmethod == 'fixed') {
            vueresult.shipmethoddisplay = '고정배송비';
            vueresult.shipcompdisplay = '';
            if ((this.country == 'us' || this.country == 'eu') || this.country == 'uk') {
              vueresult.shipperioddisplay = '10 ~ 15';
            }
            else {
              vueresult.shipperioddisplay = '6 ~ 11';
            }

            if (this.fixedshipisforex == true) {
              s2 = numnify(this.fixedshipprice);
              s3 = s3 + s2 * (1 + this.fcardrated) * this.usedforex * (1 + this.cardrated) - s2 * this.usedforex;
            }
            else {
              s2 = (numnify(this.fixedshipprice) / this.usedforex);
            }
          }
          else if (this.shipmethod == 'direct') {
            vueresult.shipmethoddisplay = '직배송';
            vueresult.shipcompdisplay = '';
            if ((this.country == 'us' || this.country == 'eu') || this.country == 'uk') {
              vueresult.shipperioddisplay = '12 ~ 24';
            }
            else {
              vueresult.shipperioddisplay = '4 ~ 10';
            }
            s2 = 0;
          }
          else if (this.shipmethod == 'air') {
            vueresult.shipmethoddisplay = '항공';

            if ((this.country == 'us' || this.country == 'eu') || this.country == 'uk') {
              vueresult.shipperioddisplay = '10 ~ 15';
            }
            else {
              vueresult.shipperioddisplay = '6 ~ 12';
            }
            if (this.isrealweightair == true) {
              vueresult.isrealweightdisplay = '실무게';
              if (this.country == 'us') {
                vueresult.weightdisplay = comnify(numnify((this.totalweight / 0.453592).toFixed(1)));
              }
              else {
                vueresult.weightdisplay = comnify(numnify((this.totalweight).toFixed(1)));
              }
              tmp = this.getshipprice(this.shiptype, this.totalweight, this.shipmethod, this.country);
              s2 = tmp[0];
              vueresult.compareresult = {
                malltail : Math.round(this.getshipprice('malltail', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                ehanex : Math.round(this.getshipprice('ehanex', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                iporter : Math.round(this.getshipprice('iporter', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                postbay : Math.round(this.getshipprice('postbay', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                omyzip : Math.round(this.getshipprice('omyzip', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                uniauction : Math.round(this.getshipprice('uniauction', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                eldex : Math.round(this.getshipprice('edx', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                newyorkgirls : Math.round(this.getshipprice('nyg', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                ginizip : Math.round(this.getshipprice('jnj', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
              };
              if (tmp[1] == true) {
                s3 = s3 + s2 * (1 + this.fcardrated) * this.usedforex * (1 + this.cardrated) - s2 * this.usedforex;
              }
            }
            else {
              vueresult.isrealweightdisplay = '부피무게';
              
              vueresult.weightdisplay = comnify(numnify(this.volumeweight.toFixed(1)));
              if(this.country=='us'){
              tmp = this.getshipprice(this.shiptype, this.volumeweight * 0.453592, this.shipmethod, this.country);
              vueresult.compareresult = {
                malltail : Math.round(this.getshipprice('malltail', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                ehanex : Math.round(this.getshipprice('ehanex', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                iporter : Math.round(this.getshipprice('iporter', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                postbay : Math.round(this.getshipprice('postbay', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                omyzip : Math.round(this.getshipprice('omyzip', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                uniauction : Math.round(this.getshipprice('uniauction', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                eldex : Math.round(this.getshipprice('edx', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                newyorkgirls : Math.round(this.getshipprice('nyg', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                ginizip : Math.round(this.getshipprice('jnj', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
              };
              }else{
              tmp = this.getshipprice(this.shiptype, this.volumeweight, this.shipmethod, this.country);
              vueresult.compareresult = {
                malltail : Math.round(this.getshipprice('malltail', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                ehanex : Math.round(this.getshipprice('ehanex', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                iporter : Math.round(this.getshipprice('iporter', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                postbay : Math.round(this.getshipprice('postbay', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                omyzip : Math.round(this.getshipprice('omyzip', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                uniauction : Math.round(this.getshipprice('uniauction', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                eldex : Math.round(this.getshipprice('edx', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                newyorkgirls : Math.round(this.getshipprice('nyg', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                ginizip : Math.round(this.getshipprice('jnj', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
              };
              }
              s2 = tmp[0];
              if (tmp[1] == true) {
                s3 = s3 + s2 * (1 + this.fcardrated) * this.usedforex * (1 + this.cardrated) - s2 * this.usedforex;
              }
            }
          }
          else {
            vueresult.shipmethoddisplay = '해상';
            if ((this.country == 'us' || this.country == 'eu') || this.country == 'uk') {
              vueresult.shipperioddisplay = '42 ~ 60';
            }
            else {
              vueresult.shipperioddisplay = '12 ~ 18';
            }
            if (this.isrealweightsea == true) {
              vueresult.isrealweightdisplay = '실무게';
              vueresult.weightdisplay = comnify(numnify(this.totalweight.toFixed(1)));
              tmp = this.getshipprice(this.shiptype, this.totalweight, this.shipmethod, this.country);
              vueresult.compareresult = {
                malltail : Math.round(this.getshipprice('malltail', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                ehanex : Math.round(this.getshipprice('ehanex', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                iporter : Math.round(this.getshipprice('iporter', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                postbay : Math.round(this.getshipprice('postbay', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                omyzip : Math.round(this.getshipprice('omyzip', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                uniauction : Math.round(this.getshipprice('uniauction', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                eldex : Math.round(this.getshipprice('edx', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                newyorkgirls : Math.round(this.getshipprice('nyg', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
                ginizip : Math.round(this.getshipprice('jnj', this.totalweight, this.shipmethod, this.country)[0] * this.usedforex),
              };
              s2 = tmp[0];
              if (tmp[1] == true) {
                s3 = s3 + s2 * (1 + this.fcardrated) * this.usedforex * (1 + this.cardrated) - s2 * this.usedforex;
              }
            }
            else {
              vueresult.isrealweightdisplay = '부피무게';
              vueresult.weightdisplay = comnify(numnify(this.volumeweight.toFixed(1)));
              if(this.country=='us'){
              tmp = this.getshipprice(this.shiptype, this.volumeweight * 0.453592, this.shipmethod, this.country);
              vueresult.compareresult = {
                malltail : Math.round(this.getshipprice('malltail', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                ehanex : Math.round(this.getshipprice('ehanex', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                iporter : Math.round(this.getshipprice('iporter', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                postbay : Math.round(this.getshipprice('postbay', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                omyzip : Math.round(this.getshipprice('omyzip', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                uniauction : Math.round(this.getshipprice('uniauction', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                eldex : Math.round(this.getshipprice('edx', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                newyorkgirls : Math.round(this.getshipprice('nyg', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
                ginizip : Math.round(this.getshipprice('jnj', this.volumeweight * 0.453592, this.shipmethod, this.country)[0] * this.usedforex),
              };
              }else{
              tmp = this.getshipprice(this.shiptype, this.volumeweight, this.shipmethod, this.country);
              vueresult.compareresult = {
                malltail : Math.round(this.getshipprice('malltail', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                ehanex : Math.round(this.getshipprice('ehanex', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                iporter : Math.round(this.getshipprice('iporter', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                postbay : Math.round(this.getshipprice('postbay', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                omyzip : Math.round(this.getshipprice('omyzip', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                uniauction : Math.round(this.getshipprice('uniauction', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                eldex : Math.round(this.getshipprice('edx', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                newyorkgirls : Math.round(this.getshipprice('nyg', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
                ginizip : Math.round(this.getshipprice('jnj', this.volumeweight, this.shipmethod, this.country)[0] * this.usedforex),
              };
              }
              s2 = tmp[0];
              if (tmp[1] == true) {
                s3 = s3 + s2 * (1 + this.fcardrated) * this.usedforex * (1 + this.cardrated) - s2 * this.usedforex;
              }
            }
          }

          vueresult.ship2 = Math.round(s2 * this.usedforex);
          vueresult.ship3 = Math.round(s3);
        },
        settaxprice: function() {
          var t1 = 0;
          var t2 = 0;
          var t3 = 0;

          var st;
          var rate = 0;
          var srate = 0;
          if (this.istax == true) {
            st = this.totalprice * this.usedforexstd + this.weighttax(Math.ceil(this.totalweight), this.country);
            switch (Number(this.itemtype)) {
              case 1:
                rate = 0;
                
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 무관세";
                break;
              case 121:
                rate = 0.08;
                if (st * 1.08 > 2000000) {
                  t2 = (st * 1.08 - 1852000) * 0.2 * 1.3;
                }
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 시계류";
                break;
              case 2:
                rate = 0.13;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 의류";
                break;
              case 3:
                rate = 0.13;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 양말/스타킹";
                break;
              case 4:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 선글라스/안경";
                break;
              case 5:
                rate = 0.13;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 신발";
                break;
              case 6:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 의류잡화";
                break;
              case 7:
                rate = 0.13;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 넥타이/스카프";
                break;
              case 8:
                rate = 0.13;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 우산";
                break;
              case 9:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 운동용품";
                break;
              case 10:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 자전거/용품";
                break;
              case 11:
                rate = 0.13;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 스포츠 의류";
                break;
              case 12:
                rate = 0.13;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 텐트";
                break;
              case 13:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 자동차 부품";
                break;
              case 14:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 애완용품";
                break;
              case 15:
                rate = 0.05;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 유모차";
                break;
              case 16:
                rate = 0.4;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 분유/이유식";
                break;
              case 17:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 목욕통";
                break;
              case 18:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 기저귀";
                break;
              case 19:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 완구";
                break;
              case 20:
                rate = 0;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 레고/바퀴장난감";
                break;
              case 21:
                rate = 0.08;
                if (this.tover == true) {
                  t2 = st * 1.08 * 0.05 * 1.3;
                }
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- TV";
                break;
              case 22:
                rate = 0;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 핸드폰";
                break;
              case 23:
                rate = 0;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 컴퓨터/부품";
                break;
              case 24:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 가전기기";
                break;
              case 25:
                rate = 0;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 카메라(디지털)";
                break;
              case 26:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 카메라(기타)";
                break;
              case 27:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 캠코터/녹음기";
                break;
              case 28:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 음향기기";
                break;
              case 29:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 악기류";
                break;
              case 30:
                rate = 0;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 도서/공책";
                break;
              case 31:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- CD음반";
                break;
              case 32:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 건강보조식품";
                break;
              case 33:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 화장품";
                break;
              case 34:
                rate = 0.065;
                if (this.perover == true) {
                  t2 = st * 0.065 * 1.07 + st * 1.065 * 0.07 * 0.4;
                }
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 향수";
                break;
              case 35:
                rate = 0.065;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 위생용품";
                break;
              case 36:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 의약품";
                break;
              case 37:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 초콜릿/캔디";
                break;
              case 38:
                rate = 0.05;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 과자";
                break;
              case 39:
                rate = 0.4;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 차/커피";
                break;
              case 40:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 캡슐커피";
                break;
              case 41:
                rate = 0.3;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 식품";
                break;
              case 42:
                rate = 0;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 미술/수집품";
                break;
              case 43:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 피규어/장난감";
                break;
              case 44:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 인테리어";
                break;
              case 45:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 식기/주방용품";
                break;
              case 46:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 매트리스";
                break;
              case 47:
                rate = 0.1;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 양탄자";
                break;
              case 48: // 담배
                rate = 0.4;
                if (this.smokev != 0) {

                  t2 = 24528 * (numnify(this.smokev) - 1);

                  t3 = (st * 1.4 + 7128 * (numnify(this.smokev) - 1)) * 0.1;
                }
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 담배";
                break;
              case 49:
                rate = 0.08;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 라이터/파이프";
                break;
              case 50:
                rate = 0.15;
                t2 = st * 1.15 * 0.3 * 1.1;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 와인/청주";
                break;
              case 51:
                rate = 0.2;
                t2 = st * 1.2 * 0.72 * 1.3;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 보드카/데킬라/위스키";
                break;
              case 52:
                rate = 0.3;
                t2 = st * 1.3 * 0.72 * 1.3;
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 소주/맥주";
                break;
              case 53:
                rate = 0.08;
                if (st * 1.08 > 2000000) {
                  t2 = (st * 1.08 - 1852000) * 0.2 * 1.3;
                }
                vueresult.tax1rate = rate * 100;
                vueresult.itemtt = "- 주얼리/백";
                break;
            }




            t1 = st * rate;
            if (this.itemtype != 48) {
              t3 = (st + t1 + t2) * 0.1;
            }

          }
          else {
            st = this.totalprice * this.usedforexstd;
            //세금없을때 주세 등
            switch (this.itemtype2) {
              case 'none':
                vueresult.itemtt = "";
                break;
              case '1':
                t2 = st * 0.07 + st * 0.07 * 0.4;
                vueresult.itemtt = "- 향수";
                break;
              case '2':
                t2 = st * 1.15 * 0.3 * 1.1;
                vueresult.itemtt = "- 와인/청주";
                break;
              case '3':
                t2 = st * 1.2 * 0.72 * 1.3;
                vueresult.itemtt = "- 보드카/데킬라/위스키";
                break;
              case '4':
                t2 = st * 1.3 * 0.72 * 1.3;
                vueresult.itemtt = "- 소주/맥주";
                break;
              case '5':
                if (this.smokev2 != 0) {

                  t2 = 24528 * (numnify(this.smokev2) - 1);
                }
                break;
            }
          }

          vueresult.tax1 = Math.round(t1);
          vueresult.tax2 = Math.round(t2);
          vueresult.tax3 = Math.round(t3);
        },
        setdiscount1: function() {
          var dis1 = 0;
          if (this.malldis.type == 'forex') {
            dis1 = this.malldis.amount * this.usedforex;
          }
          else if (this.malldis.type == 'won') {
            dis1 = this.malldis.amount;
          }
          else {
            dis1 = (this.totalitemprice * this.malldis.amount * this.usedforex) / 100;
          }
          for (i = 0; i < this.malldisdd.length; i++) {
            if (this.malldisdd[i].type == 'forex') {
              dis1 = dis1 + this.malldisdd[i].amount * this.usedforex;
            }
            else if (this.malldisdd[i].type == 'won') {
              dis1 = dis1 + this.malldisdd[i].amount;
            }
            else {
              dis1 = dis1 + (this.totalitemprice * this.malldisdd[i].amount * this.usedforex) / 100;
            }
          }

          vueresult.dis1 = Math.round(dis1);

        },
        setdiscount2: function() {
          var dis1 = 0;
          if (this.shipdis.type == 'forex') {
            dis1 = this.shipdis.amount * this.usedforex;
          }
          else if (this.shipdis.type == 'won') {
            dis1 = this.shipdis.amount;
          }
          else {
            dis1 = ((vueresult.ship2 + vueresult.ship3) * this.shipdis.amount) / 100;
          }
          for (i = 0; i < this.shipdisdd.length; i++) {
            if (this.shipdisdd[i].type == 'forex') {
              dis1 = dis1 + this.shipdisdd[i].amount * this.usedforex;
            }
            else if (this.shipdisdd[i].type == 'won') {
              dis1 = dis1 + this.shipdisdd[i].amount;
            }
            else {
              dis1 = dis1 + ((vueresult.ship2 + vueresult.ship3) * this.shipdisdd[i].amount) / 100;
            }
          }

          vueresult.dis2 = Math.round(dis1);

        },
        setdiscount3: function() {
          var dis1 = 0;
          if (this.carddis.type == 'forex') {
            dis1 = this.carddis.amount * this.usedforex;
          }
          else if (this.carddis.type == 'won') {
            dis1 = this.carddis.amount;
          }
          else {
            dis1 = (this.totalitemprice * this.carddis.amount * this.usedforex) / 100;
          }
          for (i = 0; i < this.carddisdd.length; i++) {
            if (this.carddisdd[i].type == 'forex') {
              dis1 = dis1 + this.carddisdd[i].amount * this.usedforex;
            }
            else if (this.carddisdd[i].type == 'won') {
              dis1 = dis1 + this.carddisdd[i].amount;
            }
            else {
              dis1 = dis1 + (this.totalitemprice * this.carddisdd[i].amount * this.usedforex) / 100;
            }
          }

          vueresult.dis3 = Math.round(dis1);

        },
        cardrate: function() {
          var tmp;
          if (this.cardratein == '') {

            switch (this.cardtype) {

              case 'basic':
                vueresult.cardtypedisplay = "카드";
                tmp = '평균 수수료율 : ' + (this.cardrate_bank.basic*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.basic;
                break;
              case 'shinhan':
                vueresult.cardtypedisplay = "신한카드";
                tmp = '신한 수수료율 : ' + (this.cardrate_bank.shinhan*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.shinhan;
                break;
              case 'lotte':
                vueresult.cardtypedisplay = "롯데카드";
                tmp = '롯데 수수료율 : ' + (this.cardrate_bank.lotte*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.lotte;
                break;
              case 'kookmin':
                vueresult.cardtypedisplay = "국민카드";
                tmp = '국민 수수료율 : ' + (this.cardrate_bank.kookmin*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.kookmin;
                break;
              case 'foreign':
                vueresult.cardtypedisplay = "씨티카드";
                tmp = '씨티 수수료율 : ' + (this.cardrate_bank.citi*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.citi;
                break;
              case 'samsung':
                vueresult.cardtypedisplay = "삼성카드";
                tmp = '삼성 수수료율 : ' + (this.cardrate_bank.samsung*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.samsung;
                break;
              case 'hyundai':
                vueresult.cardtypedisplay = "현대카드";
                tmp = '현대 수수료율 : ' + (this.cardrate_bank.hyundai*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.hyundai;
                break;
              case 'woori':
                vueresult.cardtypedisplay = "우리카드";
                tmp = '우리 수수료율 : ' + (this.cardrate_bank.woori*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.woori;
                break;
              case 'nonghyup':
                vueresult.cardtypedisplay = "농협카드";
                tmp = '농협 수수료율 : ' + (this.cardrate_bank.nonghyup*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.nonghyup;
                break;
              case 'hana':
                vueresult.cardtypedisplay = "하나카드";
                tmp = '하나 수수료율 : ' + (this.cardrate_bank.hana*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.hana;
                break;
              case 'bcglobal':
                vueresult.cardtypedisplay = "BC카드";
                tmp = 'BC글로벌 수수료율 : ' + (this.cardrate_bank.bcglobal*100).toFixed(2).toString()+'%';
                this.cardrated = this.cardrate_bank.bcglobal;
                break;

            }
          }
          else {
            tmp = '직접 입력 : ' + this.cardratein + '%';
          }
          return tmp;
        },
        fcardrate: function() {
          var tmp;
          if (this.fcardratein == '') {
            switch (this.fcardtype) {
              case 'basic':
                vueresult.fcardtypedisplay = '표준';
                tmp = '평균 수수료율 : ' + (this.cardrate_forex.basic*100).toFixed(2).toString()+'%';
                this.fcardrated = this.cardrate_forex.basic;
                break;
              case 'visa':
                vueresult.fcardtypedisplay = 'VISA';
                tmp = 'VISA 수수료율 : ' + (this.cardrate_forex.visa*100).toFixed(2).toString()+'%';
                this.fcardrated = this.cardrate_forex.visa;
                break;
              case 'mastercard':
                vueresult.fcardtypedisplay = 'MASTERCARD';
                tmp = 'MasterCard 수수료율 : ' + (this.cardrate_forex.mastercard*100).toFixed(2).toString()+'%';
                this.fcardrated = this.cardrate_forex.mastercard;
                break;
              case 'amex':
                vueresult.fcardtypedisplay = 'Amex';
                tmp = 'Amercan Express 수수료율 : ' + (this.cardrate_forex.amex*100).toFixed(2).toString()+'%';
                this.fcardrated = this.cardrate_forex.amex;
                break;
              case 'maestro':
                vueresult.fcardtypedisplay = 'MAESTRO';
                tmp = 'Maestro 수수료율 : ' + (this.cardrate_forex.maestro*100).toFixed(2).toString()+'%';
                this.fcardrated = this.cardrate_forex.maestro;
                break;
              case 'jcb':
                vueresult.fcardtypedisplay = 'JCB';
                tmp = 'JCB 수수료율 : ' + (this.cardrate_forex.jcb*100).toFixed(2).toString()+'%';
                this.fcardrated = this.cardrate_forex.jcb;
                break;
              case 'bcg':
                vueresult.fcardtypedisplay = 'BC Global';
                tmp = 'BC Global 수수료율 : ' + (this.cardrate_forex.bcg*100).toFixed(2).toString()+'%';
                this.fcardrated = this.cardrate_forex.bcg;
                break;
              case 'union':
                vueresult.fcardtypedisplay = 'Unionpay';
                tmp = 'UnionPay(은련) : ' + (this.cardrate_forex.union*100).toFixed(2).toString()+'%';
                this.fcardrated = this.cardrate_forex.union;
                break;


            }
          }
          else {
            tmp = '직접 입력 : ' + this.fcardratein + '%';
          }
          return tmp;
        },
        shiptype2: function() {
          var tmp;
          switch (this.shiptype) {
            case 'basic':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '표준';
              }
              tmp = '평균값';
              break;
            case 'malltail':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '몰테일';
              }
              tmp = '몰테일';
              break;
            case 'ehanex':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '이하넥스';
              }
              tmp = '이하넥스';
              break;
            case 'iporter':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '아이포터';
              }
              tmp = '아이포터';
              break;
            case 'postbay':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '포스트베이';
              }
              tmp = '포스트베이';
              break;
            case 'omyzip':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '오마이집';
              }
              tmp = '오마이집';
              break;
            case 'uniauction':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '유니옥션';
              }
              tmp = '유니옥션';
              break;
            case 'edx':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '엘덱스';
              }
              tmp = '엘덱스';
              break;
            case 'nyg':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '뉴욕걸즈';
              }
              tmp = '뉴욕걸즈';
              break;
            case 'jnj':
              if (this.shipmethod == 'air' || this.shipmethod == 'sea') {
                vueresult.shipcompdisplay = '지니집';
              }
              tmp = '지니집';
              break;

          }
          return tmp;
        }

      }





    });



    vueconsole.forex.us = numnify((numnify(currencyinfo.quotes.USDKRW) + 10).toFixed(2));
    vueconsole.forex.cn = numnify((numnify(currencyinfo.quotes.USDKRW / currencyinfo.quotes.USDCNY) + 1.9).toFixed(2));
    vueconsole.forex.uk = numnify((numnify(currencyinfo.quotes.USDKRW / currencyinfo.quotes.USDGBP) + 13).toFixed(2));
    vueconsole.forex.jp = numnify((numnify(currencyinfo.quotes.USDKRW / currencyinfo.quotes.USDJPY) + 0.1).toFixed(2));
    vueconsole.forex.eu = numnify((numnify(currencyinfo.quotes.USDKRW / currencyinfo.quotes.USDEUR) + 10).toFixed(2));
    vuecurrencybar.currencytimestamp = numnify(currencyinfo.timestamp);
    vuecurrencybar.stddate = stdcurrencyinfo.date;
    vueconsole.forexstd.us = parseFloat(stdcurrencyinfo.stdforex.us.replace(/,/g, ''));
    vueconsole.forexstd.uk = parseFloat(stdcurrencyinfo.stdforex.uk.replace(/,/g, ''));
    vueconsole.forexstd.eu = parseFloat(stdcurrencyinfo.stdforex.eu.replace(/,/g, ''));
    vueconsole.forexstd.cn = parseFloat(stdcurrencyinfo.stdforex.cn.replace(/,/g, ''));
    vueconsole.forexstd.jp = parseFloat(stdcurrencyinfo.stdforex.jp.replace(/,/g, ''));

    vueconsole.cardrate_bank = cardrate_bank;
    vueconsole.cardrate_forex = cardrate_forex;

    if(urlparam.a0 != undefined){
      vueconsole.mainitem.price = urlparam.a0;
      vueconsole.mainitem.shipprice = urlparam.b0;
      vueconsole.mainitem.weight = urlparam.c0;
      vueconsole.weightunit = urlparam.wu;
    }
    if(urlparam.ll!=1){
      for(i=1;i<urlparam.ll;i++){
        
        vueconsole.additem.push({price:eval("urlparam.a"+i),shipprice:eval("urlparam.b"+i),weight:eval("urlparam.c"+i)});
      }
    }
    if(urlparam.mll!=undefined){
      for(i=1;i<urlparam.mll;i++){
        
        vueconsole.malldisdd.push({amount:eval("urlparam.dm"+i),type:eval("urlparam.dmu"+i)});
      }
    }
    if(urlparam.sll!=undefined){
      for(i=1;i<urlparam.sll;i++){
        
        vueconsole.shipdisdd.push({amount:eval("urlparam.ds"+i),type:eval("urlparam.dsu"+i)});
      }
    }
    if(urlparam.cll!=undefined){
      for(i=1;i<urlparam.cll;i++){
        
        vueconsole.carddisdd.push({amount:eval("urlparam.dc"+i),type:eval("urlparam.dcu"+i)});
      }
    }
    if(urlparam.dm !=undefined){
      vueconsole.malldis.amount = urlparam.dm;
      vueconsole.malldis.type = urlparam.dmu;
    }
    if(urlparam.ds !=undefined){
      vueconsole.shipdis.amount = urlparam.ds;
      vueconsole.shipdis.type = urlparam.dsu;
    }
    if(urlparam.dc !=undefined){
      vueconsole.carddis.amount = urlparam.dc;
      vueconsole.carddis.type = urlparam.dcu;
    }
    if(urlparam.d != undefined){
      vueconsole.country = urlparam.d;
    }
    if(urlparam.e != undefined){
      
      vueconsole.shipmethod = urlparam.e;
      
    }
    if(urlparam.x != undefined){
      vueconsole.volume.x = urlparam.x;
      vueconsole.volume.y = urlparam.y;
      vueconsole.volume.z = urlparam.z;
      vueconsole.volumeweightunit = urlparam.zw;
    }
    if(urlparam.zd != undefined){
      if(urlparam.zd == 'true'){
        vueconsole.volumeshipdiscount = true;
      }else{
        vueconsole.volumeshipdiscount = false;
      }
    }
    if(urlparam.ct != undefined){
      vueconsole.cardtype = urlparam.ct;
    }
    if(urlparam.fct != undefined){
      vueconsole.fcardtype = urlparam.fct;
    }
    
    if(urlparam.fsp != undefined){
      vueconsole.fixedshipprice = urlparam.fsp;
      if(urlparam == "true"){
        vueconsole.fixedshipisforex = true;
      }else{
        vueconsole.fixedshipisforex = false;
      }
    }
    if(urlparam.it2 != undefined){
      vueconsole.itemtype2 = urlparam.it2;
    }
    if(urlparam.it != undefined){
      vueconsole.itemtype = urlparam.it;
    }
    if(urlparam.tv != undefined){
      if(urlparam.tv == "true"){
        vueconsole.tover = true;
      }else{
        vueconsole.tover = false;
      }
    }
    if(urlparam.po != undefined){
      if(urlparam.po == "true"){
        vueconsole.perover = true;
      }else{
        vueconsole.perover = false;
      }
    }
    if(urlparam.sm != undefined){
      vueconsole.smokev = Number(urlparam.sm);
    }
    if(urlparam.sm2 != undefined){
      vueconsole.smokev2 = Number(urlparam.sm2);
    }
    if(urlparam.inl != undefined){
      if(urlparam.inl == "true"){
        vueconsole.isnotlist = true;
      }else{
        vueconsole.isnotlist = false;
      }
    }
if(urlparam.st != undefined){
      
      vueconsole.shiptype = urlparam.st;
      
    }


     $('.navlist').click(function() {

        
        switch ($(this).attr('id')) {
          case 'usn':
            vueconsole.shiptype = 'basic';
            vueconsole.country = "us";

            break;
          case 'jpn':
            vueconsole.shiptype = 'basic';
            vueconsole.country = "jp";

            break;
          case 'eun':
            vueconsole.shiptype = 'basic';
            vueconsole.country = "eu";

            break;
          case 'cnn':
            vueconsole.shiptype = 'basic';
            vueconsole.country = "cn";

            break;
          case 'ukn':
            vueconsole.shiptype = 'basic';
            vueconsole.country = "uk";

            break;


        }
      });

      oeraseall= function(){
        vueconsole.cardtype = 'basic';
        vueconsole.fcardtype = 'basic';
        vueconsole.cardratein = '';
        vueconsole.fcardratein = '';
        vueconsole.shiptype = 'basic';
        vueconsole.mainitem = {price:'',shipprice:'',weight:''};
        vueconsole.additem=[];
        vueconsole.shipmethod='air';
        vueconsole.weightbutton=true;
        vueconsole.volumeweightbutton=false;
        vueconsole.volumeshipdiscount=false;
        vueconsole.volume={x:'',y:'',z:''};
        vueconsole.fixedshipprice='';
        vueconsole.ttt='';
        vueconsole.carddisc='';
        vueconsole.carddisratec='';
        vueconsole.malldis={type:'forex',amount:''};
        vueconsole.shipdis={type:'perc',amount:''};
        vueconsole.carddis={type:'won',amount:''};
        vueconsole.malldisdd=[];
        vueconsole.shipdisdd=[];
        vueconsole.carddisdd=[];
        vueconsole.itemtype='1';
        vueconsole.itemtype2='none';
        vueconsole.isnotlist='false';
        vueconsole.tover=false;
        vueconsole.perover=false;
        vueconsole.realweightdisplay=0;
        vueconsole.volumeweightdisplay=0;
        vueconsole.ssb=[true, true, true, true, true, true, true, true, true];
        vueconsole.target='';
        vueresult.compareresult_showable=[true, true, true, true, true, true, true, true, true];
        vueresult.compareresult = {
          malltail : 0,
          ehanex : 0,
          iporter : 0,
          postbay : 0,
          omyzip : 0,
          uniauction : 0,
          eldex : 0,
          newyorkgirls : 0,
          ginizip : 0,
        };
      }

      