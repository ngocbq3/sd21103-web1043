const parent = document.getElementById("container");

const create = document.getElementById("add");
const remove = document.getElementById("remove");

let dem = 0;
//thêm mới với sự kiện button click
create.addEventListener("click", function () {
  dem++;
  //cách 1. tạo phần tử từ phương thức creatElement
  const child1 = document.createElement("h2");
  child1.innerText = "Phần tử mới " + dem;

  //Thêm phần tử vào parent
  parent.appendChild(child1);

  //Cách 2:
  parent.innerHTML += `
    <p>Thêm phần tử p ${dem}</p>
  `;
});

//Xóa phần tử
remove.addEventListener("click", function () {
  //Xóa phần tử đầu
  //   parent.removeChild(parent.firstElementChild);
  //Xóa phần tử cuối
  if (parent.childElementCount > 0) parent.removeChild(parent.lastElementChild);
  else console.log("Không còn phần tử nào để xóa");
});
