$(document).ready(function(){

var Code2College_Students = ["Andrea", "Vanessa", "Cindy", "Sophie", "Natalia", "Yazmeen", "Selena", "Marlene"];

$(studentButton).click(function() {
    
    var studentnames = Math.floor(Math.random()*Code2College_Students.length)
    
$("#studentDisplay").html(Code2College_Students[studentnames])



var Code2College_Educators = ["Stephanie", "Jon", "Chris", "Matt"];

$(teacherButton).click(function() {

    var teachernames = Math.floor(Math.random()*Code2College_Educators.length)

$("#teacherDisplay").html(Code2College_Educators[teachernames])
})

Code2College_Educators.push("Shae");

    
});
});