$( document ).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    // non permette di inviare i dati se l'accuratezza supera i 35m
    if (stato==0) alert("Attendere che l'accuratezza diventa minore di 35m (Testo da Rosso diventi Giallo o preferibilmente Verde)");
		    else {
		      
		      // Verifica Dei Campi
		      //if($("#nome").val()=="") {alert("Il campo Nome non può essere vuoto");return false;}
		      if($("#categoria").val()=="") {alert("Il campo Categoria non può essere vuoto");return false;}
		      
		      //Creazione testo da inserire nella nota
			  
			  //if (maxstay != null) var permanenza="maxstay="+$("#maxstay").val()+" hours";
		      
			  var testo="[PDI camper]"+"\nname="+$("#categoria").val()
                                      +" "+$("#nome").val()
                                      +"\nmaxstay="+$("#maxstay").val()+" hours"
                                      +"\n"+$("#fee").val()
                                      +"\n"+$("#water").val()
									  +"\n"+$("#power").val()
                                      +"\n"+$("#dump").val()
                                      +"\n"+$("#wc").val()                                      
                                      +"\n"+$("#picnic").val()                                      
			                          +"\nphone="+$("#tel").val()
			                          +"\nwebsite=http://"+$("#web").val()
                                                                            
                                      
                                      
                                      			                          
                                      +"\nNote:"+$("#note").val();
                                      
                                      
		      
		      // Invia i dati a osm 
		      $.ajax({
			type: "POST",
			url: "http://api.openstreetmap.org/api/0.6/notes",
			data: "lat=" + lat  + "&lon=" + lon +"&text="+testo,
			dataType: "html",
			success: function(msg)
			{
			  $("#risultato").html(msg);
			},
			error: function()
			{
			  alert("Chiamata fallita, si prega di riprovare...");
			}
		      });
		      
		      alert("Dati Inviati \n\n" + testo);
		      $('#form')[0].reset();
		    }
    return false
  });
  
});  
