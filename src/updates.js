//
//	Christopher Place
//	CS498 Capstone
//  Filename: updates.js
//
//  Overview:
//  Handles all changes on screen
//
//

// Updates File label whenever a file is selected to be displayed on Screen
$(document).on('change', '.custom-file-input', function (event) {
    $(this).next('.custom-file-label').html(event.target.files[0].name);
})

// Updates the command list based on platform selected
$('#platform').on('click', function(event){
  console.log("test")
  let platformChosen = document.getElementById('platform');
  let value = platformChosen[platformChosen.selectedIndex].value;
  let nodeList = document.getElementById("command").querySelectorAll("option");
  
  nodeList.forEach(function(option){
   
   if(option.classList.contains(value)){
      option.style.display="block";
    }else{
      option.style.display="none";
    }
}
  
)})

// Removes pop-up for errors when clicked
$('#pythonError').on('click', function (event) {
  $('#pythonError').hide();
});

//Future save buttons
$('#save').on('click', function (event) {
  
  console.log('test');
});
