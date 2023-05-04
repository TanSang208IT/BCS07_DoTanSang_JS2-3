// BÀI TẬP 1 
// INPUT 
/* Nhập số ngày đi làm ( số nguyên)*/
function tongTienLuong() {
var soNgay = document.getElementById("soNgay").value * 1;
console.log ("số ngày", soNgay)

/* XỬ LÝ 
Công thức tính: số ngày * 100000*/

var tienLuong = soNgay * 100000;
var quyDoi = tienLuong.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  });

  var theP = document.createElement("p");
  theP.innerHTML = quyDoi;
  theP.classList.add("active");
  theP.classList.remove("active");
  document.getElementById("tienLuong").appendChild(theP);
}
// OUTPUT 

document.querySelector(".container .btn-danger").onclick = tongTienLuong;


// BÀI TẬP 2 
/* INPUT 
Nhập 5 số tự nhiên */

function trungBinh () {

var so1 = document.getElementById("soTN1").value * 1;
console.log("số tự nhiên 1", so1)
var so2 = document.getElementById("soTN2").value * 1;
console.log("số tự nhiên 2", so2)
var so3 = document.getElementById("soTN3").value * 1;
console.log("số tự nhiên 3", so3)
var so4 = document.getElementById("soTN4").value * 1;
console.log("số tự nhiên 4", so4)
var so5 = document.getElementById("soTN5").value * 1;
console.log("số tự nhiên 5", so5)

/* xử lý thông tin
trung bình = tổng / 5 */

var average = (so1 + so2 + so3 + so4 + so5) / 5;

var theP2 = document.createElement("p");
theP2.innerHTML = average;
document.getElementById("trungBinh").appendChild(theP2);
}

// OUTPUT

document.querySelector(".TB").onclick = trungBinh;

// BÀI TẬP 3 
// INPUT 
/* Nhập số USD cân đổi ( số nguyên)*/
function thanhTien() {
    var soUSD = document.getElementById("soUSD").value * 1;
    console.log ("số USD", soUSD)
    
    /* XỬ LÝ 
    Công thức tính: số ngày * 23500*/
    
    var  tienVND = soUSD * 23500;
    var quyDoiTien = tienVND.toLocaleString("vn-VN", {
        style: "currency",
        currency: "VND",
      });
    
      var theP3 = document.createElement("p");
      theP3.innerHTML = quyDoiTien;
      theP3.classList.add("active");
      theP3.classList.remove("active");
      document.getElementById("thanhTien").appendChild(theP3);
    }
    // OUTPUT 
    
    document.querySelector(".doiTien").onclick = thanhTien;
    
    // BÀI TẬP 4 
    // INPUT 
    // Nhập chiều rộng + chiều dai ?
    function  tinhChuVi(){

      var chieuRong = document.getElementById("chieuRong").value * 1;
      console.log("chiều rộng",chieuRong)
      var chieuDai = document.getElementById("chieuDai").value * 1;
console.log("chiều dài", chieuDai)

// XỬ LÍ THÔNG TIN 
var chuVi = (chieuRong + chieuDai) * 2;
var dienTich = chieuDai * chieuRong;

var theP4 = document.createElement("p");
theP4.innerHTML = " chu vi " + chuVi;
theP4.classList.add("active");
theP4.classList.remove("active");
document.getElementById("chuViDienTich").appendChild(theP4);

var theP5 = document.createElement("p");
theP5.innerHTML = " diện tích " + dienTich;
theP5.classList.add("active");
theP5.classList.remove("active");
document.getElementById("chuViDienTich").appendChild(theP5);

    }

    // OUTPUT 

    document.querySelector(".tinhChuVi").onclick = tinhChuVi;

    function  tinhDienTich(){

      var chieuRong = document.getElementById("chieuRong").value * 1;
      console.log("chiều rộng",chieuRong)
      var chieuDai = document.getElementById("chieuDai").value * 1;
console.log("chiều dài", chieuDai)

// XỬ LÍ THÔNG TIN 
var dienTich = chieuDai * chieuRong;


var theP5 = document.createElement("p");
theP5.innerHTML = " diện tích " + dienTich;
theP5.classList.add("active");
theP5.classList.remove("active");
document.getElementById("chuViDienTich").appendChild(theP5);

    }

    // OUTPUT 

    document.querySelector(".tinhDienTich").onclick = tinhDienTich;

    // BÀI TẬP 5 
    // INPUT 
    // Lấy dữ liệu số nhập vào
function tongKySo(){


    var soNguyen = document.getElementById("kySo").value * 1;

    // XỬ LÝ THÔNG TIN 
    var soHangChuc = Math.floor(soNguyen / 10);
    console.log(soHangChuc);
    var soHangDonVi = Math.floor(soNguyen % 10);
console.log(soHangDonVi);

var tongToan = soHangChuc + soHangDonVi;

var theP6 = document.createElement("p");
theP6.innerHTML = tongToan;
theP6.classList.add("active");
theP6.classList.remove("active");
document.getElementById("tong2So").appendChild(theP6);
}
// OUTPUT
document.querySelector(".tongSo").onclick = tongKySo;
