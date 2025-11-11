var x = 1;
let j = 2;
const k = 3;

console.log(x, j, k);

//Về var và let
{
  var y = 12;
  let z = 22;
}

console.log(y);
// console.log(z);

x = 55;
j = 66;
//k = 77; //Không được phép gán giá trị mới cho const

console.log(x, j, k);

let a = 1;
let isPoint = true;
let person = { name: "NgocBQ" };
let nothing = null;
let arr = [1, 2, 3];
let s = "Hello";
//Kiểm tra kiểu dữ liệu
console.log(typeof a);
console.log(typeof isPoint);
console.log(typeof person);
console.log(typeof s);
console.log(typeof nothing);
console.log(typeof arr);

//Nhập vào họ tên
// a = prompt("Nhập vào tên bạn");
console.log(a);

//Tạo số ngẫu nhiên
let number = Math.random();
console.log(number);

//Tạo số ngẫu nhiên từ 0-10
/**
 * Math.ceil làm tròn lên 7.1 -> 8
 * Math.floor làm tròn xuống 7.9 => 7
 * Math.round  làm trong gần 7.5 -> 8, 7.4->7
 */
number = Math.round(number * 10);
console.log(number);

//câu lệnh if
if (number > 5) {
  console.log("bạn được điểm pass môn");
} else {
  console.log("Bạn đã fail môn học");
}

//Câu lệnh if .. elseif ..
if (number >= 8) {
  console.log("Điểm giỏi");
} else if (number > 7) {
  console.log("Điểm khá");
} else if (number >= 5) {
  console.log("Điểm TB");
} else {
  console.log("Điểm fail");
}
