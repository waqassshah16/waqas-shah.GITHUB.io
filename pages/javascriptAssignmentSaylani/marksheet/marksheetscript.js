var eng=parseInt(prompt("English"));
var mat=parseInt(prompt("Math"));
var sci=parseInt(prompt("Science"));
var urd=parseInt(prompt("Urdu"));

var obtMarks= eng+mat+sci+urd;
eng;
document.write("English Marks " + "=" + eng +"<br/>");
document.write("Math Marks " + "=" + mat +"<br/>");

document.write("Science Marks " + "=" + sci +"<br/>");

document.write("Urdu Marks " + "=" + urd +"<br/>");
var totalMarks=400;
document.write("Obtained Marks of Subjects"+ "=  " + obtMarks +"<br/>")
document.write("This is total marks of your class"+ totalMarks +"<br/>");

document.write("This is total percentage of your Class" +" = " +marksPercentage +"%" )