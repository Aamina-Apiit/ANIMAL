const showPopup = document.getElementById('show-popup');
const subcribers = document.getElementById('subcribers');
const popupContainer = document.getElementById('popup-container');
const closeBtn = document.getElementById('close-popup');
const update = document.getElementById('save');
const login = document.getElementById('login');
const Log = document.getElementById('logout');

const check =JSON.parse(localStorage.getItem("Check"));
// for the popup
if (check == "admin") {
  showPopup.classList.add('show')
  subcribers.classList.add('show')
  Log.classList.add('show')
}
else {
  showPopup.classList.remove('show')
  subcribers.classList.remove('show')
}
//for checking if the user the logged in 
if (check){
  login.classList.add('disable');
  Log.classList.add('enable')
}
else{
  login.classList.remove('disable');
  Log.classList.remove('enable')

}
  

showPopup.addEventListener("click" , open );
  closeBtn.addEventListener("click" , close );
 

  function open (){
    popupContainer.classList.add('show');
}

function close (){
    popupContainer.classList.remove('show');
}

update.addEventListener("click", save_detaials);

function save_detaials(){
  const Id = document.getElementById('select').value;
  const Text = document.getElementById('inputText').value;
  document.getElementById(Id).innerHTML = Text;
}

Log.addEventListener("click", remover_user);

function remover_user () {
localStorage.removeItem("Check");
location.reload();
Log.classList.remove('show')
}

subcribers.addEventListener("click" , admin );

function admin(){
window.location.href = "admin.html"
}