
(function(){
  'use strict';
        //Nombre de la aplicación
                //Dependencias que nuestra aplicacion podría necesitar
angular
.module("myApp",[])
.controller("movieCtrl", movieCtrl);
//Un controlador es el encargado de manejar alguna funcionalidad de la página
function movieCtrl(){
  var movie = this;

  movie.Android = [{'Android' : 'Android'}];
  movie.Arduino = [{'Arduino':'Arduino'}];
  movie.Bases    = [{'Bases':'Bases de Datos'}];
  movie.Cplus      = [{'Cplus':'C++'}];
  movie.C       = [{'C':'C'}];
  movie.Csharp      = [{'Csharp':'C#'}];
  movie.diseweb  = [{'diseweb':'Diseño WEB'}];
  movie.Ensamblado= [{'Ensamblado':'Ensamblado y Mantenimiento'}];
  movie.computoforense = [{'computoforense':'Computo Forense'}];
  movie.Fortran = [{'Fortran':'Fortran'}];
  movie.IA = [{'IA':'Inteligencia Artificial'}];
  movie.Intro = [{'Intro':'Introduccion a la programacion'}];
  movie.IOS = [{'IOS' : 'ios'}];
  movie.redes = [{'redes':'Redes'}];
  movie.ras = [{'ras':'Raspberry'}];
  movie.Python = [{'Python':'Python'}];
  movie.PHP = [{'PHP':'PHP'}];
  movie.Matlab= [{'Matlab':'Matlab'}];
  movie.Linux = [{'Linux':'Linux'},];
  movie.Laravel = [{'Laravel':'Laravel'}];
  movie.Java = [{'Java':'Java'}];
  


}

})();

$(document).ready(function(){
  $('.button-collapse').sideNav();
  });

$(document).ready(function(){
  $('.dropdown-button').dropdown();
  });

$(document).ready(function(){
      $('.carousel.').carousel({fullWidth:true});
    });

$(document).ready(function(){
      $('.parallax').parallax();
    });

$(document).ready(function(){
      $('.modal').modal();
    });
