function checkQ1() {

	if (document.question1.question.value == "b") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br> This EEG shows a recognizable posterior dominant rhythm on the posterior channels.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG2_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "The posterior dominant rhythm is better seen in this detailed image showing a frequency of 6 Hz.<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not quite! <br><br> Make sure to count the rhythm in the posterior channels.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG2_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Keep counting the rhythm as in the numbers shown in the image above and try again!";

}

}








function checkQ2() {

	if (document.question2.question.value == "d") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br> If you name the posterior dominant rhythm after an EEG frequency (like alpha rhythm) and the posterior dominant rhythm of a patient does not belong to that frequency range, then it is difficult to name it appropriately.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Therefore, do not name the posterior dominant rhythm as an EEG frequency!<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Nope!<br><br>";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Try again!";

}

}








function checkQ3() {

	if (document.question3.question.value == "a") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No. Sorry, this answer is not correct! <br><br> A 5 Hz posterior dominant rhythm is slow for an adult, but is it slow for a small child?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG2_img/Q3.1.png";
		document.getElementById("afterQ3_picture").innerHTML = "This EEG has a posterior dominant rhythm of 5 Hz and still it is normal. Why is that?<br><br> Try again!";

}

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Incorrect! <br><br> In general, the posterior dominant rhythm is abnormal when it is slower than expected for age, but the posterior dominant rhythm does not become abnormal if it is 12 Hz or 13 Hz or 14 Hz.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Try again!";

}

	if (document.question3.question.value == "c") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No, sorry! <br><br> A posterior dominant rhythm of 5 Hz may be normal or abnormal.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "";
		document.getElementById("afterQ3_picture").innerHTML = "What other information would you need to make that decision? <br><br> Try again!";

}

	if (document.question3.question.value == "d") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> The frequency of the posterior dominant rhythm has to be interpreted knowing the age of the patient.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG2_img/Q3.1.png";
		document.getElementById("afterQ3_picture").innerHTML = "The EEG tracing above shows a posterior dominant rhythm of approximately 5 Hz. This frequency is normal in this 4 month-old patient, but it would be a slow posterior dominant rhythm if the patient was an older child or an adult. <br><br> Great job!";

}

}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> The EEG below shows a posterior dominant rhythm that is better formed on the right hemisphere.<br>";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG2_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "This assymetry could be normal if it just occurs for a few seconds and evens out in the overall EEG. However, if it is persistent enough, it is abnormal. <br><br> Great job!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "";
		document.getElementById("afterQ4_picture").innerHTML = "<br><br> Try again!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == true && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correct! <br><br> The amplitude of the posterior dominant rhythm has to be approximately symmetric, but a difference of approximately 2 times in amplitude is allowed.<br>";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "This assymetry is better tolerated if the amplitude is higher on the right hemisphere because, normally, the amplitude of the posterior dominant rhythm is higher on the right hemisphere. An asymmetry can represent a structural lesion or a functional abnormality.<br><br> Great job!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "<br><br> Try again!";

}


}








function checkQ6() {

	if (document.question6.question.value == "a") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No. Sorry, this answer is not fully correct!";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG2_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "This EEG has a posterior dominant rhythm of 4 Hz.<br><br> Try again!";

}

	if (document.question6.question.value == "b") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Incorrect! <br><br> This is not the correct frequency. Pay attention to the figure.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG2_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "<br><br> Try again!";

}

	if (document.question6.question.value == "c") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No, sorry! <br><br> This is not the correct frequency. Pay attention to the figure.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG2_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "<br><br> Try again!";

}

	if (document.question6.question.value == "d") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Correct! <br><br> The frequency of the posterior dominant rhythm is 4 Hz here, but has to be interpreted knowing the age of the patient.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG2_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "The EEG tracing above shows a posterior dominant rhythm of approximately 5 Hz. This frequency is normal in this 4 month-old patient, but it would be a slow posterior dominant rhythm if the patient was an older child or an adult. <br><br> Great job!";

}

}








function checkQ7() {

	if (document.question6.question.value == "a") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No. Sorry, this answer is not correct!";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG2_img/Q7.2.png";
                document.getElementById("answerQ7_picture2").src = "EEG2_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "This EEG has a posterior dominant rhythm that is slightly asymmetric.<br><br> Try again!";

}

	if (document.question7.question.value == "b") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct! <br><br> This EEG has a posterior dominant rhythm that is slightly asymmetric.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG2_img/Q7.2.png";
                document.getElementById("answerQ7_picture2").src = "EEG2_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "The voltage is somewhat higher on the right hemisphere (45 microvolts versus 33 microvolts). In these cases the posterior dominant rhythm is abnormal if more than 3 times higher voltage on the right hemisphere compared to the left hemisphere. In case that the higher voltage is on the left hemisphere, then it is abnormal if the posterior dominant rhythm is more than two times higher amplitude on the left than on the right hemisphere. In all cases, this has to be determined over the whole EEG, not only on a brief portion of it. <br><br> Great job!";

}

	if (document.question6.question.value == "c") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No, sorry! <br><br> The posterior dominant rhythm is slightly asymmetric, but this is frequently normal.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG2_img/Q7.2.png";
                document.getElementById("answerQ7_picture2").src = "EEG2_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br> Try again!";

}

	if (document.question7.question.value == "d") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Incorrect! <br><br> There is a posterior dominant rhythm clearly seen on the right and the left hemisphere.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG2_img/Q7.2.png";
                document.getElementById("answerQ7_picture2").src = "EEG2_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br>Try again";

}

}








function checkQ8() {

	if (document.question8.question.value == "a") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "No.<br><br>";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "Where and when in an EEG do you find a posterior dominant rhythm?<br><br> Try again!";

}

	if (document.question8.question.value == "b") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Incorrect! <br><br>";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "Where and when in an EEG do you find a posterior dominant rhythm?<br><br> Try again!";

}

	if (document.question8.question.value == "c") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Incorrect! <br><br>";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "Where and when in an EEG do you find a posterior dominant rhythm?<br><br> Try again!";

}

	if (document.question8.question.value == "d") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correct! <br><br> This EEG tracing shows vertex waves and sleep spindles, belongs to stage II of sleep and no posterior dominant rhythm is going to be found here.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "The posterior dominant rhythm appears in an awake patient with eyes closed or non-fixating on anything in particular. Do not look for a posterior dominant rhythm during sleep, in a patient in coma, or in a patient who is awake but not relaxed. <br><br> Great job!";

}

}








function checkQ9() {

	if (document.question9.question.value == "a") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correct!<br><br>";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "";
		document.getElementById("afterQ9_picture").innerHTML = "Exactly! The posterior dominant rhythm appears during wakefulness, when the patient is relaxed, with eyes closed or not fixating on anything. Therefore, even during wakefulness the posterior dominant rhythm may not appear if these conditions are not met.<br><br> Great job!";

}

	if (document.question9.question.value == "b") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Incorrect! <br><br>";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "";
		document.getElementById("afterQ9_picture").innerHTML = "Although the posterior dominant rhythm appears in most EEGs (largely thanks to technicians who ask the patient to close their eyes and relax), it may not appear and that does not necessarily make the EEG abnormal.<br><br> Try again!";

}

	if (document.question9.question.value == "c") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Incorrect! <br><br>";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "";
		document.getElementById("afterQ9_picture").innerHTML = "No. The posterior dominant rhythm is not present during sleep.<br><br> Try again!";

}

	if (document.question9.question.value == "d") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No! <br><br>";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "";
		document.getElementById("afterQ9_picture").innerHTML = "The posterior dominant rhythm does not appear at any particular time after the onset of wakefulness. Contrary to some stages of sleep (which appear after some time of falling sleep), the posterior dominant rhythm may appear at any moment during wakefulness. <br><br> Try again!";

}

}




