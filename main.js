var xhr= new XMLHttpRequest();
var data;
xhr.open("GET","https://swapi.co/api/");
xhr.send();

function setData(jsonData){
    data=jsonData;
    console.log(data);
}

xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        setData(JSON.parse(this.responseText));
    }
};


