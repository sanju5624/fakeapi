function getUser(){
    let id=document.getElementById("gid").value
    let result=document.getElementById("result")
    result.textContent=""
    fetch(`http://localhost:3000/students/${id}`,
        {method:"GET"}
    )
    .then(res=>res.json())
    .then(data=>{
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
        td1.textContent=data.id
        td2.textContent=data.name
        td3.textContent=data.branch
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        result.appendChild(tr)

    }
    )
    
}
function createUser(){
    let id1=document.getElementById("cid").value
    let name1=document.getElementById("cname").value
    let br1=document.getElementById("cbr").value
    let result=document.getElementById("result")
    let crob={
        "id":id1,
        "name":name1,
        "branch":br1
    }
    fetch(`http://localhost:3000/students`,
        {method:"POST",

        body:JSON.stringify(crob)
})
}

function updateUser(){
    let id2=document.getElementById("uid").value
    let name2=document.getElementById("uname").value
    let branch2=document.getElementById("ubr").value
    let upob={
        "id":id2,
        "name":name2,
        "branch":branch2
    }
    fetch(`http://localhost:3000/students/${id2}`,
        {
            method:"PATCH",
            body:JSON.stringify(upob)
        }
    )
}
function deleteUser(){
    let id3=document.getElementById("did").value
    fetch(`http://localhost:3000/students/${id3}`,
    {
        method:"DELETE"
    }
    )
}
function getAll(){
    let result=document.getElementById("result")
    result.textContent=""
    fetch(`http://localhost:3000/students`,{method:"GET"})
    .then(res=>res.json())
    .then(data=>data.forEach(ele => {
            let tr=document.createElement("tr")
            let td1=document.createElement("td")
            let td2=document.createElement("td")
            let td3=document.createElement("td")
            td1.textContent=ele.id
            td2.textContent=ele.name
            td3.textContent=ele.branch
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            result.appendChild(tr)
        }
    ))
    
}