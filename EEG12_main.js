

function checkQ1() {

	if (document.question1.question.value == "b") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!! <br><br>Persons with epilepsy can have a normal routine EEG. Actually, most persons with epilepsy will have a normal routine EEG. The diagnostic yield (sensitivity) of a single routine EEG varies between populations, but is quite consistently between 25% and 50% in children and adults: see some examples <a href='https://pubmed.ncbi.nlm.nih.gov/30718615/' target='_blank'>here</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/28520630/' target='_blank'>here</a>, and <a href='https://pubmed.ncbi.nlm.nih.gov/18042424/' target='_blank'>here</a>.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "That means that, if you use a routine EEG to 'rule out epilepsy', approximately 50% to 75% of patients in whom you 'ruled out epilepsy' actually have epilepsy. If you think about the numbers, it appears that a routine EEG is not a great method to 'rule out epilepsy'.<br><br> Great job!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Totally wrong answer. This widespread belief is wrong and harms patients.<br><br>If you have been 'ruling out epilepsy' with an EEG, try to read about the diagnostic yield of EEG before you continue with that practice.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "Try again!";

}

}








function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br>The longer the EEG, the higher the diagnostic yield. The more numerous the number of EEGs, the higher the diagnostic yield. This is shown, for example, <a href='https://pubmed.ncbi.nlm.nih.gov/18042424/' target='_blank'>here</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/29248327/' target='_blank'>here</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/26984946/' target='_blank'>here</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/18997627/' target='_blank'>here</a>, and <a href='https://pubmed.ncbi.nlm.nih.gov/26076840/' target='_blank'>here</a>.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "However, you can also see in these studies that the incremental gains in diagnostic yield markedly decrease after 24-72 hours. Therefore, there are many patients who have confirmed epilepsy (based on prior history and EEGs) with normal EEGs even when the EEG lasts multiple days.<br><br>In short, you will never 'rule out epilepsy' with an EEG, no matter how long the EEG lasts.<br><br>Great job!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Totally wrong answer. This widespread belief is wrong and harms patients.<br><br>If you have been 'ruling out epilepsy' with an EEG, try to read about the diagnostic yield of EEG before you continue with that practice.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "In short, you will never 'rule out epilepsy' with an EEG, no matter how long the EEG lasts.<br><br>Try again!";

}

}








function checkQ3() {

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>If your EEG covered all areas of the brain, and you captured the event suspicious for seizure during the EEG recording, then a normal EEG would rule out seizures. However, no EEG (scalp EEG or intracranial EEG) ever covers all areas of the brain. Therefore, seizures with a completely normal EEG do occur and this is frequent in scalp EEG when they come from the mesial surfaces of the brain like <a href='https://pubmed.ncbi.nlm.nih.gov/21532379/' target='_blank'>the mesial frontal lobe</a>.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "To be clear, if you have a clinical suspicion for a seizure with a generalized onset or generalized evolution and the scalp EEG is normal during the event, then you can be pretty sure that the patient did not have a generalized seizure. However, you cannot rule out a focal seizure not captured by the EEG.<br><br>In short, you will never 'rule out seizures' or 'rule out epilepsy' with an EEG, no matter how long the EEG lasts.<br><br>Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Totally wrong answer. This widespread belief is wrong and harms patients.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "In short, you will never 'rule out seizures' or 'rule out epilepsy' with an EEG, no matter how long the EEG lasts.<br><br>Try again!";

}

}








function checkQ4() {

	if (document.question4.question.value == "b") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct!! <br><br>The diagnosis of epilepsy requires (in most cases) at least one clinical seizure <a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>(see Table 2)</a>. If your clinical suspicion for the event is syncope, then the presence of interictal epileptiform activity on the EEG will not make a diagnosis of epilepsy because there is no clinical suspicion for any seizure. This is a very important concept.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "A small percentage (1%-5%) of people who never had a seizure and will never have a seizure have epileptiform discharges on EEG as shown, for example, <a href='https://pubmed.ncbi.nlm.nih.gov/15652731/' target='_blank'>here</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/8082631/' target='_blank'>here</a>.<br><br>If you have a patient presenting with (for example) syncope and you order an EEG and the EEG shows epileptiform discharges, are you going to diagnose the patient with epilepsy? Based on what? Remember, 1-5% of the population who never had and will never have seizures have epileptiform discharges on EEG. Why did you order an EEG in the first place when you have no clinical suspicion for seizures? Are you going to give antiseizure medications to the patient? To prevent seizures that the patient does not have? <br><br>Please, answer these questions before considering ordering an EEG 'to be sure' in a patient with events not clinically suspicious of seizures.<br><br>In certain environments, you will find patients on antiseizure medications for several years when they never had a seizure, just a syncope (or other non-epileptic event) and an EEG with epileptiform discharges. This harms patients.<br><br>Great job!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Totally wrong answer. This widespread belief is wrong and harms patients.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Epileptiform activity on EEG also happens in people who never had a seizure and will never have a seizure. Surprised about that? Read more, for example, <a href='https://pubmed.ncbi.nlm.nih.gov/15652731/' target='_blank'>here</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/8082631/' target='_blank'>here</a>.<br><br>Try again!";

}

}








function checkQ5() {

	if (document.question5.question.value == "b") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correct!! <br><br>The term 'seizure disorder' has no meaning. It has no definition. Apart from being a meaningless pseudodiagnosis, its use harms patients. Unfortunately, such term is becoming popular in certain environments leading to poor seizure management. The difference between provoked and unprovoked seizures is a crucial one. Provoked seizures are those which occur when the patient is exposed to an insult (electrolyte abnormality, certain toxics or toxic withdrawal, traumatic brain injury, etc.) which would cause seizures in a large proportion of normal people. The implication of the concept of provoked seizure is that the brain is normal. It is the insult that causes the seizure and, once the patient is not exposed to that insult, the brain has no predisposition to more seizures. Therefore, provoked seizures do not need antiseizure medications because there are no seizures to prevent when the insult disappears. In contrast, unprovoked seizures imply that the brain is abnormal and there is a predisposition to unprovoked seizures. If the patient with unprovoked seizures meets <a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>the definition of epilepsy</a>, the patient will need (in most cases) antiseizure medications to reduce the risk of future unprovoked seizures.<br><br>This distinction between provoked and unprovoked seizures is crucial and guides management. The use of pseudodiagnoses such as 'seizure disorder' does not distinguish between these two concepts and leads to poor management of patients.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Unfortunately, in certain environments where the use of the term 'seizure disorder' is common you will find many patients on antiseizure medications (sometimes for years) when they never needed them because all they had was a provoked seizure (or several provoked seizures); you will also find patients with epilepsy whose antiseizure medications are discontinued prematurely if they did not have seizures recently. In summary, the use of the term 'seizure disorder' is not neutral. It harms patients. Learn how to use proper terminology and its treatment implications so that you treat patients appropriately. Take the time to take a proper history, determine if the event is a seizure; determine if the seizure is provoked or unprovoked; determine if the patient has epilepsy; it takes time, but it is the only way to properly treat your patients. 'Seizure disorder' is just a marker of cutting corners and poor medicine.<br><br>Great job!";

}	else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Totally wrong answer. This widespread pseudodiagnosis is wrong and harms patients.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Try again!";

}

}






function checkCC1() {

	if (document.CC1.CC1q1.value == "e" && document.CC1.CC1q2.value == "c" && document.CC1.CC1q3.value == "b") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "Yes!! <br><br>The EEG shows right and left triphasic centrotemporal sharp waves, which are more prominent in sleep (sleep potentiated). This pattern is typical for childhood epilepsy with centrotemporal spikes (formerly known as Rolandic epilepsy).<br><br>This is the most common type of epilepsy in children and it is associated with seizures in which the child wakes up at night with hemifacial clonic movements and difficulty speaking even if the child is awake. Sometimes, these seizures can spread to cause focal clonic seizures in one side of the body or generalized clonic seizures.<br><br>The episodes under question in this patient are typical for a parasomnia (probably sleep walking or sleep talking). The suspicion for seizures is very low.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>Epilepsy is a clinical diagnosis</a>. To make a diagnosis of epilepsy you have to have at least 2 unprovoked seizures separated by more than 24 hours. Another option to make the diagnosis of epilepsy is to have 1 unprovoked seizure and a subsequent probability of unprovoked seizures of 60% or higher. When a patient has an unprovoked seizure, an EEG with epileptiform activity consistent with the type of seizure the patient is presenting makes a diagnosis of epilepsy because the probability of subsequent unprovoked seizures is more than 60%.<br><br>In our patient, the episodes are most likely parasomnias. They could potentially be frontal lobe seizures because frontal lobe seizures can present with complex motor phenomena at night. The EEG was performed to evaluate the possibility of frontal lobe seizures. The epileptiform activity in the EEG is not consistent with frontal lobe seizures. Based on the clinical presentation and EEG features, this patient does not have epilepsy.<br><br>Why is there epileptiform activity then? Approximately 1%-2% of the population has epileptiform activity and never develop epilepsy as explained in <a href='https://pubmed.ncbi.nlm.nih.gov/17638587/' target='_blank'>this article</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/20634716/' target='_blank'>this article</a>. Remember, epilepsy is a clinical diagnosis. Epileptiform activity in the EEG is just the result of a test which needs to be interpreted in the specific clinical scenario.";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("afterCC1_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "No! <br><br>How do you diagnose epilepsy? <a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>Epilepsy is a clinical diagnosis</a>.";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("afterCC1_picture").innerHTML = "Try again!";

}

}
