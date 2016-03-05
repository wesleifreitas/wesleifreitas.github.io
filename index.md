---
layout: post-index
title: "wesleifreitas.github.io"
description: ""
tags: [about, author]
comments: false
modified: 2016-02-16
---

<div class="read-more" ng-cloak>
  <div class="read-more-header">
    <a href="{{ site.owner.site }}" class="read-more-btn">Sobre o autor</a>
  </div><!-- /.read-more-header -->
  <div class="read-more-content author-info">
    <h3>{{site.owner.name}}</h3>
    <div class="author-container">
      <img class="author-img" src="{{site.url}}/{{site.owner.avatar}}" alt="{{site.owner.name}}" />
      <div class="author-bio">{{site.owner.bio_about}}</div>
    </div>
    <div class="author-share">
      <ul class="list-inline social-buttons">
        {% for network in site.social %}
          <li><a href="{{ network.url }}" target="_blank"><i class="fa fa-{{ network.title }} fa-fw"></i></a></li>
        {% endfor %}
      </ul>      
    </div>
    <h2><i class="fa fa-caret-down"></i> Mais informações</h2>
    <div>
    	<p class="content-justify">Fez graduação na faculdade Veris IBTA - (Grupo Ibmec) e cursou a matéria isolada CE-230 - Qualidade, Confiabilidade e Segurança (Safety) de Software no Instituto Tecnológico de Aeronáutica (ITA), possui experiência na área de Análise e Desenvolvimento de Sistemas. Atuou em projetos para empresas como ABCR - Agencia Brasileira de Controle de Risco, SENAI, Hoepers & Campos Advogados Associados, Embraer, BETEL Aeropeças, Veneri Freitas, INFRAERO, DAESP e na criação do Software Phoenix Flex utilizado para desenvolver sistemas na empresa Rich Solutions. Trabalhou em projetos para instituições financeiras com comunicação ao Banco Central, CETIP, CIP e SERASA.</p>
    	<p class="content-justify">É mantenedor do software Phoenix Project (https://github.com/wesleifreitas/px-project), projeto modular open source baseado em componentes, que possui como objetivo permitir o desenvolvimento ágil de aplicações web modernas com qualidade, confiabilidade e segurança.</p>
		  <p class="content-justify"><strong>Atualmente tem se dedicado com JavaScript Projects!</strong></p>
    </div>
    <h2>Conhecimentos</h2>
    <div layout="row" layout-align="start" layout-wrap layout-padding>
      <div flex="20" flex-xs="50">AS3</div>
      <div flex="20" flex-xs="50">Angular JS</div>
      <div flex="20" flex-xs="50">Angular Material</div>
      <div flex="20" flex-xs="50">Bootstrap</div>
      <div flex="20" flex-xs="50">Bower</div>
      <div flex="20" flex-xs="50">ColdFusion</div>
      <div flex="20" flex-xs="50">CSS</div>
      <div flex="20" flex-xs="50">Flex / Air</div>
      <div flex="20" flex-xs="50">Git</div>
      <div flex="20" flex-xs="50">Github</div>
      <div flex="20" flex-xs="50">Grunt</div>
      <div flex="20" flex-xs="50">Gulp</div>
      <div flex="20" flex-xs="50">HTML</div>
      <div flex="20" flex-xs="50">Java</div>
      <div flex="20" flex-xs="50">JavaScript</div>
      <div flex="20" flex-xs="50">Jekyll</div>
      <div flex="20" flex-xs="50">Node.js <i class="fa fa-book"></i></div>
      <div flex="20" flex-xs="50">MongoDB <i class="fa fa-book"></i></div>
      <div flex="20" flex-xs="50">MEAN.IO <i class="fa fa-book"></i></div>
      <div flex="20" flex-xs="50">Python <i class="fa fa-book"></i></div>
      <div flex="20" flex-xs="50">Ruby <i class="fa fa-book"></i></div>
      <div flex="20" flex-xs="50">SQL</div>
      <div flex="20" flex-xs="50">Scrum</div>
      <div flex="20" flex-xs="50">SVN</div>
      <div flex="20" flex-xs="50">UML</div>
      <div flex="20" flex-xs="50">Web Service</div>
    </div>   
    <div layout="row" flex="100" layout-padding layout-wrap layout-fill>
      <md-whiteframe class="md-whiteframe-1dp" flex="100" layout layout-align="center center">
        <span><small><i class="fa fa-book"></i> Em estudo, adquirindo experiência.</small></span>
      </md-whiteframe>
     </div>
     <p>
       {% if site.owner.github %}
          <a aria-label="Seguir @{{site.owner.github}} on GitHub" data-style="mega" href="https://github.com/{{site.owner.github}}" class="github-button">Seguir @{{site.owner.github}}</a>
        {% endif %}        
      </p>
  </div> 
  <!--
  <footer class="entry-meta">
    {% if page.modified %}<span>Atualizado em <span class=""><time datetime="{{ page.modified }}">          
      {% assign m = page.modified | date: "%-m" %}            
      {{ page.modified | date: "%-d" }}
      {% case m %}
        {% when '1' %}Janeiro
        {% when '2' %}Fevereiro
        {% when '3' %}Março
        {% when '4' %}Abril
        {% when '5' %}Maio
        {% when '6' %}Junnho
        {% when '7' %}Julho
        {% when '8' %}Agosto
        {% when '9' %}Setembro
        {% when '10' %}Outubro
        {% when '11' %}Novembro
        {% when '12' %}Dezembro
      {% endcase %}
      {{ page.modified | date: "%Y" }}
    </time></span></span>
    <span class="author vcard"><span class="fn">{{ site.owner.name }}</span></span>{% endif %}        
  </footer>
  -->  
</div>