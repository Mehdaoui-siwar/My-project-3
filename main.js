function verif()                                    
{ 
    var name = document.forms["RegForm"]["Nom"];  
    var pren = document.forms["RegForm"]["prénom"];             
    var email = document.forms["RegForm"]["Email"];    
    var phone = document.forms["RegForm"]["Téléphone"];   
    var password = document.forms["RegForm"]["Mot de passe"]; 
    var confirmation = document.forms["RegForm"]["confirmation"]; 
    var date = document.forms["RegForm"]["dateofbirth"];
    var i=0;
    var ch;
    var nblM=0,nblm=0,nbc=0,nbn=0;
   /* if (name.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    } 
     while((name.value[i]>="A"&& name.value[i]<="Z")||(name.value[i]>="a"&& name.value[i]<="z"))
     {
         i++;
     }
     if(i!=name.value.length)
     {
        alert("Nom doit etre alphabétique."); 
        name.focus(); 
        return false; 
     }
     if (pren.value == "")                                  
     { 
         alert("Mettez votre prénom."); 
         pren.focus(); 
         return false; 
     } 
     i=0;
      while((pren.value[i]>="A"&& pren.value[i]<="Z")||(pren.value[i]>="a"&& pren.value[i]<="z"))
      {
          i++;
      }
      if(i!=pren.value.length)
      {
         alert("Prénom doit etre alphabétique."); 
         pren.focus(); 
         return false; 
      }       
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (password.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        password.focus(); 
        return false; 
    } 
    for (i=0;i<password.value.length;i++) 
    {
        if (password.value[i]>="A"&& password.value[i]<="Z")
        nblM++;
        else if (password.value[i]>="a"&& password.value[i]<="z")
        nblm++;
        else if (password.value[i]>="0"&& password.value[i]<="9")
        nbn++;
        else
        nbc++;
    }
    if (nblM==0||nblm==0||nbn==0||nbc==0)
    {
        alert("mot de passe doit contenir une lettre miniscule, majuscule , un caractère spécial et un chiffre"); 
        password.focus(); 
        return false;  
    }
    if (confirmation.value == "")                        
    { 
        alert("Saisissez votre confirmation"); 
        confirmation.focus(); 
        return false; 
    }  
    if (confirmation.value!=password.value) 
    { 
        alert("Confirmer votre mot de passe"); 
        confirmation.focus(); 
        return false;
    }
    if (phone.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        phone.focus(); 
        return false; 
    }   
    if (isNaN(phone.value)||phone.value.length!=8){
        alert("Entrez uniquement une valeur numérique de taille 8");
        phone.focus(); 
        return false;
    }
    */
    if (date.value=="")
    { 
        alert("Mettez la date"); 
        date.focus(); 
        return false; 
    } 
    if (date.value.indexOf("/")!=2||date.value.indexOf("/",3)!=5||date.value.length!=10)
    { 
        alert("Mettez la date sous format --/--/----"); 
        date.focus(); 
        return false; 
    } 
    ch=date.value.substr(6,4);
    if(ch>"2004")
    { 
        alert("age doit etre >= 18"); 
        date.focus(); 
        return false; 
    } 
    return true; 
}
