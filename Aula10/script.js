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
        //Conferir se os alunos são adicionados ao array
        console.log(this.arrayAlunos)
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

    Listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        //Percorrer o Array
        for(let i = 0; i < this.arrayAlunos.length; i++){
            let trow = tbody.insertRow(); //Função que permite inserir uma nova linha

            let td_id = trow.insertCell();
            let td_nome = trow.insertCell();
            let td_media = trow.insertCell();
            let td_remover = trow.insertCell();

            td_id.innerText = this.arrayAlunos[i].id;
            td_nome.innerText = this.arrayAlunos[i].nomeAluno;
            td_media.innerText = this.arrayAlunos[i].mediaAluno;
            let bt_remover = document.createElement("button");
            bt_remover.textContent = "Remover";
            //bt_remover.setAttribute("onclick", "aluno.Remover("+this.arrayAluno[i].id+")")

            //Atribuindo o evento de clique ao botão, chamando a função Remover
            bt_remover.onclick = () => {
                aluno.Remover(this.arrayAlunos[i].id); //Passando o ID do aluno ao clicar
            };

            td_remover.appendChild(bt_remover);
        }
    }

    Remover(id){
        let tbody = documnet.getElementById('tbody')

        for(let i = 0; i < this.arrayAlunos.length; i++){
            //Percore aluno a aluno do arrayAluno até encontrar o id do parâmetro
            if(this.arrayAlunos[i].id == id){
                //Apagar da memória conforme o index
            }
        }
    }
}

var aluno = new Aluno();