/* ==========================================================================
   CONFIG.JS  —  ÚNICO ARQUIVO QUE VOCÊ EDITA PARA CRIAR UM NOVO CONVITE
   ==========================================================================

   COMO USAR:
   1. Troque os 6 arquivos da pasta /assets (mantendo os mesmos nomes).
   2. Edite os valores abaixo (nome, WhatsApp, mapa, cores, etc.).
   3. Suba no GitHub. Pronto — não precisa mexer no index.html.

   As cores no campo "tema" podem ser nome ('pink'), hexadecimal ('#f6c1cd')
   ou rgb('rgb(246,193,205)'). Use o formato que preferir.

   DICA: para reposicionar os botões da tela principal, abra o convite no
   navegador com ?editor=1 no final do link (ex.: .../index.html?editor=1),
   arraste os botões e clique em "Copiar código". Cole o resultado no campo
   "hotspots" aqui embaixo.
   ========================================================================== */

window.CONFIG = {

  // ----- IDENTIDADE DO CONVITE -------------------------------------------
  // Nome do aniversariante. Aparece no título da aba do navegador e nos
  // textos automáticos do convite.
  nome: "Maya",

  // ----- WHATSAPP (CONFIRMAR PRESENÇA) -----------------------------------
  // numero: DDI + DDD + número, SÓ DÍGITOS (sem +, espaço, parênteses ou traço).
  //         Ex.: 55 (Brasil) + 31 (DDD) + 985657116 -> "5531985657116"
  // mensagem: texto que já vem pré-preenchido quando a pessoa abre o WhatsApp.
  whatsapp: {
    numero: "5581994815258",
    mensagem: "Olá! Confirmo minha presença no aniversário da Maya."
  },

  // ----- LOCALIZAÇÃO (BOTÃO MAPA) ----------------------------------------
  // Link completo do Google Maps. Abra o local no Maps, clique em "Compartilar"
  // -> "Copiar link" e cole aqui (mantenha as aspas).
  mapa: "https://www.google.com/local/place/fid/0x7ab17b194233e37:0x9fd861d70d98dfdd/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3D1esMHTRM4-0MvCPuxueicw%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D294.368%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFjFlc01IVFJNNC0wTXZDUHV4dWVpY3c%3D&sa=X&ved=2ahUKEwiDq-n438iVAxXVr5UCHWXPGOIQpx96BAgbEBI",

  // ----- QUAIS TELAS APARECEM --------------------------------------------
  // video:     true  -> toca o vídeo (assets/video.mp4) depois da abertura.
  //            false  -> pula direto da abertura para a tela principal.
  // presentes: true  -> mostra o botão "Presentes" e a tela de presentes.
  //            false  -> esconde o botão e a tela (convite sem presentes).
  telas: {
    video: true,
    presentes: true
  },

  // ----- TEXTOS DOS BOTÕES -----------------------------------------------
  // Rótulos que aparecem nos botões. Edite livremente.
  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  // ----- TEMA / CORES ----------------------------------------------------
  // cor:                 cor principal (barra do navegador mobile, acentos).
  // corBotaoVoltar:      fundo do botão "Voltar" (tela de presentes).
  // corTextoBotaoVoltar: texto do botão "Voltar".
  tema: {
    cor: "#f6c1cd",
    corBotaoVoltar: "rgba(255,255,255,.76)",
    corTextoBotaoVoltar: "#6b3a21"
  },

  // ----- POSIÇÃO DOS BOTÕES NA TELA PRINCIPAL ----------------------------
  // Valores em PORCENTAGEM da imagem (0 a 100). Para evitar mexer à mão,
  // use o editor (?editor=1) e cole o resultado aqui.
  //   left/top: canto superior esquerdo do botão
  //   width/height: tamanho do botão
  hotspots: {
        confirm: { left:15, top:83.4929833917626, width:20.88965582260389, height:15.037719105617501 },
        map: { left:39.30515722428124, top:84.15087223968813, width:20.88967068702071, height:14.59912096329132 },
        gift: { left:64.98108655319517, top:84.15088897081564, width:21.831017667771516, height:15.147374915371866 }
  },

  // ----- MÚSICA DE FUNDO -------------------------------------------------
  // volume: de 0 (mudo) a 1 (máximo). O padrão 0.30 é agradável e não
  //         briga com o áudio do vídeo.
  musica: {
    volume: 0.30
  }
};
