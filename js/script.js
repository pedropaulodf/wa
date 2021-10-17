const iptTelefone = document.getElementById('telefone');

function abrirWa(){
  if(iptTelefone.value.length < 1){
    alert('Campo telefone em branco!');
    return;
  }
  if(limpaCaracteresEspacosTelefone(iptTelefone.value).length !== 11){
    alert('Telefone faltando número!');
    return;
  }
  window.open(`https://wa.me/+55${limpaCaracteresEspacosTelefone(iptTelefone.value)}`);
}

function limpaCaracteresEspacosTelefone(tel){
  return tel.replace(/[^A-Z0-9]/ig, "");
}