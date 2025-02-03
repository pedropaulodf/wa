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

function isOnlyNumbers(str) {
  // Remove todos os caracteres que não são números
  let cleanedStr = str.replace(/[^0-9]/g, "");

  // Verifica se a string resultante contém apenas números e não está vazia
  return cleanedStr.length > 0 && /^[0-9]+$/.test(cleanedStr);
}

async function checkClipboard() {
  try {
    const clipboardText = await navigator.clipboard.readText();
    const _clipboardText = clipboardText.replace(/[^0-9]/g, "");

    if (isOnlyNumbers(clipboardText)) {
      iptTelefone.value = $("#telefone").masked(_clipboardText);
      document.getElementById("telefone").focus();
    } else {
    }
  } catch (err) {
    console.error("Erro ao acessar a área de transferência: ", err);
  }
}

setTimeout(checkClipboard, 1000); // Verifica a área de transferência
