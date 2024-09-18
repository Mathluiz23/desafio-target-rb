# Desafios Processo Seletivo Target

Este repositório contém soluções para os desafios propostos no processo seletivo da Target. Cada desafio foi implementado em JavaScript.

## Desafios

### 1) Sequência de Fibonacci

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

### 2) Identifica Quantidfade de letras 'a' em uma string

Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

### 3) Cálculo da Soma

Observe o trecho de código abaixo:

```js
int INDICE = 12, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
```

### 4) Descubra a lógica e complete o próximo elemento:

-   a) 1, 3, 5, 7, \_\_\_
-   b) 2, 4, 8, 16, 32, 64, \_\_\_\_
-   c) 0, 1, 4, 9, 16, 25, 36, \_\_\_\_
-   d) 4, 16, 36, 64, \_\_\_\_
-   e) 1, 1, 2, 3, 5, 8, \_\_\_\_
-   f) 2,10, 12, 16, 17, 18, 19, \_\_\_\_

## Resposta :

-   a) 9
-   b) 128
-   c) 49
-   d) 100
-   e) 13
-   f) 20

### 5) Qual interruptor controla cada lâmpada?

Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

## Resposta :

Poderia resolver isso utilizando apenas uma ida. Eu iria até o interruptor, ligaria uma das lâmpadas e deixaria ligada por alguns poucos minutos, após isso eu desligaria essa lâmpada e ligaria outro interruptor , aí então eu iria até a sala. A lâmpada que estive desligada mas ainda aquecida por ter ficado uns minutos ligada seria a lâmpada referente ao primeiro interruptor , a lâmpada acesa seria referente ao segundo interruptor que deixei ligado, já a lâmpada desligada e fria seria referente ao terceiro interruptor que não foi acionado em nenhum momento.
