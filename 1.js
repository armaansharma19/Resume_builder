// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the input field in the index.html form
    const nameInput = document.getElementById("nameInput");
    const lnameInput = document.getElementById("lnameInput");

    const jobtitle = document.getElementById("jobTitleInput");
    const phonen = document.getElementById("phone");
    const e = document.getElementById("email");
    const a = document.getElementById("add");


    // Select the iframe element
    const resumeFrame = document.getElementById("resumeFrame");

    // Function to update the content of the iframe with the provided name
    function updatename() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const firstNameSpan = resumeDocument.querySelector('.profile_name_firstName');
        firstNameSpan.innerText = nameInput.value.trim();

    }
    nameInput.addEventListener("input", updatename);

    function updatelname() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const lastNameSpan = resumeDocument.querySelector('.profile_name_lastName');
        lastNameSpan.innerText = lnameInput.value.trim();

    }
    lnameInput.addEventListener("input", updatelname);

    function updatejob() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const span = resumeDocument.querySelector('.profile_title');
        span.innerText = jobtitle.value.trim();
    }
    jobtitle.addEventListener("input", updatejob);



    function updatephone() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const span = resumeDocument.querySelector('#phonenn');
        span.innerText = phonen.value.trim();
    }
    phonen.addEventListener("input", updatephone);


    // id="email"
    // <p class="description" id="e">

    function updatee() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const spam = resumeDocument.querySelector('#e');
        spam.innerText = e.value.trim();
    }
    e.addEventListener("input", updatee);



    function updatea() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const spam = resumeDocument.querySelector('#aad');
        spam.innerText = a.value.trim();
    }
    a.addEventListener("input", updatea);
    



});

// profile_title


//jobs experience
document.addEventListener("DOMContentLoaded", function() {
    const companyInput = document.getElementById("oj");
    const jobInput = document.getElementById("job");
    const aboutInput = document.getElementById("about");
    const resumeFrame = document.getElementById("resumeFrame");

    function updateExperience() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const experienceItems = resumeDocument.querySelectorAll('.exp_item');

        // Loop through each experience item and update the content
        experienceItems.forEach(item => {
            const company = item.querySelector('.item_title');
            const job = item.querySelector('.item_subtitle');
            const about = item.querySelector('.description');

            company.innerText = companyInput.value.trim();
            job.innerText = jobInput.value.trim();
            about.innerText = aboutInput.value.trim();
        });
    }

    // Add event listeners to input fields
    companyInput.addEventListener("input", updateExperience);
    jobInput.addEventListener("input", updateExperience);
    aboutInput.addEventListener("input", updateExperience);
});


document.addEventListener("DOMContentLoaded", function() {
    const uniInput = document.getElementById("uniInput");
    const degreeInput = document.getElementById("degreeInput");
    const skillsInput = document.getElementById("skillsInput");
    const certificationInput = document.getElementById("certificationInput");
    const awardsInput = document.getElementById("awardsInput");
    const resumeFrame = document.getElementById("resumeFrame");

    function updateEducation() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const eduItems = resumeDocument.querySelectorAll('.edu_item');

        // Update university and degree
        eduItems.forEach(item => {
            const university = item.querySelector('.item_title');
            const degree = item.querySelector('.item_subtitle');

            university.innerText = uniInput.value.trim();
            degree.innerText = degreeInput.value.trim();
        });
    }

    function updateSkills() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const skillsList = resumeDocument.querySelector('.skills_list');

        // Update skills
        skillsList.innerHTML = ''; // Clear previous skills
        const skills = skillsInput.value.trim().split('\n');
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }

    function updateCertification() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const certificationItems = resumeDocument.querySelectorAll('.certification_item');

        // Update certification
        certificationItems.forEach(item => {
            const certificationTitle = item.querySelector('.item_title');
            const certificationDescription = item.querySelector('.description');

            certificationTitle.innerText = certificationInput.value.trim();
            certificationDescription.innerText = certificationInput.value.trim(); // Assuming same value for description
        });
    }

    function updateAwards() {
        const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
        const awardsItems = resumeDocument.querySelectorAll('.awards_item');

        // Update awards
        awardsItems.forEach(item => {
            const awardTitle = item.querySelector('.item_title');
            const awardDescription = item.querySelector('.description');

            awardTitle.innerText = awardsInput.value.trim();
            awardDescription.innerText = awardsInput.value.trim(); // Assuming same value for description
        });
    }

    // Add event listeners to input fields
    uniInput.addEventListener("input", updateEducation);
    degreeInput.addEventListener("input", updateEducation);
    skillsInput.addEventListener("input", updateSkills);
    certificationInput.addEventListener("input", updateCertification);
    awardsInput.addEventListener("input", updateAwards);
});



document.addEventListener("DOMContentLoaded", function() {
    const imageInput = document.getElementById("imageInput");
    const resumeFrame = document.getElementById("resumeFrame");

    // Function to handle file upload and update image
    function handleFileUpload() {
        const file = imageInput.files[0]; // Get the uploaded file
        if (file) {
            const reader = new FileReader(); // Create a FileReader object
            reader.onload = function(event) {
                const imageData = event.target.result; // Get the base64 encoded image data
                const resumeDocument = resumeFrame.contentDocument || resumeFrame.contentWindow.document;
                const profileImg = resumeDocument.querySelector('.profile_profileImg img');
                profileImg.src = imageData; // Set the src attribute of the image element to the uploaded image data
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    }

    // Add event listener to the upload button
    document.getElementById("uploadButton").addEventListener("click", handleFileUpload);
});