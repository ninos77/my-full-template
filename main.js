const baseUrl="https://swapi.co/api/"

function getData(type,cb){
   var xhr= new XMLHttpRequest();
   xhr.open("GET",baseUrl+ type+ "/");
   xhr.send();

   xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        cb(JSON.parse(this.responseText));
    }
 };
}
function writeToDocument(type){
   
    var el=document.getElementById("data");
    el.innerHTML="";
    getData(type,function(data){
        data=data.results;
        data.forEach(function(item){
           el.innerHTML+="<p>"+item.name+"</p>";
        });
    });

}




