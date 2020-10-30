//constructor

function Book(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type;
}

//display contructor
function Display(){

}

//Add methods To display Prototypes
Display.prototype.add =function(book){
  console.log("Adding to UI");
  tableBody=document.getElementById('tableBody');
  let uiString=`
            <tr>              
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
            </tr>
   `;
   tableBody.innerHTML+=uiString;
}

//implement the clear function
Display.prototype.clear =function(){
    let libraryForm=document.getElementById('libraryForm');
    libraryForm.reset();
}
//implement the validate function 
Display.prototype.validate =function(book){
 if(book.name.length<2 || book.author.length<2)
 {
     return false;
 }
 else{
     return true;
 }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>${type}!</strong>${displayMessage}.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                         </div>`;
    setTimeout(()=>{
        message.innerHTML = ''
    }, 2000);

}

 //Add submit event Listner to form libraryForm
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryformsubmit);



function libraryformsubmit(e) {
    e.preventDefault();
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
   
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    
    let book = new Book(name, author, type);
    console.log(book);
    let display= new Display();
  
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }
    else {
        // Show error to the user
        display.show('Alert', ' Sorry you cannot add this book');
    }

 
}