// Bài tập 5
/**
 * Khối 1: Input
 * Số có 2 chữ số (InputNumber)
 * 
 * Khối 2
 * Các bước xử lý
 * 
 *B1 Tìm html và lấy giá trị
 *B2 Xây dựng công thức tính
 *Chữ số hàng đơn vị (so_hang_dv)
 * so_hang_dv = InputNumber%10
 * 
 * Chữ số hàng chục (so_hang_chuc)
 * so_hang_chuc = InputNumber/10
 * 
 * B3 Tổng chữ số của số 2 chữ số (Sum2Number)
 * Sum2Number = so_hang_dv + so_hang_chuc;
 * B4 Hiển thị UI
 * 
 * Khối 3: Out put
 * Kết quả tổng các chữ số của sô có 2 chữ số
 */

// Tạo sự kiện click btnSumNumber
document.getElementById('btnSumNumber').onclick = function(){
    if(parseInt(document.getElementById('InputNumber').value) < 99 && 
        parseInt(document.getElementById('InputNumber').value) >= 10){

        var so_hang_dv = parseInt(document.getElementById('InputNumber').value) % 10;
    
        var so_hang_chuc = parseInt(document.getElementById('InputNumber').value) / 10;
    
        var Sum2Number = so_hang_dv + so_hang_chuc;
    
        document.getElementById('txtSumNumber').innerHTML = "Tổng các chữ số là: " + Sum2Number;
    } else{
        document.getElementById('txtSumNumber').innerHTML = " Tính hack não à. Mình chỉ tính được số 2 chữ số thôi <br> Hãy nhập số có 2 chữ số !!! Please"
    }

}