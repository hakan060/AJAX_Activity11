$(document).ready(function() {
    $("#nav_list a").click(function(event) {
      event.preventDefault(); 
  
      var script_speaker = $(this).attr("title"); 
      // This part is the typing and defining the title
      
      var file_json = "json_files/" + script_speaker + ".json";
      
      $("main").empty();
  
      $.getJSON(file_json, function(data) {
        var speaker = data.speakers[0]; 
        var html_speaker = '<h1>' + speaker.title + '</h1>';
        html_speaker += '<img src="' + speaker.image + '">';
        html_speaker += '<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>';
        html_speaker += '<p>' + speaker.text + '</p>';
  
        $("main").html(html_speaker);
      });
    });
  });