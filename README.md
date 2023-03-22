# EduSynch Challenge 2023 (QA) 

### Tecnologias

- Framework: Cypress
- Adicionais: Allure Report

## Instalação e Configuração 

### Instalação do Node JS

Realizar o download da versão recomendada através do link: [nodejs.org](<https://nodejs.org/en/>) 

### Instalação Cypress

Rodar o comando da sua preferência para instalar o Cypress:

- NPM:
```Bash
npm install cypress --save-dev
```
ou
- YARN:
```Bash
yarn add cypress --dev
```

## Allure-Reports

O report utilizado é um plugin desenvolvido por um terceiro: [Shelex/cypress-allure-plugin](<https://github.com/Shelex/cypress-allure-plugin>).

Necessita instalação do JAVA e configuração do JAVA_HOME nas variáveis de ambiente após finalizado executar o comando abaixo para iniciar a instalação do plugin.

- [Java 18](<https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html>)

- [Guia instalação JAVA_HOME variáveis de ambiente](<https://confluence.atlassian.com/confbr1/configurando-a-variavel-java_home-no-windows-933709538.html>).


```Bash
npm i -D @shelex/cypress-allure-plugin
```

```Bash
yarn add -D @shelex/cypress-allure-plugin
```

## Executando os testes

Após tudo instalado e devidamente configurado basta rodar os comandos no terminal para executar os testes:

Para executar em modo gráfico execute um dos comandos abaixo:

```Bash
npm run npm:open
```
```Bash
yarn run yarn:open
```

Para executar em modo headless execute um dos comandos abaixo:

```Bash
npm run npm:headless
```
```Bash
yarn run yarn:headless
```

## Abrindo o report

Para visualizar o report do Allure, executar o comando abaixo, uma aba do navegador ira se abrir automaticamente com o report.

```Bash
allure serve
```

>This is a challenge by [EduSynch](<https://edusynch.com/>)
