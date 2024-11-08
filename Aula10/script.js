class Aluno {
    constructor(){
        this.id = 1
        this.arrayAlunos = []
    }

    Adicionar(){
        //1º Ler os dados
        let aluno = this.LerDados()

        //2º Validar os dados
        /*let validado = this.Validar(aluno)
        if(validado == true){
            console.log("Aqui!")
        }*/

        if(this.Validar(aluno) == true){

        //3º Salvar os dados
        //this.Salvar(aluno)
        this.AdicionarNaTabela(aluno)
        this.id++
        }
    }

    //Ler as informações e colocá-las dentro de um objeto
    LerDados(){
        let aluno = {}

        aluno.id = this.id
        aluno.nomeAluno = document.getElementById('nome').value
        aluno.mediaAluno = document.getElementById('media').value

        //console.log(aluno)

        return aluno
    }

    //Validar os dados
    Validar(aluno){
        let msg=''

        if(aluno.nomeAluno == ''){
            msg = msg + 'Informe o nome do aluno \n'
        }
        if(aluno.mediaAluno == ''){
            msg += 'Informe a média final do aluno \n'
        }
        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    Salvar(aluno){
        this.arrayAlunos.push(aluno)
        this.id++
    }

    AdicionarNaTabela(aluno){
        let tbody = document.querySelector('tbody')

        //Cria uma nova linha na Tabela
        let novaLinha = tbody.insertRow()

        //Adiciona as células com os dados do aluno
        let celulaId = novaLinha.insertCell(0)
        let celulaNome = novaLinha.insertCell(1)
        let celulaMedia = novaLinha.insertCell(2)

        celulaId.textContent = aluno.id
        celulaNome.textContent = aluno.nomeAluno
        celulaMedia.textContent = aluno.mediaAluno
    }
}

var aluno = new Aluno();