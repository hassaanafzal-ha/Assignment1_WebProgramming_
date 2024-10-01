window.onload = screenSize;
function screenSize()
{
	var windowcss = document.getElementById("windowCSS");
	var windowSize;
	if(window.matchMedia("(min-width: 1320px)").matches)
	{
	    windowcss.href = "style.css";
		windowSize = window.matchMedia("(min-width: 1320px)")
	}
	else if (window.matchMedia("(max-width: 640px)").matches)
	{
		windowcss.setAttribute("href","style2.css");
		windowSize = window.matchMedia("(max-width: 640px)")
	}
    else if (window.matchMedia("screen and (min-width: 641px) and (max-width: 1320px)").matches)
	{
	    windowcss.href = "style3.css";
		windowSize = window.matchMedia("(min-width: 640px) and (max-width: 1320px)")
	}
	windowSize.addEventListener("change", function() {screenSize();});
}

document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        emailAddress: document.getElementById("emailAddress").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipCode: document.getElementById("zipCode").value,
        resume: document.getElementById("resume").value,
        coverLetter: document.getElementById("coverLetter").value,
        education: document.getElementById("education").value,
        school: document.getElementById("school").value,
        major: document.getElementById("major").value,
        graduationYear: document.getElementById("graduationYear").value,
        companyName: document.getElementById("companyName").value,
        employmentDates: document.getElementById("employmentDates").value,
        jobResponsibilities: document.getElementById("jobResponsibilities").value,
        skills: document.getElementById("skills").value,
        startDate: document.getElementById("startDate").value,
        relocate: document.getElementById("relocate").value,
        schedule: document.getElementById("schedule").value,
        referenceName: document.getElementById("referenceName").value,
        referenceContact: document.getElementById("referenceContact").value,
        referenceRelationship: document.getElementById("referenceRelationship").value,
        whyWorkHere: document.getElementById("whyWorkHere").value,
        terms: document.getElementById("terms").checked,
        privacy: document.getElementById("privacy").checked
    };

    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.emailAddress || !formData.terms || !formData.privacy) {
        alert("Please fill in all required fields and agree to the terms and privacy policy.");
        return;
    }

    console.log("Form Submitted:", formData);

    alert("Your job application has been submitted successfully!");
    // document.getElementById("jobApplicationForm").reset();
});

document.getElementById("tableBtn").addEventListener("click", function() {

    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        emailAddress: document.getElementById("emailAddress").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipCode: document.getElementById("zipCode").value,
        resume: document.getElementById("resume").value,
        coverLetter: document.getElementById("coverLetter").value,
        education: document.getElementById("education").value,
        school: document.getElementById("school").value,
        major: document.getElementById("major").value,
        graduationYear: document.getElementById("graduationYear").value,
        companyName: document.getElementById("companyName").value,
        employmentDates: document.getElementById("employmentDates").value,
        jobResponsibilities: document.getElementById("jobResponsibilities").value,
        skills: document.getElementById("skills").value,
        startDate: document.getElementById("startDate").value,
        relocate: document.getElementById("relocate").value,
        schedule: document.getElementById("schedule").value,
        referenceName: document.getElementById("referenceName").value,
        referenceContact: document.getElementById("referenceContact").value,
        referenceRelationship: document.getElementById("referenceRelationship").value,
        whyWorkHere: document.getElementById("whyWorkHere").value
    };

    let table = "<table border='1' style='width: 100%; text-align: left;'><tr><th>Field</th><th>Value</th></tr>";
    for (const key in formData) {
        if (formData[key]) {
            table += `<tr><td>${key}</td><td>${formData[key]}</td></tr>`;
        }
    }
    table += "</table>";
    document.body.innerHTML += table;
}); 
