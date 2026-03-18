const initialTodos = [
    { id:1, task:"Mua bánh chưng", done:false },
    { id:2, task:"Dọn nhà đón Tết", done:false },
    { id:3, task:"Gói bánh chưng", done:false },
    { id:4, task:"Trang trí nhà cửa bằng hoa mai, hoa đào", done:false },
    { id:5, task:"Mua phong bao lì xì", done:false },
    { id:6, task:"Chuẩn bị mâm ngũ quả", done:false }
];
let todos;
let data = localStorage.getItem("myTodos");

if(data){
    todos = JSON.parse(data);
}else{
    todos = initialTodos;
    localStorage.setItem("myTodos", JSON.stringify(todos));
}

function render(){
    let list = document.getElementById("todoList");
    list.innerHTML = "";
    for(let i=0;i<todos.length;i++){
        let div = document.createElement("div");
        div.className = "item";
        if(todos[i].done){
            div.classList.add("done");
        }

        let text = document.createElement("span");
        text.innerText = todos[i].task;
        text.onclick = function(){
            todos[i].done = !todos[i].done;
            localStorage.setItem("myTodos", JSON.stringify(todos));
            render();
        }

        let actions = document.createElement("div");
        actions.className = "actions";
        let edit = document.createElement("span");
        edit.innerText = "✏️";
        edit.onclick = function(){

            let input = document.createElement("input");
            input.type = "text";
            input.value = todos[i].task;
            div.replaceChild(input,text);

            input.focus();
            input.select();
            input.onkeydown = function(e){

                if(e.key === "Enter"){
                    let newText = input.value.trim();
                    if(newText !== ""){
                        todos[i].task = newText;

                        localStorage.setItem("myTodos", JSON.stringify(todos));
                    }
                    render();
                }
                if(e.key === "Escape"){
                    render();
                }

            }

        }
        let del = document.createElement("span");
        del.innerText = "🗑️";
        del.onclick = function(){
            let check = confirm("Bạn có chắc muốn xóa công việc này không?");
            if(check){
                todos.splice(i,1);
                localStorage.setItem("myTodos", JSON.stringify(todos));
                render();
            }
        }
        actions.appendChild(edit);
        actions.appendChild(del);
        div.appendChild(text);
        div.appendChild(actions);
        list.appendChild(div);
    }
}

render();
let addBtn = document.getElementById("addBtn");
addBtn.onclick = function(){
    let input = document.getElementById("taskInput");
    let text = input.value.trim();
    if(text === ""){
        alert("Nhập công việc trước");
        return;
    }
    let newTodo = {
        id: todos.length + 1,
        task: text,
        done: false
    };
    todos.push(newTodo);
    localStorage.setItem("myTodos", JSON.stringify(todos));
    input.value = "";
    render();
}
let input = document.getElementById("taskInput");
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addBtn.click();
    }

});