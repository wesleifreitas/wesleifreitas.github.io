---
layout: post
title: Raspberry Pi 3 (pi3) - Console Retrô
description: "Criar um console retrô com Raspberry Pi 3 (pi3)."
tags: [raspberry, pi3, console retrô]
comments: true
categories: [tutorial]
image:
    feature: respberry-console-retro/respberry-console-retro.jpg
---

Está afim de jogar jogos antigos? Neste post irei demostrar como criar um console retrô, utilizando um [Raspberry](https://pt.wikipedia.org/wiki/Raspberry_Pi) Pi 3 (mini computador baseado na arquitetura ARM) com o [recalbox-os](http://www.recalbox.com) (sistema operacional criado para Raspberry Pi).

**Custo:** com até R$ 500,00 você terá um console retrô (Super Nintendo, Mega Drive, Nintendo 64, Playstation, etc). Veja os consoles suportados [aqui](http://www.recalbox.com#systems)!

## O que é necessário para criar este precioso brinquedinho?

<figure class="half">
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a>
	<figcaption>item 1, item 2, [...].</figcaption>
</figure>

<i class="fa fa-smile-o" aria-hidden="true"></i> *Estes itens são facilmente encontrados no mercado livre.*

## Passo a passo <i class="fa fa-linux" aria-hidden="true"></i> <i class="fa fa-gamepad" aria-hidden="true"></i>

### 1. Baixar o último release do recalboxOS

Faça o download [aqui](https://github.com/recalbox/recalbox-os/releases)!

### 2. Instalar o recalboxOS no cartão SD formatado (FAT32)

Utilize um software para formatar mídia, ex.: [SD Formatter](https://www.sdcard.org/downloads/formatter_4/) para Windows e MacOSX, ou gparted no linux.

* Inicie o programa de formatação de cartão de memória e formate todo o cartão em FAT32
* Extraia o conteúdo do arquivo baixado diretamente na raiz do seu cartão de memória
* Encaixe o cartão de memória no Raspberry Pi, conecte o cabo HDMI e a fonte de energia
* A instalação se iniciará e voce terá um recalbox em alguns minutos

Quando iniciar o Recalbox você deverá ver sua interface gráfica:

<figure>
	<img src="/images/respberry-console-retro/emulationstation.jpg" alt="">
</figure>


### 3. Configurar o controle

Caso possua um controle USB de PS3 ou Xbox 360, tudo que você precisa fazer é conectá-lo ao Raspberry Pi.

Se for utilizar outro joystick USB, [lista de compatibilidade aqui](https://github.com/recalbox/recalbox-os/wiki/Periféricos-Compatíveis-(PT)), siga as instruções abaixo:

Depois de plugar seu controle USB ou parear seu controle Bluetooth, aperte o START com um controle já configurado ou (ou ENTER no teclado) e selecione a opção `Configure Input / Configuração de controles` e siga as instruções.

O último botão, o **HOTKEY** é um botão que ativará combinações com outros botões. É recomendado utilizar o L3 (para controles com analógico) ou o botão SELECT.

Os nomes dos botões são baseados no controle de Super Nintendo:

<figure>
	<img src="/images/respberry-console-retro/snes-controller.jpg" alt="">
</figure>

Os botões L2, R2, L3 e R3 são baseados nos controles de Playstation.

Pule a configuração dos botões que não existem em seu controle pressionando qualquer botão por 2 segundos.

Volte para a tela de configuração, atribua o controle para um jogador. Pronto, seu controle agora está configurado!

### 4. Adicionar jogos

[...]