$(document).ready(function() {
    $("#toggle-btn").click(function() {
      var bio = $(".bio");
      var btn = $("#toggle-btn");
      var profileCard = $(".profile-card");
      var profilePic = $("#profile-pic");
  
      // Toggle bio visibility with fade effect
      bio.fadeToggle();
  
      // Change button text and card appearance
      if (bio.is(":visible")) {
        btn.text("Show Less");
        profileCard.addClass("expanded");
        profilePic.addClass("blurred"); // Apply blur to the profile picture when expanded
      } else {
        btn.text("Show More");
        profileCard.removeClass("expanded");
        profilePic.removeClass("blurred"); // Remove blur when collapsed
      }
    });
  });
  