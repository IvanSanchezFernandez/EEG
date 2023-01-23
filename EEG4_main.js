



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








function checkCC1() {

	if (document.CC1.CC1q1.value == "a" && document.CC1.CC1q2.value == "c" && document.CC1.CC1q3.value == "b" && document.CC1.CC1q4.value == "b") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "Yes!! <br><br>The EEG segments belong to wakefulness because they have muscle artifact, eyelid blinking artifact, and a posterior dominant rhythm.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>Epilepsy is a clinical diagnosis</a>. To make a diagnosis of epilepsy you have to have at least 2 unprovoked seizures separated by more than 24 hours. Another option to make the diagnosis of epilepsy is to have 1 unprovoked seizure and a subsequent probability of unprovoked seizures of 60% or higher. When a patient has an unprovoked seizure, an EEG with epileptiform activity consistent with the type of seizure the patient is presenting makes a diagnosis of epilepsy because the probability of subsequent unprovoked seizures is more than 60%.<br><br>Many patients with epilepsy have normal EEGs. Epilepsy is a clinical diagnosis. Let's repeat it again. Epilepsy is a clinical diagnosis.<br><br>Some elements in the posterior dominant rhythm appear somewhat sharply contoured, but they do not have a field, and do not break the rhythm (their rhythm is kind of predictable as shown below). They are not epileptiform discharges.";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
                document.getElementById("answerCC1_picture").src = "EEG4_img/CC1.3.png";
		document.getElementById("answerCC1_picture2").src = "EEG4_img/CC1.4.png";
		document.getElementById("afterCC1_picture").innerHTML = "And the patient? Does this patient have epilepsy? It depends on the rest of the clinical history. We would need more details of the episodes to know if he has epilepsy or not.<br><br>Great job!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "No! <br><br>How do you diagnose epilepsy? <a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>Epilepsy is a clinical diagnosis</a>.<br><br>Do you see any elements which break the rhythm here?";
		document.getElementById("after_submitCC1").style.background = "red";
                document.getElementById("answerCC1_picture").src = "EEG4_img/CC1.3.png";
		document.getElementById("answerCC1_picture2").src = "EEG4_img/CC1.4.png";
		document.getElementById("afterCC1_picture").innerHTML = "Try again!";

}

}

