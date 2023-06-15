
//Dinámicas da página "dinamic1.html"

function ValidaCPF() {

    var cpf = document.getElementById("cpf").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
    if (cpfValido.test(cpf) == false) {

        cpf = cpf.replace(/\D/g, ""); //Remove tudo o que não é dígito

        if (cpf.length == 11) {
            cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
            cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
            //de novo (para o segundo bloco de números)
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

            let cpfFormatado = document.getElementById("cpf").value = cpf;
        } else {
            document.getElementById("cpf").value = "";
        }

    }
}

function verTel() {
    var tel = document.getElementById("tel").value;

    if (tel.length < 11) {
        document.getElementById("tel").value = "";
    } else {

        if (tel[11] != null) {

            telCompleto = "(" + tel[0] + tel[1] + ") " +
                tel[2] + tel[3] + tel[4] + tel[5] + tel[6] + "-" +
                tel[7] + tel[8] + tel[9] + tel[10] + tel[11];

        } else {

            telCompleto = "(" + tel[0] + tel[1] + ") " +
                tel[2] + tel[3] + tel[4] + tel[5] + tel[6] + "-" +
                tel[7] + tel[8] + tel[9] + tel[10];
        }
    }
    document.getElementById("tel").value = telCompleto;
}

function dinamic1() {
    let cpf = document.getElementById("cpf").value                 //Valor comum
    let nome = document.getElementById("nome").value               //Valor comum
    let estadoCiv = document.getElementById("estadoCiv").value     //Valor que precisa ser tratado!!
    let uf = document.getElementById("uf").value                   //Valor que precisa ser tratado!!
    let tel = document.getElementById("tel").value                 //Valor comum
    let email = document.getElementById("email").value             //Valor comum

    let end = document.getElementById("end").value
    let bai = document.getElementById("bai").value
    let cep = document.getElementById("cep").value

    if (cpf && nome && estadoCiv && uf && tel && email != 0) {

        if (estadoCiv == 1) {                                        //Tratamento dos dados
            estadoCiv = "Solteiro(a)"                              //do "Estado Civil",
        } else if (estadoCiv == 2) {                                 //embora esse tratamento
            estadoCiv = "Casado(a)"                                //fosse feito no banco
        } else {                                                   //de dados
            estadoCiv = "Divorciado(a)"                            //
        }

        if (uf == 1) {                                               //Tratamento dos dados
            uf = "Rondônia"                                        //da "Unidade Federativa",
        } else if (uf == 2) {                                         //embora esse tratamento
            uf = "Acre"                                            //fosse feito no banco
        } else if (uf == 3) {                                         //de dados
            uf = "Amazonas"
        } else if (uf == 4) {
            uf = "Roraima"
        } else if (uf == 5) {
            uf = "Pará"
        } else if (uf == 6) {
            uf = "Amapá"
        } else if (uf == 7) {
            uf = "Tocantins"
        } else if (uf == 8) {
            uf = "Maranhão"
        } else if (uf == 9) {
            uf = "Piauí"
        } else if (uf == 10) {
            uf = "Ceará"
        } else if (uf == 11) {
            uf = "Rio Grande do Norte"
        } else if (uf == 12) {
            uf = "Paraíba"
        } else if (uf == 13) {
            uf = "Pernambuco"
        } else if (uf == 14) {
            uf = "Alagoas"
        } else if (uf == 15) {
            uf = "Sergipe"
        } else if (uf == 16) {
            uf = "Bahia"
        } else if (uf == 17) {
            uf = "Minas Gerais"
        } else if (uf == 18) {
            uf = "Espírito Santo"
        } else if (uf == 19) {
            uf = "Rio de Janeiro"
        } else if (uf == 20) {
            uf = "São Paulo"
        } else if (uf == 21) {
            uf = "Paraná"
        } else if (uf == 22) {
            uf = "Santa Catarina"
        } else if (uf == 23) {
            uf = "Rio Grande do Sul"
        } else if (uf == 24) {
            uf = "Mato Grosso do Sul"
        } else if (uf == 25) {
            uf = "Mato Grosso"
        } else if (uf == 26) {
            uf = "Goiás"
        } else if (uf == 27) {
            uf = "Distrito Federal"                                //Fim do tratamento dos dados
        }

        alert("Seus dados são: " + "\n" +                   //com console.log não funciona direito ;-;
            "CPF: " + cpf + "\n" +
            "Nome: " + nome + "\n" +
            "Estado Civil: " + estadoCiv + "\n" +
            "Unidade Federativa: " + uf + "\n" +
            "Telefone de contato: " + tel + "\n" +
            "Email: " + email + "\n" +
            "Endereço: " + end + "\n" +
            "Bairro: " + bai + "\n" +
            "CEP: " + cep);
        //alert("Dados enviados! Verifique o banco de dados... (nesse caso, o console :P)")
    } else {
        alert("Voce nao preencheu tudo!")
    }
}

//Dinámicas da página "dinamic2.html"

function dinamic2() {
    let a = (document.getElementById("altura").value).replace(",",".");
    let p = (document.getElementById("peso").value).replace(",",".");

    let imc = p / (a ** 2);

    let line1 = document.getElementById("1");
    let line2 = document.getElementById("2");
    let line3 = document.getElementById("3");
    let line4 = document.getElementById("4");
    let line5 = document.getElementById("5");
    let line6 = document.getElementById("6");

    line1.style.color = "black";
    line2.style.color = "black";
    line3.style.color = "black";
    line4.style.color = "black";
    line5.style.color = "black";
    line6.style.color = "black";

    if (imc <= 18.5) {

        line1.style.color = "red";

    } else if (imc >= 18.5 && imc <= 24.99) {

        line2.style.color = "green";

    } else if (imc >= 25 && imc <= 29.99) {

        line3.style.color = "yellow";

    } else if (imc >= 30 && imc <= 34.99) {

        line4.style.color = "red";

    } else if (imc >= 35 && imc <= 39.99) {

        line5.style.color = "red";

    } else {

        line6.style.color = "red";

    }

    let imcn = document.getElementById("imc");
    imcn.textContent = imc;
}

//Dinámicas da página "dinamic3.html"

function inputN(evento){
    var char = String.fromCharCode(evento.which);
    if(!(/[0-9.,]/.test(char))){
        evento.preventDefault();
    }
}

function dinamic3() {
    let C = document.getElementById("dinheiro").value.replace(",", ".");
    let I = (document.getElementById("juros").value.replace(",", ".")) / 100
    let T = document.getElementById("parcelas").value

    let M

    M = C * (1 + I) ** T;

    var valFinal = document.getElementById("valFinal");
    valFinal.textContent = "R$ " + (parseFloat(M).toFixed(2)).replace(".",",");;

    console.log(C);
    console.log(I);
    console.log(T);
    console.log(M);
}

//Dinámicas da página "dinamic4.html"

function dinamic4() {
    let luc = (document.getElementById("luc").value.replace(",", ".")) / 100;
    let tra = parseFloat(document.getElementById("tra").value.replace(",", "."));
    let arm = parseFloat(document.getElementById("arm").value.replace(",", "."));
    let com = parseFloat(document.getElementById("com").value.replace(",", "."));
    let price = parseFloat(document.getElementById("price").value.replace(",", "."));

    let total = price * (1 + (luc + tra + arm + com) / 100)

    var valFinal = document.getElementById("valFinal");
    valFinal.textContent = "R$ " + (total).toFixed(2);

    console.log(luc);
    console.log(tra);
    console.log(arm);
    console.log(com);
    console.log(price);
}

//Dinámicas da página "dinamic5.html"

function dinamic5() {

    let body = document.querySelector('body');
    let navbah = document.getElementById('navbah');

    var img = document.getElementById('change').src;
        if (img.indexOf('moon.png')!=-1) {
            document.getElementById('change').src  = '/img/sun.png';
        }
         else {
           document.getElementById('change').src = '/img/moon.png';
       }

    navbah.classList.toggle("navbar-dark");
    body.classList.toggle("dark");

    console.log(navbah)
}