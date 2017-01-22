/*global $*/
var textbookArray = [
    
    {
	"course_code" : "123456",
	"bookname" : "sxd",
	"isbn" : "ad",
	"condition" : "New",
	"price" : "d",
	"pic_url" : "dsad"
},
{
	"course_code" : "sads",
	"bookname" : "sxd",
	"isbn" : "ad",
	"condition" : "New",
	"price" : "d",
	"pic_url" : "dsad"
},
{
	"course_code" : "sa***ds",
	"bookname" : "sxd",
	"isbn" : "ad",
	"condition" : "New",
	"price" : "d",
	"pic_url" : "www.google.com"
},
{
	"course_code" : "sa***ds",
	"bookname" : "TEST BOOK",
	"isbn" : "ad",
	"condition" : "New",
	"price" : "d",
	"pic_url" : "www.google.com"
}

    
    ]


$(document).ready(function(){

		if(textbookArray.length < 1) {
			$(".AvailibleTextbooks").append("<p>Sorry, but no textbooks matched your description</p>")
		} else {
    for(var i = 0; i < textbookArray.length; i++) {
        var course_code = textbookArray[i].course_code;
        var name = textbookArray[i].bookname;
        var isbn= textbookArray[i].isbn;
        var condition = textbookArray[i].condition;
        var price = textbookArray[i].price;
        var pic_url = textbookArray[i].pic_url;
        $(".bookBody").append("<tr> <td>" 
                            + course_code + "</td><td>"
                            + name + "</td><td>"
                            + isbn + "</td><td>"
                            + price + "</td><td>"
                            + condition + "</td></tr>");

            
    }
		}
});