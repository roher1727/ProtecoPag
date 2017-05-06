
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
  movie.C1      = [{'C1':'C++'}];
  movie.C       = [{'C':'C'}];
  movie.C2      = [{'C2':'C#'}];
  movie.Di  = [{'Di':'Diseño WEB'}];
  movie.Emsamblado= [{'Emsamblado':'Emsamblado y Mantenimiento'}];
  movie.Computacion = [{'Computacion':'Computacion Forense'}];
  movie.Fortran = [{'Fortran':'Fortran'}];
  movie.IA = [{'IA':'Inteligencia Artificial'}];
  movie.Introduccion = [{'Introduccion':'Introduccion a la programacion'}];
  movie.ios = [{'ios' : 'ios'}];
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