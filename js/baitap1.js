/**
 * Khối 1: Inputs
 * lương nhân viên 1 ngày(salary_1day)
 * số ngày đi làm (day)
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm thẻ html và lấy giá trị
 * B2: Xây dựng công thức tính
 *
 * Lương = salary_1day * so_ngay
 * 
 * B3 Hiển thị UI
 * 
 * Khối 3: Output
 * Tiền lương nhân viên được nhận
 * 
 */
//  Khai báo biến
function salaryStaff(){
    var salary_1day = document.getElementById('salary_oneday').value;
    var so_ngay = document.getElementById('day').value;

    console.log(so_ngay,salary_1day);

    // Tính tổng lương được nhận

    var sum_salary = salary_1day * so_ngay;
    console.log(typeof sum_salary)

    // Hiên thị UI

    document.getElementById('salary').innerHTML = sum_salary;
    
}


// Gắn sự kiện click vào tính lương
document.getElementById('btn_salary').onclick = salaryStaff

