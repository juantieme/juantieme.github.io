function showHide(playlist_id) {
    var x = document.getElementById(playlist_id);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }