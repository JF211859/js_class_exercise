function challenge1(){
    if (document.querySelector('#emailDiv').style.display == "block"){
        document.querySelector('#emailDiv').style.display = "none";
    }

    else{
        document.querySelector('#emailDiv').style.display = "block";
    }

}

function  processSameAddress(){
    if (document.querySelector('#home').readOnly == true){
        document.querySelector('#home').readOnly = false;
    }
    else{
        document.querySelector('#home').value = document.querySelector('#bill').value;
        document.querySelector('#home').readOnly = true;
    }

}

function challenge3(){
    if (document.querySelector("input[name='standing']:checked") == null){
        return false;
    }
    if (document.querySelector("input[name='gradDate']:checked") == null){
        return false;
    }
    return true;
}



function showImage(index){

    document.querySelectorAll('img')[index].title = document.querySelectorAll('img')[index].alt;

}