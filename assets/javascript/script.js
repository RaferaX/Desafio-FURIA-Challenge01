// Seletores de elementos do DOM
const chatMensagens = document.getElementById('chat-mensagens');
const inputMensagem = document.getElementById('input-mensagem');
const btnEnviar = document.getElementById('btn-enviar');
const painelChat = document.getElementById('chat-container');
const botaoChatFlutuante = document.querySelector('.botao-chat-flutuante a');
const botaoFecharChat = document.querySelector('.chat-header .fechar-chat');
const temaBotao = document.getElementById('tema-botao');
const body = document.body;

// Variável global para manter o contexto da última interação
let ultimoContexto = null;

// Função para adicionar uma mensagem ao chat
function adicionarMensagem(texto, isUsuario = false) {
    const divMensagem = document.createElement('div');
    divMensagem.classList.add(isUsuario ? 'mensagem-usuario' : 'mensagem-ia');

    if (!isUsuario) {
        divMensagem.innerHTML = `
            <span class="nome-ia">Pantero</span>
            <img src="/img/bot/pantero-bot.png" alt="Ícone do Bot" class="foto-ia-imagem">
            <p>${texto}</p>
        `;
    } else {
        divMensagem.innerHTML = `<p>${texto}</p>`;
    }
    chatMensagens.appendChild(divMensagem);
    chatMensagens.scrollTop = chatMensagens.scrollHeight;
}

function obterResposta(mensagem) {
    mensagem = mensagem.toLowerCase().trim();

    switch (mensagem) {
        case 'furia':
            ultimoContexto = null;
            return "Olá! Que bom que você quer saber mais sobre a FURIA.<br><br>" +
                   "Você gostaria de saber sobre:<br><br>" +
                   "1. Nossos times<br><br>" +
                   "2. Nossa história<br><br>" +
                   "3. Nossos patrocinadores<br><br>" +
                   "4. Nossas redes sociais<br><br>" +
                   "5. Saiba mais do Pantero Bot<br><br>" +
                   "Digite o número da opção desejada.";

        case '1':
        case 'times':
            ultimoContexto = 'times';
            return "A FURIA compete nas seguintes modalidades:<br><br>" +
                   "- Apex Legends<br><br>" +
                   "- Counter-Strike 2<br><br>" +
                   "- Futebol de 7<br><br>" +
                   "- League of Legends<br><br>" +
                   "- PUBG<br><br>" +
                   "- Rainbow Six<br><br>" +
                   "- Rocket League<br><br>" +
                   "- Valorant<br><br>" +
                   "Sobre qual time você gostaria de saber mais?";

        case '2':
        case 'história':
            ultimoContexto = 'historia';
            return "A FURIA Esports foi fundada em 8 de agosto de 2017, em Uberlândia, Brasil, " +
                   "por Jaime Pádua, André Akkari, Cristian Guedes e Nicholas Nogueira.<br><br>" +
                   "Começando sua jornada no Counter-Strike, a organização rapidamente ganhou reconhecimento " +
                   "no cenário brasileiro e internacional, expandindo-se para diversas outras modalidades e " +
                   "construindo uma reputação de paixão e garra.";

        case '3':
        case 'patrocinadores':
            ultimoContexto = 'patrocinadores';
            return "A FURIA possui os seguintes patrocinadores:<br><br>" +
                   "- Cruzeiro do Sul Virtual<br>" +
                   "- Adidas<br>" +
                   "- Lenovo Legion<br>" +
                   "- PokerStars<br>" +
                   "- Red Bull<br>" +
                   "- Hellmann's<br><br>" +
                   "Digite 'voltar' para retornar ao menu anterior.";

        case '4':
        case 'redes sociais':
            ultimoContexto = 'redes sociais';
            return "A FURIA possui as seguintes redes sociais escolha alguma delas:<br><br>" +
                   "- Instagram<br>" +
                   "- TikTok<br>" +
                   "- Twitter<br><br>" +
                   "Digite 'voltar' para retornar ao menu anterior.";

        case '5':
        case 'pantero':
            ultimoContexto = 'pantero';
            return "O Pantero Bot foi desenvolvido para oferecer informações rápidas e organizadas:<br><br>" +
                   "- Objetivo<br>" +
                   "- Frameworks<br>" +
                   "- Dados<br><br>" +
                   "Digite 'voltar' para retornar ao menu anterior.";

        case 'voltar':
            
        const contextoAnterior = ultimoContexto;
        ultimoContexto = 'menu_principal';
        
        if (contextoAnterior === 'apex legends') {
            return "Você voltou ao menu de Apex Legends. O que mais gostaria de saber?<br><br>" +
                   "- jogadores<br><br>" +
                   "- títulos<br><br>" +
                   "- comissão técnica";
        
        } else if (contextoAnterior === 'counter-strike 2') {
            return "Você voltou ao menu de Counter-Strike 2. O que mais gostaria de saber?<br><br>" +
                   "- jogadores<br><br>" +
                   "- títulos<br><br>" +
                   "- comissão técnica";
        
        } else if (contextoAnterior === 'futebol de 7') {
            return "Você voltou ao menu de Futebol de 7. O que mais gostaria de saber?<br><br>" +
                   "- Jogadores<br><br>" +
                   "- Comissão Técnica<br><br>" +
                   "- Presidentes<br><br>" +
                   "- Classificação";
        
        } else if (contextoAnterior === 'historia' || contextoAnterior === 'conquistas') {
            return "Você voltou ao menu principal. O que mais gostaria de saber?<br><br>" +
                   "1. Nossos times<br><br>" +
                   "2. Nossa história<br><br>" +
                   "3. Nossas patrocinadores<br><br>" +
                   "4. Nossas redes sociais<br><br>" +
                   "5. Saiba mais do Pantero Bot<br><br>" ;
        
        } else if (contextoAnterior === 'times') {
            return "Você voltou ao menu principal. O que mais gostaria de saber?<br><br>" +
                   "1. Nossos times<br><br>" +
                   "2. Nossa história<br><br>" +
                   "3. Nossas patrocinadores<br><br>" +
                   "4. Nossas redes sociais<br><br>" +
                   "5. Saiba mais do Pantero Bot<br><br><br>";
        
        } else {
            return "Você está no menu principal. Digite o número da opção desejada.";
        }
        
        break;
    }
        

    if (mensagem.includes('objetivo')) {
        ultimoContexto = 'objetivo';
        return "Este é o objetivo para o qual o Pantero Bot foi desenvolvido:<br><br>" +
        "Desenvolver um caso de uso conversacional relacionado à FURIA nesse caso (web chat)<br>" +
        "Crie um chat para os fãs do time de CS da FURIA. O Chat deve conter tudo que você, como fã,<br>" +
        "Apesar de ser fã da FURIA, decidi incluir outras equipes que acompanho e que também são populares entre outros fãs, para que o conteúdo não ficasse tão nichado.<br><br>" +
        "Digite 'voltar' para retornar ao menu anterior.";
    }

    if (mensagem.includes('frameworks')) {
        ultimoContexto = 'frameworks';
        return "Este é o objetivo para o qual o Pantero Bot foi desenvolvido:<br><br>" +
        "Os frameworks utilizados no projeto foram <strong>HTML, CSS e JavaScript</strong>, trazendo responsividade ao site com o uso combinado de Media Queries.<br><br>" +
        "Digite 'voltar' para retornar ao menu anterior.";
    }

    if (mensagem.includes('dados')) {
        ultimoContexto = 'dados';
        return "Este é o objetivo para o qual o Pantero Bot foi desenvolvido:<br><br>" +
        "O <Strong>Pantero Bot</strong> foi desenvolvido para oferecer respostas rápidas e confiáveis, utilizando tecnologias modernas de inteligência artificial. Atualizado com informações até 1º de maio de 2025, ele foi criado para ajudar usuários com eficiência, usando ferramentas avançadas de processamento de linguagem natural e sistemas de automação inteligentes.<br><br>" +
        "Digite 'voltar' para retornar ao menu anterior.";
    }

    if (mensagem.includes('instagram')) {
        ultimoContexto = 'instagram';
        return "Você gostaria de saber sobre os perfis do Instagram da Furia:<br><br>" +
       "Todos os Perfis:<br><br>" +
       "@furiagg - <a href='https://www.instagram.com/furiagg/' target='_blank'>Clique Aqui</a><br><br>" +
       "@furia.football - <a href='https://www.instagram.com/furia.football/' target='_blank'>Clique Aqui</a><br><br>" +
       "@furia.redram - <a href='https://www.instagram.com/furia.redram/' target='_blank'>Clique Aqui</a><br><br>" +
       "@furia.lol - <a href='https://www.instagram.com/furia.lol/' target='_blank'>Clique Aqui</a><br><br>" +
       "@furia.valorant - <a href='https://www.instagram.com/furia.valorant/' target='_blank'>Clique Aqui</a><br><br>" +
       "@furia.r6 - <a href='https://www.instagram.com/furia.r6/' target='_blank'>Clique Aqui</a><br><br>" +
       "@furia.apparel - <a href='https://www.instagram.com/furia.apparel/' target='_blank'>Clique Aqui</a><br><br>" +
       "@themovegg - <a href='https://www.instagram.com/themovegg/' target='_blank'>Clique Aqui</a><br><br>" +
       "Digite 'voltar' para retornar ao menu anterior.";
    }

    if (mensagem.includes('tiktok')) {
        ultimoContexto = 'tiktok';
        return "Você gostaria de saber sobre os perfis do Tiktok da Furia:<br><br>" +
        "Todos os Perfis:<br><br>" +
        "furia gaming - <a href='https://www.tiktok.com/@furia' target='_blank'>Clique Aqui</a><br><br>" +
        "@furia.football - <a href='https://www.tiktok.com/@furia.football' target='_blank'>Clique Aqui</a><br><br>" +
        "furiagg - <a href ='https://www.tiktok.com/@furiagg' target='_blank'>Clique Aqui</a><br><br>" +
        "Digite 'voltar' para retornar ao menu anterior.";
    }

    if (mensagem.includes('twitter')) {
        ultimoContexto = 'twitter';
        return "Você gostaria de saber sobre os perfis do Twitter/X da Furia:<br><br>" +
        "Todos os Perfis:<br><br>" +
        "@FURIA - <a href='https://x.com/FURIA' target='_blank' >Clique Aqui</a><br><br>" +
        "@FURIA_USA - <a href='https://x.com/FURIA_USA' target='_blank'>Clique Aqui</a><br><br>" +
        "Digite 'voltar' para retornar ao menu anterior.";
    }

    if (mensagem.includes('apex legends')) {
        ultimoContexto = 'apex legends';
        return "Você gostaria de saber sobre o time de Apex Legends:<br><br>- jogadores<br><br>- títulos<br><br>- comissão técnica<br><br>Digite o que você procura.";
    }

    if (mensagem.includes('counter-strike') || mensagem.includes('cs2') || mensagem.includes('counterstrike')) {
        ultimoContexto = 'counter-strike 2';
        return "Você gostaria de saber sobre o time de Counter-Strike 2:<br><br>- jogadores<br><br>- títulos<br><br>- comissão técnica<br><br>Digite o que você procura.";
    }

    if (mensagem.includes('futebol de 7')) {
        ultimoContexto = 'futebol de 7';
        return "Você gostaria de saber sobre o time de Futebol de 7:<br><br>- Jogadores<br><br>- Comissão Técnica<br><br>- Presidentes<br><br>- Classificação<br><br>Digite o que você procura.";
    }

    if (mensagem.includes('league of legends') || mensagem.includes('lol')) {
        ultimoContexto = 'league of legends';
        return "Você gostaria de saber sobre o time de League of Legends:<br><br>- Jogadores<br><br>- Comissão Técnica<br><br>- Títulos<br><br>Digite o que você procura.";
    }

    if (mensagem.includes('pubg')) {
        ultimoContexto = 'pubg';
        return "Você gostaria de saber sobre o time de PUBG:<br><br>- Jogadores<br><br>- Comissão Técnica<br><br>- Títulos<br><br>Digite o que você procura.";
    }

    if (mensagem.includes('rainbow six')) {
        ultimoContexto = 'rainbow six';
        return "Você gostaria de saber sobre o time de Rainbow Six:<br><br>- Jogadores<br><br>- Comissão Técnica<br><br>- Títulos<br><br>Digite o que você procura.";
    }

    if (mensagem.includes('rocket league')) {
        ultimoContexto = 'rocket league';
        return "Você gostaria de saber sobre o time de Rocket League:<br><br>- Jogadores<br><br>- Comissão Técnica<br><br>- Títulos<br><br>Digite o que você procura.";
    }

    if (mensagem.includes('valorant')) {
        ultimoContexto = 'valorant';
        return "Você gostaria de saber sobre o time de Valorant:<br><br>- Jogadores<br><br>- Comissão Técnica<br><br>- Títulos<br><br>Digite o que você procura.";
    }

    // AÇÕES DENTRO DOS CONTEXTOS
    if (ultimoContexto === 'apex legends') {
        switch (mensagem) {
            case 'jogadores':
                return "<strong>Jogadores Ativos de Apex Legends:</strong><br><br>" +
                    "ID: ImMadness<br>Nome: Ryan Schlieve<br>Entrou em: 2023-12-17<br><br>" +
                    "ID: Keon<br>Nome: Keon Berghout<br>Entrou em: 2023-12-17<br><br>" +
                    "Gostaria de saber sobre os títulos ou a comissão técnica?<br><br>Digite 'voltar' para retornar ao menu Anterior.";
            case 'titulos':
            case 'títulos':
                return "<strong>Histórico e Conquistas do Time de Apex Legends:</strong><br><br>" +
                    "<strong>Torneios:</strong><br><br>" +
                    "Data: 2025-02-02<br>" +
                    "Colocação: 8th<br>" +
                    "Tier: S-Tier<br>" +
                    "Torneio: ALGS: 2024 Championship<br>" +
                    "Prêmio: $60,000<br><br>" +

                    "Data: 2024-12-15<br>" +
                    "Colocação: 4th<br>" +
                    "Tier: A-Tier<br>" +
                    "Torneio: ALGS: 2024 Regional Finals - Americas<br>" +
                    "Prêmio: $8,000<br><br>" +

                    "Data: 2024-09-09<br>" +
                    "Colocação: 1st<br>" +
                    "Tier: B-Tier<br>" +
                    "Torneio: Code Red - Freedom: Night Life<br>" +
                    "Prêmio: $10,000<br><br>" +

                    "Data: 2024-08-18<br>" +
                    "Colocação: 1st<br>" +
                    "Tier: B-Tier<br>" +
                    "Torneio: Knights Arena Carnage Cup #7<br>" +
                    "Prêmio: $4,000<br><br>" +

                    "Data: 2024-08-12<br>" +
                    "Colocação: 1st<br>" +
                    "Tier: B-Tier<br>" +
                    "Torneio: Code Red - Freedom: The Edge<br>" +
                    "Prêmio: $8,900<br><br>" +

                    "Data: 2024-07-14<br>" +
                    "Colocação: 3rd<br>" +
                    "Tier: A-Tier<br>" +
                    "Torneio: ALGS: 2024 Split 2 Pro League - North America<br>" +
                    "Prêmio: $12,000<br><br>" +

                    "Data: 2023-05-08<br>" +
                    "Colocação: 4th<br>" +
                    "Tier: A-Tier<br>" +
                    "Torneio: ALGS: 2023 Split 2 Pro League - North America<br>" +
                    "Prêmio: $9,000<br><br>" +

                    "Data: 2022-08-18<br>" +
                    "Colocação: 1st<br>" +
                    "Tier: B-Tier<br>" +
                    "Torneio: Intel Creator Challenge<br>" +
                    "Prêmio: $4,000<br><br>" +

                    "Data: 2022-07-22<br>" +
                    "Colocação: 1st<br>" +
                    "Tier: B-Tier<br>" +
                    "Torneio: Atlanta Premier Invitational<br>" +
                    "Prêmio: $6,000<br><br>" +
                    "Data: 2022-07-10<br>" +
                    "Colocação: 2nd<br>" +
                    "Tier: S-Tier<br>" +
                    "Torneio: ALGS: 2022 Championship<br>" +
                    "Prêmio: $300,000<br><br>" +
                    "Digite 'voltar' para retornar ao menu de Anterior";
            case 'comissão técnica':
                return "<strong>Comissão Técnica de Apex Legends:</strong><br><br>" +
                    "ID: <strong>raizen</strong><br>Nome: Jaime Pádua<br>Cargo: CEO & Owner<br>Entrou em: 2017-08-08<br><br>" +
                    "ID: <strong>Bocek</strong><br>Nome: Henry Caballero<br>Cargo: NA Director<br>Entrou em: 2021-07-07<br><br>" +
                    "ID: <strong>Jxmo</strong><br>Nome: Jamison Moore<br>Cargo: Head Coach<br>Entrou em: 2023-09-25<br><br>" +
                    "ID: <strong>NatiNunez</strong><br>Nome: Natalia<br>Cargo: Streamer<br>Entrou em: 2022-08-03<br><br>" +
                    "ID: <strong>3DShiro</strong><br>Nome: Emily S.<br>Cargo: Streamer<br>Entrou em: 2023-07-05<br><br>" +
                    "ID: <strong>POkiz</strong><br>Nome: Vinicius Zanquetta Costa<br>Cargo: Streamer<br>Entrou em: 2024-01-26<br><br>" +
                    "Digite 'voltar' para retornar ao menu de Anterior.";
        }
    }

    if (ultimoContexto === 'counter-strike 2') {
        switch (mensagem) {
            case 'jogadores':
                return "<strong>Jogadores Ativos:</strong><br><br>" +
                    "ID: <strong>yuurih</strong><br>Nome: Yuri Boian<br>Entrou em: 2017-11-08<br><br>" +
                    "ID: <strong>KSCERATO</strong><br>Nome: Kaike Cerato<br>Entrou em: 2018-02-06<br><br>" +
                    "ID: <strong>FalleN</strong><br>Nome: Gabriel Toledo<br>Entrou em: 2023-07-03<br><br>" +
                    "ID: <strong>molodoy</strong><br>Nome: Danil Golubenko<br>Entrou em: 2025-04-11<br><br>" +
                    "ID: <strong>YEKINDAR</strong> (Stand-in)<br>Nome: Mareks Gaļinskis<br>Entrou em: 2025-04-22<br><br>" +
                    "<strong>Comissão Técnica Ativa:</strong><br><br>" +
                    "ID: <strong>sidde</strong> (Coach)<br>Nome: Sidnei Macedo<br>Entrou em: 2024-07-09<br><br>" +
                    "<strong>Jogadores Inativos:</strong><br><br>" +
                    "ID: <strong>skullz</strong><br>Nome: Felipe Medeiros<br>Entrou em: 2024-07-09<br>Saiu em: 2025-04-22<br><br>" +
                    "ID: <strong>chelo</strong><br>Nome: Marcelo Cespedes<br>Entrou em: 2023-07-03<br>Saiu em: 2025-04-11<br><br>" +
                    "Digite 'voltar' para retornar ao menu Anterior.";
            case 'titulos':
            case 'títulos':
                return "<strong>Principais Títulos da FURIA no Counter-Strike:</strong><br><br>" +
                    "<strong>1º Lugar</strong> - ESL Pro League Season 12 North America (2020)<br>" +
                    "<strong>2º Lugar</strong> - Esports Championship Series Season 7 Finals (2019)<br>" +
                    "<strong>3º-4º Lugar</strong> - Intel Extreme Masters Rio 2024<br>" +
                    "<strong>3º-4º Lugar</strong> - ESL Pro League Season 13 (2021)<br>" +
                    "<strong>3º-4º Lugar</strong> - Intel Extreme Masters Rio Major 2022<br>" +
                    "<strong>3º-4º Lugar</strong> - ESL Pro League Season 15 (2022)<br>" +
                    "<strong>3º-4º Lugar</strong> - DreamHack Masters Dallas 2019<br>" +
                    "<strong>3º-4º Lugar</strong> - ESL One: Cologne 2020 Online - North America<br>" +
                    "<strong>3º-4º Lugar</strong> - Intel Extreme Masters Season XVII - Dallas (2022)<br><br>" +
                    "Digite 'voltar' para retornar ao menu anterior.";
            case 'comissão técnica':
            case 'coach':
                return "<strong>Comissão Técnica Ativa:</strong><br><br>" +
                    "ID: <strong>raizen</strong><br>Nome: Jaime Pádua<br>Cargo: Co-Founder, Co-Owner, Co-CEO<br>Entrou em: 2017-08-10<br><br>" +
                    "ID: <strong>Akkari</strong><br>Nome: André Akkari<br>Cargo: Co-Founder, Co-Owner, Co-CEO<br>Entrou em: 2017-08-10<br><br>" +
                    "ID: <strong>Cristian Guedes</strong><br>Nome: Cristian Guedes<br>Cargo: Co-Founder, Co-Owner, Marketing & PR Manager<br>Entrou em: 2017-08-10<br><br>" +
                    "ID: <strong>guerri</strong><br>Nome: Nicholas Nogueira<br>Cargo: Co-Founder, Co-Owner, Head of Esports<br>Entrou em: 2017-08-10<br><br>" +
                    "ID: <strong>Alexia</strong><br>Nome: Alexia Midori<br>Cargo: Manager<br>Entrou em: 2023-06-01<br><br>" +
                    "ID: <strong>Marta Minopolis</strong><br>Nome: Marta Minopolis<br>Cargo: Sports Psychologist<br>Entrou em: 2024-09-07<br><br>" +
                    "ID: <strong>Hepa</strong><br>Nome: Juan Borges<br>Cargo: Assistant Coach<br>Entrou em: 2025-01-15<br><br>" +
                    "ID: <strong>KrizzeN</strong><br>Nome: Aidyn Tūrlybekov<br>Cargo: Assistant Coach<br>Entrou em: 2025-04-30<br><br>" +
                    "ID: <strong>sidde</strong><br>Nome: Sidnei Macedo<br>Cargo: Coach<br>Entrou em: 2024-07-09<br><br>" +
                    "Digite 'voltar' para retornar ao menu anterior ou pergunte sobre jogadores ou títulos.";
        }
    }

    if (ultimoContexto === 'futebol de 7') {
        switch (mensagem) {
            case 'jogadores':
                return "<strong>Jogadores do Futebol de 7:</strong><br><br>" +
                       "#9 Guilherme Monagatti - Atacante<br>Média: 81 | Jogos: 6 | Gols: 0 | Assist.: 0 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#3 Caio Catroca - Meia<br>Média: 78 | Jogos: 1 | Gols: 0 | Assist.: 0 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#8 Murillo Donato - Atacante<br>Média: 80 | Jogos: 6 | Gols: 3 | Assist.: 1 | Amarelos: 1 | Vermelhos: 0<br><br>" +
                       "#77 Ryan Lima - Atacante<br>Média: 75 | Jogos: 7 | Gols: 0 | Assist.: 0 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#1 Matheus Ayosa - Goleiro<br>Média: 78 | Jogos: 2 | Gols Sofridos: 3 | Proporção: 1.50 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#22 João Pelegrini - Defesa<br>Média: 73 | Jogos: 7 | Gols: 1 | Assist.: 0 | Amarelos: 2 | Vermelhos: 0<br><br>" +
                       "#7 Gabriel Pastuch - Atacante<br>Média: 78 | Jogos: 1 | Gols: 0 | Assist.: 0 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#33 Victor Hugo - Goleiro<br>Média: 79 | Jogos: 6 | Gols Sofridos: 14 | Proporção: 2.33 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#14 Matheus Dedo - Meia<br>Média: 73 | Jogos: 7 | Gols: 1 | Assist.: 5 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#12 Jeffinho - Meia<br>Média: - | Jogos: 7 | Gols: 5 | Assist.: 3 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#10 Lipão - Atacante<br>Média: - | Jogos: 5 | Gols: 6 | Assist.: 5 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#11 Leleti - Atacante<br>Média: - | MVP Jogo: 3 | Jogos: 7 | Gols: 14 | Assist.: 5 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "#5 Andrey Batata - Meia<br>Média: 79 | Jogos: 0 | Gols: 0 | Assist.: 0 | Amarelos: 0 | Vermelhos: 0<br><br>" +
                       "Digite 'voltar' para retornar ao menu de Futebol de 7.";
            case 'comissão técnica':
                return "<strong>Comissão Técnica do Futebol de 7:</strong><br><br>Carlos Eduardo - Treinador<br><br>Digite 'voltar' para retornar ao menu de Futebol de 7.";
            case 'presidentes':
                return "<strong>Presidentes do Futebol de 7:</strong><br><br>Neymar Jr.<br>Cris Guedes<br><br>Digite 'voltar' para retornar ao menu de Futebol de 7.";
            case 'classificação':
                const classificacao = `
                    <strong>Classificação do Futebol de 7:</strong><br><br>
                    <table>
                    <tr>
                        <th>Pos</th>
                        <th>Time</th>
                        <th>Pts</th>
                        <th>PJ</th>
                        <th>V</th>
                        <th>V+</th>
                        <th>D</th>
                        <th>D-</th>
                        <th>GP</th>
                        <th>GC</th>
                        <th>SG</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Furia FC</td>
                        <td>19</td>
                        <td>7</td>
                        <td>6</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>39</td>
                        <td>19</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>G3X FC</td>
                        <td>18</td>
                        <td>7</td>
                        <td>6</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>44</td>
                        <td>22</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nyvelados FC</td>
                        <td>15</td>
                        <td>7</td>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>28</td>
                        <td>21</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Desimpedidos Goti</td>
                        <td>13</td>
                        <td>7</td>
                        <td>3</td>
                        <td>2</td>
                        <td>0</td>
                        <td>2</td>
                        <td>22</td>
                        <td>23</td>
                        <td>-1</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Fluxo FC</td>
                        <td>12</td>
                        <td>7</td>
                        <td>3</td>
                        <td>1</td>
                        <td>1</td>
                        <td>2</td>
                        <td>27</td>
                        <td>26</td>
                        <td>1</td>
                    </tr>
                     <tr>
                        <td>6</td>
                        <td>Capim FC</td>
                        <td>9</td>
                        <td>7</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>4</td>
                        <td>22</td>
                        <td>27</td>
                        <td>-5</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Dendele FC</td>
                        <td>9</td>
                        <td>7</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>3</td>
                        <td>22</td>
                        <td>30</td>
                        <td>-8</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>FC Real Elite</td>
                        <td>5</td>
                        <td>7</td>
                        <td>1</td>
                        <td>0</td>
                        <td>2</td>
                        <td>4</td>
                        <td>28</td>
                        <td>32</td>
                        <td>-4</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>LOUD SC</td>
                        <td>3</td>
                        <td>7</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>6</td>
                        <td>22</td>
                        <td>37</td>
                        <td>-15</td>
                    </tr>
                    <tr>
                         <td>10</td>
                        <td>Funkbol Clube</td>
                        <td>2</td>
                        <td>7</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>6</td>
                        <td>26</td>
                        <td>43</td>
                        <td>-17</td>
                    </tr>
                    </table><br><br>
                    Digite 'voltar' para retornar ao menu de Anterior.`;
                return classificacao;
            }
    }

    if (ultimoContexto === 'league of legends') {
        switch (mensagem) {
            case 'jogadores':
                return "<strong>Jogadores do League of Legends:</strong><br><br>"+
                       "Top:  Guigo - Guilherme Ruiz<br>Jungler:  Tatu - Pedro Seixas<br>Mid:  Tutsz - Arthur Machado<br>ADC:  Ayu - Andrey Saraiva<br>Support:  JoJo - Gabriel Dzelme	<br><br>"+
                       "Digite 'voltar' para retornar ao menu Anterior.";
            case 'comissão técnica':
                return "<strong>Comissão Técnica do League of Legends:</strong><br><br>"+
                       "Head Coach: Thinkcard - Thomas Slotkin<br>Coach: Furyz - Erick Susin<br>Manager:  Rafinha<br><br>"+
                       "Digite 'voltar' para retornar ao menu Anterior.";
            case 'titulos':
            case 'títulos':
                return "<strong>Títulos do League of Legends:</strong><br><br>"+
                       "LTA South 2025 Split 1 - 5th<br>" +
                       "CBLOL Split 2 2024 - 5th - $ 6.748<br>" +
                       "CBLOL Split 1 2024 - 9th - $ 3 843<br>" +
                       "CBLOL Split 2 2023 - 7th - $ 6 162<br>" +
                       "CBLOL Split 1 2023 - 4th - $ 10 175<br>" +
                       "CBLOL 2022 Split 2 - 3rd - $ 9 545<br>" +
                       "CBLOL 2022 Split 1 - 4th - $ 8 104<br>" +
                       "CBLOL 2021 Split 2 - 10th - $ 963<br>" +
                       "CBLOL 2021 Split 1 - 9th - $ 894<br><br>" +
                       "Digite 'voltar' para retornar ao menu Anterior.";
        }
    }

    if (ultimoContexto === 'pubg') {
        switch (mensagem) {
          case 'jogadores':
            return "<strong>Jogadores do PUBG:</strong><br><br>" +
              "ID: <strong>guizeraa</strong><br>Nome: Guilherme Barbosa<br>Entrou em: 2025-04-25<br><br>" +
              "ID: <strong>Haven</strong><br>Nome: Erick Aguiar<br>Entrou em: 2025-04-25<br><br>" +
              "ID: <strong>possa</strong><br>Nome: Francisco Possamai dos Santos<br>Entrou em: 2025-04-25<br><br>" +
              "ID: <strong>zkrakeN</strong><br>Nome: Leandro Gomes<br>Entrou em: 2025-04-25<br><br>" +
              "Digite 'voltar' para retornar ao menu Anterior.";
            
          case 'comissão técnica':
            return "<strong>Comissão Técnica do PUBG:</strong><br><br>" +
              "ID: <strong>rds149</strong><br>Nome: Rafael Santos<br>Cargo: Coach<br>Entrou em: 2025-04-25<br><br>" +
              "Digite 'voltar' para retornar ao menu Anterior.";
      
          case 'titulos':
          case 'títulos':
            return "<strong>Títulos do PUBG:</strong><br><br>" +
                "26th Place - PUBG Global Invitational.S 2021 - $51,512<br>" +
                "5th Place - PUBG Super Week - LATAM Finals - $700<br>" +
                "2nd Place - GLL LATAM Masters - Phase 3 - $11,000<br>" +
                "2nd Place - LA League Season 4 - $1,200<br>" +
                "3rd Place - ESL LA League: Season 3 - $778<br>" +
                "3rd Place - GLL LATAM Masters - Phase 2 - $8,000<br>" +
                "2nd Place - ESL LA League: Season 2 - $2,375<br>" +
                "1st Place - Copa IGN Season 2 - $3,067<br>" +
                "13th Place - Curse Trials - Masters 2018 - $2,500<br>" +
                "3rd Place - Copa IGN Season 1 - $800<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";
        }
      } 

      if (ultimoContexto === 'rainbow six') {
        switch (mensagem) {
            case 'jogadores':
            return "<strong>Jogadores do Rainbow Six:</strong><br><br>" +
            "ID: <strong>FelipoX</strong><br>Nome: Felipe De Lucia<br>Entrou em: 2024-03-11<br><br>" +
            "ID: <strong>HerdsZ</strong><br>Nome: Gustavo Herdina<br>Entrou em: 2024-03-11<br><br>" +
            "ID: <strong>Jv92</strong><br>Nome: João Vitor<br>Entrou em: 2024-03-11<br><br>" +
            "ID: <strong>Kheyze</strong><br>Nome: Diego Zanello<br>Entrou em: 2024-03-11<br><br>" +
            "ID: <strong>nade</strong><br>Nome: Felipe Sá Ferreira<br>Entrou em: 2024-03-11<br><br>" +
            "Digite 'voltar' para retornar ao menu Anterior.";

            case 'comissão técnica':
                return "<strong>Comissão Técnica do Rainbow Six:</strong><br><br>" +
                "ID: <strong>raizen</strong><br>Nome: Jaime Padua<br>Cargo: Owner<br>Entrou em: 2017-08-08<br><br>" +
                "ID: <strong>Abreu</strong><br>Nome: Felipe da Silva<br>Cargo: Assistant Coach<br>Entrou em: 2024-03-11<br><br>" +
                "ID: <strong>Dann</strong><br>Nome: Daniel Mattos<br>Cargo: Team Coordinator<br>Entrou em: 2024-03-11<br><br>" +
                "ID: <strong>igoorctg</strong><br>Nome: Igor dos Santos<br>Cargo: Head Coach<br>Entrou em: 2024-03-11<br><br>" +
                "ID: <strong>Vittzzz</strong><br>Nome: Vitor Ruiz<br>Cargo: Analyst<br>Entrou em: 2024-03-11<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";

            case 'titulos':
            case 'títulos':
                return "<strong>Títulos do Rainbow Six:</strong><br><br>" +
                "3rd Place - Six Invitational 2025 - $240,000<br>" +
                "2nd Place - BR Premier Finals 2024 - $14,060<br>" +
                "1st Place - Super Copa do Brasil - $9,757<br>" +
                "3rd - 4th Place - EMC Esports World Cup 2024 - $160,000<br>" +
                "5th - 8th Place - BLAST R6 Major Manchester 2024 - $30,000<br>" +
                "3rd Place - Brazil League 2024 - Stage 1 - $23,444<br>" +
                "5th - 8th Place - Six Berlin Major 2022 - $20,000<br>" +
                "9th - 12th Place - Six Invitational 2022 - $75,000<br>" +
                "5th - 8th Place - Six Mexico Major 2021 - $20,000<br>" +
                "9th - 12th Place - Six Invitational 2021 - $75,000<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";
        }
      }

      if (ultimoContexto === 'rocket league') {
        switch (mensagem) {
            case 'jogadores':
                return "<strong>Jogadores de Rocket League:</strong><br><br>" +
                "ID: <strong>yANXNZ</strong><br>Nome: Yan Nolasco<br>Entrou em: 2021-08-17<br><br>" +
                "ID: <strong>Lostt</strong><br>Nome: Gabriel Buzon<br>Entrou em: 2023-01-18<br><br>" +
                "ID: <strong>DRUFINHO</strong><br>Nome: Arthur Miguel<br>Entrou em: 2023-10-06<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";

            case 'comissão técnica':
                return "<strong>Comissão Técnica do Rocket League:</strong><br><br>" +
                "ID: <strong>STL</strong><br>Nome: Mateus Santos<br>Cargo: Coach<br>Entrou em: 2021-03-23<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";

            case 'titulos':
            case 'títulos':
                return "<strong>Títulos do Rocket League:</strong><br><br>" +
                "3rd - 4th Place - RLCS 2025 - Birmingham Major - $36,000<br>" +
                "5th - 6th Place - RLCS 2024 - World Championship - $84,000<br>" +
                "5th - 8th Place - EIN Esports World Cup 2024 - $20,000<br>" +
                "3rd - 4th Place - RLCS 2024 - Major 2 : London - $27,000<br>" +
                "5th - 8th Place - Gamers8 2023 - $95,000<br>" +
                "1st Place - RLCS 2022-23 - Spring: NA Regional 3 - Spring Invitational - $30,000<br>" +
                "1st Place - Gamers8 2022 - $500,000<br>" +
                "2nd Place - RLCS Season X - South American Championship - $30,000<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";
        }
      }

      if (ultimoContexto === 'valorant') {
        switch (mensagem) {
            case 'jogadores':
                return "<strong>Jogadores de Valorant:</strong><br><br>" +
                "ID: <strong>khalil</strong><br>Nome: Khalil Schmidt Faour Auad<br>Entrou em: 2021-01-24<br><br>" +
                "ID: <strong>havoc</strong><br>Nome: Ilan Eloy<br>Entrou em: 2023-10-13<br><br>" +
                "ID: <strong>heat</strong><br>Nome: Olavo Marcelo<br>Entrou em: 2024-12-09<br><br>" +
                "ID: <strong>raafa</strong><br>Nome: Rafael Lima<br>Entrou em: 2021-01-24<br><br>" +
                "ID: <strong>pryze</strong><br>Nome: Luis Henrique<br>Entrou em: 2021-01-24<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";

            case 'comissão técnica':
                return "<strong>Comissão Técnica de Valorant:</strong><br><br>" +
                "ID: <strong>peu</strong><br>Nome: Pedro Lopes<br>Cargo: Head Coach<br>Entrou em: 2024-12-09<br><br>" +
                "ID: <strong>lukzera</strong><br>Nome: Lucas Soares<br>Cargo: Assistant Coach<br>Entrou em: 2023-11-03<br><br>" +
                "ID: <strong>zaz</strong><br>Nome: Júlia Medeiros<br>Cargo: Head of Perfomance<br>Entrou em: ????-??-??<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";

            case 'titulos':
            case 'títulos':
                return "<strong>Títulos de Valorant:</strong><br><br>" +
                "1st Place - Tixinha Invitational - $6,000<br>" +
                "2nd Place - Superdome Colombia 2023 - $8,000<br>" +
                "1st Place - Multiplatform Esports Game 2023 - $12,243.14<br>" +
                "6th Place - VCT 2023: Americas League - $5,000<br>" +
                "9th - 16th Place - VCT 2023: LOCK//IN São Paulo - $10,000<br>" +
                "13th - 16th Place - VALORANT Champions 2022 - $15,000<br>" +
                "2nd Place - VCT 2022: South America Last Chance Qualifier - $10,834.45<br>" +
                "4th Place - VCT 2022: Brazil Stage 1 Challengers - $8,433.12<br>" +
                "1st Place - VCT 2021: South America Last Chance Qualifier - $16,484.42<br><br>" +
                "Digite 'voltar' para retornar ao menu Anterior.";
        }
      }


 // --- Resposta Padrão ---
         return "Desculpe, não entendi sua pergunta. Por favor, digite 'Furia' para começar ou escolha uma das opções apresentadas.";
        }
// Função para enviar a mensagem do usuário
function enviarMensagem() {
    const mensagemUsuario = inputMensagem.value.trim();
    if (mensagemUsuario) {
        adicionarMensagem(mensagemUsuario, true);
        inputMensagem.value = '';
        setTimeout(() => {
            const respostaBot = obterResposta(mensagemUsuario);
            adicionarMensagem(respostaBot);
        }, 1000);
    }
}

// Event listeners

// Enviar mensagem ao clicar no botão
btnEnviar.addEventListener('click', enviarMensagem);

// Enviar mensagem ao pressionar Enter no input
inputMensagem.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            enviarMensagem();
        }
});

// Abrir/fechar o painel de chat
if (botaoChatFlutuante && painelChat) {
    botaoChatFlutuante.addEventListener('click', (e) => {
        e.preventDefault();
        painelChat.classList.toggle('aberto');
    });
}

if (botaoFecharChat && painelChat) {
    botaoFecharChat.addEventListener('click', () => {
        painelChat.classList.remove('aberto');
    });
}

// Lógica do tema (dark mode)
if (temaBotao && body) {
    temaBotao.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Adicione aqui a lógica para salvar a preferência do usuário (localStorage, cookies, etc.)
    });
}

// Mensagem inicial do bot
adicionarMensagem("Olá! Eu sou o Pantero-bot, seu assistente virtual da FURIA. Para iniciarmos nossa conversa, digite \"Furia\" e pressione Enviar.");
