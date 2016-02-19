---
layout: post
title: Jekyll + AngularJS
description: "Jekyll com AngularJS."
tags: [jekyll angularjs, jekyll, angularjs]
comments: true
categories: [code]
image:
    feature: jekyll-angular.jpg
---

### Quero utilizar Jekyll com AngularJS!

Surgiu a idéia de utilizar Jekyll e AngularJS, entao resolvi pesquisar se havia alguma maneira de trabalhar com eles juntos, pois bem, existe! Portanto irei compartilhar como fazer isto neste humilde blog — Sim é meu primeiro post **\\o/**<br>
O desafio <del>problema</del> é que ambos utilizam as **\{\{ chaves }}** em suas sintaxes, neste caso o Jekyll terá preferência.

### Solução

Para resolver o conflito você deve implementar o **$interpolateProvider** e trocar o uso das chaves por outros caracteres, por exemplo **\[\[ colchetes ]]** — Veja a seguir.

{% highlight javascript %}
var myAngularApp = angular.module('myAngularApp', [], function() {});

myAngularApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

myAngularApp.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];

function MyCtrl($scope) {
	$scope.name = 'Weslei Freitas';
}
{% endhighlight %}

<div ng-controller="PostCtrl">
{% highlight html %}
<div>
    Meu nome é: [[jekyllAngular.example]], muito prazer! // Meu nome é: Weslei Freitas, muito prazer!
</div>
{% endhighlight %}
</div>

**That´s all folks!** <i class="fa fa-thumbs-o-up"></i>