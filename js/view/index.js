function show(elem_id){
    document.getElementById(elem_id).style.display = 'block';
    
}

function isBlank(_element_id){
    if (document.getElementById(_element_id).value !='') {
        document.getElementById(_element_id).nextElementSibling.style.display = 'none';
        document.getElementById(_element_id).nextElementSibling.innerHTML = '';
        if (_element_id == 'image_url') {
            var res =   validURL(document.getElementById(_element_id).value);
            if (!res) {
                document.getElementById(_element_id).nextElementSibling.style.display = 'block';
                document.getElementById(_element_id).nextElementSibling.innerHTML = 'Please enter a valid URL';
            }
        }
    }else{
        document.getElementById(_element_id).nextElementSibling.style.display = 'block';
    }
    
}
function validURL(str) {
   
   var result = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
   
   return result;
  }
function validateAndSubmit(){
    var blog_title = document.getElementById("blog_title").value;
    var article = document.getElementById("article").value;
    var image_url = document.getElementById("image_url").value;
    var validated = true;
    if(blog_title.length==0){
        document.getElementById('e1').style.display = 'block';
        document.getElementById("e1").innerHTML="Please enter a blog title";
        validated = false;
    }
    if(article.length==0){
        document.getElementById('e2').style.display = 'block';
        document.getElementById("e2").innerHTML="Article is requried";    
        validated = false;
    }
    if(image_url.length==0){
        document.getElementById('e3').style.display = 'block';
        document.getElementById("e3").innerHTML="Image URL is requried";    
        validated = false;
    }
    if (validated) {
        console.log(document.getElementsByClassName('error'));
        var error_elems = document.getElementsByClassName('error');
        if (error_elems.length > 0) {
            for (let i = 0; i < error_elems.length; i++) {
                const element = error_elems[i];
                element.style.display = 'none';
                element.innerHTML = '';
                
            }
        }
        create();
    }
}

function create(){
    var blog_title = document.getElementById("blog_title").value;
    var article = document.getElementById("article").value;
    var image_url = document.getElementById("image_url").value;
 
    var html1 =`<div class="card mb-4">
        <a href="#!"><img class="card-img-top" src="`+image_url+`" alt="`+blog_title+`" / ></a>
        <div class="card-body">
        <h2 class="card-title">`+blog_title+`</h2>
        <p class="card-text">`+article+`</p>
        </div>
        </div>`;
        var myFirstDiv = document.createElement("div");
        myFirstDiv.setAttribute("class","col-lg-4");

        // var myAnchortag = document.createElement('a');
        // myAnchortag.setAttribute("href","javascript:void(0)");
        // myFirstDiv.appendChild(mysecondDiv);
        // var mysecondDiv = document.createElement("div");
        // mysecondDiv.setAttribute("class","card-body");



        // myFirstDiv.appendChild(mysecondDiv);

        myFirstDiv.innerHTML = html1;
    document.getElementById('bloglist').appendChild(myFirstDiv);

    resetForm();
}

function resetForm(){
    document.getElementById("blog_title").value = '';
    document.getElementById("article").value ='';
    document.getElementById("image_url").value = '';
}