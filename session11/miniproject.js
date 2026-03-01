let students = [
  {id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active"},
  {id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active"},
  {id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive"},
  {id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active"},
];

let nextId = 5;
function showMenu(){
  return prompt(
`===== QUAN LY SINH VIEN =====
1. Them sinh vien
2. Xem danh sach
3. Loc sinh vien GPA > 8
4. Cap nhat sinh vien
5. Xoa sinh vien
6. Kiem tra dieu kien
7. Thong ke GPA
8. Chuan hoa du lieu
0. Thoat
Nhap lua chon:`
  );
}

function showStudents(list){
  if (list.length === 0){
    alert("Khong co sinh vien nao!");
    return;
  }
  let result = "===== DANH SACH SINH VIEN =====\n";
  list.forEach(s => {
    result += `ID: ${s.id} | ${s.name} | Age: ${s.age} | GPA: ${s.gpa} | ${s.status}\n`;
  });
  alert(result);
}
function addStudent() {
  let name = prompt("Nhap ten:");
  let age = parseInt(prompt("Nhap tuoi:"));
  let gpa = parseFloat(prompt("Nhap GPA:"));
  let status = prompt("Nhap status (active/inactive):");

  if (!name || isNaN(age) || isNaN(gpa)){
    alert("Du lieu khong hop le!");
    return;
  }
  let newStudent ={
    id: nextId++,
    name: name.trim(),
    age: age,
    gpa: gpa,
    status: status
  };
  students.push(newStudent);
  alert("Them thanh cong!");
}
function readStudents(){
  showStudents(students);
}

function filterGPA() {
  let goodStudents = students.filter(s => s.gpa > 8);
  showStudents(goodStudents);
}


function updateStudent(){
  let id = parseInt(prompt("Nhap ID can sua:"));
  let student = students.find(s => s.id === id);
  if (!student) {
    alert("Khong tim thay!");
    return;
  }

  let newName = prompt("Nhap ten moi (bo trong neu khong doi):");
  let newGpa = prompt("Nhap GPA moi:");

  if (newName) student.name = newName;
  if (newGpa && !isNaN(parseFloat(newGpa))){
    student.gpa = parseFloat(newGpa);
  }
  alert("Cap nhat thanh cong!");
}
function deleteStudent() {
  let id = parseInt(prompt("Nhap ID can xoa:"));
  let beforeLength = students.length;
  students = students.filter(s => s.id !== id);

  if (students.length === beforeLength){
    alert("Khong tim thay sinh vien!");
  } else {
    alert("Da xoa thanh cong!");
  }
}

function checkCondition() {
  let coDuoi18 = students.some(s => s.age < 18);
  let tatCaActive = students.every(s => s.status === "active");
  let result = "===== KIEM TRA =====\n";

  
  result += "Co sinh vien duoi 18: " + (coDuoi18 ? "Co" : "Khong") + "\n";
  result += "Tat ca deu active: " + (tatCaActive ? "Dung" : "Khong");

  alert(result);
}
function statistics() {
  if (students.length === 0) {
    alert("Khong co du lieu!");
    return;
  }

  let tongGpa = students.reduce((sum, s) => sum + s.gpa, 0);
  let avg = tongGpa / students.length;

  let max = students.reduce((a, b) => a.gpa > b.gpa ? a : b);
  let min = students.reduce((a, b) => a.gpa < b.gpa ? a : b);

  let result = "===== THONG KE =====\n";
  result += "Tong sinh vien: " + students.length + "\n";
  result += "GPA trung binh: " + avg.toFixed(2) + "\n";
  result += "Cao nhat: " + max.name + " (" + max.gpa + ")\n";
  result += "Thap nhat: " + min.name + " (" + min.gpa + ")";

  alert(result);
}
function normalizeData() {
  let newList = students.map(s => {
    return {
      ...s,
      name: s.name.toUpperCase()
    };
  });

  showStudents(newList);
  console.log("Danh sach sau khi chuan hoa:", newList);
}
function main() {
  let running = true;

  while (running) {
    let choice = showMenu();

    switch (choice) {
      case "1": addStudent(); break;
      case "2": readStudents(); break;
      case "3": filterGPA(); break;
      case "4": updateStudent(); break;
      case "5": deleteStudent(); break;
      case "6": checkCondition(); break;
      case "7": statistics(); break;
      case "8": normalizeData(); break;
      case "0":
        running = false;
        alert("Tam biet!");
        break;
      default:
        alert("Nhap sai!");
    }
  }
}

main();