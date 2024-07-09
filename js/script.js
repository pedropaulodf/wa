const iptTelefone = document.getElementById("telefone");

function abrirWa() {
  if (iptTelefone.value.length < 1) {
    alert("Campo telefone em branco!");
    return;
  }
  // if (limpaCaracteresEspacosTelefone(iptTelefone.value).length !== 11) {
  //   alert("Telefone faltando número!");
  //   return;
  // }
  window.open(
    `https://wa.me/+55${limpaCaracteresEspacosTelefone(iptTelefone.value)}`
  );
}

function abrirWaWeb() {
  if (iptTelefone.value.length < 1) {
    alert("Campo telefone em branco!");
    return;
  }
  // if (limpaCaracteresEspacosTelefone(iptTelefone.value).length !== 11) {
  //   alert("Telefone faltando número!");
  //   return;
  // }
  window.open(
    `https://web.whatsapp.com/send/?phone=%2B55${limpaCaracteresEspacosTelefone(
      iptTelefone.value
    )}&text&type=phone_number&app_absent=0`
  );
}

function limpaCaracteresEspacosTelefone(tel) {
  return tel.replace(/[^A-Z0-9]/gi, "");
}

// Focus no input
document.getElementById("telefone").focus();

// Quando apertar enter
let input = document.getElementById("telefone");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btnweb").click();
  }
});
