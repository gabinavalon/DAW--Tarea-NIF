/* 
    rutas() {

        this.app.post('/validaNIFClient',  (req, res) => {
            
            const dni = req.body.nif;
            console.log(dni);
            let arrNIF = dni.split("-");

            let numNIF = arrNIF[0];
            let letraNIF = arrNIF[1];
            let letra;
            
            //Validación de la letra respecto al número
            numNIF = numNIF % 23;
            letra='TRWAGMYFPDXBNJZSQVHLCKET';
            letra=letra.substring(numNIF,numNIF+1);

            if (letra!=letraNIF) {

                return res.status(400).json({
                    success: false,
                    msg: 'NIF INCORRECTO',
                })

              }else{

                return res.status(200).json({
                    success: true,
                    msg: 'NIF CORRECTO',
                })
              }

            
        });

        /*this.app.fetch('/validaNIFServer', (req, res))
            .then(response => response.json())
            .then(data => console.log(data));    */
/*
            this.app.post('/validaNIFServer',  (req, res) => {
            
                const numero = req.data('numero');
                const letraDNI = req.data('letra');

                
                //Validación de la letra respecto al número
                let numDNI = numero % 23;
                let letra='TRWAGMYFPDXBNJZSQVHLCKET';
                letra=letra.substring(numDNI,numDNI+1);
    
                if (letra!=letraNI) {
    
                    return res.status(400).json({
                        success: false,
                        msg: 'NIF INCORRECTO',
                    })
    
                  }else{
    
                    return res.status(200).json({
                        success: true,
                        msg: 'NIF CORRECTO',
                    })
                  }
    
                
            })

    }

    listen() {
        this.app.listen(port, function () {
            console.log('Escuchando el puerto', port)
        });
    }
}
module.exports = Server;

////*/