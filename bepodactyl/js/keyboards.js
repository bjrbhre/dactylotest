var type_kb = "kb_decal";

function aff_kb(a)
{
  if (a == true)
    type_clavier(type_kb);
  else
    type_clavier("none");
}

function type_clavier(a)
{
  if (a == "none")
  {
    document.getElementById("aff_kb").innerHTML="";
    return;
  }

        if (a == "kb_decal")
          document.getElementById("aff_kb").innerHTML=kb_decal();

        if (a == "kb_typematrix")
          document.getElementById("aff_kb").innerHTML=kb_typematrix();


  //document.getElementById("aff_kb").innerHTML=kb_typematrix();
  //document.getElementById("aff_kb").innerHTML=kb_decal();
  //document.getElementById("aff_kb").innerHTML='<img src="bepo-standard.png" alt="clavier bépo" />';


  color_key();


}


var shift_down = false;
var altgr_down = false;
function get_key(e,action)
{
  var touche = window.event ? e.keyCode : e.which;

  //alert(touche + " " + action);
  if(action == "down") //on enfonce la touche
  {
    if (touche== 16) //shift
      shift_down = true;
    if (touche == 17 || touche == 225) //altgr  linux = 225 ; win = 17 ??? étrange
      altgr_down = true;
  }
  if(action == "up")
  {
    if (touche== 16) //shift
      shift_down = false;
    if (touche == 17 || touche == 225) //altgr
      altgr_down = false;
  }

  if (shift_down == true && altgr_down == true)
    layout = bepo_4;
  if (shift_down == true && altgr_down == false)
    layout = bepo_2;
  if (shift_down == false && altgr_down == true)
    layout = bepo_3;
  if (shift_down == false && altgr_down == false)
    layout = bepo_1;

  for (var k = 0 ; k < layout.length ; k++)
  {
    if(document.getElementById("k"+k))
      document.getElementById("k"+k).innerHTML = layout.charAt(k);
  }
  color_key();
}

function color_key()
{
  var a;
  var b;
  var exo_pre="";

  for (var key=0 ; key < 48 ; key++)
  {
    if (document.getElementById("k"+key))
      document.getElementById("k"+key).style.backgroundColor = "inherit";
  }

  for (var i = 0 ; i < exo_en_cours ; i++)
  {
    exo_pre += lettres[i];
    //alert(exo_pre);
  }

  for (var key=0 ; key < 48 ; key++)
  {
    if (document.getElementById("k"+key))
    {
                a = document.getElementById("k"+key).innerHTML;

      for (var lettre = 0 ; lettre < exo_pre.length ; lettre++)
      {
        b = exo_pre.charAt(lettre);
        //alert(key+" _" +a+"_ _"+b+"_");

        if ( a == b && document.getElementById("k"+key) )
          document.getElementById("k"+key).style.backgroundColor = "#c1f7ad";
      }

      for (var lettre = 0 ; lettre < lettres[exo_en_cours].length ; lettre++)
      {
        b = lettres[exo_en_cours].charAt(lettre);
        //alert(key+" _" +a+"_ _"+b+"_");

        if ( a == b && document.getElementById("k"+key) )
          document.getElementById("k"+key).style.backgroundColor = "#7cfc00";
      }
    }
  }
  //document.getElementById("k"+key).style.backgroundColor = col;
}

var bepo_1 = "$\"«»()@+-/*=%bépoè^vdljzwauie,ctsrnmçêàyx.k'qghf";
var bepo_2 = "#1234567890°`BÉPOÈ!VDLJZWAUIE;CTSRNMÇÊÀYX:K?QGHF";
var bepo_3 = "–—<>[]       | &œ ¡      æù¨€’        \\{}… ¿    ";
var bepo_4 = " „“”≤≥        ˝ Œ        ÆÙ            ‘’·      ";

/*
var bepo_1 = "²&é\"'(-è_çà)=azertyuiop^$qsdfghjklmù*<wxcvbn,;:!";
var bepo_2 = " 1234567890°+AZERTYUIOP¨₤QSDFGHJKLM%µ>WXCVBN?./§";
var bepo_3 = "  ~#{[|`\\^@]}  €                                ";
var bepo_4 = "                                                ";
*/

var k=0;
function kb_decal()
{
  var row_dec = new Array(0,35,41,28);
  var key_per_row = new Array(13,12,12,11);
  k=0;
  var row=0;
  var diff=0;

  var kb= '<div class="kb">';

  for (var i = 0 ; i < 4 ; i++)
  {
    for(var j = 0 ; j < key_per_row[i] ; j++)
    {
                        k105="";
                        if(k==37)
                          k105="border:dashed 1px black;";
      if(j == 0)
        kb += '<div style="'+k105+'margin-left:'+row_dec[i]+'px" class="key" id="k'+k+'">'+bepo_1.charAt(k)+'</div>';
      else
        kb += '<div class="key" id="k'+k+'">'+bepo_1.charAt(k)+'</div>';
      k++;
    }
    kb += '<div style="clear:both"></div>';
  }
  kb += '</div>';

  return kb;
}

function kb_typematrix()
{
  var row_dec = new Array(0,26,26,26);
  var key_per_row = new Array(13,12,11,11);
  var key_space = new Array(6,5,5,5);
  k=0;
  var row=0;

  var kb= '<div class="kb">';

  for (var i = 0 ; i < 4 ; i++)
  {
    for(var j = 0 ; j < key_per_row[i] ; j++)
    {


      if(k == 48)
        k=36;

                        if(j == 0)
        kb += '<div style="margin-left:'+row_dec[i]+'px" class="key" id="k'+k+'">'+bepo_1.charAt(k)+'</div>';
      else if(j == key_space[i])
        kb += '<div style="margin-left:20px" class="key" id="k'+k+'">'+bepo_1.charAt(k)+'</div>';
      else
        kb += '<div class="key" id="k'+k+'">'+bepo_1.charAt(k)+'</div>';
      k++;
      if(k == 36)
        k=38;





    }
    kb += '<div style="clear:both"></div>';
                //k=48; // pour avoir le nombre total de touche
  }
  kb += '</div>';

  return kb;
}
