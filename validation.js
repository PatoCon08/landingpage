const form = document.querySelector("#información")
const Nombre = document.querySelector("#Nombre")
const Email = document.querySelector("#Email")
const Producto = document.querySelector("#Producto")
const Modelo = document.querySelector("#Modelo")
const Cantidad = document.querySelector("#Cantidad")
const Envío = document.querySelector("#Envío")
const Dirección = document.querySelector("#Dirección")
const nombreHelp = document.querySelector("#nombreHelp")
const productoHelp = document.querySelector("#productoHelp")
const modeloHelp = document.querySelector("#modeloHelp")
const cantidadHelp = document.querySelector("#cantidadHelp")
const envíoHelp = document.querySelector("#envíoHelp")
const direcciónHelp = document.querySelector("#direcciónHelp")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault ()
	console.log("Intentó realizar un pedido")
	event.preventDefault()
	if (Nombre.value===""||Email.value===""||Producto.value===""||Modelo.value===""||Cantidad.value===""||Envío.value===""||Dirección.value==="") {
		if (Nombre.value===""){
		 nombreHelp.innerText="Completar datos"
		}
		if (Email.value===""){
		 emailHelp.innerText="Completar datos"
		}
		if (Producto.value===""){
		 productoHelp.innerText="Completar datos"
		}
		if (Modelo.value===""){
		 modeloHelp.innerText="Completar datos"
		}
		if (Cantidad.value===""){
		 cantidadHelp.innerText="Completar datos"
		}
		if (Envío.value===""){
		 envíoHelp.innerText="Completar datos"
		}
		if (Dirección.value===""){
		 direcciónHelp.innerText="Completar datos"
		}
	} else{
		form.submit()
	}
})