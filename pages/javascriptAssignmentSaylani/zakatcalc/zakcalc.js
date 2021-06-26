var yourName = prompt("Whats your name : ");

var gold = parseInt(prompt("1.Please Enter your gold amount"));
var silver = parseInt(prompt("2.Please Enter your silver amount"));
var unused = parseInt(prompt("3.Please Enter your unused things amount"));
var bond = parseInt(prompt("4.Please Enter your unused things amount"));
var malleTijarat = parseInt(prompt("5.Please Enter your unused things amount"));
var currency = parseInt(prompt("6.Please Enter your unused things amount"));

var totalAmount = gold + silver + unused + bond + malleTijarat + currency;

document.write("Asalam O Alaikum " + " " + "Janab " + " " + yourName + "<br>");

document.write("This is total Amount Of Your all Things " + " Rs: " + totalAmount + "<br>");


if (totalAmount >=(99917*7.5)){
     document.write(yourName + "  "+  "Janab Aap ki Tamam Amount mila kr Zakat ka Nisaab Banti hai ap pr Zakat Farz hai " ); 
 var thisIsYourZakat=totalAmount/40; 
document.write("<hr> "+"<br>"); 
document.write("Janab "+"  " +yourName+" Aap ki Tamam Tr Amount Pr Itni Zakat "+"  " + "Rs:"+thisIsYourZakat +" "+"Banti Hai "); 
    } 
else{
    document.write("janab "+"  "+ yourName + "Aap Zakat Denay k Ahel Nahin hain aap ki tamam amount Zakat k Nisaab k Baraber nahin hai .")
 }

var thisIsYourZakat=totalAmount/40; 
document.write("<hr> "+"<br>"); 
document.write("Janab "+"  " +yourName+" Aap ki Tamam Tr Amount Pr Itni Zakat "+"  " + "Rs:"+thisIsYourZakat +" "+"Banti Hai "); 