const DisplayContainer = document.getElementById('Display');
const enter = document.getElementById('enter');

let myForm = document.forms.namedItem('ProfileForm')
myForm.addEventListener('submit', function(event){
  post_items(event, myForm)
})

DisplayContainer.style = 'display: none'

function post_items (event, form){
  event.preventDefault()

  // let id = document.querySelector('.Student_id').value
  // let name = document.querySelector('.Student_name').value
  // let email = document.querySelector('.Email').value
  // let department = document.querySelector('.Department').value
  // let file = document.querySelector('.jpg').value

  let id = $('.Account').val()

  let param = "http://52.140.207.9:5055/Get?Student_id="+id
    fetch(param,{
        method: 'GET',
        headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json()
    }) 
    .then( (data) =>{
        render(data)
    })
}

function render(data){
    DisplayContainer.style = 'display: block'
    enter.style = 'display: none'

    let Account = data.Account;
    let Nick_name = data.Nick_name;
    let Email = data.Email;
    let Password = data.Password;
    let jpg = data.Picture;

    document.getElementById('Account').innerHTML = Account;
    document.getElementById('Nick_name').innerHTML = Nick_name;
    document.getElementById('Email').innerHTML = Email;
    document.getElementById('Password').innerHTML = Password;
    document.getElementById('jpg').innerHTML = '<img src="data:image/jpg;base64, '+ jpg +'" id="jpg" alt="Red dot" />'


}

