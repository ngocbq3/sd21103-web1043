//Form
const register = document.getElementById("register");

//Các ô input
const hoten = document.getElementById("hoten");
const taikhoan = document.getElementById("taikhoan");
const email = document.getElementById("email");
const matkhau = document.getElementById("matkhau");

//code validate
register.addEventListener("submit", function (event) {
  //Biến kiểm tra tổng quát
  let kt = true;
  event.preventDefault(); //Chặn việc gửi dữ liệu lên server khi dữ liệu chưa hợp lệ
  //họ tên bắt buộc phải nhập
  if (hoten.value.trim() == "") {
    document.getElementById("hotenErr").innerText = "Bạn cần nhập vào họ tên";
    kt = false;
  } else if (hoten.value.trim().length < 8) {
    document.getElementById("hotenErr").innerText =
      "Họ tên phải ít nhất có 8 ký tự";
    kt = false;
  } else {
    document.getElementById("hotenErr").innerText = "";
  }

  //validate tài khoản
  const patternTaikhoan = /^[\w]{6,}$/;
  const taikhoanErr = document.getElementById("taikhoanErr");
  if (!patternTaikhoan.test(taikhoan.value)) {
    taikhoanErr.innerText = "Tài khoản cần có ít nhất 6 ký tự";
    kt = false;
  } else {
    taikhoanErr.innerText = "";
  }

  //Email
  const emailErr = document.getElementById("emailErr");
  const patternEmail = /^[\w]+@[\w]{2,6}\.[a-z]{2,4}/;
  if (!patternEmail.test(email.value)) {
    kt = false;
    emailErr.innerText = "Email phải đúng định dạng";
  } else {
    emailErr.innerText = "";
  }

  const patternMatkhau = /^(?=.*[0-9]).{6,}$/;
  const matkhauErr = document.getElementById("matkhauErr");
  if (!patternMatkhau.test(matkhau.value)) {
    kt = false;
    matkhauErr.innerText = "Mật khẩu có ít nhất 6 ký tự và 1 ký tự số";
  } else {
    matkhauErr.innerText = "";
  }

  //thành công
  if (kt) alert("Nhập dữ liệu thành công");
});
