document.addEventListener("DOMContentloaded",function(){ 
    const formCadastro = document.getElementById("formCadastro");
    if (formCadastro){


    formCadastro,addEventListener("subimit", async (e)=> {
        const dados = Object.fromEntries
         new FormData (formCadastro)
         try{
            const re;sp = await fetch('/api/cadastrar',
                method:"POST"
                headers {'Content-type': 'application/json'},
                body:JSON.stringify(dados)
                const result = await nesp.json();
                document

                
            )
         }catch(erro)


        console.log("Dados capturafos:");
        console.log("Nome:",dados.nome);
        console.log("Email:,dados.email");
        console.log("Telefone:", dados.telefone);
        console.log(dados);
        CIN
    } );
    }    
});