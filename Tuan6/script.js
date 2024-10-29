// CONFIRM BOX:
// var r = confirm("sometext")

//     // Ví dụ:
//     var r = confirm("Press a button");
//     if(r == true) {
//         document.write("You pressed OK!");
//     } else {
//         document.write("You pressed Cancel!")
//     }

// PROMPT BOX
// prompt("sometext", "default value");
// var r = prompt("Text", "type here");
// document.write(r);

// FUNCTION 
// Function not param
// function tinhToan() {
//     var ketQua = 10 + 5;
//     document.write(ketQua);
// }

// tinhToan();

//Function with param
// function tinhToan(a, b) {
//     var ketQua = a + b;
//     document.write(ketQua);
// }

// tinhToan(2, 3)

var danhSach = [
    {
        Ten: "Nguyễn Thị Diệu An",
        monHoc: {
            java: {
                diemA: 10,
                diemB: 6,
                diemC: 7,
                diemChu: ""
            },
            dotNet: {
                diemA: 6,
                diemB: 5,
                diemC: 7,
                diemChu: ""
            },
        },
    },
    {
        Ten: "Phạm Văn An",
        monHoc: {
            java: {
                diemA: 5,
                diemB: 4,
                diemC: 3,
                diemChu: ""
            },
            dotNet: {
                diemA: 6,
                diemB: 7,
                diemC: 8,
                diemChu: ""
            },
        },

    },
    {
        Ten: "Nguyễn Lê Minh Anh",
        monHoc: {
            java: {
                diemA: 6,
                diemB: 7,
                diemC: 8,
                diemChu: ""
            },
            dotNet: {
                diemA: 5,
                diemB: 4,
                diemC: 3,
                diemChu: ""
            },
        },

    }
];

function tinhDiem(diemA, diemB, diemC) {
    var diemSo = diemA * 0.6 + diemB * 0.3 + diemC * 0.1;
    var diemChu = "";
    if(diemSo < 4.0) return diemChu = "F";
    else if(diemSo <= 4.5) return diemChu = "D";
    else if(diemSo <= 5.5) return diemChu = "D+";
    else if(diemSo <= 6.5) return diemChu = "C";
    else if(diemSo <= 7.0) return diemChu = "C+";
    else if(diemSo <= 8) return diemChu = "B";
    else if(diemSo <= 8.5) return diemChu = "B+";
    else if(diemSo <= 9.0) return diemChu = "A";
    else return diemChu = "A+";
}

danhSach.forEach(item => {
    if(item.Ten.startsWith("Nguyễn")) {
        var monJava = item.monHoc.java;
        var monDotNet = item.monHoc.dotNet;

        monJava.diemChu = tinhDiem(monJava.diemA, monJava.diemB, monJava.diemC);
        monDotNet.diemChu = tinhDiem(monDotNet.diemA, monDotNet.diemB, monDotNet.diemC);
    }
});
console.log(danhSach);
