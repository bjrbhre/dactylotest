function view_options(action)
{

if (action == "")
  return;

document.getElementById("options").style.display = action;
document.getElementById("voile").style.display = action;

if (action == "block")
  document.getElementById("txt").blur();
if (action == "none")
  document.getElementById("txt").focus();

}

function view_help(action)
{

if (action == "")
  return;

document.getElementById("help").style.display = action;
document.getElementById("voile").style.display = action;

if (action == "block")
  document.getElementById("txt").blur();
if (action == "none")
  document.getElementById("txt").focus();

}



var mode_jeu = false;
function modejeu(a)
{
  if (a)
  {
    mode_jeu = true;
    vies = 2;
  }
  else
    mode_jeu = false;
}
function make_heart()
{
  var coeur="&#10084; ";
  var nb_vies="";
  /*for (var i=0 ; i<vies ; i++)
  {
    nb_vies+=coeur;
  }*/
  return vies+' <span style="color:red">'+coeur+'</span>';
}

function options(e)
{
  //var touche = window.event ? e.keyCode : e.which;
  //alert(touche);
}
