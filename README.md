# Grades Calculation

## 📝 Sobre

O projeto **Grades Calculation** tem como objetivo calcular a situação de um aluno a partir de uma [planilha-modelo](https://docs.google.com/spreadsheets/d/1m3GpMkt8YPWMhm4swLFEIKcWm1i99990a7d7chrtS_s/edit?usp=sharing) no Google Sheets e preencher a mesma planilha conforme o resultado.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/)

## 💻 Baixar e executar o projeto

```bash
  # Clonar o repositório git
  $ git clone https://github.com/joaowicktor/grades-calculation.git

  # Acessar o diretório do projeto
  $ cd grades-calculation
```

Para utilizar a Google Sheets API, é necessário [criar uma Conta de Serviço](https://cloud.google.com/iam/docs/creating-managing-service-accounts?hl=pt-br) (caso não possua) no Google Cloud e [criar uma credencial de Conta de Serviço](https://cloud.google.com/iam/docs/creating-managing-service-account-keys?hl=pt-br), escolher a opção JSON para criação do arquivo com as credenciais, renomear o arquivo para **_credentials.json_** e movê-lo para a pasta **_/src/config_**.

```bash
  # Instalar as dependências do projeto
  $ npm install

  # Executar o projeto passando o ID da planilha como argumento (sem os colchetes)
  $ npm start [spreadsheetId]
```

---

_Desenvolvido por <a href="https://www.linkedin.com/in/joaowicktor/" target="_blank">João Wicktor</a>_