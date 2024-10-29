// alert('Hello world');

// Khai bao bien
// var myFirstVariable = "Hello World!";
// alert(myFirstVariable);

//Khai bao hang
// const pi = 3.14;
// alert(pi);

//Toan tu
// var soA = 10;
// var soB = 5;
// var ketQua = soA + soB;  
// var ketQua = soA - soB;
// var ketQua = soA * soB;
// var ketQua = soA / soB;
// var ketQua = ++soA;
// var ketQua = --soB;
// var ketQua = soA > soB;
// var ketQua = soA >= 10;
// var ketQua = soA <= 9;
// &&
// var ketQua = (soA != 0) && (soB < 10) && (soA < soB);
// ||
// var ketQua = (soA != 0) && (soB < 10) || (soA < soB);
// Chuyen du lieu
// var tuoi = 18;
// var year = "2024";
// var namSinh = parseInt(year) - tuoi;

// var thongTinSinhVien = {
//     fullName: "Tran Duy Phong",
//     age: 19,
//     gender: true,
//     address: {
//         province: "Hung Yen",
//         district: "Van Giang",
//         village: "Me So",
//     }
// }

// var result ="Hello, my name is " + thongTinSinhVien.fullName + " ,i'm " + thongTinSinhVien.age + " and i'm living in " + thongTinSinhVien.address.province;
// Cat chuoi
// chuoiKyTu = "Hello";
// var result = chuoiKyTu.slice(1, 4);
// 1: danh chi so tu vi tri thu 1, 4: lay 4 phan tu tu ki tu ban dau
// var result = typeof(thongTinSinhVien.gender);

// var hoVaTen = 'Nguyen Duy Phong';
// replace: Thay doi ky tu dau tien tim dc, replaceAll: Thay doi tat ca ky tu
// var result = hoVaTen.replace("Nguyen", "Tran");
// var tuoi = 19;
// var result = `Toi nam nay ${tuoi} tuoi`;

// Ep kieu: vidu: number = "123"; Number(num) + 1
// paseInt(), paseFloat() : Chuyen doi chuoi thanh so nguyen/thuc
// toFixed(int) : lay sau so luong chu so cua so thap phan
// isNaN() : Not a Number
// isFinite(): Kiem tra co phai so huu han hay khong
// new Date() : Ngay gio hien tai
// new Date('2024-08-24');


// Thuộc tính Array
// var arr = [1, 2, 4, 6, 2];

// var ketQua = arr.indexOf(3);
// var ketQua = arr.lastIndexOf(2);
// Array.isArray(name_Array) : Check array return true/false

/*
    var a, b, c, d;
    a = new Array(1, 2, 3);
    b = "JScript";
    c = new Array(42, "VBScript");
    d = a.concat(b, c);
    returns the array = [1, 2, 3, "Jscript", 42, "VBScript"];
*/

// var ketQua = arr.join("/"); // Biến một mảng thành chuỗi String và khoảng cách giữa các phần tử là kí tự mình thêm vào
// vả ketQua = arr.pop(); //Xóa phần tử cuối cùng trong mảng
// var ketQua = arr.shift(); // Xóa phần tử đầu mảng
// var ketQua = arr.unshift(); // Thêm phần tử vào đầu mảng
// var ketQUa = ar.push('Duy') // Đẩy vào cuối mảng một phần tử tên Duy

// var result = "Chao buoi ";
// var thoiGian = new Date().getHours();
// if(thoiGian <= 6) {
//     result += "dem";
// } else if (thoiGian <= 12) {
//     result += "sang";
// } else if(thoiGian <= 18) {
//     result += "chieu";
// } else {
//     result += "toi";
// }

// var course = 67;

// if (course > 69) {
//     console.log("Ban chua the la sinh vien cua truong !");
// } else if(course < 65) {
//     console.log("Ban da ra truong !");
// } else {
//     console.log("Ban sinh nam ", (1937 + course))
// }

// soA = 1; soB = 0; soC = 3;
// if(soA > soB && soA > soC) console.log('A is greater than !');
// else if(soB > soC) console.log(('B is greater than!'));
// else console.log('C is greater than !');

// var diem = 10;
// if(diem < 4) console.log("F");
// else if(diem < 5) console.log("D");
// else if(diem < 6.5) console.log("C");
// else if(diem < 8) console.log("B");
// else console.log("A");

// var D = new Date();
// month = D.getMonth();
// switch (month + 1) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log("31 ngay");
//         break;
//     case 2:
//         console.log("28 ngay");
//         break;
//     case 4: case 6: case 9: case 10: case 11:
//         console.log("30 ngay");
//         break;
//     default:
//         console.log("Error !");
//         break;
// }

// number =[2, 3, 6, 9, 13, 27];
//Tao mang dua tren mang cu, neu so chan * 2, con so le * 3

// var result = [2, 3, 6, 9, 13, 27];
// var resultChan = [];
// var resultLe = [];
// for(var i = 0; i < result.length; i++) {
//     if(result[i] % 2 == 0) {
//         result[i] *= 2;
//         resultChan.push(result[i]);
//     } else {
//         result[i] *= 3;
//         resultLe.push(result[i]);
//     }
// }
// document.write(resultChan + "<br>");
// document.write(resultLe)

// var value = [true, true, false, false, false, true];
// let countPass = 0;
// let countFail = 0;
// for(var i = 0; i < value.length; i++) {
//     if(!value[i]) {
//         ++countFail;
//     } else {
//         ++countPass;
//     }
// }
// document.write("So nguoi dat: ", countPass, " , so nguoi truot: ", countFail);
// var nem1 = [];
// var ten = [
//   "Nguyễn Thị Diệu An", "Phạm Văn An ", "Đỗ Việt Anh ", "Lê Công Thái Anh ", "Nguyễn Bùi Quang Anh ",
//   "Nguyễn Lê Minh Anh ", "Phạm Quốc Bảo ", "Hoàng Thị Tân Bình ", "Nguyễn Đức Chính ", "Bùi Văn Công ",
//   "Vũ Thành Công ", "Nguyễn Minh Cường ", "Phạm Quốc Cường ", "Trần Mạnh Cường ", "Phạm Thu Dung ",
//   "Trần Mạnh Dũng ", "Lê Hoàng Dương ", "Nguyễn Đình Dương ", "Trần Ngọc Đại ", "Trần Mạnh Đạt ",
//   "Đào Bá Đức ", "Đặng Văn Đức ", "Trần Vĩnh Giáp ", "Đặng Cao Hậu ", "Nguyễn Trung Hiếu ", "Trần Mỹ Hoa ",
//   "Lê Văn Hồ ", "Nguyễn Thế Hơn ", "Đoàn Văn Hùng ", "Nguyễn Thị Huyền ", "Nguyễn Văn Kiên ", "Bùi Thế Linh ",
//   "Hồ Văn Luân ", "Dương Đức Mạnh ", "Đậu Bá Mạnh ", "Đặng Văn Minh ", "Nguyễn Quang Minh ", "Vũ Đức Minh ",
//   "Tô Hoàng Nam ", "Vũ Thị Kim Ngân", "Nguyễn Khả Nguyên ", "Đinh Duy Nhất ", "Trần Thị Yến Nhi ", "Bùi Đức Nhương ",
//   "Mai Văn Phong ", "Phạm Duy Phong ", "Trần Duy Phong ", "Nguyễn Huy Phúc ", "Nguyễn Như Quỳnh ", "Hoàng Minh Thành ",
//   "Bùi Trung Thông ", "Bùi Việt Tiến ", "Nguyễn Đình Trọng ", "Phạm Xuân Trường ", "Nguyễn Anh Tú ", "Hoàng Công Tuấn ",
//   "Đỗ Mạnh Tường ", "Nguyễn Thái Vinh ", "Nguyễn Thế Vinh ", "Nguyễn Đình Vượng ", "Nguyễn Hà Vy "
// ];

// for(let i = 0; i < ten.length; i++) {
//     if(!ten[i].startsWith("Nguyễn")) {
//         nem1.push(ten[i]);
//     }
// }
// // for(let i = 0; i < nem1.length; i++) {
// //     document.write(nem1[i] + "<br>");
// // }

// var danhSach = [
//     {
//         Ten: "Nguyễn Thị Diệu An",
//         monHoc: {
//             java: {
//                 diemA: 10,
//                 diemB: 6,
//                 diemC: 7,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 5,
//                 diemC: 7,
//                 diemChu: ""
//             },
//         },
//     },
//     {
//         Ten: "Phạm Văn An",
//         monHoc: {
//             java: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//         },

//     },
//     {
//         Ten: "Nguyễn Lê Minh Anh",
//         monHoc: {
//             java: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//         },

//     }
// ];

// for(let i = 0; i < danhSach.length; i++) {
//     if(danhSach[i].Ten.startsWith("Nguyễn")) {
//         diemJava = danhSach[i].monHoc.java.diemA*0.6 + danhSach[i].monHoc.java.diemB*0.3 + danhSach[i].monHoc.java.diemC/10;
//         if(diemJava < 4.0) danhSach[i].monHoc.java.diemChu = "F";
//         else if(diemJava < 4.5) danhSach[i].monHoc.java.diemChu = "D";
//         else if(diemJava < 5.0) danhSach[i].monHoc.java.diemChu = "D+";
//         else if(diemJava < 6.0) danhSach[i].monHoc.java.diemChu = "C";
//         else if(diemJava < 6.5) danhSach[i].monHoc.java.diemChu = "C+";
//         else if(diemJava < 8.0) danhSach[i].monHoc.java.diemChu = "B";
//         else if(diemJava < 8.5) danhSach[i].monHoc.java.diemChu = "B+";
//         else if(diemJava < 9.0) danhSach[i].monHoc.java.diemChu = "A";
//         else danhSach[i].monHoc.java.diemChu = "A+";

//         diemDotNet = danhSach[i].monHoc.dotNet.diemA*0.6 + danhSach[i].monHoc.dotNet.diemB*0.3 + danhSach[i].monHoc.dotNet.diemC/10;
//         if(diemDotNet < 4.0) danhSach[i].monHoc.dotNet.diemChu = "F";
//         else if(diemDotNet < 4.5) danhSach[i].monHoc.dotNet.diemChu = "D";
//         else if(diemDotNet < 5.0) danhSach[i].monHoc.dotNet.diemChu = "D+";
//         else if(diemDotNet < 6.0) danhSach[i].monHoc.dotNet.diemChu = "C";
//         else if(diemDotNet < 6.5) danhSach[i].monHoc.dotNet.diemChu = "C+";
//         else if(diemDotNet < 8.0) danhSach[i].monHoc.dotNet.diemChu = "B";
//         else if(diemDotNet < 8.5) danhSach[i].monHoc.dotNet.diemChu = "B+";
//         else if(diemDotNet < 9.0) danhSach[i].monHoc.dotNet.diemChu = "A";
//         else danhSach[i].monHoc.dotNet.diemChu = "A+";
//     }
// }

// console.log(danhSach);





