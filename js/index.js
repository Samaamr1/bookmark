var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");




var namesList =[];

if(localStorage.getItem("booksContainer")!==null){
  namesList= JSON.parse(localStorage.getItem("booksContainer"))
  displayData();
}





function addName() {
 if (validationName()== true && (validationUrl() ==true)){
  var book ={
    name: siteNameInput.value ,
    url:siteUrlInput.value
    }
    namesList.push(book);
    localStorage.setItem("booksContainer", JSON.stringify(namesList))
    displayData();
    clearForm();
    console.log(namesList)
    }
  
 }
    

function clearForm(){
  siteNameInput.value = null;
  siteUrlInput.value =null;

}



function displayData() {
  var cartona = "";
  for (var i = 0; i < namesList.length; i++) {
    cartona += `
    <tr>
    <th scope="row">${i+1}</th>
    <td>${namesList[i].name}</td>
    <td><button onclick="openUrl(${i})" class="btn bg-warning text-white "> <i class="fa-regular fa-eye"></i>  Visit</button></td>
    <td><button onclick="deleteItem(${ i })" class=" btn bg-danger text-white"><i class="fa-solid fa-trash"></i>  Delete</button></td>
  </tr>
    `;
  }
 

document.getElementById("tableData").innerHTML=cartona;


}


function deleteItem(indexItem) {
  namesList.splice(indexItem, 1);
localStorage.setItem("booksContainer", JSON.stringify(namesList))
  displayData();
  console.log(namesList);
}



function validationName() {
  var text = siteNameInput.value;
  var nameRegex = /^\w{3,}(\s+\w+)*$/;
  var msgNameElement = document.getElementById("msgName");
  if (nameRegex.test(text)) {
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
    msgNameElement.classList.add("d-none");
    return true;
  } else {
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid");
    msgNameElement.classList.remove("d-none");
    return false;
  }
}

function validationUrl(){
  var text = siteUrlInput.value;
  var urlRegex =  /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  var msgUrlElement = document.getElementById("msgUrl");
  if (urlRegex.test(text) == true) {
  siteUrlInput.classList.add("is-valid");
  siteUrlInput.classList.remove("is-invalid");
  msgUrlElement.classList.add("d-none");
  return true;
  }
  else{
  siteUrlInput.classList.add("is-invalid");
  siteUrlInput.classList.remove("is-valid");
  msgUrlElement.classList.remove("d-none");
  return false;
  }
  }
  
  function openUrl(index) {
      window.open(namesList[index].url);
    
  }