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

<hr>
<figure class="half">
	<!-- <a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt=""></a> -->
	<a href="/images/respberry-console-retro/raspberry-pi-3.jpg">
		<img src="/images/respberry-console-retro/raspberry-pi-3.jpg" alt="">
	</a>	
	<a href="/images/respberry-console-retro/fonte-5v-2a-micro-usb-raspberry-pi-b-raspberry-pi3-pi-3">
		<img src="/images/respberry-console-retro/fonte-5v-2a-micro-usb-raspberry-pi-b-raspberry-pi3-pi-3.jpg" alt="">
	</a>
	<a href="/images/respberry-console-retro/micro-sd.jpg">
		<img src="/images/respberry-console-retro/micro-sd.jpg" alt="">
	</a>	
	<a href="/images/respberry-console-retro/cabo-hdmi.jpg">
		<img src="/images/respberry-console-retro/cabo-hdmi.jpg" alt="">
	</a>
	<a href="/images/respberry-console-retro/controle-ps3.jpg">
		<img src="/images/respberry-console-retro/controle-ps3.jpg" alt="">
	</a>
	<a href="/images/respberry-console-retro/case.jpg">
		<img src="/images/respberry-console-retro/case.jpg" alt="">
	</a>
	<!-- <figcaption>[item 1, item 2, [...].]</figcaption> -->
</figure>

<div align="center">
	<i class="fa fa-smile-o" aria-hidden="true"></i> Estes itens são facilmente encontrados no mercado 
	livre.
</div>
<hr>

— Tudo pronto? Então siga as instruções a seguir.

<h2 align="center">
Passo a passo <i class="fa fa-linux" aria-hidden="true"></i> <i class="fa fa-gamepad" aria-hidden="true"></i></h2>

### 1. Baixar o último release do recalboxOS

Faça o download [aqui](https://github.com/recalbox/recalbox-os/releases)!

### 2. Instalar o recalboxOS no cartão SD formatado (FAT32)

Utilize um software para formatar mídia, ex.: [SD Formatter](https://www.sdcard.org/downloads/formatter_4/) para Windows e MacOSX, ou gparted no linux.

* Inicie o programa de formatação de cartão de memória e formate todo o cartão em FAT32;
* Extraia o conteúdo do arquivo baixado diretamente na raiz do seu cartão de memória;
* (Opcional )Monte o case no seu Raspberry; 
**Atenção:** caso possua cooler, ligue nos pinos certos (04 e 06):
<figure class="center">
	<img src="/images/respberry-console-retro/pi3_gpio.jpg" alt="">
	<img src="/images/respberry-console-retro/how-to-connect-to-gpio.jpg" alt="">
</figure>
* Encaixe o cartão de memória no Raspberry Pi, conecte o cabo HDMI e a fonte de energia;
* A instalação se iniciará e voce terá um recalbox rodando em alguns minutos.

Quando iniciar o Recalbox você deverá ver sua interface gráfica:

<figure>
	<img src="/images/respberry-console-retro/emulationstation.jpg" alt="">
</figure>


### 3. Configurar o controle

Caso possua um controle USB de PS3 ou Xbox 360, tudo que você precisa fazer é conectá-lo ao Raspberry Pi.

Se for utilizar outro joystick USB, [lista de compatibilidade aqui](https://github.com/recalbox/recalbox-os/wiki/Periféricos-Compatíveis-(PT)), siga as instruções abaixo:

Depois de plugar seu controle USB ou parear seu controle Bluetooth (necessário adaptador Bluetooth), aperte o START com um controle já configurado ou (ou ENTER no teclado) e selecione a opção `Configure Input / Configuração de controles` e siga as instruções.

O último botão, o **HOTKEY** é um botão que ativará combinações com outros botões. É recomendado utilizar o L3 (para controles com analógico) ou o botão SELECT.

Os nomes dos botões são baseados no controle de Super Nintendo:

<figure>
	<img src="/images/respberry-console-retro/snes-controller.jpg" alt="">
</figure>

Os botões L2, R2, L3 e R3 são baseados nos controles de Playstation.

Pule a configuração dos botões que não existem em seu controle pressionando qualquer botão por 2 segundos.

Volte para a tela de configuração, atribua o controle para um jogador. Pronto, seu controle agora está configurado!

### 4. Adicionar jogos

Conecte o Raspberry a sua rede local (Utilize o cabo ou configure o WIFI no recalboxOS).
Depois em seu computador, acesse Redes no Windows Explorer e selecione o Recalbox ou digite `\\RECALBOX` na barra de endereço.

[IMG]


*Nota: Você pode verificar o IP nas opções de rede no recalboxOS e acessar por ele, por exemplo `\\192.168.1.10`.*


Depois abra a pasta `share`, em seguida `roms`. Por fim, cole seus jogos na pasta do seu respectivo emulador.

**— Enjoy!**

## Extras

Veja como ficou o meu console retrô a seguir.

[IMG]

**Obs.:** Eu configurei minha rede WIFI direto no arquivo **recalbox/share/system/recalbox.conf**, não esqueça de remover o `;` do início da linha alterada:
<div>
	# ------------ B - Network ------------ #
	<br>## >Set system hostname
	<br>system.hostname=RECALBOX
	<br>## Activate wifi (0,1)
	<br>wifi.enabled=<b>1</b>
	<br>## Wifi SSID (string)
	<br>wifi.ssid=<b>meuWifi</b>
	<br>## Wifi KEY (string)
	<br>wifi.key=<b>minhaSenha</b>
</div>

### Mais informações:

* **Site oficial do recalboxOS :** [http://www.recalbox.com/](http://www.recalbox.com/)
* **Manuais (wiki) do recalboxOS :** [https://github.com/recalbox/recalbox-os/wiki/](https://github.com/recalbox/recalbox-os/wiki)


**That´s all folks!** <i class="fa fa-thumbs-o-up"></i>