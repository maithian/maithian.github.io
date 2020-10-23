$(document).ready(function () {
  // button tính toán 
  $(".nhaplieu__standardbase").click(function () {
    $(this).toggleClass("active");
  });
  // swiper
  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // wow
  wow = new WOW({
    animateClass: "animated",
    offset: 100,
    callback: function (box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
    },
  });
  wow.init();
   $(".menubar").click(function () {
    $("body").addClass("menuactive");
    $("html").css("overflow", "hidden");
    $(".header__title").addClass("left65");
    $(".nhaplieu__standardbase").addClass("collapse");
  });
  $(".menu__close").click(function () {
    $("body").removeClass("menuactive");
    $("html").css("overflow", "auto");
    $(".header__title").removeClass("left65");
    $(".nhaplieu__standardbase").removeClass("collapse");
  });
  // select
  $(".select__input").focus(function () {
    $(this.nextElementSibling).addClass("active");
  });
  $(".select__input").blur(function () {
    $(".select").removeClass("active");
  });
  $(".select__item").click(function () {
    $(this).parents(".form__item").children("input").val($(this).text());
  });
  // menu module 1
  $(".menu_chiunen_bt").click(function () {
    menuClose();
    reset_page();
    $(".nhaplieu").hide();
    $(".main_page").addClass("collapse");
    $(".chiunen_bt").removeClass("collapse");    
  });
  //menu module 2
  $(".menu_mau_bt_khoan").click(function () {
    menuClose();
    reset_page();
    $(".nhaplieu").hide();
    $(".main_page").addClass("collapse");
    $(".mau_bt_khoan").removeClass("collapse");
  });
  //menu module 3
  $(".menu_tn_sung").click(function () {
    menuClose();
    reset_page();
    $(".nhaplieu").hide();
    $(".main_page").addClass("collapse");
    $(".tn_sung").removeClass("collapse");
  });
  //menu module 4
  $(".menu_tn_mauthep").click(function () {
    menuClose();
    reset_page();
    $(".nhaplieu").hide();
    $(".main_page").addClass("collapse");
    $(".tn_mauthep").removeClass("collapse");
  });  

  function reset_page(){
    // module 1
    $("#chiunen_bt_page_3").addClass("collapse");
    $("#chiunen_bt_page_2").addClass("collapse");
    $("#chiunen_bt_page_1").removeClass("collapse");
    $("#chiunen_bt_export").addClass("collapse");
    n1 = [];
    n2 = [];
    n3 = [];
    n4 = [];
    n5 = [];
    export_row = [];
    exported_row = [];
    export_row_khoan = [];
    $("#table_ketqua tr:gt(1)").remove(); 

    // module 2 
    $("#mau_bt_khoan_page_3").addClass("collapse");
    $("#mau_bt_khoan_page_2").addClass("collapse");
    $("#mau_bt_khoan_page_1").removeClass("collapse");
    $("#bt_khoan_export").addClass("collapse");
    // dt1.length  = 0;
    // a1.length  = 0;
    // dt2.length  = 0;
    // a2.length  = 0;
    // hmk.length  = 0;
    // dmk.length  = 0;
    // p.length  = 0;
    // f.length  = 0;
    // d.length  = 0;
    // k.length  = 0;
    // hs2.length  = 0;
    // hs3.length  = 0;
    // rmk.length  = 0;
    // rht.length  = 0;
    // export_row_khoan.length  = 0;
    dt1 = [];
    a1 = [];
    dt2 = [];
    a2 = [];
    hmk = [];
    dmk = [];
    p = [];
    f = [];
    d = [];
    k = [];
    hs2 = [];
    hs3 = [];
    rmk = [];
    rht = [];
    export_row_khoan = [];
    $("#kqua_2 tr:gt(1)").remove();

    // module 3
    $("#tn_sung_page_3").addClass("collapse");
    $("#tn_sung_page_2").addClass("collapse");
    $("#tn_sung_page_1").removeClass("collapse");
    $("#tn_sung_export").addClass("collapse");
    N1 = [];
    N2 = [];
    N3 = [];
    N4 = [];
    N5 = [];
    V1 = [];
    V2 = [];
    C0 = [];
    C1 = [];
    C2 = [];
    C3 = [];
    C4 = [];
    R0 = [];
    NTB = [];
    VTB = [];
    RHTS = [];
    RHTTBS = [];
    export_row_sung_1 = [];
    export_row_sung_2 = [];
    $("#table_bang1_sung tr:gt(1)").remove();
    $("#table_bang2_sung tr:gt(1)").remove();

    // module 4 
    $("#tn_mauthep_page_3").addClass("collapse");
    $("#tn_mauthep_page_2").addClass("collapse");
    $("#tn_mauthep_page_1").removeClass("collapse");
    $("#tn_mauthep_export").addClass("collapse");
    PC = [];
    PB = [];
    RC = [];
    RB = [];
    LM = [];
    L1 = [];
    QM = [];
    GTC = [];
    GTT = [];
    DELTA = [];
    EPS = [];
    MAC_THEP = [];
    export_row_mac = [];
    $("#table_ketqua_4 tr:gt(0)").remove();
  }
  
  function menuClose() {
    $("body").removeClass("menuactive");
    $("html").css("overflow", "auto");
    $(".header__title").removeClass("left65");
  }
  $("#trangchu").click(function () {
    menuClose();
    $(".menubar").hide();
    $(".nhaplieu").hide();
    $(".main_page").addClass("collapse");
    $(".trangchu").show();
    $(".header__title").html("trang chủ");
    return;
  });
  $("#nhaplieu").click(function () {
    menuClose();
    $(".trangchu").hide();      
    $(".menu_tinhtoan").show();
    $(".header__title").html("Tính Toán");
    $(".menubar").show();
    $(".main_page").addClass("collapse");
    $(".chiunen_bt").removeClass("collapse");
    return;
  });
  $("#btn__next").click(function () {
    $("#chiunen_bt_page_1").addClass("collapse");
    $("#chiunen_bt_page_2").removeClass("collapse");
    return;
  });
  $("#btn__back").click(function () {
    $("#chiunen_bt_page_1").removeClass("collapse");
    $("#chiunen_bt_page_2").addClass("collapse");
    return;
  });

  $("#btn__tiep").click(function () {
    $("#mau_bt_khoan_page_1").addClass("collapse");
    $("#mau_bt_khoan_page_2").removeClass("collapse");
    return;
  });
  $("#btn__quaylai").click(function () {
    $("#mau_bt_khoan_page_1").removeClass("collapse");
    $("#mau_bt_khoan_page_2").addClass("collapse");
    return;
  });

  $("#btn__tieptheo").click(function () {
    $("#tn_sung_page_1").addClass("collapse");
    $("#tn_sung_page_2").removeClass("collapse");
    return;
  });
  $("#btn__trolai").click(function () {
    $("#tn_sung_page_1").removeClass("collapse");
    $("#tn_sung_page_2").addClass("collapse");
    return;
  });
  $("#btn__tieptheo_thep").click(function () {
    $("#tn_mauthep_page_1").addClass("collapse");
    $("#tn_mauthep_page_2").removeClass("collapse");
    return;
  });
  $("#btn__quaylai_thep").click(function () {
    $("#tn_mauthep_page_1").removeClass("collapse");
    $("#tn_mauthep_page_2").addClass("collapse");
    return;
  });
  //button tính toán module 1
  $("#btn__tinhtoan").click(function () {
    $("#chiunen_bt_page_2").addClass("collapse");
    $("#chiunen_bt_page_3").removeClass("collapse");
    return;
  });
  //button tính toán module 2
  $("#btn__tinh").click(function () {
    $("#mau_bt_khoan_page_2").addClass("collapse");
    $("#mau_bt_khoan_page_3").removeClass("collapse");
    return;
  });
  //button tính toán module 3
  $("#btn__tinhtoan_sung").click(function () {
    $("#tn_sung_page_2").addClass("collapse");
    $("#tn_sung_page_3").removeClass("collapse");
    return;
  });
  //button tính toán module 4
  $("#btn__tinhtoan_thep").click(function () {
    $("#tn_mauthep_page_2").addClass("collapse");
    $("#tn_mauthep_page_3").removeClass("collapse");
    return;
  });
  //button thêm module 1
  $("#btn__them").click(function () {    
    $("#chiunen_bt_page_3").addClass("collapse");
    $("#chiunen_bt_page_1").removeClass("collapse");
    return;
  });
  //button thêm module 2
  $("#btn__themmoi").click(function () {    
    $("#mau_bt_khoan_page_3").addClass("collapse");
    $("#mau_bt_khoan_page_1").removeClass("collapse");
    return;
  });
  //button thêm module 3
  $("#btn__themmoi_sung").click(function () {    
    $("#tn_sung_page_3").addClass("collapse");
    $("#tn_sung_page_1").removeClass("collapse");
    return;
  });
  //button thêm module 4
  $("#btn__themmoi_thep").click(function () {    
    $("#tn_mauthep_page_3").addClass("collapse");
    $("#tn_mauthep_page_1").removeClass("collapse");
    return;
  });

  function resetField() {
    $("#field_coquanyeucau").val("");
    $("#field_duan").val("");
    $("#field_hangmuc").val("");
    $("#field_diadiemxaydung").val("");
    $("#field_coquancapmau").val("");
    $("#field_kyhieumau").val("");
    $("#field_ngayduc").val("");
    $("#field_kichthuoc").val("");
    $("#field_soto").val("");
    $("#field_ngaythinghiem").val("");
    $("#field_macbetong").val("");
  }
});



