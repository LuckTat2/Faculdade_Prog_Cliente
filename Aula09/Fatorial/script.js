function Fatorial() {
    var input = document.getElementById("numero");
    var valorFatorial = parseInt(input.value);
    
    if (input.value === "") {
        alert("Por favor, insira um número!");
        return;
    }

    if (valorFatorial < 0) {
        alert("Valor incorreto!");
    } else if (valorFatorial === 0) {
        document.getElementById("resultado").innerText = 1;
    } else {
        var result = valorFatorial;
        for (var i = 1; i < valorFatorial; i++) {
            result *= i;
        }   
        document.getElementById("resultado").innerText = result;
    }
}
