let mainCont = document.querySelector(".main");
console.log(mainCont);

const tab = {
    data: {
        A: "Debabrat",
        B: "satyabrat",
        C: "bob",
    },
};

function render(mainCont) {
    // name
    const p = document.createElement("p");
    const input = document.createElement("input");
    input.id = "name";
    input.name = "name";
    input.type = "text";
    input.placeholder = "Enter name here";
    p.innerHTML = "name";
    mainCont.appendChild(p);
    mainCont.appendChild(input);
    // text area
    const p2 = document.createElement("p");
    p2.innerHTML = "about";
    const textarea = document.createElement("textarea");
    textarea.placeholder = "write something abt u";
    mainCont.appendChild(p2);
    mainCont.appendChild(textarea);
    // radio buttons
    const p3 = document.createElement("p");
    p3.innerHTML = "gender";
    const p4 = document.createElement("p");
    p4.innerHTML = "male";
    const radioinp = document.createElement("input");
    radioinp.type = "radio";
    const p5 = document.createElement("p");
    p5.innerHTML = "female";
    const radioinp2 = document.createElement("input");
    radioinp2.type = "radio";
    const p6 = document.createElement("p");
    p6.innerHTML = "other";
    const radioinp3 = document.createElement("input");
    radioinp3.type = "radio";
    mainCont.appendChild(p3);
    mainCont.appendChild(p4);
    mainCont.appendChild(radioinp);
    mainCont.appendChild(p5);
    mainCont.appendChild(radioinp2);
    mainCont.appendChild(p6);
    mainCont.appendChild(radioinp3);
    // table
    const p7 = document.createElement("p");
    mainCont.appendChild(p7);
    p7.innerHTML = "table";
    const table = document.createElement("table");
    const th = document.createElement("th");
    th.innerHTML = "sr no";
    table.appendChild(th);
    const th2 = document.createElement("th");
    th2.innerHTML = "name";
    table.appendChild(th2);
    for (const prop in tab.data) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        const td = document.createElement("td");
        td.innerHTML = prop;
        const td2 = document.createElement("td");
        td2.innerHTML = tab.data[prop];
        tr.appendChild(td);
        tr.appendChild(td2);
    }
    mainCont.appendChild(table);
    // list orderd
    const p8 = document.createElement('p');
    p8.innerHTML = "orderd list"
    mainCont.appendChild(p8);
    const list = document.createElement('ol');
    list.type = '1';
    for (const prop in tab.data) {
        const li = document.createElement('li');
        li.innerText = tab.data[prop]
        list.appendChild(li);
    }
    mainCont.appendChild(list)
    // buttons
    const submit = document.createElement('button') 
    submit.type = 'submit'
    submit.innerText = "submit"
    mainCont.appendChild(submit);
    // eventlistener
    submit.addEventListener('click',()=>{
        mainCont.style.backgroundColor = 'grey'
        mainCont.style.fontFamily = 'cursive'
    })
    submit.addEventListener('dblclick',()=>{
        mainCont.style.backgroundColor = 'white'
        mainCont.style.fontFamily = 'cursive'
    })
    submit.addEventListener('',()=>{
        mainCont.style.backgroundColor = 'red'
        mainCont.style.fontFamily = 'cursive'
    })

}
render(mainCont);
