function kiemTraTamGiac(_a, _b, _c) { //_a, _b, _c input
    a = _a;
    b = _b;
    c = _c;

    let flag = false;
    if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
        result = "Dữ liệu nhập vào không hợp lệ";
    } else {
        if (a + b > c && b + c > a && c + a > b) {
            result = "Đây là 1 tam giác";
            flag = true;
        } else {
            result = "Đây không phải là 1 tam giác";
        }
    }
   
    return flag; //output
}


function phanLoaiTamGiac() {
    let a = +prompt("Nhập cạnh a");
    let b = +prompt("Nhập cạnh b");
    let c = +prompt("Nhập cạnh c");

    let check = kiemTraTamGiac(a, b, c);
    if(check == false){ // !check
        alert("Không phải tam giác")
    }else{
        result = "";

        if(a == b && b == c){
            result = "Tam giác đều"
        }else{
            if(a == b || b == c || c == a){
                result = "Tam giác cân"
            }else if(a**2 + b**2 == c**2 
                || a*a + c*c == b*b 
                || Math.pow(b,2) + Math.pow(c,2) == Math.pow(a,2)){
                    result = "Tam giác vuông"
                }else{
                    result = "Tam giác thường"
                }
        }
    
        alert(result)
    }
}
 phanLoaiTamGiac();
