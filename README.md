# Convite Engine 🔧💖

Engine reutilizável de convites interativos (aniversário, batizado, etc.).
Você cria um convite novo **sem mexer no código**: só troca os arquivos da
pasta `assets/` e edita um único arquivo, o **`config.js`**.

> Fluxo do convite: tela de abertura → vídeo → tela principal (com botões de
> WhatsApp, Localização e Presentes) → tela de presentes. Música de fundo em
> loop. Tudo otimizado para mobile e compatível com iPhone.

---

## 📁 Estrutura

```
convite-engine/
├── index.html          ← ENGINE (não mexa por convite)
├── config.js           ← ÚNICO arquivo que você edita por convite
├── README.md           ← este guia
├── .nojekyll           ← mantém o GitHub Pages funcionando
└── assets/
    ├── opening.webp          ← tela de abertura
    ├── principal.webp        ← tela principal
    ├── presentes.webp        ← tela de presentes
    ├── preview-whatsapp.jpg  ← imagem do preview no WhatsApp (1200×630)
    ├── video.mp4             ← vídeo de abertura
    └── musica.mp3            ← música de fundo
```

---

## 🚀 Criando um novo convite (passo a passo)

### 1. Duplique a engine
Crie um repositório novo no GitHub (ex.: `convite-premium-Joao`) e copie
todos os arquivos desta pasta para ele. Ou use este como template.

### 2. Troque os arquivos de `assets/`
Substitua os 6 arquivos **mantendo os mesmos nomes**:

| Arquivo | O que é | Dica |
|---|---|---|
| `opening.webp` | Tela de abertura | Proporção ~941×1672 (retrato) |
| `principal.webp` | Tela principal | Mesma proporção |
| `presentes.webp` | Tela de presentes | Mesma proporção |
| `preview-whatsapp.jpg` | Preview do link no WhatsApp | 1200×630 px |
| `video.mp4` | Vídeo que toca após abrir | `.mp4` (H.264) |
| `musica.mp3` | Música de fundo | `.mp3` |

### 3. Edite o `config.js`
Abra o `config.js` e mude:
- `nome` → nome do aniversariante
- `whatsapp` → `{ numero, mensagem }` (número só dígitos, com DDI+DDD)
- `mapa` → link do Google Maps
- `telas` → liga/desliga vídeo e presentes (`true`/`false`)
- `textos` → rótulos dos botões
- `tema` → cores do convite
- `musica` → volume

### 4. Edite o bloco de preview no `index.html`
Procure por `<!-- EDITAR AQUI -->` (ou "META TAGS DE PREVIEW") no topo do
`index.html`. Atualize **só**:
- o nome no `og:title` / `twitter:title`
- as URLs (`og:url`, `og:image`, `twitter:image`) para o seu novo repositório

> ⚠️ **Por que aqui e não no config.js?** O crawler do WhatsApp que gera o
> preview **não executa JavaScript**, então essas meta tags precisam estar
> fixas no HTML. É só editar 1 vez por convite.

### 5. Publique no GitHub Pages
- Vá em **Settings → Pages** do repositório.
- Em **Source**, escolha a branch `main` e a pasta `/root`.
- Salve. Em ~1 minuto seu convite estará no ar em
  `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

---

## 🎯 Reposicionar os botões da tela principal

Os botões de WhatsApp, Localização e Presentes ficam sobre a imagem
`principal.webp`. Para ajustar a posição/tamanho deles de forma visual:

1. Abra o convite no navegador com `?editor=1` no final da URL:
   ```
   https://SEU_USUARIO.github.io/NOME_DO_REPO/?editor=1
   ```
2. Arraste os botões. Puxe a **bolinha no canto** para redimensionar.
3. Clique em **Copiar código**.
4. Cole o resultado dentro de `CONFIG.hotspots` no `config.js`.
5. Faça commit e suba. Pronto — fica permanente para todo mundo.

> Dica: o editor também tem "Salvar neste navegador" para testar antes de
> subir (só vale para você).

---

## 🎨 Cores (campo `tema`)

As cores aceitam qualquer formato CSS:
- Nome: `"pink"`, `"gold"`
- Hexadecimal: `"#f6c1cd"`
- RGB: `"rgb(246,193,205)"`

| Campo | O que controla |
|---|---|
| `cor` | Cor principal (barra do navegador mobile) |
| `corBotaoVoltar` | Fundo do botão "Voltar" |
| `corTextoBotaoVoltar` | Texto do botão "Voltar" |

Exemplos de paletas rápidas:
- **Rosa (atual):** `#f6c1cd`
- **Azul (menino):** `#7ec4e6`
- **Verde:** `#a8d8a0`
- **Dourado:**** `#d4af37`

---

## ❓ Resolução de problemas

**O preview do WhatsApp não atualiza**
O WhatsApp faz cache agressivo. Use o depurador oficial do Facebook:
`https://developers.facebook.com/tools/debug/` — cole a URL e clique em
"Debug". Isso força a atualização. (Pode demorar algumas horas no WhatsApp.)

**A música não toca no iPhone**
Normal — o iOS só permite áudio após um toque do usuário. A engine já cuida
disso: a música inicia junto com o toque de "abrir". Se ainda assim não
tocar, aparece o botão "Ativar música" na tela principal.

**Os botões estão fora do lugar**
Use o editor (`?editor=1`) para reposicionar. As posições são em % da imagem,
então valem para qualquer tamanho de tela.

**Quero um convite sem vídeo**
No `config.js`, mude `telas: { video: false }`. O toque na abertura vai
direto para a tela principal.

**Quero um convite sem presentes**
No `config.js`, mude `telas: { presentes: false }`. O botão "Presentes"
desaparece e a tela de presentes não abre.
