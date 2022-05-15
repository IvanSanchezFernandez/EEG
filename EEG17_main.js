

function checkQA1() {

	if (document.questiona1.question.value == "a") {
		document.getElementById("after_submitQA1").style.visibility = "visible";
		document.getElementById("answerQA1").innerHTML = "Right!! <br><br>This is one of the normal variants that is most frequently overread as an epileptiform discharge.<br><br>Wicket spikes appear in the temporal lobe and are very similar to temporal spikes or temporal sharp waves. The features that will allow you to recognize them as benign are: 1) they appear mostly in drowsiness and light sleep; 2) they do not break the rhythm, they are part of the rhythm and sometimes, they appear in 6-11 Hz runs; 3) they have no slow wave following them as in spike-wave complexes, and 4) they often have an arciform (like and arch) morphology.<br><br>When the wicket spikes appear isolated they can be difficult to differentiate from epileptiform discharges: the key is to compare the morphology of that isolated wave (easy to mistake for an epileptiform discharge) to the morphology when they appear in a run (easy to recognize as a benign run of wicket spikes).<br><br>Fun fact: wicket spikes are seen frequently in adults, but can be seen in the young and in children.<br><br>Below are other examples of wicket spikes:";
		document.getElementById("after_submitQA1").style.background = "lightgreen";
		document.getElementById("answerQA1_picture").src = "EEG17_img/AQ1.2.png";
		document.getElementById("answerQA1_picture2").src = "EEG17_img/AQ1.3.png";
		document.getElementById("answerQA1_picture3").src = "EEG17_img/AQ1.4.png";
		document.getElementById("afterQA1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQA1").style.visibility = "visible";
		document.getElementById("answerQA1").innerHTML = "No.<br><br>Find other examples of the same below:";
		document.getElementById("after_submitQA1").style.background = "red";
		document.getElementById("answerQA1_picture").src = "EEG17_img/AQ1.2.png";
		document.getElementById("answerQA1_picture2").src = "EEG17_img/AQ1.3.png";
		document.getElementById("answerQA1_picture3").src = "EEG17_img/AQ1.4.png";
		document.getElementById("afterQA1_picture").innerHTML = "Try again!";

}

}








function checkQY1() {

	if (document.questiony1.question.value == "b") {
		document.getElementById("after_submitQY1").style.visibility = "visible";
		document.getElementById("answerQY1").innerHTML = "Exactly!! <br><br>This is one of the most common normal variants that you will find if you frequently read EEGs in the age range from old children to young adults.<br><br>You will recognize the mu rhythm by the arciform (like an arch) appearance of its waves and by its location in the central regions (uni or bilaterally).<br><br>The arciform appearance of the mu rhythm sometimes gives it a spiky appearance and, when the mu rhythm appears as a single wave, it may confuse you and you may mistakenly call it a spike. Whenever you find a spiky element in the central regions which does not fully look like a spike, look for the same element appearing in bursts or trains. When the mu rhythm appears in trains it is easier to recognize its benign nature.<br><br>Fun fact: the mu rhythm is the idle rhythm of the motor cortex (as the posterior dominant rhythm is the idle rhythm of the visual cortex). Therefore, when the patient moves (or thinks of moving) the contralateral arm, the mu rhythm disappears.<br><br>Below is another example of the mu rhythm:";
		document.getElementById("after_submitQY1").style.background = "lightgreen";
		document.getElementById("answerQY1_picture").src = "EEG17_img/YQ1.2.png";
		document.getElementById("afterQY1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQY1").style.visibility = "visible";
		document.getElementById("answerQY1").innerHTML = "No.<br><br>Find another example of the same below:";
		document.getElementById("after_submitQY1").style.background = "red";
		document.getElementById("answerQY1_picture").src = "EEG17_img/YQ1.2.png";
		document.getElementById("afterQY1_picture").innerHTML = "Try again!";

}

}








function checkQY2() {

	if (document.questiony2.question.value == "e") {
		document.getElementById("after_submitQY2").style.visibility = "visible";
		document.getElementById("answerQY2").innerHTML = "Correct!! <br><br>You might see these with relative frequency in adolescents and young adults.<br><br>The phantom spike-wave complexes are one of the normal variants that are overcalled as abnormal. That is not a surprise because they look exactly like a spike-wave complex!<br><br>However, there are several features that should make you suspicious: 1. The spike component is tiny, sometimes even not present and the slow wave is comparatively much bigger. 2. When they appear in runs or bursts, they have an approximate frequency of 6 Hz, one of the most typical characteristics of normal variants. And, most importantly, 3. They appear most frequently in wakefulness and drowsiness and disappear in deeper stages of sleep. When epileptiform activity gets less frequent or disappears during sleep, be very suspicious, because it is probably not epileptiform activity in the first place.<br><br>Below are more examples of phantom spike-wave complexes:";
		document.getElementById("after_submitQY2").style.background = "lightgreen";
		document.getElementById("answerQY2_picture").src = "EEG17_img/YQ2.2.png";
		document.getElementById("answerQY2_picture2").src = "EEG17_img/YQ2.3.png";
		document.getElementById("answerQY2_picture3").src = "EEG17_img/YQ2.4.png";
		document.getElementById("afterQY2_picture").innerHTML = "Fun fact: All the examples in this question belong into the FOLD (female predominance, occipital location, low-voltage, drowsy predominance) variant of the phantom spike-wave complexes. The other variant is called WHAM (wake predominance, high-amplitude, anterior location, male predominance).<br><br> Great job!";

}	else {
		document.getElementById("after_submitQY2").style.visibility = "visible";
		document.getElementById("answerQY2").innerHTML = "No.<br><br>Find more examples of the same below:";
		document.getElementById("after_submitQY2").style.background = "red";
		document.getElementById("answerQY2_picture").src = "EEG17_img/YQ2.2.png";
		document.getElementById("answerQY2_picture2").src = "EEG17_img/YQ2.3.png";
		document.getElementById("answerQY2_picture3").src = "EEG17_img/YQ2.4.png";
		document.getElementById("afterQY2_picture").innerHTML = "Try again!";

}

}









function checkQY3() {

	if (document.questiony3.question.value == "c") {
		document.getElementById("after_submitQY3").style.visibility = "visible";
		document.getElementById("answerQY3").innerHTML = "Right!! <br><br>14 and 6, also known as ctenoids, are most often seen around adolescence.<br><br>They appear in bursts of (not surprisingly) 14 or 6 Hz. They are of positive polarity and appear mostly in the posterior temporal and occipital regions.<br><br>14 and 6 is another normal variant that appears most frequently in drowsiness and light sleep, but disappears in deeper stages of sleep. 14 and 6 also confirms the general rule that elements with a frequency of 6 Hz or higher are typically normal variants.<br><br>Below are more examples of 14 and 6:";
		document.getElementById("after_submitQY3").style.background = "lightgreen";
		document.getElementById("answerQY3_picture").src = "EEG17_img/YQ3.2.png";
		document.getElementById("answerQY3_picture2").src = "EEG17_img/YQ3.3.png";
		document.getElementById("answerQY3_picture3").src = "EEG17_img/YQ3.4.png";
		document.getElementById("afterQY3_picture").innerHTML = "Fun fact: The positive component of 14 and 6 is better appreciated on a refential montage (check it yourself: the first EEG segment in the answer is the same EEG segment than in the question, just in average reference montage; the third EEG segment in the answer is the same EEG segment than the second EEG segment in the answer, just in average reference montage).<br><br> Great job!";

}	else {
		document.getElementById("after_submitQY3").style.visibility = "visible";
		document.getElementById("answerQY3").innerHTML = "No.<br><br>Find more examples of the same below:";
		document.getElementById("after_submitQY3").style.background = "red";
		document.getElementById("answerQY3_picture").src = "EEG17_img/YQ3.2.png";
		document.getElementById("answerQY3_picture2").src = "EEG17_img/YQ3.3.png";
		document.getElementById("answerQY3_picture3").src = "EEG17_img/YQ3.4.png";
		document.getElementById("afterQY3_picture").innerHTML = "Try again!";

}

}








function checkQY4() {

	if (document.questiony4.question.value == "e") {
		document.getElementById("after_submitQY4").style.visibility = "visible";
		document.getElementById("answerQY4").innerHTML = "Correct!! <br><br>When you see that the posterior dominant rhythm fluctuates up and down a non-flat baseline formed by theta and delta waves, then that is most likely to be posterior slow waves of youth. They can also be recognized by the typical widening and narrowing of the posterior dominant rhythm amplitude as seen in this example and in the image below:";
		document.getElementById("after_submitQY4").style.background = "lightgreen";
		document.getElementById("answerQY4_picture").src = "EEG17_img/YQ4.2.png";
		document.getElementById("afterQY4_picture").innerHTML = "Fun fact: Posterior slow waves of youth are particularly frequent in adolescents, but can be seen in children after 7-8 years of age and up to 20 years of age.<br><br> Great job!";

}	else {
		document.getElementById("after_submitQY4").style.visibility = "visible";
		document.getElementById("answerQY4").innerHTML = "No.<br><br>Find more examples of the same below:";
		document.getElementById("after_submitQY4").style.background = "red";
		document.getElementById("answerQY4_picture").src = "EEG17_img/YQ4.2.png";
		document.getElementById("afterQY4_picture").innerHTML = "Try again!";

}

}








function checkQY5() {

	if (document.questiony5.question.value == "c") {
		document.getElementById("after_submitQY5").style.visibility = "visible";
		document.getElementById("answerQY5").innerHTML = "Correct!! <br><br>Sometimes the posterior dominant rhythm has a particularly spiky appearance. Typically that is not a problem because it is clear that it is a posterior dominant rhythm or, at least, some kind of benign rhythm: posterior regions of the head during relaxed wakefulness with eyes closed, disappears on eye opening, monomorphic waves (look the same with no evolution in frequency, amplitude, or spread), frequency typically of 6 Hz or more).<br><br>The danger with the spiky posterior dominant rhyhtm is when only one or a few waves appear in isolation. In these cases, it can be confused with a spike. The way to differentiate it from a spike is to realize that the morphology is the same than when it appears in runs that are clearly the posterior dominant rhyhtm. The images below shows how a single or a few waves may be confused with a spike, but the morphology is the same as when it appears in runs:";
		document.getElementById("after_submitQY5").style.background = "lightgreen";
		document.getElementById("answerQY5_picture").src = "EEG17_img/YQ5.2.png";
		document.getElementById("answerQY5_picture2").src = "EEG17_img/YQ5.3.png";
		document.getElementById("afterQY5_picture").innerHTML = "Fun fact: Spiky posterior dominant rhythm is most frequently seen in adolescents and young adults, but can be seen at all ages.<br><br> Great job!";

}	else {
		document.getElementById("after_submitQY5").style.visibility = "visible";
		document.getElementById("answerQY5").innerHTML = "No.";
		document.getElementById("after_submitQY5").style.background = "red";
		document.getElementById("answerQY5_picture").src = "";
		document.getElementById("answerQY5_picture2").src = "";
		document.getElementById("afterQY5_picture").innerHTML = "Try again!";

}

}








function checkQY6() {

	if (document.questiony6.question.value == "b") {
		document.getElementById("after_submitQY6").style.visibility = "visible";
		document.getElementById("answerQY6").innerHTML = "Just right!! <br><br>Posterior occipital sharp transients of sleep (POSTS) are a normal variant that appears during drowsiness and light sleep.<br><br>As a general rule, any element that appears only during drowsiness and light sleep and then disappears in deeper stages of sleep is likely not epileptiform, it is probably a normal variant.<br><br>The morphology of POSTS is clasically triangular and the polarity is positive.<br><br>Below is another example of POSTS:";
		document.getElementById("after_submitQY6").style.background = "lightgreen";
		document.getElementById("answerQY6_picture").src = "EEG17_img/YQ6.2.png";
		document.getElementById("afterQY6_picture").innerHTML = "Fun fact: POSTS are more frequently seen in the young, but can also be seen in older children and adults.<br><br>Superinteresting fact: POSTS are thought to represent some kind of replay or reprocessing of the visual images or visual information collected during the day.<br><br> Great job!";

}	else {
		document.getElementById("after_submitQY6").style.visibility = "visible";
		document.getElementById("answerQY6").innerHTML = "No.<br><br>Below is another example of the same pattern:";
		document.getElementById("after_submitQY6").style.background = "red";
		document.getElementById("answerQY6_picture").src = "EEG17_img/YQ6.2.png";
		document.getElementById("afterQY6_picture").innerHTML = "Try again!";

}

}








function checkQC1() {

	if (document.questionc1.question.value == "b") {
		document.getElementById("after_submitQC1").style.visibility = "visible";
		document.getElementById("answerQC1").innerHTML = "Correct!! <br><br>The increase in amplitude during hyperventilation can look quite impressive in children.<br><br>There is no limit in how high-amplitude is too high-amplitude during hyperventilation.<br><br>If you find asymmetric slowing or if you find epileptiform activity within the slowing, call it abnormal. Otherwise, let it be. It is normal.<br><br>Below are other examples of dramatic increase in voltage during hyperventilation:";
		document.getElementById("after_submitQC1").style.background = "lightgreen";
		document.getElementById("answerQC1_picture").src = "EEG17_img/CQ1.2.png";
		document.getElementById("answerQC1_picture2").src = "EEG17_img/CQ1.3.png";
		document.getElementById("afterQC1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQC1").style.visibility = "visible";
		document.getElementById("answerQC1").innerHTML = "No.<br><br>Other examples of the same below:";
		document.getElementById("after_submitQC1").style.background = "red";
		document.getElementById("answerQC1_picture").src = "EEG17_img/CQ1.2.png";
		document.getElementById("answerQC1_picture2").src = "EEG17_img/CQ1.3.png";
		document.getElementById("afterQC1_picture").innerHTML = "Try again!";

}

}








function checkQC2() {

	if (document.questionc2.question.value == "e") {
		document.getElementById("after_submitQC2").style.visibility = "visible";
		document.getElementById("answerQC2").innerHTML = "Correct!! <br><br>Sometimes the vertex waves appear in runs, like a cascade of vertex waves.<br><br>Sometimes the runs of vertex waves appear intimidating and sharply contoured, but still they are normal.<br><br>How to recognize them? They do not break the rhythm, they do not change morphology (look always the same with no evolution in frequency or amplitude or morphology), and they can be high frequency (6 Hz or higher).<br><br>Mu rhythm can be similar to this, but occurs mostly at C3 and/or C4, minimally at Cz (cascading vertex waves are prominent at Cz). And, of course, mu rhythm appears during wakefulness only. Cascading vertex waves appear during sleep (typically, stage II sleep).<br><br>Other examples of cascading vertex waves below:";
		document.getElementById("after_submitQC2").style.background = "lightgreen";
		document.getElementById("answerQC2_picture").src = "EEG17_img/CQ2.2.png";
		document.getElementById("answerQC2_picture2").src = "EEG17_img/CQ2.3.png";
		document.getElementById("afterQC2_picture").innerHTML = "Fun fact: Cascading vertex waves can be seen at any age, but they are more prominent in children.<br><br>Great job!";

}	else {
		document.getElementById("after_submitQC2").style.visibility = "visible";
		document.getElementById("answerQC2").innerHTML = "No.<br><br>Other examples of the same below:";
		document.getElementById("after_submitQC2").style.background = "red";
		document.getElementById("answerQC2_picture").src = "EEG17_img/CQ2.2.png";
		document.getElementById("answerQC2_picture2").src = "EEG17_img/CQ2.3.png";
		document.getElementById("afterQC2_picture").innerHTML = "Try again!";

}

}








function checkQC3() {

	if (document.questionc3.question.value == "d") {
		document.getElementById("after_submitQC3").style.visibility = "visible";
		document.getElementById("answerQC3").innerHTML = "True!! <br><br>There are triangular occipital sharply-contoured elements which may be consistent with either POSTS or lambda waves.<br><br>Recognizing the state in which the patient is during the EEG segment helps identify what can and cannot be found in this EEG segment. In this case there are eyelid blinking artifacts, so this should be wakefulness.<br><br>These are lambda waves. The morphology and localization of POSTS and lambda waves is basically the same, but lambda waves occur in wakefulness and POSTS occur in drowsiness and light sleep. It is thought that lambda waves represent some processing of visual information during wakefulness and POSTS are some kind of replay or reprocessing of that visual information during drowsiness and light sleep.<br><br>Most frequently, you will see lambda waves while the child is looking at a tablet or at a phone.";
		document.getElementById("after_submitQC3").style.background = "lightgreen";
		document.getElementById("afterQC3_picture").innerHTML = "Fun fact: In the ancient past, the lambda waves could be provoked by giving a book to the child so the child would read it. Try to give a book to a child nowadays while they are on their phone!<br><br>Great job!";

}	else {
		document.getElementById("after_submitQC3").style.visibility = "visible";
		document.getElementById("answerQC3").innerHTML = "No.";
		document.getElementById("after_submitQC3").style.background = "red";
		document.getElementById("afterQC3_picture").innerHTML = "Try again!";

}

}








function checkQN1() {

	if (document.questionn1.question.value == "b") {
		document.getElementById("after_submitQN1").style.visibility = "visible";
		document.getElementById("answerQN1").innerHTML = "Correct!! <br><br>Encoches frontales (frontal sharp transients) are a normal variant in the newborn.<br><br>They appear approximately at 34 weeks of conceptional age and progressively disappear after 42 weeks of conceptional age.<br><br>They are very similar to a spike-wave complex or to a sharp wave, because they are morphologically the same, but they are normal in quiet sleep in the newborn. More examples of the same below:";
		document.getElementById("after_submitQN1").style.background = "lightgreen";
		document.getElementById("answerQN1_picture").src = "EEG17_img/NQ1.2.png";
		document.getElementById("answerQN1_picture2").src = "EEG17_img/NQ1.3.png";
		document.getElementById("afterQN1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQN1").style.visibility = "visible";
		document.getElementById("answerQN1").innerHTML = "No.<br><br>Other examples of the same below:";
		document.getElementById("after_submitQN1").style.background = "red";
		document.getElementById("answerQN1_picture").src = "EEG17_img/NQ1.2.png";
		document.getElementById("answerQN1_picture2").src = "EEG17_img/NQ1.3.png";
		document.getElementById("afterQN1_picture").innerHTML = "Try again!";

}

}










