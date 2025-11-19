const btn = document.getElementsByTagName("button");

// console.log(btn[0].parentElement.parentElement);
//parent1: sản phẩm 1

btn[0].addEventListener('click', function(){
    const parent1 = this.parentElement.parentElement;
    console.log(parent1)

    const childElement = parent1.children;
    console.log(childElement[3])
})
