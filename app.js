(function() {
  var app = angular.module('profile', []);

  app.controller('ListController', function(){
    this.information = info;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });


  var info = [
    {
      header: '"When you learn to code, it opens up for you to learn many other things. :) "',
      whoIam: "My name is Nyein Chan Kyaw. I'm a passionate software and web developer from New York City. I love coding, playing guitars and listening to folk songs!!!",
      job:'Disons Gems (01/2015 - 04/2015), vDiscovery (08/2012 - 12/2014), G & G LLC (11/2006- 06/2009)',
      education: 'Queens Collge(2014)', 
      projects: "will be updated soon",
      contacts: "@nck85"
      
      
      
    }
  ];
})();
