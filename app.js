const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post('/dniCliente', function (req, res) {

  let dni = req.body.nif;
  console.log(dni);

  let arrNIF = dni.toString().split('-');

  let numNIF = arrNIF[0];
  let letraNIF = arrNIF[1];
  let letra;
  let data;

  //Validación de la letra respecto al número
  numNIF = numNIF % 23;
  letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
  letra = letra.substring(numNIF, numNIF + 1);

  if (letra != letraNIF) {

    data = {
      'msg': "La letra no corresponde"
    }

  } else {

    data = {
      'msg': "NIF válido, la letra se corresponde "
    }
  }

  res.json(data);

});

app.post('/dniServer', function (req, res) {

  let numNIF = req.body.numero;
  let letraNIF = req.body.letra;

  let letra;
  let data;

  //Validación de la letra respecto al número

  let expresion_regular_numero = /[0123456789]{1,8}/;
  let expresion_regular_letra =/[A-Z]{1}/;

  if (expresion_regular_numero.test(numNIF) == true) {

    if (expresion_regular_letra.test(letraNIF) == true) {

      numNIF = numNIF % 23;

      letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letra.substring(numNIF, numNIF + 1);

      if (letra != letraNIF) {

        data = {
          'msg': "La letra no corresponde, el NIF no es válido"
        }

      } else {

        data = {
          'msg': "NIF válido, la letra se corresponde "
        }
      }
    }else{
      data = {
        'msg': "No ha escrito bien la letra, recuerde que debe estar en mayúsculas"
      }
    }
  }else{
    data = {
      'msg': "No ha escrito bien el número, recuerde que son 8 dígitos"
    }
  }





  res.json(data);

});

const puerto = 3000
app.listen(puerto, () => console.log('Escuchando el puerto', puerto));