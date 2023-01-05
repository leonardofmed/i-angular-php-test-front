# i-angular-php-test-front
- Projeto em Ionic + Angular para o teste técnico da WK Technology
- [Repositório da API](https://github.com/leonardofmed/i-angular-php-test-back)
- [**DEMO FUNCIONAL ONLINE**](wktest.epizy.com)

## Build
- Web: `ionic build`
- App usando Capacitor (Ex: Android): `ionic cap build android`

*Mais detalhes em [Web](https://ionicframework.com/docs/cli/commands/build) e [Capacitor](https://ionicframework.com/docs/cli/commands/capacitor-build)*

## Apresentação e observações
Esse projeto foi desenvovido de forma integral, sem utilização de templates, e foi realizado entre [30/12/2022 e 05/01/2023](https://github.com/leonardofmed/i-angular-php-test-front/commits?author=leonardofmed&since=2022-12-30&until=2023-01-06), levando cerca de 40h para conclusão da primeira versão com as principais funcionalidades, considerando front e back.

### Formato PWA
O formato PWA (Web-based Progressive Web App) foi escolhido por possibilitar a demonstração da versatilidade dos frameworks utilizados. É possível criar sistema pensados exclusivamente para navagedores no formato widescreen, telas de celulares ou ambos.

### Limitações
O objetivo desse projeto foi fazer um produto mínimo viável com as condições estabelecidas pelo teste. Sendo assim, algumas funcionalidades não foram desenvolvidadas a fundo ou foram feitas de maneira mais simples, fugindo das normas convencionais e utilização de boas práticas. Algumas limitações verificadas podem ser visualizadas nas [Issues desse repositório](https://github.com/leonardofmed/i-angular-php-test-front/issues). O servidor utilizado atualmente para hospedar o sistema também possui suas limitações, mais detalhes sobre podem ser vistos no [repositório da API](https://github.com/leonardofmed/i-angular-php-test-back).

## Conteúdo
- Menu Inicial (/menu)
- Listagem e cadastro de clientes, com os seguintes campos: (/clientes)
    - Código de identificação do cliente
    - Nome
    - CPF
    - Endereço Completo (CEP, Logradouro, Número, Bairro, Complemento, Cidade)
    - E-Mail
    - Data de Nascimento
- Listagem e cadastro de produtos (/produtos)
    - Código de identificação do produto
    - Nome
    - Valor Unitário
- Pedido de venda (/vendas)
    - Código de identificação da venda
    - Data e Hora da venda
    - Identificação do cliente
    - Identificação dos itens da venda (Lista de Produtos)
    - Total da venda

## Versões dos Frameworks utilizados
- **Angular:** 15
- **Ionic:** 6

## Referências e ferramentas utilizadas
- https://generated.photos/
- https://ionic.io/ionicons
- https://www.freepik.com/