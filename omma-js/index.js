console.log("Omma - receita com afeto\n");

let receita =
{
    titulo: "Bolo de cenoura",
    nivelDificuldade: "fácil",
    listaIngrediente: ["cenoura", "farinha de trigo", "ovos", "leite"],
    preparo: "Misture tudo e coloque numa forma untada para assar a 200 °C",
    linkVideo: "http://youtube.com",
    vegana: false
};

let receitas = [

    {
        titulo: "Bolo de cenoura",
        nivelDificuldade: "fácil",
        listaIngrediente: ["cenoura", "farinha de trigo", "ovos", "leite"],
        preparo: "Misture tudo e coloque numa forma untada para assar a 200 °C",
        linkVideo: "http://youtube.com",
        vegana: false
    },
    {
        titulo: "Tabule",
        nivelDificuldade: "fácil",
        listaIngrediente: ["trigo hidratado", "tomate", "pepino", "suco de limão"],
        preparo: "Corte tudo bem pequeno e misture com suco de limão e azeite",
        linkVideo: "http://youtube.com",
        vegana: true

    }
];

//console.log(receitas.titulo);

const cadastrarReceita = (titulo, nivelDificuldade, listaIngrediente, preparo, linkVideo, vegana) => {
    let novaReceita = {
        titulo: titulo,
        nivelDificuldade: nivelDificuldade,
        listaIngrediente: listaIngrediente,
        preparo: preparo,
        linkVideo: linkVideo,
        vegana: vegana
    };

    receitas.push(novaReceita);
    console.log(`Nova receita cadastrada:  ${novaReceita.titulo}`);
}

cadastrarReceita("Misto Quente",
    "fácil",
    ["pão", "queijo", "presunto"],
    "Junta tudo e esquenta",

    false
);

cadastrarReceita("Pastel de Carne",
    "fácil",
    ["carne moida, massa de pastel"],
    "Coloque a carne dentro do pastel e feche, após fechar frite em oléo quente",
    "htpp://youtube.com",
    false
);


function exibirReceita() {
    receitas.forEach(receita => {
        console.log(`
            Título: ${receita.titulo}
            Nível de Dificuldade: ${receita.nivelDificuldade}
            Ingredientes: ${receita.listaIngrediente.join(", ")}
            Modo de Preparo: ${receita.preparo}
            Link do Vídeo: ${receita.linkVideo}
            Vegana: ${receita.vegana ? 'sim' : 'não'}
            `);
    });
}


const removerReceita = (tituloReceita) => {
    index = receitas.findIndex(receitas => receitas.titulo === tituloReceita);
    if (index !== -1) {
        receitas.slice(index, 1);
        console.log = ("Receita removida");
    }
    else {
        console.log("Receita não encontrada");
    }
}


exibirReceita();

removerReceita("Tabule");

exibirReceita();
