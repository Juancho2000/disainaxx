
		var IconWhatsapp = document.querySelector('#icon-whatsapp');
		var formulariowtsp = document.getElementById('formulariowtsp');
		var closemodal = document.querySelector('.closemodal');
		var sendbttn = document.querySelector('#sendbttn');

		
		IconWhatsapp.addEventListener('click' , function(){
			formulariowtsp.classList.toggle('entrarysalir')
		})

		closemodal.addEventListener('click' , function(){
			formulariowtsp.classList.remove('entrarysalir')
		})

		sendbttn.addEventListener('click' , EnviarMensaje)

		function EnviarMensaje(){


			let name = document.querySelector('#inputname').value;
            let correo = document.querySelector('#inputcorreo').value;
            let ubicacion = document.querySelector('#inputubicacion').value;
			let mensaje = document.querySelector('#inputmensaje').value;
		
			let url = "http://api.whatsapp.com/send?phone=584123887600&text=Nombre: %0A" + name + "%0A%0ACorreo: %0A" + correo + "%0A%0AUbicacion: %0A" + ubicacion + "%0A%0AMensaje: %0A" + mensaje + "%0A";
			window.open(url);

		}
