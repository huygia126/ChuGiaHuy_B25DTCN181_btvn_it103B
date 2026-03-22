
let students = [];

const AGE_MIN = 16;
const AGE_MAX = 60;
const GPA_MIN = 0;
const GPA_MAX = 10;
const PAGE_SIZE = 5;

/* ================= CREATE ================= */
function createStudent() {
  let id = prompt("Nhập ID:");
  if (!id) {
    alert("ID không được để trống!");
    return;
  }

  if (students.some(st => st.id === id)) {
    alert("ID đã tồn tại!");
    return;
  }

  let name = prompt("Nhập tên:");
  if (!name) {
    alert("Tên không được để trống!");
    return;
  }

  let age = Number(prompt("Nhập tuổi (16-60):"));
  if (isNaN(age) || age < AGE_MIN || age > AGE_MAX) {
    alert("Tuổi không hợp lệ!");
    return;
  }

  let gpa = Number(prompt("Nhập GPA (0-10):"));
  if (isNaN(gpa) || gpa < GPA_MIN || gpa > GPA_MAX) {
    alert("GPA không hợp lệ!");
    return;
  }

  let status = prompt("Nhập status (active/inactive):");
  if (status !== "active" && status !== "inactive") {
    alert("Status phải là active hoặc inactive!");
    return;
  }

  students.push({
    id,
    name,
    age,
    gpa,
    status,
    createdAt: Date.now(),
    updatedAt: null,
    deletedAt: null
  });

  alert("Thêm sinh viên thành công!");
}

/* ================= UPDATE ================= */
function updateStudent() {
  let id = prompt("Nhập ID cần sửa:");
  let st = students.find(s => s.id === id);

  if (!st) {
    alert("Không tìm thấy sinh viên!");
    return;
  }

  let name = prompt("Tên mới (Enter để bỏ qua):");
  let age = prompt("Tuổi mới:");
  let gpa = prompt("GPA mới:");
  let status = prompt("Status mới (active/inactive):");

  if (name) st.name = name;

  if (age) {
    age = Number(age);
    if (!isNaN(age) && age >= AGE_MIN && age <= AGE_MAX) {
      st.age = age;
    } else {
      alert("Tuổi không hợp lệ!");
      return;
    }
  }

  if (gpa) {
    gpa = Number(gpa);
    if (!isNaN(gpa) && gpa >= GPA_MIN && gpa <= GPA_MAX) {
      st.gpa = gpa;
    } else {
      alert("GPA không hợp lệ!");
      return;
    }
  }

  if (status) {
    if (status === "active" || status === "inactive") {
      st.status = status;
    } else {
      alert("Status không hợp lệ!");
      return;
    }
  }

  st.updatedAt = Date.now();
  alert("Cập nhật thành công!");
}

/* ================= SOFT DELETE ================= */
function softDeleteStudent() {
  let id = prompt("Nhập ID cần xoá:");
  let st = students.find(s => s.id === id);

  if (!st) {
    alert("Không tìm thấy!");
    return;
  }

  if (!confirm("Bạn có chắc muốn xoá?")) return;

  st.status = "inactive";
  st.deletedAt = Date.now();
  st.updatedAt = Date.now();

  alert("Soft delete thành công!");
}

/* ================= RESTORE ================= */
function restoreStudent() {
  let id = prompt("Nhập ID cần restore:");
  let st = students.find(s => s.id === id);

  if (!st || st.deletedAt === null) {
    alert("Không thể restore!");
    return;
  }

  st.status = "active";
  st.deletedAt = null;
  st.updatedAt = Date.now();

  alert("Restore thành công!");
}

/* ================= VIEW ================= */
function viewStudents() {
  if (students.length === 0) {
    alert("Danh sách trống!");
    return;
  }

  let keyword = prompt("Search theo tên:") || "";
  let filterStatus = prompt("Filter (all/active/inactive):") || "all";
  let sortOrder = prompt("Sort GPA (asc/desc):") || "desc";

  let data = [...students];

  data = data.filter(st =>
    st.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (filterStatus !== "all") {
    data = data.filter(st => st.status === filterStatus);
  }

  data.sort((a, b) =>
    sortOrder === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa
  );

  if (data.length === 0) {
    alert("Không có dữ liệu phù hợp!");
    return;
  }

  let page = 1;
  let totalPages = Math.ceil(data.length / PAGE_SIZE);
  let command;

  do {
    let start = (page - 1) * PAGE_SIZE;
    let pageData = data.slice(start, start + PAGE_SIZE);

    console.clear();
    console.table(pageData);
    console.log(`Page ${page}/${totalPages}`);
    console.log(`Total records: ${data.length}`);

    command = prompt("first/last/next/prev/number/exit");

    if (command === "next" && page < totalPages) page++;
    else if (command === "prev" && page > 1) page--;
    else if (command === "first") page = 1;
    else if (command === "last") page = totalPages;
    else if (!isNaN(command)) {
      let num = Number(command);
      if (num >= 1 && num <= totalPages) {
        page = num;
      }
    }

  } while (command !== "exit");
}

/* ================= ANALYTICS ================= */
function analyticsDashboard() {
  if (students.length === 0) {
    alert("Không có dữ liệu!");
    return;
  }

  let total = students.length;
  let activeCount = students.filter(s => s.status === "active").length;
  let inactiveCount = students.filter(s => s.status === "inactive").length;

  let avgGpa =
    students.reduce((sum, s) => sum + s.gpa, 0) / total;

  let highest = students.reduce((max, s) =>
    s.gpa > max.gpa ? s : max
  );

  console.log("===== ANALYTICS DASHBOARD =====");
  console.log(`Tổng sinh viên: ${total}`);
  console.log(`Active: ${activeCount}`);
  console.log(`Inactive: ${inactiveCount}`);
  console.log(`GPA trung bình: ${avgGpa.toFixed(2)}`);
  console.log("Sinh viên GPA cao nhất:", highest);
}

/* ================= MAIN ================= */
function main() {
  let choice;

  do {
    choice = prompt(`
==== STUDENT MANAGER ====
1. Create Student
2. Update Student
3. Soft Delete Student
4. Restore Student
5. View Students
6. Analytics Dashboard
0. Exit
`);

    switch (choice) {
      case "1":
        createStudent();
        break;
      case "2":
        updateStudent();
        break;
      case "3":
        softDeleteStudent();
        break;
      case "4":
        restoreStudent();
        break;
      case "5":
        viewStudents();
        break;
      case "6":
        analyticsDashboard();
        break;
      case "0":
        alert("Bye!");
        break;
      default:
        alert("Sai lựa chọn!");
    }

  } while (choice !== "0");
}

main();