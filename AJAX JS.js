const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
    
    for (let index = 1; index < 2; index++) {
      url="https://reqres.in/api/users?page="+index;
      
    

    xhr.open("GET", url);
    xhr.send();
  xhr.addEventListener("readystatechange", (e) => { 
    
      //$xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      //console.log(json.data);

      json.data.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${element.first_name},${element.last_name}\n
        ${element.id}${element.email}\n
        Imagen: ${element.avatar}`;
        $fragment.appendChild($li);
        x= `${element.first_name},${element.last_name}
        Imagen: ${element.avatar}`;
        console.log(x);
      });

      $xhr.appendChild($fragment);
     

    //console.log("Este mensaje cargará de cualquier forma");
  });


}

  