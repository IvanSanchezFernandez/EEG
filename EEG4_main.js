



function checkQ1() {

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br> There are no definitive features that allow identification of epileptiform activity all the time. However, sharply-contoured elements which break the rhythm, and have a field that makes anatomical sense are likely to be epileptiform activity. The more of these features, the more likely to be epileptiform activity. The less of these features, the less likely to be epileptiform activity. You can find exceptions to all these rules of thumb, but they help (a lot) in the great majority of cases.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = " There are no definitive features that allow identification of epileptiform activity all the time. However, sharply-contoured elements which break the rhythm, and have a field that makes anatomical sense are likely to be epileptiform activity. The more of these features, the more likely to be epileptiform activity. The less of these features, the less likely to be epileptiform activity. You can find exceptions to all these rules of thumb, but they help (a lot) in the great majority of cases.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> Try again!";

}

}


