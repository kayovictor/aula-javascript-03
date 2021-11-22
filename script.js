//Envio da atividade de fixação 01 - turma 2
//atividade 22/09
//01
function carteiraDeHabilitacao(n1){
    var resultado;
    if(n1 >= 18){
      resultado = 'Que legal! Você já pode ter a carteira de habilitação.';
      return resultado; 
    }
    else {
      resultado = 'Poxa, que pena! Você ainda não pode ter a carteira de habilitação.';
      return resultado;
    }
  }

  console.log(carteiraDeHabilitacao(18));
  
  //02
  function ensinoMedio(pergunta){
    var resultado;
    if(pergunta === 'sim'){
      resultado = 'Poxa, que legal!';
      return resultado;
    }
    else if(pergunta === 'não') {
      resultado = 'Falta pouco! Logo você termina.';
      return resultado;
    }
  }

  console.log(ensinoMedio('sim'));

  //Envio da atividade de fixação 02
  //01
function operacional(tipo){
    var sistema_operacional;
    switch(tipo){
      case 'linux':
       sistema_operacional = ' O Linux é um sistema operacional de código aberto' ;
        return sistema_operacional;
        break;
      case 'windows':
        sistema_operacional = 'O Windows é um sistema operacional da empresa Microsoft.';
        return sistema_operacional;
        break;
      case 'macOS':
        sistema_operacional = 'O macOS é um sistema operacional da empresa Apple.';
         return sistema_operacional;
        break;
        case 'Chrome':
        sistema_operacional = 'O Chrome OS é um sistema operacional da empresa Google.';
         return sistema_operacional;
        break;
      default:
        sistema_operacional = 'Há a possibilidade de você estar utilizando um sistema mobile.';
         return sistema_operacional;     
  }
  }

  console.log(operacional('Chrome'));

  //Envio da atividade de fixação 03
  //01
  function valores02(x = 5, y = 7){
    if(x < y){
        console.log('Olá mundo!');
    }
    else if(x > y){
        console.log('Mundo, olá!');
    }
    else if(x === y){
        console.log('Adeus!');
    }
  }

  console.log(valores02(x = 5, y = 7));

//02
function filmeQueTaPassado(filme){
  var filmePassado;
  switch(filme){
    case 'banana':
      filmePassado = 'O filme é Os minions.';
      console.log(filmePassado);
      break;
    case 'laranja':
      filmePassado = 'O filme é Laranja Mecânica.';
      console.log(filmePassado);
      break;
      case 'maça':
      filmePassado = 'O filme é Branca de neve.';
      console.log(filmePassado);
      break;
      default:
      filmePassado = 'O filme é Branca de neve.';
      console.log(filmePassado);
  }
}

console.log(filmeQueTaPassado('banana'));