# Di'Lanches


**Eduardo Augusto Brito, 1397390@sga.pucminas.br**

**Eron Panes de Moraes, epmoraes@sga.pucminas.br**

**Pablo Guilherme A.P Magela, pablo.amancio@sga.pucminas.br**

**Guilherme Augustto Costa Barros, 1334415@sga.pucminas.br**

**Henrique Pinto Santos, henrique.santos.1267265@sga.pucminas.br**

**José Miguel Quintão Magalhães, jmqmagalhaes@sga.pucminas.br**

---

Professores:

**Cristiano Neves Rodrigues**

**Felipe Augusto Lima Reis**

**Hugo Bastos de Paula**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

Com o avanço da Tecnologia, a maioria das coisas ao nosso redor se tornou de fácil acesso e com muito mais conforto. Uma dessas coisas é o sistema de Delivery. Com o 
objetivo de facilitar o acesso a diversos tipos de comida em sua própria residência com apenas um smartphone. Porém, sabemos que às vezes uma nova tecnologia sofre com 
diversos problemas de processo e organização. Em um sistema de delivery, podemos pensar em problemas como: Pedido entregue errado, ingredientes faltantes no prato 
pedido, entrega demorada e falta de organização dos pedidos (ordem de abertura) na cozinha para a preparação.

Nosso objetivo é desenvolver um projeto que faça com que a solicitação de pedido seja feita de forma simples, e que garanta a qualidade da entrega e de produção mais 
viável possível, e que ponte entre o cliente e o fornecedor seja muito mais cômoda para ambos os lados. Entendemos que hoje a exigência por serviços de qualidade estão 
aumentando a cada dia, a avaliação de cada cliente seja um comentário ou uma avalição em notas, podem gerar impactos positivos ou negativos para uma determinada 
empresa, com isso os processos estão em constantes evoluções.



---


## 1. Introdução

Um estabelecimento onde são recebidos muitos pedidos dos clientes, requer muita organização da parte dos atendentes para 
que os pedidos não cheguem incorretos no setor de produção. Pensando nisso, nosso projeto tem como objetivo tornar o 
processo de gestão desses pedidos o mais simples, fácil e eficiente possível.


    1.1 Contextualização

O Di’Lanches é uma empresa que possui um software que permite os seus atendentes gerenciar e organizar os pedidos dos 
clientes, onde o(a) atendente gera códigos para os pedidos realizados, além disso o mesmo poderá selecionar o lanche, 
a forma de pagamento e se o cliente irá comer no local ou levar para a viagem.  

    1.2 Problema
    
Imaginamos que uma hamburgueria possui muitos pedidos e os atendentes não possuem um sistema bem organizado, 
e por esse motivo os pedidos chegam à cozinha incorretos, e como consequência geram problemas no controle de estoque, 
atrasos nas entregas e pedidos sendo entregues incorretamente.

    1.3 Objetivo geral

O Objetivo Geral desse Projeto será elaborar um sistema para pedidos de lanches de um restaurante, onde iremos priorizar 
a precisão no Controle de Estoque e o/a atendente do estabelecimento terá acesso a uma interface simplicada e de fácil uso.

        1.3.1 Objetivos específicos

O Projeto tem como Objetivo Específico criar uma Interface para o Sistema, de modo que o atendente consiga realizar 
os processo dos pedidos mais facilmente, e criar um Banco de Dados preciso para que informe sobre os Status dos 
produtos(Disponível, Em Falta, etc...).

    1.4 Justificativas

O Trabalho será desenvolvido com o intuito de facilitar o processo de pedidos de um restaurante, prezando pela qualidade, 
facilidade e agilidade no processo.

## 2. Participantes do processo

- Cliente: O cliente sendo o Stakeholder primário, ele é a peça fundamental para a criação de todo o nosso processo. Sem o cliente, não haverá alternativas para dar andamento nos pedidos. Ele sendo responsável por fazer os pedidos, selecionando o que irá consumir e a forma de pagamento desejada.

- Atendente: O atendente terá o papel de anotar todo o pedido do cliente de forma que não gere pedidos errado a cozinha.

- Cozinheiro/Cozinha: A cozinha irá atuar na linha de frente da preparação do pedido. É importante que a cozinha e o atendente estejam alinhados para não gerar pedidos errados para o cliente.

- Motoboy: Com a evolução dos pedidos por aplicativos, o motoboy se tornou uma peça importante para quem quer apenas consumir em seu lar. Ele é responsável por garantir uma entrega eficiente, para que a refeição chegue em bom estado e no menor tempo possível.

<p align="center">
  <img src="https://i.imgur.com/2nMs4oU.jpg" />
</p>

## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Hoje em dia, muitos atendentes de fast-foods utilizam de formas ineficientes no controle de pedidos, o que pode trazer muitos problemas futuros para o estabelecimento. Ao anotar um pedido incorreto, por exemplo, tem como consequência, a montagem e entrega de lanches errados para os clientes. Além disso, se muitos pedidos são feitos ao mesmo tempo e são passados para a cozinha de maneira desorganizada, torna-se mais difícil o entendimento de qual pedido é o certo para um cliente específico, tornando o processo de fazer os lanches mais lento, gerando atrasos nas entregas e novamente pedidos sendo entregues incorretamente. Além do mais, sem um sistema de software adequado, e bem organizado, não conseguimos saber quais ingredientes estão no estoque, podendo causar problemas na organização e montagem dos pedidos, tendo como resultado os mesmos problemas citados acima. 

## 3.2. Descrição Geral da proposta

A hamburgueria fictícia Di'Lanches recentemente obteve um grande aumento em seu número de clientes, buscando atender a demanda o proprietário do estabelecimento foi a procura de soluções eficientes para solucionar o problema. Em busca de uma opção mais duradoura decidiu investir em um sistema de software onde pudesse ter um melhor controle de estoque um sistema de atendimento mais interativo. Através do Software o "Di" poderá acessar as quantias de cada alimento dentro de sua empresa, além de criar um pedido com instruções precisas para a preparação na cozinha. 

## 3.3. Modelagem dos Processos

### 3.3.1 Processo 1 – PROCESSO DE CRIAR PEDIDO

O processo de criação de pedido retrata o sistema de atendimento de um cliente desde a seleção do lanche, forma de pagamento, onde desejar comer(no local ou para viagem) e por fim a geração de um código de espera.

<p align="center">
  <img src="https://i.imgur.com/LL1J1eS.png"/>
</p>

### 3.3.2 Processo 2 – CONTROLE DE ESTOQUE

O processo de controle de estoque é um sistema que irá fornecer a situação atual da quantidade de ingredientes armazenados no estabelecimento e possibilitar inserir e retirar quantias quando uma alteração do estoque for realizada pelo proprietário.

<p align="center">
  <img src="https://i.imgur.com/9KwK0cr.png"/>
</p>

### 3.3.3 Processo 3 – PROCESSO DE RECEBER O LANCHE (COZINHA)

A cozinha recebe o código que foi gerado no processo 1, a cozinha irá verificar se tem todos os ingredientes necessários para o preparo, se não tiver, o lanche será 
cancelado e será informado ao cliente a indisponibilidade. Se o cliente desejar realizar outro lanche, assim será feito e voltaremos ao processo 1. Se houver   
disponibilidade de ingredientes, o lanche será preparado.

<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/cozinha_processo.png"/>
</p>

### 3.3.4 Processo 4 – PROCESSO DE CRIAÇÃO DE LANCHE

Nesse processo de criação de lanche sera obrigatorio a entrada de um nome, preço, uma imagem,itens do lanche, ordem e o tipo desse lanche fornecido pelo gerente ou dono do estabelecimento. Nele tambem poderar ser ativado e desativado podendo ou não aparecer no cardapio para venda assim mostrando para o atendente ou o cliente que esse lanche não esta disponivel. Ao final de tudo isso deverar ser gerado um cardapio virtual que sera mostrado para ambos participantes dos processos 
(Cliente ou atendente).

<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/processo_cardapio.png"/>
</p>

### 3.3.5 Processo 5 – PROCESSO DE CHAMAR O MOTOBOY E ENTREGA

Após o cliente realizar o pedido e o código ser gerado, o Motoboy do restaurante é acionado e recebe as informações sobre o endereço da entrega, após a entrega ser realizada o Motoboy volta para o restaurante e informa que a entrega foi realizada, depois disso é atualizado no sistema com o Status "Pedido Entregue".

<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Processo%205.png?raw=true"/>
</p>

### 3.3.6 Processo 6 – PROCESSO DE CANCELAMENTO DO PEDIDO

Após o pedido ser gerado, existe a possibilidade do cancelamento. O software da Di'Lanches conta com uma opção de "Cancelamento do Pedido", em que o cliente solicita esse cancelamento após clicar nessa opção, lá ele têm um espaço para justificar seu cancelamento, onde é analisada essa justificativa com um possível estorno do dinheiro, depois disso é atualizado no sistema com o Status "Pedido Cancelado".

<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Processo%206.png"
</p>

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – Criação de pedidos

**Mostrar Cardapio**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Text |   |   |
| Imagem | imagem |   | SemFoto.png |
| Descricao | Text |   |   |
| Valor | Text | formatado em real | 0 |

**Editar lanches**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Text |   | Dados já existentes |
| Imagem | Imagem |   | Imagem já existente |
| Quantidade de acrecimo | Number | Não pode ser negativo | Dados já existentes |
| Adicionar item | Button |   | Dados já existentes |

**Informar Endereço**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Rua | Text | Texto |  |
| Bairro | Text | Texto |  |
| Cidade | Text | Texto |  |
| Estado | Text | Texto apenas 2 caracteres |  |
| Numero | Number | Numero |  |
| CEP | Text | Numero contendo 8 caracteres | |

**Informar Contato**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Text |   |   |
| Telefone | Text |   | (00) 00000-0000 |


**Informar forma de pagamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Tipo | Radio Button |   |   |
| Valor total | Number | Formatar em real | 0 |
| troco | Number | Formatar em real | 0 |


#### Processo 2 – CONTROLE DE ESTOQUE

**Mostrar Produto**

| **Campo** | **Tipo** | **Restrições** |
| --- | --- | --- |
| Nome | Text | Apenas vizualisação |
|  Imagem  |  imagem  | Apenas vizualisação |
| Descricao | Caixa de texto | Apenas vizualisação |
| Valor | Número | Apenas vizualisação | 


**Editar Produto**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Text |   |   |
|  Imagem  |  imagem  |   |  SemFoto.png |
| Descricao | Caixa de texto |   |   |
| Valor | Número | Real |   |
| Atualizar item | Button |   |   |


**Adicionar Produto**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Text |  Tamanho |   |
|  Imagem  |  imagem  |   |  SemFoto.png |
| Descricao | Caixa de texto |   |   |
| Valor | Número | Real |   |
| Adcionar item | Button |   |   |


#### Processo 3 – PROCESSO DE RECEBER O PEDIDO (COZINHA)

**Receber pedido do atendente**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Código do Pedido | Número inteiro | Não pode ser nulo  |   |
| Nome do Cliente | Tipo Texto | Não pode ser nulo  |   |
| Pedido | Tipo Texto | Não pode ser nulo  |   |
|    |    |     |

**Informar falta de ingredientes**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Comentário | Tipo Texto | Não pode ser nulo | "Desculpe, estamos sem o ingrediente {X}, por favor refaça o pedido!" |
|    |    |     |


**Preparar pedido**

**Preparar pedido**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Pedido preparado | Botão |   | "O seu pedido está pronto para a retirada." |
|    |    |     |

#### Processo 4 – PROCESSO DE CRIAÇÃO DE CARDÁPIO/PRODUTO

**Atividade Criar produto**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Caixa de texto | Mínimo de 2 caractéres |  |
| Preço | Caixa numérica | Maior que 0 |  |
| Imagem | Arquivo imagem | Arquivo tipo jpeg | Sem imagem  |
| Ingredientes do produto | Caixa de texto | Mínimo um produto vínculado |  |
| Tipo do produto | Caixa de texto |  | Nenhum tipo |
| Produto ativo | Caixa boolean | Ativo ou Inativo | inativo |

#### Processo 5 –  PROCESSO DE CHAMAR O MOTOBOY E ENTREGA 

**Cominicação das infomações sobre a entrega**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome do cliente | Text | Visualização |   |
| Endereço de entrega | Text | Visualização |   |
| Código do pedido | Number | Visualização |   |
| Telefone | Tel | Visualização |   |
|    |    |     |

**Atualizar Status do Pedido**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Atualizar Status | Botão de Seleção |   |   |
|    |    |     |

#### Processo 6 – NOME DO PROCESSO

**Solicitar Cancelamento do Pedido**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Solicitar Cancelamento do Pedido | Botão |   |   |
| Código do Pedido | Number | Apenas números inteiros |   |
|    |    |     |

**Justificar Cancelamento do Pedido**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Justificativa | Text | Não pode ser nulo |  |
|    |    |     |

**Cancelar Pedido**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Cancelar Pedido | Botão |   |   |
|    |    |     |

### 4.2. Tecnologias
    
As tecnologias utilizadas foram HTML, CSS e JavaScript para FrontEnd, TS Node Express para BackEnd e PostgreSQL para o Banco de Dados, além de Visual Studio Code como IDE de desenvolvimento, Github como repositório, Figma para os Templates e Discord para comunicação e reuniões.

## 5. Modelo de dados

Aqui esta apresentado o modelo de banco de dados logico mostrando como será armazenado todos dados para o funcionamento desse sistema.

![Diagrama de Entidade Relacionamento de Di'lanches](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/banco_logico.png "Diagrama de Entidade Relacionamento de Di'lanches")

## 6. Indicadores de desempenho

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual Delivery | Manter controle sobre os pedidos que estão sendo entregues | Afere a taxa de pedidos entregues | Pedidos Entregues ÷ Pedidos Gerados | Tabela Pedido | Empresa |
| Taxa de Cancelamentos | Melhorar a prestação de serviço medindo a porcentagem e o motivo dos cancelamentos | Afere a taxa de pedidos cancelados |  Cancelamentos ÷ Pedidos Gerados | Tabela Cancelamentos | Cliente |
|Quantidade de operações de venda |  |  |  |  |  |
| Taxa de sucesso em Vendas | Manter controle sobre os materiais que estão sendo entregues | Afere a taxa de vendas realizadas com sucesso |  Pedidos Fechados com Sucesso ÷ Pedidos Gerados | Tabela Pedido | Processo Interno |
| Faturamento Mensal | Manter controle sobre o faturamento | Afere o faturamento mensal |  Soma dos pedidos gerados | Tabela Ingredientes | Processo Interno |
| Valor do Ticket Medio | Controle financeiro sobre o faturamento de cada venda | Afere o valor de faturamento em cada venda | Faturamento ÷ Quantidade de Operações de Venda | Tabela Pedido | Processo Interno |

## 7.Sistema desenvolvido

**TELA DE INICIO**
    
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Tela_de_Inicio.png"
</p>
    
<p align="center">
  Tela principal do site.
</p>
    
**TELA CARDAPIO**
    
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Tela_cardapio.png"
</p>

<p align="center">
  Tela onde o funcionário possui todas as informações do cardápio.
</p>
    
**TELA LOGIN**
    
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Tela_login.png"
</p>

<p align="center">
  Tela onde o funcionário realiza o login no sistema.
</p>
    
**TELA REGISTRO**
    
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Tela_register.png"
</p>

<p align="center">
  Tela onde o funcionário realiza seu cadastro no sistema.
</p>
    
**TELA PEDIDO**
    
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Tela_pedido.png"
</p>

<p align="center">
  Tela onde o funcionário possui as informações do pedido.
</p>
    
**TELA ESTOQUE**
    
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Tela_estoque.png"
</p>
   
<p align="center">
  Tela onde o funcionário possui informações do estoque. Aqui ele pode remover, alterar e adicionar produtos no estoque.
</p>
    
**TELA CRIAR LANCHE**
    
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Tela_criarlanche.png"
</p>
   
<p align="center">
  Tela onde o funcionário realiza a criação do lanche.
</p>
    
**TELA ADICIONAR INGREDIENTE**
    
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/imagens/Tela_adicionaringrediente.png"
</p>

<p align="center">
  Tela onde o funcionário adiciona ingredientes ao lanche.
</p>
    
## 8. Conclusão
    
O projeto da Di'Lanches é um sistema de gestão que teve como intuíto principal tornar o processo de solicitação de pedidos do restaurante de uma maneira simples, criando uma interface amigável para o atendente. Trouxemos também no projeto uma forma de obter maior controle do estoque de produtos, fazendo com que o restaurante obtivesse maior precisão na produção de pedidos. E para o controle do negócio, o restaurante está sempre aberto para escutar Feedbacks dos clientes.

# APÊNDICES

Do código: https://dilanches.eduardobrito.com.br/;

Dos artefatos (armazenado do repositório);

Da apresentação final: https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-di-lanches/blob/master/docs/Apresentação.pptx;

Do vídeo de apresentação (armazenado no repositório).




