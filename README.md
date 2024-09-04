1. Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
   #### R:Arquivo desafio1.js
   
   IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

3. Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
 #### R:Arquivo desafio2.js*

3. Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
 #### R:Arquivo desafio3.js*

4. Descubra a lógica e complete o próximo elemento:
   
   a) 1, 3, 5, 7, * 9 *,* 11 *,* 13 *
   
   b) 2, 4, 8, 16, 32, 64, * 128_,_256_,_512 *
   
   c) 0, 1, 4, 9, 16, 25, 36,* 49_,_64_,_81 *
   
   d) 4, 16, 36, 64, * 100_,_144_,_196 *
   
   e) 1, 1, 2, 3, 5, 8,* 13_,_21_,_34 *
   
   f) 2,10, 12, 16, 17, 18, 19, * 200_,_201_,_202 *
   

6. Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

*R:Para atingir esse fim , limitada com o fato que pode ir somente duas vezes ate uma das salas eu pensei na seguinte opção:
Acender o primeiro interruptor e ir para a sala do meio, se a luz da sala acender eu já sei que esse primeiro interruptor pertence a sala do meio, logo eu iria acender o segundo interruptor e iria para a primeira sala, se a luz da sala acender eu saberia que o segundo interruptor acende a proimeira sala e por conseguinte o terceiro interruptor acende a terceira sala, se a luz da sala não acender, logo eu saberia que o segundo interruptor acende a terceira sala, restando o terceiro interruptor para acender a primeira sala. Porém se a luz da sala não acender, eu já sei que o primeiro interruptor pertence a primeira sala ou a terceira sala,assim,eu acenderia o segundo interruptor e iria para a primeira sala seela acender eu sei que o segundo interruptor acende a primeira sala,o primeiro acende a terceira sala e o terceiro acende a sala do meio.*
