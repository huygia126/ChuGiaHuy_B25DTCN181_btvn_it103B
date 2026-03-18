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
    localStorage.setItem("myTodos",JSON.stringify(todos));
}

function save(){
    localStorage.setItem("myTodos",JSON.stringify(todos));
}

function updateStats(){

    let total = todos.length;

    let done = 0;

    for(let i=0;i<todos.length;i++){
        if(todos[i].done){
            done++;
        }
    }

    let percent = total===0 ? 0 : ((done/total)*100).toFixed(1);

    document.getElementById("stats").innerText =
    "Tổng công việc: "+total+" | Đã hoàn thành: "+done+" ("+percent+"%)";
}

function render(){

    let list = document.getElementById("todoList");
    list.innerHTML="";

    if(todos.length===0){
        list.innerHTML="<p>Chưa có công việc nào. Hãy thêm mới nhé!</p>";
    }

    for(let i=0;i<todos.length;i++){

        let div=document.createElement("div");
        div.className="item";

        if(todos[i].done){
            div.classList.add("done");
        }

        let text=document.createElement("span");
        text.innerText=todos[i].task;

        text.onclick=function(){
            todos[i].done=!todos[i].done;
            save();
            render();
        }

        let actions=document.createElement("div");
        actions.className="actions";

        let edit=document.createElement("span");
        edit.innerText="✏️";

        edit.onclick=function(){

            let input=document.createElement("input");
            input.value=todos[i].task;

            div.replaceChild(input,text);

            input.focus();
            input.select();

            input.onkeydown=function(e){

                if(e.key==="Enter"){

                    let newText=input.value.trim();

                    if(newText!==""){
                        todos[i].task=newText;
                        save();
                    }

                    render();
                }

                if(e.key==="Escape"){
                    render();
                }

            }
        }

        let del=document.createElement("span");
        del.innerText="🗑️";

        del.onclick=function(){

            if(confirm("Bạn có chắc muốn xóa công việc này?")){

                todos.splice(i,1);
                save();
                render();

            }
        }

        actions.appendChild(edit);
        actions.appendChild(del);

        div.appendChild(text);
        div.appendChild(actions);

        list.appendChild(div);
    }

    updateStats();
}

render();


let addBtn=document.getElementById("addBtn");

addBtn.onclick=function(){

    let input=document.getElementById("taskInput");
    let text=input.value.trim();

    if(text===""){
        alert("Nhập công việc trước");
        return;
    }

    let newTodo={
        id:todos.length+1,
        task:text,
        done:false
    }

    todos.push(newTodo);

    input.value="";

    save();
    render();
}

let input=document.getElementById("taskInput");

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){
        addBtn.click();
    }

});


let clearBtn=document.getElementById("clearBtn");

clearBtn.onclick=function(){

    if(confirm("Bạn có chắc muốn xóa TOÀN BỘ công việc không?")){

        todos=[];

        save();

        render();
    }
}