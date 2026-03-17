const todos = [
 { id: 1, task: "Mua bánh chưng", done: false },
 { id: 2, task: "Dọn nhà đón Tết", done: false },
 { id: 3, task: "Gói bánh chưng", done: false },
 { id: 4, task: "Trang trí nhà cửa", done: false }
];
const list = document.getElementById("todoList");

function renderTodos(data){
    list.innerHTML="";
    data.forEach(todo => {
        let li=document.createElement("li");
        li.innerHTML=`
            <span>${todo.task}</span>
            <span>${todo.done ? "Đã làm" : "Chưa làm"}</span>
        `;
        list.appendChild(li);
    });
}

window.onload = function(){
    renderTodos(todos);
    if(!localStorage.getItem("myTodos")){
        localStorage.setItem("myTodos", JSON.stringify(todos));
        console.log("Đã lưu vào localStorage lần đầu");
    }

};