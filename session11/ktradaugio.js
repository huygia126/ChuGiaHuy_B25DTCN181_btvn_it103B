let student = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" },
];
const newScore = student.filter((element) => {
  return element.score >= 8.0;
});
console.log(newScore);
const checkStudent = student.some((element) => {
  return element.score < 4.0;
});
if (checkStudent) {
  console.log("Có sinh viên yếu");
} else {
  console.log("Không có sinh viên yếu");
}
const studentLabels = student.map((element) => {
  return `Tên: ${element.name} - Điểm: ${element.score}`;
});
console.log(studentLabels);
