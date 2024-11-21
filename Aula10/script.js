class Aluno {
    constructor() {
        this.id = 1;
        this.arrayAlunos = [];
    }

    Adicionar() {
        let aluno = this.LerDados();

        if (this.Validar(aluno)) {
            aluno.mediaAluno = this.CalcularMedia(aluno);
            this.arrayAlunos.push(aluno);
            this.AdicionarNaTabela(aluno);
            this.id++;
        }

        console.log(this.arrayAlunos);
    }

    LerDados() {
        return {
            id: this.id,
            nomeAluno: document.getElementById('nome').value,
            av1: parseFloat(document.getElementById('av1').value) || 0,
            av2: parseFloat(document.getElementById('av2').value) || 0,
            av3: parseFloat(document.getElementById('av3').value) || 0,
        };
    }

    Validar(aluno) {
        let msg = '';
    
        // Verifica se o nome foi preenchido
        if (aluno.nomeAluno.trim() === '') {
            msg += 'Informe o nome do aluno.\n';
        }
    
        // Verifica se as notas foram preenchidas
        if (isNaN(aluno.av1) || aluno.av1 === 0) {
            msg += 'Informe uma nota válida para a Avaliação 1.\n';
        }
        if (isNaN(aluno.av2) || aluno.av2 === 0) {
            msg += 'Informe uma nota válida para a Avaliação 2.\n';
        }
        if (isNaN(aluno.av3) || aluno.av3 === 0) {
            msg += 'Informe uma nota válida para a Avaliação 3.\n';
        }
    
        // Verifica se as notas estão dentro do intervalo permitido
        if (aluno.av1 < 0 || aluno.av1 > 10) {
            msg += 'A nota da Avaliação 1 deve estar entre 0 e 10.\n';
        }
        if (aluno.av2 < 0 || aluno.av2 > 10) {
            msg += 'A nota da Avaliação 2 deve estar entre 0 e 10.\n';
        }
        if (aluno.av3 < 0 || aluno.av3 > 10) {
            msg += 'A nota da Avaliação 3 deve estar entre 0 e 10.\n';
        }
    
        // Se houver mensagens de erro, exibe o popup
        if (msg !== '') {
            alert(msg);
            return false;
        }
    
        return true;
    }    

    CalcularMedia(aluno) {
        return ((2 * aluno.av1) + (2 * aluno.av2) + aluno.av3) / 5;
    }

    AdicionarNaTabela(aluno) {
        let tbody = document.querySelector('tbody');
        let novaLinha = tbody.insertRow();

        novaLinha.insertCell(0).textContent = aluno.id;
        novaLinha.insertCell(1).textContent = aluno.nomeAluno;
        novaLinha.insertCell(2).textContent = aluno.mediaAluno.toFixed(2);

        let celulaRemover = novaLinha.insertCell(3);
        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => this.Remover(aluno.id);
        celulaRemover.appendChild(btnRemover);
    }

    Remover(id) {
        this.arrayAlunos = this.arrayAlunos.filter(aluno => aluno.id !== id);

        let tbody = document.querySelector('tbody');
        tbody.innerHTML = '';

        this.arrayAlunos.forEach(aluno => this.AdicionarNaTabela(aluno));
    }

    Cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('av1').value = '';
        document.getElementById('av2').value = '';
        document.getElementById('av3').value = '';
    }
}

var aluno = new Aluno();
