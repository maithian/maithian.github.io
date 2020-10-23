// Module 1 tính toán cường độ chịu nén của bê tông
  // Module 1 các biến đầu vào
  var p1 = undefined;
  var p2 = undefined;
  var p3 = undefined;
  var n1 = [];
  var n2 = [];
  var n3 = [];
  var n4 = [];
  var n5 = [];
  var p = undefined;
  var dientich = undefined;
  var anpha = undefined;
  var export_row = [];
  var exported_row = [];
  var export_row_khoan = [];
  var export_row_sung_1 = [];
  var export_row_sung_2 = [];
  var export_row_mac = [];
$(document).ready(function () {
  // Module 1 button Tính toán
  $("#btn__tinhtoan").click(function () {
    var count = $('#table_ketqua tr').length;
    console.log("count = ", count);
    if (count == 2) {
      n1 = [];
      n2 = [];
      n3 = [];
      n4 = [];
      n5 = [];
    }
    p1 = parseFloat($("#txt__p1").val());
    p2 = parseFloat($("#txt__p2").val());
    p3 = parseFloat($("#txt__p3").val());
    rtk = parseFloat($("#field_macthietke").val());
    dientich = parseFloat($("#txt__dientich").val());
    anpha = parseFloat($("#txt__anpha").val());
    kyhieumau = $("#field_kyhieumau").val();
    ngaythinghiem = $("#field_ngaythinghiem").val();

    console.log("p1 :", p1);
    console.log("p2 :", p2);
    console.log("p3 :", p3);
    console.log("diện tích :", dientich);
    console.log("hệ số quy đổi :", anpha);
    console.log("mác thiết kế :", rtk); 
    r1 = parseFloat(R1(p1, anpha, dientich));
    r2 = parseFloat(R2(p2, anpha, dientich));
    r3 = parseFloat(R3(p3, anpha, dientich));
    console.log("r1 :", r1);
    console.log("r2 :", r2);
    console.log("r3 :", r3);
    rtb = Rtb(r1, r2, r3);
    ok = rtb > rtk ? "Đạt" : "Không Đạt";

    var tr = `<tr>
        <td rowspan="3">${kyhieumau}</td>
        <td rowspan="3" colspan="3">${ngaythinghiem}</td>
        <td rowspan="3" colspan="3">${dientich}</td>
        <td colspan="3">${p1}</td>
        <td colspan="3">${r1}</td>
        <td rowspan="3" colspan="2">${rtb}</td>
        <td rowspan="3" colspan="2">${ok}</td>
      </tr>
      <tr>
        <td colspan="3">${p2}</td>
        <td colspan="3">${r2}</td>
      </tr>
      <tr>
        <td colspan="3">${p3}</td>
        <td colspan="3">${r3}</td>
      </tr>`;

    $("#table_ketqua").append(tr);
    var tr_export = `<tr>
      <td rowspan="3"style="width: 13.1395%;">${kyhieumau}</td>
      <td rowspan="3" style="width: 19.0698%;">${ngaythinghiem}</td>
      <td rowspan="3" style="width: 12.5581%;">${dientich}</td>
      <td style="width: 12.4419%;">${p1}</td>
      <td style="width: 12.5000%;">${r1}</td>
      <td rowspan="3" style="width: 12.5000%;">${rtb}</td>
      <td rowspan="3" style="width: 12.5000%;">${ok}</td>
    </tr>
    <tr>
      <td style="width: 12.5000%;">${p2}</td>
      <td style="width: 12.5000%;">${r2}</td>
    </tr>
    <tr>
      <td style="width: 12.5000%;">${p3}</td>
      <td style="width: 12.5000%;">${r3}</td>
    </tr>`;
    export_row.push(tr_export);
    $("#rhttb_td").attr("rowspan", export_row_khoan.length + 1);
    $("#rhttb_td").html(rhttb);
    $("#kq_td").attr("rowspan", export_row_khoan.length + 1);
  });
  // Module 1 button Export
  $("#btn__export").click(function () {
    const field_coquanyeucau = $("#field_coquanyeucau").val();
    const field_duan = $("#field_duan").val();
    const field_hangmuc = $("#field_hangmuc").val();
    const field_diadiemxaydung = $("#field_diadiemxaydung").val();
    const field_coquancapmau = $("#field_coquancapmau").val();
    const field_kyhieumau = $("#field_kyhieumau").val();
    const field_ngayduc = $("#field_ngayduc").val();
    const field_kichthuoc = $("#field_kichthuoc").val();
    const field_soto = $("#field_soto").val();
    const field_ngaythinghiem = $("#field_ngaythinghiem").val();
    const field_macbetong = $("#field_macbetong").val();
    const field_macthietke = $("#field_macthietke").val();
    $("#table_export tr:gt(1)").remove();
    export_row.forEach((row) => {
      $("#table_export").append(row);
    });

    $("#tenCoQuan").text(field_coquanyeucau);
    $("#tenDuAn").text(field_duan);
    $("#tenHangMuc").text(field_hangmuc);
    $("#diaDiem").text(field_diadiemxaydung);
    $("#donViCapMau").text(field_coquancapmau);
    $("#kichThuocMau").text(field_kyhieumau);
    $("#ngayThiNghiem").text(field_ngaythinghiem);
    $("#macThietKe").text(field_macthietke);

    $("#chiunen_bt_page_1").addClass("collapse");
    $("#chiunen_bt_page_2").addClass("collapse");
    $("#chiunen_bt_page_3").addClass("collapse");
    $("#chiunen_bt_export").removeClass("collapse");
    return;
  });
  // Module 1 button In Ấn
  $("#btn__print").click(function () {
    var divToPrint = document.getElementById("main_report");
    var newWin = window.open("", "Print-Report");
    newWin.document.open();
    newWin.document.write(
      '<html><head><link rel="stylesheet" href="css/style.css"><link rel="stylesheet" href="css/bootstrap.min.css"></head><body onload="window.print()">' +
      divToPrint.innerHTML +
      "</body></html>"
    );
    newWin.document.close();
    setTimeout(function () {
      newWin.close();
    }, 10);
  });
  // Module 1 button quay lại của trang xuất kết quả
  $("#btn__print_back").click(function () {
    $("#main_report").empty();
    $("#main_report").append(createReport());
    $("#chiunen_bt_page_1").removeClass("collapse");
    $("#chiunen_bt_page_2").addClass("collapse");
    $("#chiunen_bt_page_3").addClass("collapse");
    $("#chiunen_bt_export").addClass("collapse");
  });
  //Function tính toán Module 1
  function Rtb(r1, r2, r3) {
    if ((r2 - r1) / r2 <= 0.15 || (r3 - r2) / r2 <= 0.15) {
      total = r1 + r2 + r3;
      console.log("total :", total);
      console.log("Rtb :", total / 3);
      return ((r1 + r2 + r3) / 3).toFixed(2);
    } else {
      return r2;
    }
  }
  function R1(p1, anpha, dientich) {
    return (anpha * (p1 / dientich)).toFixed(2);
  }
  function R2(p2, anpha, dientich) {
    return (anpha * (p2 / dientich)).toFixed(2);
  }
  function R3(p3, anpha, dientich) {
    return (anpha * (p3 / dientich)).toFixed(2);
  }
});

//Module 2 tính toán cường độ mẫu bê tông khoan trên công trường
  //Function tính toán Module 2 gồm có dữ liệu đầu vào, button tính toán, button thêm
  function HS2(dt1, a1, hmk, dmk) {
    return (1 + 1.5 * ((dt1 * a1) / (hmk * dmk))).toFixed(2);
  }
  function HS3(dt1, a1, hmk, dmk, dt2, a2) {
    return (1 + 1.5 * ((dt1 * a1 + dt2 * a2) / (hmk * dmk))).toFixed(2);
  }
  
  $(document).ready(function () {
    var dt1 = [];
    var a1 = [];
    var dt2 = [];
    var a2 = [];
    var hmk = [];
    var dmk = [];
    var p = [];
    var f = [];
    var d = [];
    var k = [];
    var hs2 = [];
    var hs3 = [];
    var rmk = [];
    var rht = [];
    var mtk = 0;
    var mtb = 0;
    var r_yc = 0;
    rhttb = 0;
    
    //Module 2 button tính toán
    $("#btn__tinh").click(function () {
      var count = $('#kqua_2 tr').length;
      console.log("count = ", count);
      if (count == 2) {
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
      }
      mtk = parseFloat($("#cbb_mac_tk").val());
      mbt = mtk / 10;
      r_yc = mbt * 0.0778;
      dt1.push(parseFloat($("#txt__dt1").val()));
      a1.push(parseFloat($("#txt__a1").val()));
      dt2.push(parseFloat($("#txt__dt2").val()));
      a2.push(parseFloat($("#txt__a2").val()));
      hmk.push(parseFloat($("#txt__H").val()));
      dmk.push(parseFloat($("#txt__D").val()));
      //p = [];
      p.push(parseFloat($("#txt__p").val()));
      //f = [];
      f.push(parseFloat($("#txt__f").val()));
      //d = [];
      d.push(parseFloat($("#txt__he_so_phuong_khoan").val()));
      //k = [];
      k.push(parseFloat($("#txt__he_so_chuyen_doi").val()));
      console.log(dt1, a1, hmk, dmk);
      var idx = dt1.length - 1;
      hs2.push(HS2(dt1[idx], a1[idx], hmk[idx], dmk[idx]));
      hs3.push(HS3(dt1[idx], a1[idx], hmk[idx], dmk[idx], dt2[idx], a2[idx]));
      rmk.push(Rmk(p[idx], f[idx]));
      rht.push(Rht(k[idx], d[idx], dmk[idx], rmk[idx], hmk[idx]));
      rhttb = Rhttb(rht);
      if (check_result(rhttb, rht, r_yc)) {
        result = "ĐẠT YÊU CẦU";
      } else {
        result = "KHÔNG ĐẠT YÊU CẦU";
      }
      console.log("rhttb = ", rhttb);

      console.log("dt1", dt1);
      console.log("hs2", hs2);
      console.log("hs3", hs3);
      if (export_row_khoan.length === 0) {
        var tr = `<tr>
          <td>${idx + 1}</td>
          <td>${$("#txt__cau_kien_kiem_tra").val()}</td>
          <td>${$("#cbb_phuong_khoan").val()}</td>
          <td>${f[idx]}</td>
          <td>${p[idx]}</td>
          <td>${rmk[idx]}</td>
          <td>${d[idx]}</td>
          <td>${k[idx]}</td>
          <td>${rht[idx]}</td>
          <td id="rhttb_td">${rhttb}</td>
          <td id="kq_td">${result}</td>
        </tr>
        `;
        var tr_export = `<tr>
          <td>${idx + 1}</td>
          <td>${$("#txt__cau_kien_kiem_tra").val()}</td>
          <td>${$("#cbb_phuong_khoan").val()}</td>
          <td>${f[idx]}</td>
          <td>${p[idx]}</td>
          <td>${rmk[idx]}</td>
          <td>${d[idx]}</td>
          <td>${k[idx]}</td>
          <td>${rht[idx]}</td>
          <td id="rhttb_td_export">${rhttb}</td>
          <td id="kq_td_export">${result}</td>
        </tr>
        `;
      } else {
        var tr = `<tr>
          <td>${idx + 1}</td>
          <td>${$("#txt__cau_kien_kiem_tra").val()}</td>
          <td>${$("#cbb_phuong_khoan").val()}</td>
          <td>${f[idx]}</td>
          <td>${p[idx]}</td>
          <td>${rmk[idx]}</td>
          <td>${d[idx]}</td>
          <td>${k[idx]}</td>
          <td>${rht[idx]}</td>
        </tr>
        `;
        var tr_export = `<tr>
          <td>${idx + 1}</td>
          <td>${$("#txt__cau_kien_kiem_tra").val()}</td>
          <td>${$("#cbb_phuong_khoan").val()}</td>
          <td>${f[idx]}</td>
          <td>${p[idx]}</td>
          <td>${rmk[idx]}</td>
          <td>${d[idx]}</td>
          <td>${k[idx]}</td>
          <td>${rht[idx]}</td>
        </tr>
        `;
      }

      $("#kqua_2").append(tr);
      $("#rhttb_td").attr("rowspan", export_row_khoan.length + 1);
      $("#rhttb_td").html(rhttb);
      $("#kq_td").attr("rowspan", export_row_khoan.length + 1);
      $("#kq_td").html(result);

      export_row_khoan.push(tr_export);
      function HS2(dt1, a1, hmk, dmk) {
        console.log("HS2", dt1, a1, hmk, dmk);
        return (1 + 1.5 * ((dt1 * a1) / (hmk * dmk))).toFixed(2);
      }
      function HS3(dt1, a1, hmk, dmk, dt2, a2) {
        return (1 + 1.5 * ((dt1 * a1 + dt2 * a2) / (hmk * dmk))).toFixed(2);
      }
      function Rmk(p, f) {
        return (p / f).toFixed(2);
      }
      function Rht(k, d, dmk, rmk, hmk) {
        return (k * rmk * (d / (1.5 + dmk / hmk))).toFixed(2);
      }
      function Rhttb(rht) {
        rhttb = 0;
        for (var i = 0; i < rht.length; i++) {
          rhttb += parseFloat(rht[i]);
        }
        console.log("function rhttb", rht.length, rhttb);
        result = (rhttb / rht.length).toFixed(2);
        console.log("function rhttb", rht.length, result);
        return result;
      }
      function check_result(rhttb, rht, r_yc) {
        min_rht = 100000;
        for (var i = 0; i < rht.length; i++) {
          if (rht[i] < min_rht) {
            min_rht = rht[i];
          }
        }
        if (rhttb >= 0.9 * r_yc && min_rht >= 0.75 * r_yc) {
          return true;
        } else {
          return false;
        }
      }
    });

    //Module 2 button thêm
    $("btn_themmoi").click(function () {
      rhttb = (rhttb * (rht.length - 1)) / rht.length;
    });
  });
  //Module 2 button export
  $("#btn__export__khoan").click(function () {
    const field_coquanyeucau_khoan = $("#field_coquanyeucau_khoan").val();
    const field_duan_khoan = $("#field_duan_khoan").val();
    const field_hangmuc_khoan = $("#field_hangmuc_khoan").val();
    const field_diadiemxaydung_khoan = $("#field_diadiemxaydung_khoan").val();
    const field_coquancapmau = $("#field_coquancapmau").val();
    const field_kyhieumau = $("#field_kyhieumau").val();
    const field_ngayduc = $("#field_ngayduc").val();
    const field_kichthuoc = $("#field_kichthuoc").val();
    const field_soto = $("#field_soto").val();
    const field_ngaylayloi_khoan = $("#field_ngaylayloi_khoan").val();
    const field__ngaylayloi_khoan = $("#field__ngaylayloi_khoan").val();
    const field__ngayepmau_khoan = $("#field__ngayepmau_khoan").val();
    const field_macbetong = $("#field_macbetong").val();
    const field_macthietke_khoan = $("#cbb_mac_tk").val();
    $("#table_export_khoan tr:gt(1)").remove();
    export_row_khoan.forEach((row) => {
      $("#table_export_khoan").append(row);
    });

    $("#rhttb_td_export").attr("rowspan", export_row_khoan.length + 1);
    $("#kq_td_export").attr("rowspan", export_row_khoan.length + 1);

    $("#tenCoQuan_khoan").text(field_coquanyeucau_khoan);
    $("#tenDuAn_khoan").text(field_duan_khoan);
    $("#tenHangMuc_khoan").text(field_hangmuc_khoan);
    $("#diaDiem_khoan").text(field_diadiemxaydung_khoan);
    $("#ngayThiNghiem_khoan").text(field__ngayepmau_khoan);
    $("#ngayLayLoi_khoan").text(field__ngaylayloi_khoan);
    $("#ngayEpMau_khoan").text(field__ngayepmau_khoan);
    $("#macThietKe_khoan").text(field_macthietke_khoan);

    $("#mau_bt_khoan_page_1").addClass("collapse");
    $("#mau_bt_khoan_page_2").addClass("collapse");
    $("#mau_bt_khoan_page_3").addClass("collapse");
    $("#bt_khoan_export").removeClass("collapse");
    return;
  });
  // Module 2 button in ấn
  $("#btn__print_khoan").click(function () {
    var divToPrint = document.getElementById("main_report_khoan");
    var newWin = window.open("", "Print-Report");
    newWin.document.open();
    newWin.document.write(
      '<html><head><link rel="stylesheet" href="css/style.css"><link rel="stylesheet" href="css/bootstrap.min.css"></head><body onload="window.print()">' +
      divToPrint.innerHTML +
      "</body></html>"
    );
    newWin.document.close();
    setTimeout(function () {
      newWin.close();
    }, 10);
  });
  // Module 2 button quay lại của trang xuất kết quả
  $("#btn__print_back_khoan").click(function () {
    $("#main_report").empty();
    $("#main_report").append(createReport());
    $("#mau_bt_khoan_page_1").removeClass("collapse");
    $("#mau_bt_khoan_page_2").addClass("collapse");
    $("#mau_bt_khoan_page_3").addClass("collapse");
    $("#bt_khoan_export").addClass("collapse");
  });
//Module 3 thí nghiệm súng bật nảy kết hợp siêu âm bê tông
  //Bảng tra Ro
  var ro_table = [
    [0, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    [3500, 0, 0, 0, 0, 0, 0, 10, 10.6, 11.0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3550, 0, 0, 0, 0, 0, 10.2, 10.7, 11.2, 11.7, 12.2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3600, 0, 0, 0, 0, 10.3, 10.8, 11.4, 12, 12.6, 13.2, 0, 0, 0, 0, 0, 0, 0, 0],
    [
      3650,
      0,
      0,
      10,
      10.5,
      11,
      11.6,
      12.2,
      12.8,
      13.4,
      14.1,
      14.7,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      3700,
      0,
      10.1,
      10.7,
      11.2,
      11.7,
      12.4,
      13,
      13.6,
      14.3,
      15,
      15.7,
      16.3,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      3750,
      0,
      10.8,
      11.3,
      12.1,
      12.6,
      13.2,
      13.8,
      14.6,
      15.2,
      16,
      16.7,
      17.4,
      18.3,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      3800,
      10.8,
      11.4,
      12,
      12.7,
      13.3,
      14,
      14.7,
      15.5,
      16.2,
      17,
      17.8,
      18.6,
      19.4,
      20.2,
      0,
      0,
      0,
      0,
    ],
    [
      3850,
      11.8,
      12.2,
      12.8,
      13.5,
      14.2,
      15,
      15.7,
      16.5,
      17.2,
      18,
      18.9,
      19.8,
      20.6,
      21.4,
      0,
      0,
      0,
      0,
    ],
    [
      3900,
      12.2,
      13,
      13.7,
      14.3,
      14.9,
      15.8,
      16.7,
      17.5,
      18.4,
      19.2,
      20,
      20.9,
      21.7,
      22.4,
      23.2,
      0,
      0,
      0,
    ],
    [
      3950,
      13,
      13.7,
      14.5,
      15.2,
      16,
      16.9,
      17.7,
      18.6,
      19.5,
      20.4,
      21.2,
      22,
      22.8,
      23.7,
      24.7,
      25.4,
      0,
      0,
    ],
    [
      4000,
      13.8,
      14.6,
      15.3,
      16.2,
      17,
      18,
      18.9,
      19.8,
      20.7,
      21.4,
      22.2,
      23,
      24,
      24.8,
      25.9,
      27.0,
      28.2,
      0,
    ],
    [
      4050,
      0,
      15.5,
      16.3,
      17.2,
      18.1,
      19.7,
      20.0,
      20.8,
      21.7,
      22.5,
      23.3,
      24.5,
      25.1,
      26.3,
      27.6,
      28.7,
      29.8,
      0,
    ],
    [
      4100,
      0,
      0,
      17.3,
      18.3,
      19.2,
      20.2,
      21.0,
      21.8,
      22.7,
      23.6,
      24.5,
      25.5,
      26.8,
      27,
      28,
      30.2,
      31.5,
      32.9,
    ],
    [
      4150,
      0,
      0,
      0,
      19.3,
      30.3,
      21.2,
      22,
      22.8,
      23.8,
      24.7,
      25.8,
      27,
      28.2,
      29.4,
      30.7,
      32.1,
      33.2,
      35,
    ],
    [
      4200,
      0,
      0,
      0,
      0,
      21.2,
      21.9,
      23,
      24,
      24.9,
      26,
      27.2,
      28.6,
      29.7,
      31,
      32.4,
      32.8,
      0,
      0,
    ],
    [
      4250,
      0,
      0,
      0,
      0,
      0,
      23.1,
      23.9,
      25.0,
      26.2,
      27.6,
      28.7,
      30.0,
      31.2,
      32.7,
      34.1,
      0,
      0,
      0,
    ],
    [
      4300,
      0,
      0,
      0,
      0,
      0,
      0,
      25.1,
      26.3,
      27.7,
      29,
      30.1,
      31.7,
      33.0,
      34.7,
      0,
      0,
      0,
      0,
    ],
    [
      4350,
      0,
      0,
      0,
      0,
      0,
      0,
      26.4,
      27.7,
      29.0,
      30.3,
      31.8,
      33.2,
      35.0,
      0,
      0,
      0,
      0,
      0,
    ],
    [4400, 0, 0, 0, 0, 0, 0, 0, 29.1, 30.5, 32.0, 33.3, 35.2, 0, 0, 0, 0, 0, 0],
    [4450, 0, 0, 0, 0, 0, 0, 0, 0, 32.0, 33.6, 35.3, 0, 0, 0, 0, 0, 0, 0],
  ];
  //Bảng tra t anpha
  var t_alpha_table = [
    0,
    0,
    2.92,
    2.35,
    2.13,
    2.01,
    1.94,
    1.89,
    1.86,
    1.83,
    1.81,
    1.8,
    1.78,
    1.77,
    1.76,
    1.75,
    0,
    0,
    0,
    0,
    1.73,
    0,
    0,
    0,
    0,
    1.71,
    0,
    0,
    0,
    0,
    1.7,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1.68,
  ];
  //Module 3 nội suy Ro
  function find_R0(ntb, vtb) {
    n_start = 0;
    n_end = 0;
    idx_n_start = 0;
    idx_n_end = 0;
    v_start = 0;
    v_end = 0;
    idx_v_start = 0;
    idx_v_end = 0;
    for (var i = 0; i < 20; i++) {
      if (i == 0) {
        for (var j = 0; j < 18; j++) {
          if (ro_table[i][j] <= ntb && ro_table[i][j + 1] >= ntb) {
            n_start = ro_table[i][j];
            n_end = ro_table[i][j + 1];
            idx_n_start = j;
            idx_n_end = j + 1;
          }
        }
      }
      if (ro_table[i][0] <= vtb && ro_table[i + 1][0] >= vtb) {
        v_start = ro_table[i][0];
        v_end = ro_table[i + 1][0];
        idx_v_start = i;
        idx_v_end = i + 1;
      }
    }
    console.log("n_start", n_start);
    console.log("n_end", n_end);
    console.log("idx_n_start", idx_n_start);
    console.log("idx_n_end", idx_n_end);
    console.log("v_start", v_start);
    console.log("v_end", v_end);
    console.log("idx_v_start", idx_v_start);
    console.log("idx_v_end", idx_v_end);

    if (
      n_start == 0 ||
      n_end == 0 ||
      idx_n_start == 0 ||
      idx_n_end == 0 ||
      v_start == 0 ||
      v_end == 0 ||
      idx_v_start == 0 ||
      idx_v_end == 0
    ) {
      return 0;
    }

    n_interpolate_1 =
      ro_table[idx_v_start][idx_n_start] +
      ((ro_table[idx_v_start][idx_n_end] - ro_table[idx_v_start][idx_n_start]) *
        (ntb - n_start)) /
      (n_end - n_start);
    console.log("n_interpolate_1", n_interpolate_1);
    n_interpolate_2 =
      ro_table[idx_v_end][idx_n_start] +
      ((ro_table[idx_v_end][idx_n_end] - ro_table[idx_v_end][idx_n_start]) *
        (ntb - n_start)) /
      (n_end - n_start);
    console.log("n_interpolate_2", n_interpolate_2);
    r_0 =
      (n_interpolate_1 +
        ((n_interpolate_2 - n_interpolate_1) * (vtb - v_start)) / (v_end - v_start)).toFixed(2);
    console.log("r_0", r_0);
    return r_0;
  }
  //Module 3 nội suy t anpha
  function get_t_alpha(n) {
    if (n == 0) {
      return 0;
    }
    t_alpha = t_alpha_table[n];
    zones_start = 0;
    zones_end = 0;
    t_alpha_start = 0;
    t_alpha_end = 0;
    if (t_alpha == 0) {
      for (var i = 0; i < t_alpha_table.length; i++) {
        if (t_alpha_table[i] != 0 && i < n) {
          zones_start = i;
        }
        if (t_alpha_table[i] != 0 && i > n && zones_end == 0) {
          zones_end = i;
        }
      }
      t_alpha_start = t_alpha_table[zones_start];
      t_alpha_end = t_alpha_table[zones_end];
      t_alpha =
        t_alpha_start +
        ((t_alpha_end - t_alpha_start) * (n - zones_start)) /
        (zones_end - zones_start);
      return t_alpha;
    } else {
      return t_alpha_table[n];
    }
  }
  //Module 3 dữ liệu đầu vào
  var N1 = [];
  var N2 = [];
  var N3 = [];
  var N4 = [];
  var N5 = [];
  var V1 = [];
  var V2 = [];
  var C0 = [];
  var C1 = [];
  var C2 = [];
  var C3 = [];
  var C4 = [];
  var R0 = [];
  var NTB = [];
  var VTB = [];
  var RHTS = [];
  var RHTTBS = [];
  var VHT = 0;
  var RHT = 0;
  var T_ALPHA = 0;
  var RYC = 1;
  var RESULT = "Không đạt";
  //Module 3 button tính toán
  $("#btn__tinhtoan_sung").click(function () {
    var count = $('#table_bang1_sung tr').length;
    console.log("count = ", count);
    if (count == 2) {
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
    }
    N1.push(parseFloat($("#txt_n1").val()));
    N2.push(parseFloat($("#txt_n2").val()));
    N3.push(parseFloat($("#txt_n3").val()));
    N4.push(parseFloat($("#txt_n4").val()));
    N5.push(parseFloat($("#txt_n5").val()));
    V1.push(parseFloat($("#txt_v1").val()));
    V2.push(parseFloat($("#txt_v2").val()));
    console.log(N1);
    C1.push(parseFloat($("#cbb_c1").val()));
    C2.push(parseFloat($("#cbb_c2").val()));
    C3.push(parseFloat($("#cbb_c3").val()));
    C4.push(parseFloat($("#cbb_c4").val()));
    RYC = parseFloat($("#txt_ryc").val());

    var idex = N1.length - 1;
    T_ALPHA = get_t_alpha(N1.length);
    Ntb = Ntb(N1[idex], N2[idex], N3[idex], N4[idex], N5[idex]);
    Vtb = Vtb(V1[idex], V2[idex]);
    r_0 = find_R0(Ntb, Vtb);
    NTB.push(Ntb);
    VTB.push(Vtb);
    R0.push(r_0);
    C0.push(Cal_C0(C1[idex], C2[idex], C3[idex], C4[idex]));
    RHTS.push(Rhts(C0[idex], R0[idex]));
    RHTTBS = Rhttbs(RHTS);
    VHT = Cal_VHT(RHTS, RHTTBS);
    RHT = Cal_RHT(VHT, T_ALPHA, RHTTBS);
    if (RHT / 0.9 >= RYC) {
      RESULT = "ĐẠT YÊU CẦU";
    } else {
      RESULT = "KHÔNG ĐẠT YÊU CẦU";
    }
    console.log("RHTTBS = ", RHTTBS);
    if (export_row_sung_1.length == 0) {
      var tr = `
      <tr>
        <td>${$("#txt_tang").val()}</td>
        <td>${$("#txt_tencaukiensung").val()}</td>
        <td>${$("#txt_vitri").val()}</td>
        <td>${N1[idex]}</td>
        <td>${N2[idex]}</td>
        <td>${N3[idex]}</td>
        <td>${N4[idex]}</td>
        <td>${N5[idex]}</td>
        <td>${NTB[idex]}</td>
        <td>${V1[idex]}</td>
        <td>${V2[idex]}</td>
        <td>${VTB[idex]}</td>
        <td>${RHTS[idex]}</td>
        <td id="rhttbs_td">${RHTTBS}</td> 
        </tr>`;
      var tr_export = `
      <tr>
        <td>${$("#txt_tang").val()}</td>
        <td>${$("#txt_tencaukiensung").val()}</td>
        <td>${$("#txt_vitri").val()}</td>
        <td>${N1[idex]}</td>
        <td>${N2[idex]}</td>
        <td>${N3[idex]}</td>
        <td>${N4[idex]}</td>
        <td>${N5[idex]}</td>
        <td>${NTB[idex]}</td>
        <td>${V1[idex]}</td>
        <td>${V2[idex]}</td>
        <td>${VTB[idex]}</td>
        <td>${RHTS[idex]}</td>
        <td id="rhttbs_td_sung">${RHTTBS}</td> 
        </tr>`;
    } else {
      var tr = `
      <tr>
        <td>${$("#txt_tang").val()}</td>
        <td>${$("#txt_tencaukiensung").val()}</td>
        <td>${$("#txt_vitri").val()}</td>
        <td>${N1[idex]}</td>
        <td>${N2[idex]}</td>
        <td>${N3[idex]}</td>
        <td>${N4[idex]}</td>
        <td>${N5[idex]}</td>
        <td>${NTB[idex]}</td>
        <td>${V1[idex]}</td>
        <td>${V2[idex]}</td>
        <td>${VTB[idex]}</td>
        <td>${RHTS[idex]}</td>
        </tr>`;
      var tr_export = `
      <tr>
        <td>${$("#txt_tang").val()}</td>
        <td>${$("#txt_tencaukiensung").val()}</td>
        <td>${$("#txt_vitri").val()}</td>
        <td>${N1[idex]}</td>
        <td>${N2[idex]}</td>
        <td>${N3[idex]}</td>
        <td>${N4[idex]}</td>
        <td>${N5[idex]}</td>
        <td>${NTB[idex]}</td>
        <td>${V1[idex]}</td>
        <td>${V2[idex]}</td>
        <td>${VTB[idex]}</td>
        <td>${RHTS[idex]}</td>
        </tr>`;
    }

    $("#table_bang1_sung").append(tr);
    $("#rhttbs_td").attr("rowspan", export_row_sung_1.length + 1);
    $("#rhttbs_td").html(RHTTBS);

    export_row_sung_1.push(tr_export);
    var tr = `
    <tr>
      <td>${$("#txt_tang").val()}</td>
      <td>${$("#cbb_loai_cau_kien").val()}</td>
      <td>${T_ALPHA}</td>
      <td>${RHTTBS}</td>
      <td>${VHT}</td>
      <td>${RHT.toFixed(2)}</td>
      <td>${(RHT / 0.9).toFixed(2)}</td>
      <td>${RYC}</td>
      <td>${RESULT}</td>
      </tr>`;
    var tr_export = `<tr>
      <th>Tầng</th>
        <th>Loại cấu kiện</th>
        <th>Tα </th>                                        
        <th>Rhttb</th>
        <th>vht</th>
        <th>Rht</th>
        <th>Rht/0.9</th>
        <th>Bê tông đạt cấp độ bền B</th>
        <th>Đạt yêu cầu</th>
        </tr>`;
    export_row_sung_2 = [tr];
    $("#table_bang2_sung").empty().append(tr_export).append(tr);

    function Cal_VHT(RHTS, RHTTBS) {
      n = RHTS.length;
      sum_diff_square = 0;
      for (var i = 0; i < n; i++) {
        sum_diff_square += Math.pow(parseFloat(RHTS[i]) - RHTTBS, 2);
      }
      result = parseFloat(Math.sqrt(sum_diff_square / n) / RHTTBS);
      return result.toFixed(2);
    }

    function Cal_RHT(VHT, T_ALPHA, RHTTBS) {
      return RHTTBS * (1 - T_ALPHA * VHT).toFixed(2);
    }

    function Cal_C0(c1, c2, c3, c4) {
      return (c1 * c2 * c3 * c4).toFixed(2);
    }

    function Rhts(r, c) {
      return (r * c).toFixed(2);
    }

    function Rhttbs(rhts) {
      rhttbs = 0;
      for (var i = 0; i < rhts.length; i++) {
        rhttbs += parseFloat(rhts[i]);
      }

      console.log("function rhttbs", rhts.length, rhttbs);
      result_sung = (rhttbs / rhts.length).toFixed(2);
      console.log("function rhttbs", rhts.length, result_sung);
      return result_sung;
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
  //Module 3 button thêm
  $("btn_themmoi_sung").click(function () {
    rhttbs = (rhttbs * (rhts.length - 1)) / rhts.length;
  });
  //Module 3 button export
  $("#btn__export__sung").click(function () {
    const field_coquanyeucau_sung = $("#field_coquanyeucau_sung").val();
    const field_duan_sung = $("#field_duan_sung").val();
    const field_hangmuc_sung = $("#field_hangmuc_sung").val();
    const field_diadiemxaydung_sung = $("#field_diadiemxaydung_sung").val();
    const field__ngaythinghiem_sung = $("#field__ngaythinghiem_sung").val();
    $("#table_export_sung_1 tr:gt(1)").remove();
    $("#table_export_sung_2 tr:gt(1)").remove();
    export_row_sung_1.forEach((row) => {
      $("#table_export_sung_1").append(row);
    });
    export_row_sung_2.forEach((row) => {
      $("#table_export_sung_2").append(row);
    });

    $("#rhttbs_td_sung").attr("rowspan", export_row_sung_1.length + 1);

    $("#tenCoQuan_sung").text(field_coquanyeucau_sung);
    $("#tenDuAn_sung").text(field_duan_sung);
    $("#tenHangMuc_sung").text(field_hangmuc_sung);
    $("#diaDiem_sung").text(field_diadiemxaydung_sung);
    $("#ngayThiNghiem_sung").text(field__ngaythinghiem_sung);

    $("#tn_sung_page_1").addClass("collapse");
    $("#tn_sung_page_2").addClass("collapse");
    $("#tn_sung_page_3").addClass("collapse");
    $("#tn_sung_export").removeClass("collapse");
    return;
  });
  // Module 3 button in ấn
  $("#btn__print_sung").click(function () {
    var divToPrint = document.getElementById("main_report_sung");
    var newWin = window.open("", "Print-Report");
    newWin.document.open();
    newWin.document.write(
      '<html><head><link rel="stylesheet" href="css/style.css"><link rel="stylesheet" href="css/bootstrap.min.css"></head><body onload="window.print()">' +
      divToPrint.innerHTML +
      "</body></html>"
    );
    newWin.document.close();
    setTimeout(function () {
      newWin.close();
    }, 10);
  });
  // Module 3 button quay lại của trang xuất kết quả
  $("#btn__print_back_sung").click(function () {
    $("#main_report").empty();
    $("#main_report").append(createReport());
    $("#tn_sung_page_1").removeClass("collapse");
    $("#tn_sung_page_2").addClass("collapse");
    $("#tn_sung_page_3").addClass("collapse");
    $("#tn_sung_export").addClass("collapse");
  });

//Module 4 thí nghiệm phân loại mac thép thanh
  //Dữ liệu đầu vào
  var PC = [];
  var PB = [];
  var RC = [];
  var RB = [];
  var LM = [];
  var L1 = [];
  var QM = [];
  var GTC = [];
  var GTT = [];
  var DELTA = [];
  var EPS = [];
  var MAC_THEP = [];
  var KY_HIEU_MAU = [];
  var DUONG_KINH = [];
  var SAI_LECH_CHO_PHEP = [];
  MAC_TRON = [['CB300-T', 300, 440, 16], ['CB240-T', 240, 380, 20]];
  MAC_VAN = [['CB500-V', 500, 650, 14], ['CB400-V', 400, 570, 14], ['CB300-V', 300, 450, 19]];
  //Module 4 button tính toán
  $("#btn__tinhtoan_thep").click(function () {
    var count = $('#table_ketqua_4 tr').length;
    console.log("count = ", count);
    if (count == 1) {
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
      KY_HIEU_MAU = [];
      DUONG_KINH = [];
      SAI_LECH_CHO_PHEP = [];
    }
    kyhieumau = $("#cbb_loai_thep").val();
    KY_HIEU_MAU.push(kyhieumau);
    DUONG_KINH.push($("#cbb_duong_kinh").val());
    SAI_LECH_CHO_PHEP.push(sai_lech_cho_phep);
    qm = parseFloat($("#txt_Qm").val());
    lm = parseFloat($("#txt_Lm").val());
    l1 = parseFloat($("#txt_L1").val());
    gtc = parseFloat($("#txt_Gtc").val());
    PC.push(parseFloat($("#txt_Pc").val()));
    PB.push(parseFloat($("#txt_Pb").val()));
    RC.push(parseFloat($("#txt_Rc").val()));
    RB.push(parseFloat($("#txt_Rb").val()));
    LM.push(lm);
    L1.push(l1);
    QM.push(qm);
    GTC.push(gtc);
    gtt = (qm / lm).toFixed(2);
    console.log("gtt = ", gtt);
    console.log("gtc = ", gtc);
    GTT.push(gtt)
    delta = calculate_delta(gtt, gtc);
    DELTA.push(delta);
    var idex = PC.length - 1;
    l0 = 5.56 * (Math.sqrt(parseFloat($("#txt_dien_tich_thuc").val())))
    eps = calculate_epsilon(l0, l1);
    EPS.push(eps);
    loai_thep = $("#cbb_loai_thep").val();
    console.log(loai_thep)
    thep_type = 'tron';
    if (loai_thep.includes('vằn')) {
      thep_type = 'van';
    }
    macthep = define_mac(RC[idex], RB[idex], eps, thep_type);
    MAC_THEP.push(macthep)
    var tr = `
    <tr>
      <td>${idex + 1}</td>
      <td>${kyhieumau}</td>
      <td>${$("#cbb_duong_kinh").val()}</td>
      <td>${$("#txt_duong_kinh_thuc").val()}</td>
      <td>${$("#txt_dien_tich_thuc").val()}</td>
      <td>${PC[idex]}</td>
      <td>${RC[idex]}</td>
      <td>${PB[idex]}</td>
      <td>${RB[idex]}</td>
      <td>${EPS[idex]}</td>
      <td>${DELTA[idex]}</td>
      <td>${macthep}</td>
      </tr>`;
    var tr_export = `
    <tr>
      <td>${idex + 1}</td>
      <td>${kyhieumau}</td>
      <td>${$("#cbb_duong_kinh").val()}</td>
      <td>${$("#txt_duong_kinh_thuc").val()}</td>
      <td>${$("#txt_dien_tich_thuc").val()}</td>
      <td>${PC[idex]}</td>
      <td>${RC[idex]}</td>
      <td>${PB[idex]}</td>
      <td>${RB[idex]}</td>
      <td>${EPS[idex]}</td>
      <td>${DELTA[idex]}</td>
      <td>${macthep}</td>
      </tr>`;

    $("#table_ketqua_4").append(tr);

    export_row_mac.push(tr_export);
    
    function calculate_delta(gtt, gtc) {
      return (((gtt - gtc) / gtc) * 100).toFixed(2)
    }

    function define_mac(Rc, Rb, eps, thep_type) {
      if (thep_type == 'tron') {
        for (var i = 0; i < 2; i++) {
          item = MAC_TRON[i];
          if (item[1] <= Rc && item[2] <= Rb && item[3] <= eps) {
            return item[0];
          }
        }
      } else {
        for (var i = 0; i < 3; i++) {
          item = MAC_VAN[i];
          if (item[1] <= Rc && item[2] <= Rb && item[3] <= eps) {
            return item[0];
          }
        }
      }
      return "UNDEFINED";
    }

    function calculate_epsilon(L0, L1) {
      return ((((L1 / 10) - L0) / L0) * 100).toFixed(2)
    }
  });
  //Module 4 button export
  $("#btn__export__mac").click(function () {
    console.log("click btn__export__mac")
    const txt_ngay_TN_thep = $("#txt_ngay_TN_thep").val();
    const txt_so_mac = $("#txt_so_mac").val();
    const txt_coquanyeucau_mac = $("#txt_coquanyeucau_mac").val();
    const txt_cong_trinh_mac = $("#txt_cong_trinh_mac").val();
    const txt_yeu_cau_thi_nghiem_mac = $("#txt_yeu_cau_thi_nghiem_mac").val();
    const txt_nguoi_cap_mau_mac = $("#txt_nguoi_cap_mau_mac").val();
    console.log("txt_so_mac = ", txt_so_mac)
    console.log("txt_coquanyeucau_mac = ", txt_coquanyeucau_mac)
    $("#table_export_mauthep_1 tr:gt(0)").remove();
    $("#table_mauthep_ketluan").empty();
    // export_row_mac.forEach((row) => {
    //   $("#table_export_mauthep_1").append(row);
    //  $("#table_mauthep_ketluan").append(row)
    // });
    console.log(KY_HIEU_MAU)
    console.log(DUONG_KINH)
    console.log("sai_lech_cho_phep  = ", sai_lech_cho_phep)
    for (var  i = 0; i< export_row_mac.length; i++)  {
      $("#table_export_mauthep_1").append(export_row_mac[i]);
      var tr_ketluan = `
      <tr>
        <td>Loại ${KY_HIEU_MAU[i]} phi ${DUONG_KINH[i]} thí nghiệm kéo, uốn đạt tiêu chuẩn loại thép ${MAC_THEP[i]}</td>
        </tr>`;
  
      $("#table_mauthep_ketluan").append(tr_ketluan)
    }
    for (var  i = 0; i< export_row_mac.length; i++)  {
      result = 'đạt yêu cầu';
      if (Math.abs(DELTA[i]) > SAI_LECH_CHO_PHEP[i]) {
        result = 'không đạt yêu cầu';
      }
      var tr_ketluan_1 = `
      <tr>
        <td>Loại ${KY_HIEU_MAU[i]} phi ${DUONG_KINH[i]} có dung sai trọng lượng ${result}</td>
        </tr>`;
  
      $("#table_mauthep_ketluan").append(tr_ketluan_1)
    }


    $("#so_mauthep").text(txt_so_mac);
    $("#tenCoQuan_mauthep").text(txt_coquanyeucau_mac);
    $("#congtrinh_mauthep").text(txt_cong_trinh_mac);
    $("#yeucauthinghiem_mauthep").text(txt_yeu_cau_thi_nghiem_mac);
    $("#nguoicapmau_mauthep").text(txt_nguoi_cap_mau_mac);
    $("#ngayThiNghiem_mauthep").text(txt_ngay_TN_thep);

    $("#tn_mauthep_page_1").addClass("collapse");
    $("#tn_mauthep_page_2").addClass("collapse");
    $("#tn_mauthep_page_3").addClass("collapse");
    $("#tn_mauthep_export").removeClass("collapse");
    return;
  });
  //Module 4 button in ấn
  $("#btn__print_mauthep").click(function () {
    var divToPrint = document.getElementById("main_report_mauthep");
    var newWin = window.open("", "Print-Report");
    newWin.document.open();
    newWin.document.write(
      '<html><head><link rel="stylesheet" href="css/style.css"><link rel="stylesheet" href="css/bootstrap.min.css"></head><body onload="window.print()">' +
      divToPrint.innerHTML +
      "</body></html>"
    );
    newWin.document.close();
    setTimeout(function () {
      newWin.close();
    }, 10);
  });
  //Module 4 button quay lại của trang xuất kết quả
  $("#btn__print_back_mauthep").click(function () {
    $("#main_report").empty();
    $("#main_report").append(createReport());
    $("#tn_mauthep_page_1").removeClass("collapse");
    $("#tn_mauthep_page_2").addClass("collapse");
    $("#tn_mauthep_page_3").addClass("collapse");
    $("#tn_mauthep_export").addClass("collapse");
  });

// });
//Export
function createReport() {
  return `<table style="width: 100%;">
  <tbody>
      <tr>
          <td colspan="3" style="width: 99.8837%;">
              <p style="text-align: center;"><strong><span style="font-family: Arial,Helvetica,sans-serif;">VIỆN KỸ THUẬT C&Ocirc;NG TR&Igrave;NH X&Acirc;Y DỰNG, TRƯỜNG ĐẠI HỌC X&Acirc;Y DỰNG</span></strong></p>
              <p style="text-align: center;"><strong><span style="font-family: Arial,Helvetica,sans-serif;">PH&Ograve;NG TH&Iacute; NGHIỆM V&Agrave; KIỂM ĐỊNH C&Ocirc;NG TR&Igrave;NH LAS-XD.125</span></strong></p>
              <p style="text-align: center;"><em>Địa chỉ: Ph&ograve;ng 105 Nh&agrave; C3 Đại học B&aacute;ch Khoa H&agrave; Nội</em></p>
          </td>
      </tr>
      <tr>
          <td style="width: 19.8837%;">
              <div style="text-align: center;">Số: 00-00-A</div>
          </td>
          <td style="width: 62.093%;">
              <h3 style="text-align: center;font-size:4vw;font-weight: bold;">KẾT QUẢ TH&Iacute; NGHIỆM <br/>MẪU B&Ecirc; T&Ocirc;NG</h3>
          </td>
          <td style="width: 18.0233%; text-align: center;">
              <div style="text-align: center;">Ng&agrave;y th&iacute; nghiệm</div>
              <p id="ngayThiNghiem"></p>
          </td>
      </tr>
  </tbody>
</table>
<br><br/>
<table class="no-border" style="width: 100%;">
  <tbody>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">Cơ quan y&ecirc;u cầu:</td>
          <td style="width: 75.6977%; vertical-align: top;"><p id="tenCoQuan"></p></td>
      </tr>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">Dự &aacute;n:</td>
          <td style="width: 75.6977%; vertical-align: top;"><p id="tenDuAn"></p></td>
      </tr>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">Hạng mục:</td>
          <td style="width: 75.6977%; vertical-align: top;"><p id="tenHangMuc"></p></td>
      </tr>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">Địa điểm x&acirc;y dựng:</td>
          <td style="width: 75.6977%; vertical-align: top;"><p id="diaDiem"></p></td>
      </tr>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">Đơn vị cấp mẫu:</td>
          <td style="width: 75.6977%; vertical-align: top;"><p id="donViCapMau"></p></td>
      </tr>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">K&iacute;ch thước mẫu:</td>
          <td style="width: 75.6977%; vertical-align: top;"><p id="kichThuocMau"></p></td>
      </tr>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">M&aacute;c thiết kế :</td>
          <td style="width: 75.6977%; vertical-align: top;"><p id="macThietKe"></p></td>
      </tr>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">Phương ph&aacute;p TN:</td>
          <td style="width: 75.6977%; text-align: left; vertical-align: top;">
              Theo TCVN 3118:1993 - Phương ph&aacute;p đ&aacute;nh gi&aacute;: Theo TCVN 6025:1995
          </td>
      </tr>
      <tr>
          <td style="width: 24.186%; vertical-align: top;">Thiết bị TN:</td>
          <td style="width: 75.6977%; vertical-align: top;">
              M&aacute;y n&eacute;n uống DHR2000 - Unit Test - Malaysia
          </td>
      </tr>
  </tbody>
</table>
<br/>
<table  id="table_export" tyle="width: 100%;">
  <tbody>
      <tr>
          <td style="width: 13.1395%;">
              <div style="text-align: center;"><strong>K&yacute; hiệu mẫu</strong></div>
          </td>
          <td style="width: 19.0698%;">
              <div style="text-align: center;"><strong>Ng&agrave;y th&iacute; nghiệm</strong></div>
          </td>
          <td  style="width: 12.5581%;">
              <div style="text-align: center;"><strong>Tuổi BT</strong></div>
          </td>
          <td style="width: 12.4419%;">
              <div style="text-align: center;"><strong>Lực n&eacute;n giới hạn (daN)</strong></div>
          </td>
          <td style="width: 12.5000%;">
              <div style="text-align: center;"><strong>Rn</strong></div>
          </td>
          <td style="width: 11.9767%;">
              <div style="text-align: center;"><strong>Rtb</strong></div>
          </td>
          <td style="width: 12.7907%;">
              <div style="text-align: center;"><strong>Đạt so với m&aacute;c TK</strong></div>
          </td>
      </tr>
  </tbody>
</table>
<br/>
<table class="no-border" style="width: 100%;">
  <tbody>
      <tr>
          <td style="width: 25%; text-align: center;font-size:2.5vw;vertical-align: top;">TRƯỞNG PH&Ograve;NG TN&nbsp;</td>
          <td style="width: 25%; text-align: center;font-size:2.5vw;vertical-align: top;">NGƯỜI TH&Iacute; NGHIỆM</td>
          <td style="width: 25%; text-align: center;font-size:2.5vw;vertical-align: top;">NGƯỜI KIỂM TRA</td>
          <td style="width: 25%; text-align: center;font-size:2.5vw;vertical-align: top;">VIỆN TRƯỞNG</td>
      </tr>
  </tbody>
</table>
<br/>
<br/>
<br/>`;
}