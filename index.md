---
layout: post-index
title: "wesleifreitas.github.io"
description: ""
tags: [about, author]
comments: false
---

<div class="read-more">
  <div class="read-more-header">
    <a href="{{ site.owner.site }}" class="read-more-btn">Sobre o autor</a>
  </div><!-- /.read-more-header -->
  <div class="read-more-content author-info">
    <h3>{{site.owner.name}}</h3>
    <div class="author-container">
      <img class="author-img" src="{{site.url}}/{{site.owner.avatar}}" alt="{{site.owner.name}}" />
      <div class="author-bio">{{site.owner.bio}}</div>
    </div>
    <div class="author-share">
      <ul class="list-inline social-buttons">
        {% for network in site.social %}
          <li><a href="{{ network.url }}" target="_blank"><i class="fa fa-{{ network.title }} fa-fw"></i></a></li>
        {% endfor %}
      </ul>
      {% if site.owner.github %}
        <a aria-label="Seguir @{{site.owner.github}} on GitHub" data-style="mega" href="https://github.com/{{site.owner.github}}" class="github-button">Seguir @{{site.owner.github}}</a>
      {% endif %}
      <br>
      {% if site.owner.twitter %}
        <a href="https://twitter.com/{{site.owner.twitter}}" class="twitter-follow-button" data-show-count="false" data-size="large" data-lang="pt">Seguir @{{site.owner.twitter}}</a>
      {% endif %}
    </div>
    <h2>Mais informações</h2>
    <div>
    	<p class="content-justify">Fez graduação na faculdade Veris IBTA - (Grupo Ibmec) e cursou a matéria isolada CE-230 - Qualidade, Confiabilidade e Segurança (Safety) de Software no Instituto Tecnológico de Aeronáutica (ITA), possui experiência na área de Análise e Desenvolvimento de Sistemas. Atuou em projetos para empresas como ABCR - Agencia Brasileira de Controle de Risco, SENAI, Hoepers & Campos Advogados Associados, Embraer, BETEL Aeropeças, Veneri Freitas, INFRAERO, DAESP e na criação do Software Phoenix Flex utilizado para desenvolver sistemas na empresa Rich Solutions. Trabalhou em projetos para instituições financeiras com comunicação ao Banco Central, CETIP, CIP e SERASA.</p>
    	<p class="content-justify">É mantenedor do software Phoenix Project (https://github.com/wesleifreitas/px-project), projeto modular open source baseado em componentes, que possui como objetivo permitir o desenvolvimento ágil de aplicações web modernas com qualidade, confiabilidade e segurança.</p>
		<p class="content-justify"><strong>Atualmente tem se dedicado com JavaScript Projects!</strong></p>
    </div>
  </div>
</div>