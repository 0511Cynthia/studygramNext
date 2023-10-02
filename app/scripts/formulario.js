function verForm(){
    var ver=document.getElementById('formUser')
    ver.style.display="block"
}

function aceptarNombre(){
    var nombre=document.getElementById('nombre').value
    var ver=document.getElementById('formUser')
    console.log(nombre)
    if (nombre=="") {
        alert('Ingresa el nombre')
    }else{
        alert('Nombre aceptado')
        ver.style.display="none"
    }
}