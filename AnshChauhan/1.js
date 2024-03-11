
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
