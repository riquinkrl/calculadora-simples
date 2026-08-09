# Calculadora Convencional

Este é um projeto de uma calculadora básica desenvolvida com **TypeScript**, **HTML** e **CSS**, usando **Parcel 2** como bundler, com o objetivo de praticar conceitos fundamentais de programação e manipulação do DOM.

## Funcionalidades

- Adição, subtração, multiplicação e divisão;
- Interface limpa, com tema escuro;
- Exibição do valor digitado e do resultado em tempo real no visor;
- Encadeamento de operações (ex.: `3 + 3 * 2 - 1`);
- Proteção contra divisão por zero (retorna `0` em vez de erro);
- Botão "AC" para limpar o visor e reiniciar a calculadora.

## Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/)** – Lógica dos cálculos e das interações;
- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)** – Estrutura da página;
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** – Estilização e layout;
- **[Parcel 2](https://parceljs.org/)** – Bundler e servidor de desenvolvimento.

## Objetivo do Projeto

Este projeto foi criado com fins educacionais, para consolidar o aprendizado em:

- Manipulação de eventos com TypeScript;
- Operações matemáticas com lógica própria;
- Organização de código em módulos separados (lógica × interface).

## Como Utilizar

1. Clone o repositório:
```bash
git clone https://github.com/riquinkrl/calculadora-simples.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento (Parcel):
```bash
npm start
```

4. Acesse o endereço exibido no terminal (geralmente `http://localhost:1234`) no navegador.

Para gerar a versão de produção:
```bash
npm run build
```

## Atualização do Sistema

### Versão 1.1.0 - 09-08-2026
- O usuário só pode selecionar uma operação por vez: ao pressionar um novo operador (`+`, `-`, `*`, `/`), o cálculo pendente é resolvido automaticamente antes de aplicar o novo operador.
- Exemplo: `3 * 3 / 2 - 1` é calculado passo a passo normalmente.
- Não é permitido encadear operadores sem número entre eles (ex.: `3 / / 4 / 1`), já que cada clique em um operador substitui a operação pendente em vez de acumular símbolos.