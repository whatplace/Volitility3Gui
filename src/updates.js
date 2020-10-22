
$(document).on('change', '.custom-file-input', function (event) {
    $(this).next('.custom-file-label').html(event.target.files[0].name);
})


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