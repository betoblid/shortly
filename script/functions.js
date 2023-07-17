//fazendo um evento que vai ser responsavel por abrir e fechar o menu do site

let btn_menu = document.getElementById("menu_btn");

btn_menu.addEventListener("click", () => {

    let nav = document.getElementById("nav_bar")

    //condição caso tenha o hidden ele tirará e se não tiver ele colocará

    if(nav.classList.contains("hidden")){

        nav.classList.remove("hidden")
    }else{
        nav.classList.add("hidden")
    }

   
})

//essa parte se dedicará ao controle de encurtamento de links..

let btn_enviar = document.getElementById("enviar");


async function urlcurt(){

    //api usada no projeto
    let api = `https://api.shrtco.de/v2/shorten?url=`;
    //um input que receberar a ulr
    let url = document.getElementById("cxurl");
    //a api que receberá o req e responderá com o link encurtado.
    const res = await fetch(`${api}${url.value}`);
    //pegara a resposta e converte ela para json
    const result = await res.json();

    
    let tex_url_encurtada = document.getElementById("resu");
    
    tex_url_encurtada.innerHTML += `
    <div class="card">
        <div id="resu_url">
            <p>${url.value}</p>
        </div>
        <div id="resu_encurt">
            <input id="copy_text" type="text" value="${result.result.short_link}" disabled>
            <div class="box_btn">
                <button id="gerar" onclick="copiarTexto()">Copy</button>
            </div>
        </div>
    </div>`;

}

function copiarTexto() {
    let textoCopiado = document.getElementById("copy_text");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("O texto é: " + textoCopiado.value);
}


btn_enviar.addEventListener("click", urlcurt);


