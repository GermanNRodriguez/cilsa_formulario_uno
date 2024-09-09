(function()
{
    document.getElementById('formulario_cilsa').addEventListener('submit',function(a)
    {
        a.preventDefault();

        error = probarSubmit();

        if (!error)
        {
            console.log('Pasó la prueba');
        }
    });

    function probarSubmit()
    {
        const numeros = /[0-9]/g;
        const especiales = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const especialesMail = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

        let error = false;
        
        let nombre     = document.getElementById('form_nombre');
        let apellido   = document.getElementById('form_apellido');
        let email      = document.getElementById('form_email');
        let fecha_nac  = document.getElementById('form_fecha_nac');
        let pais       = document.getElementById('form_pais');

        {
            nombre.parentNode.classList.remove('error');
            apellido.parentNode.classList.remove('error');
            email.parentNode.classList.remove('error');
            fecha_nac.parentNode.classList.remove('error');
            pais.parentNode.classList.remove('error');
        }
        
        if (nombre.value.length < 3)
        {
            nombre.parentNode.classList.add('error');
            error = true;
        }
        else if (nombre.value.match(numeros))
        {
            nombre.parentNode.classList.add('error');
            error = true;
        }
        else if (nombre.value.match(especiales))
        {
            nombre.parentNode.classList.add('error');
            error = true;
        }

        if (apellido.value.length < 3)
        {
            apellido.parentNode.classList.add('error');
            error = true;
        }
        else if (apellido.value.match(numeros))
        {
            apellido.parentNode.classList.add('error');
            error = true;
        }
        else if (apellido.value.match(especiales))
        {
            apellido.parentNode.classList.add('error');
            error = true;
        }

        if (email.value.length < 3 )
        {
            email.parentNode.classList.add('error');
            error = true;
        }
        else if ( !email.value.includes('.') || !email.value.includes('@') )
        {
            email.parentNode.classList.add('error');
            error = true;
            console.log('Formato incorrecto')
        }
        else if (email.value.match(especialesMail))
        {
            email.parentNode.classList.add('error');
            error = true;
            console.log('Contiene caracteres especiales')
        }

        if ( fecha_nac.value == '' )
        {
            fecha_nac.parentNode.classList.add('error');
            error = true;
        }
        else if ( !validaFecha(fecha_nac.value) )
        {
            fecha_nac.parentNode.classList.add('error');
            error = true;
        }

        if ( !pais.value.match(numeros) )
        {
            pais.parentNode.classList.add('error');
            error = true;
        }
        else if ( pais.value == 0 )
        {
            pais.parentNode.classList.add('error');
            error = true;
        }

        return error;
    }

    function validaFecha(dateString)
    {
        // Analizar la cadena de fecha de entrada
        var date = Date.parse(dateString);
        // Compruebe si la fecha es válida pasándola a isNaN
        return !isNaN(date);
    }
})()