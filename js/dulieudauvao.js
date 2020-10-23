//combobox kích thước - diện tích - hệ số quy đổi module 1
$(document).ready(function () {
  if ($("#cbb_kich_thuoc").val() === "Mẫu lập phương: 100 x 100 x 100") {
    $("#txt__anpha").val("0.91");
    $("#txt__dientich").val("100");
  }
  $(".select__item").click(function () {
    if ($(this).text() === "Mẫu lập phương: 100 x 100 x 100") {
      $("#txt__anpha").val("0.91");
      $("#txt__dientich").val("100");
    } else if ($(this).text() === "Mẫu lập phương: 150 x 150 x 150") {
      $("#txt__anpha").val("1.0");
      $("#txt__dientich").val("225");
    } else if ($(this).text() === "Mẫu lập phương: 200 x 200 x 200") {
      $("#txt__anpha").val("1.05");
      $("#txt__dientich").val("400");
    } else if ($(this).text() === "Mẫu lập phương: 300 x 300 x 300") {
      $("#txt__anpha").val("1.10");
      $("#txt__dientich").val("900");
    } else if ($(this).text() === "Mẫu hình trụ: 71.4 x 143") {
      $("#txt__anpha").val("1.16");
      $("#txt__dientich").val("40");
    } else if ($(this).text() === "Mẫu hình trụ: 100 x 100") {
      $("#txt__anpha").val("1.20");
      $("#txt__dientich").val("78.5");
    } else if ($(this).text() === "Mẫu hình trụ: 200 x 400") {
      $("#txt__anpha").val("1.24");
      $("#txt__dientich").val("314");
    } else if ($(this).text() === "Mẫu hình trụ: 100 x 200") {
      $("#txt__anpha").val("1.16");
      $("#txt__dientich").val("78.5");
    }
  });
});
//combobox mác bê tông - mác thiết kế module 1
$(document).ready(function () {
  if ($("#cbb__select__steel").val() === "B15") {
    $("#field_macthietke").val("85");
  }
  $(".select__item").click(function () {
    if ($(this).text() === "B15") {
      $("#field_macthietke").val("85");
    } else if ($(this).text() === "B20") {
      $("#field_macthietke").val("115");
    } else if ($(this).text() === "B22.5") {
      $("#field_macthietke").val("130");
    } else if ($(this).text() === "B25") {
      $("#field_macthietke").val("145");
    } else if ($(this).text() === "B30") {
      $("#field_macthietke").val("170");
    } else if ($(this).text() === "B35") {
      $("#field_macthietke").val("192.5");
    } else if ($(this).text() === "B40") {
      $("#field_macthietke").val("215");
    } else if ($(this).text() === "B45") {
      $("#field_macthietke").val("250");
    }
  });
});
//combobox phương khoan - hệ số phương khoan module 2
$(document).ready(function () {
  if ($("#cbb_phuong_khoan").val() === "Vuông góc") {
    $("#txt__he_so_phuong_khoan").val("2.5");
  }
  $(".select__item").click(function () {
    if ($(this).text() === "Vuông góc") {
      $("#txt__he_so_phuong_khoan").val("2.5");
    } else if ($(this).text() === "Song song") {
      $("#txt__he_so_phuong_khoan").val("2.3");
    }
  });
});
//combobox hệ số cốt thép - hệ số chuyển đổi module 2
$(document).ready(function () {
  if ($("#cbb_he_so_cot_thep").val() === "0 cốt thép") {
    $("#txt__he_so_chuyen_doi").val("1");
  }
  $(".select__item").click(function () {
    dt1 = parseFloat($("#txt__dt1").val());
    a1 = parseFloat($("#txt__a1").val());
    dt2 = parseFloat($("#txt__dt2").val());
    a2 = parseFloat($("#txt__a2").val());
    hmk = parseFloat($("#txt__H").val());
    dmk = parseFloat($("#txt__D").val());
    hs2 = HS2(dt1, a1, hmk, dmk);
    hs3 = HS3(dt1, a1, hmk, dmk, dt2, a2);
    if ($(this).text() === "0 cốt thép") {
      $("#txt__he_so_chuyen_doi").val("1");
    } else if ($(this).text() === "1 thanh cốt thép") {
      $("#txt__he_so_chuyen_doi").val(hs2);
    } else if ($(this).text() === "2 thanh cốt thép") {
      $("#txt__he_so_chuyen_doi").val(hs3);
    }
  });
});
//textbox đường kính D - diện tích chịu lực module 2
$(document).ready(function () {
  calculate_f(parseFloat($("#txt__D").val()));
  $("#txt__D").on("keyup", function () {
    dmk = parseFloat($("#txt__D").val());
    calculate_f(dmk);
  });
  function calculate_f(dmk) {
    f = F(dmk);
    function F(dmk) {
      return ((3.14 * dmk * dmk) / 4).toFixed(2);
    }
    console.log("dmk", dmk);
    console.log("f", f);
    $("#txt__f").val(f);
  }
});
//combobox c1 module 3
$(document).ready(function () {
  if ($("#cbb_c1").val() === "PC30") {
    $("#cbb_c1").val("1.00");
  }
  $(".select__item").click(function () {
    if ($(this).text() === "PC30") {
      $("#cbb_c1").val("1.00");
    } else if ($(this).text() === "PC40") {
      $("#cbb_c1").val("1.04");
    }
  });
  // console.log("c1", c1)
});
//combobox c2 module 3
$(document).ready(function () {
  if ($("#cbb_c2").val() === "250") {
    $("#cbb_c2").val("0.88");
  }
  $(".select__item").click(function () {
    if ($(this).text() === "250") {
      $("#cbb_c2").val("0.88");
    } else if ($(this).text() === "300") {
      $("#cbb_c2").val("0.94");
    } else if ($(this).text() === "350") {
      $("#cbb_c2").val("1.00");
    } else if ($(this).text() === "400") {
      $("#cbb_c2").val("1.06");
    } else if ($(this).text() === "450") {
      $("#cbb_c").val("1.12");
    }
  });
});
//combobox c3 module 3
$(document).ready(function () {
  if ($("#cbb_c3").val() === "Đá dăm (vc<=4400)") {
    $("#cbb_c3").val("1.00");
  }
  $(".select__item").click(function () {
    if ($(this).text() === "Đá dăm (vc<=4400)") {
      $("#cbb_c3").val("1.00");
    } else if ($(this).text() === "Đá dăm (vc>=4400)") {
      $("#cbb_c3").val("1.00");
    } else if ($(this).text() === "Đá sỏi (vc<=4400)") {
      $("#cbb_c3").val("1.41");
    } else if ($(this).text() === "Đá sỏi (vc>=4400)") {
      $("#cbb_c3").val("1.38");
    }
  });
  // console.log("c3", c3)
});
//combobox c4 module 3
$(document).ready(function () {
  if ($("#cbb_c3").val() === "20") {
    $("#cbb_c4").val("1.03");
  }
  $(".select__item").click(function () {
    if ($(this).text() === "20") {
      $("#cbb_c4").val("1.03");
    } else if ($(this).text() === "40") {
      // $("#cbb_c4").val("1.00");
    } else if ($(this).text() === "70") {
      $("#cbb_c4").val("0.98");
    }
  });
});

//ntb, vtb module 3
$(document).ready(function () {
  console.log("get_t_alpha", get_t_alpha(35));
  calculate_ntb();
  calculate_vtb();
  // Tri so bat nay
  $("#txt_n1").on("keyup", calculate_ntb);
  $("#txt_n2").on("keyup", calculate_ntb);
  $("#txt_n3").on("keyup", calculate_ntb);
  $("#txt_n4").on("keyup", calculate_ntb);
  $("#txt_n5").on("keyup", calculate_ntb);

  // Ket qua sieu am
  $("#txt_v1").on("keyup", calculate_vtb);
  $("#txt_v2").on("keyup", calculate_vtb);

  function calculate_ntb() {
    n1 = parseFloat($("#txt_n1").val());
    n2 = parseFloat($("#txt_n2").val());
    n3 = parseFloat($("#txt_n3").val());
    n4 = parseFloat($("#txt_n4").val());
    n5 = parseFloat($("#txt_n5").val());
    ntb = Ntb(n1, n2, n3, n4, n5);
    $("#txt_ntb").val(ntb);
  }

  function calculate_vtb() {
    v1 = parseFloat($("#txt_v1").val());
    v2 = parseFloat($("#txt_v2").val());
    vtb = Vtb(v1, v2);
    $("#txt_vtb").val(vtb);
  }

  function Ntb(n1, n2, n3, n4, n5) {
    if (isNaN(n1)) {
      n1 = 0;
    }
    if (isNaN(n2)) {
      n2 = 0;
    }
    if (isNaN(n3)) {
      n3 = 0;
    }
    if (isNaN(n4)) {
      n4 = 0;
    }
    if (isNaN(n5)) {
      n5 = 0;
    }
    return ((n1 + n2 + n3 + n4 + n5) / 5).toFixed(2);
  }
  function Vtb(v1, v2) {
    if (isNaN(v1)) {
      v1 = 0;
    }
    if (isNaN(v2)) {
      v2 = 0;
    }
    return ((v1 + v2) / 2).toFixed(2);
  }
});
//combobox đường kính định danh - diện tích định danh module 
var sai_lech_cho_phep = 0;
$(document).ready(function () {
  if ($("#cbb_duong_kinh").val() === "6") {
    $("#txt_dien_tich_dinh_danh").val("28.3");
    $("#txt_Gtc").val("0.222");
    sai_lech_cho_phep = 8;
  }
  $(".select__item").click(function () {
    if ($(this).text() === "6") {
      $("#txt_dien_tich_dinh_danh").val("28.3");
      $("#txt_Gtc").val("0.222");
      sai_lech_cho_phep = 8;
    } else if ($(this).text() === "8") {
      $("#txt_dien_tich_dinh_danh").val("50.3");
      $("#txt_Gtc").val("0.395");
      sai_lech_cho_phep = 8;
    } else if ($(this).text() === "10") {
      $("#txt_dien_tich_dinh_danh").val("78.5");
      $("#txt_Gtc").val("0.617");
      sai_lech_cho_phep = 6;
    } else if ($(this).text() === "12") {
      $("#txt_dien_tich_dinh_danh").val("113");
      $("#txt_Gtc").val("0.888");
      sai_lech_cho_phep = 6;
    } else if ($(this).text() === "14") {
      $("#txt_dien_tich_dinh_danh").val("154");
      $("#txt_Gtc").val("1.21");
      sai_lech_cho_phep = 5;
    } else if ($(this).text() === "16") {
      $("#txt_dien_tich_dinh_danh").val("201");
      $("#txt_Gtc").val("1.58");
      sai_lech_cho_phep = 5;
    } else if ($(this).text() === "18") {
      $("#txt_dien_tich_dinh_danh").val("254.5");
      $("#txt_Gtc").val("2.00");
      sai_lech_cho_phep = 5;
    } else if ($(this).text() === "20") {
      $("#txt_dien_tich_dinh_danh").val("314");
      $("#txt_Gtc").val("2.47");
      sai_lech_cho_phep = 5;
    } else if ($(this).text() === "22") {
      $("#txt_dien_tich_dinh_danh").val("380.1");
      $("#txt_Gtc").val("2.98");
      sai_lech_cho_phep = 5;
    } else if ($(this).text() === "25") {
      $("#txt_dien_tich_dinh_danh").val("491");
      $("#txt_Gtc").val("3.85");
      sai_lech_cho_phep = 4;
    } else if ($(this).text() === "28") {
      $("#txt_dien_tich_dinh_danh").val("616");
      $("#txt_Gtc").val("4.84");
      sai_lech_cho_phep = 4;
    } else if ($(this).text() === "32") {
      $("#txt_dien_tich_dinh_danh").val("804");
      $("#txt_Gtc").val("6.31");
      sai_lech_cho_phep = 4;
    } else if ($(this).text() === "36") {
      $("#txt_dien_tich_dinh_danh").val("1017.9");
      $("#txt_Gtc").val("7.99");
      sai_lech_cho_phep = 4;
    } else if ($(this).text() === "40") {
      $("#txt_dien_tich_dinh_danh").val("1257");
      $("#txt_Gtc").val("9.86");
      sai_lech_cho_phep = 4;
    } else if ($(this).text() === "50") {
      $("#txt_dien_tich_dinh_danh").val("1964");
      $("#txt_Gtc").val("15.42");
      sai_lech_cho_phep = 4;
    }
  });
});
//textbox đường kính thực - diện tích thực module 4
$(document).ready(function () {
  calculate_ftt(parseFloat($("#txt_duong_kinh_thuc").val()));
  $("#txt_duong_kinh_thuc").on("keyup", function () {
    dkt = parseFloat($("#txt_duong_kinh_thuc").val());
    calculate_ftt(dkt);
  });
  function calculate_ftt(dkt) {
    ftt = Ftt(dkt);
    function Ftt(dkt) {
      return ((3.14 * dkt * dkt) / 4).toFixed(2);
    }
    console.log("dkt", dkt);
    console.log("ftt", ftt);
    $("#txt_dien_tich_thuc").val(ftt);
  }
});
//rc, rb module 4
$(document).ready(function () {
  calculate_rc();
  calculate_rb();
  $("#txt_Pc").on("keyup", calculate_rc);
  $("#txt_dien_tich_dinh_danh").on("keyup", calculate_rc);
  $("#txt_Pb").on("keyup", calculate_rb);
  $("#txt_dien_tich_dinh_danh").on("keyup", calculate_rb);

  function calculate_rc() {
    Pc = parseFloat($("#txt_Pc").val());
    An = parseFloat($("#txt_dien_tich_dinh_danh").val());
    rc = Rc(Pc, An);
    $("#txt_Rc").val(rc);
  }

  function calculate_rb() {
    An = parseFloat($("#txt_dien_tich_dinh_danh").val());
    Pb = parseFloat($("#txt_Pb").val());
    rb = Rb(Pb, An);
    $("#txt_Rb").val(rb);
  }

  function Rc(Pc, An) {
    if (isNaN(An)) {
      An = 0;
    }

    return (((Pc*100) / An)*10).toFixed(0);
  }
  function Rb(Pb, An) {
    if (isNaN(An)) {
      An = 0;
    }

    return (((Pb*100) / An)*10).toFixed(0);
  }
});
