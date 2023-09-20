username = 'joao';
password = '1234567';


function autenticar(){
    var lgn = document.getElementById('logon').value;
    var pwd = document.getElementById('password').value;

    if
        (lgn == username & pwd == password)
        alert('Tudo certo')
    else{
        alert('Está errado o seu username ou senha');
    }
}