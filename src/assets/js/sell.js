let currentTab = 0; // Start at the first step
showTab(currentTab); // Display the current tab

function showTab(n) {
    const steps = document.getElementsByClassName("step");
    const indicators = document.getElementsByClassName("stepIndicator");

    // Display the current step
    steps[n].style.display = "flex";

    // Handle Previous and Next buttons
    document.getElementById("prevBtn").style.display = n === 0 ? "none" : "inline";
    document.getElementById("nextBtn").innerHTML = n === steps.length - 1 ? "Submit" : "Next";

    // Update the progress bar indicators
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active");
        if (i < n) indicators[i].classList.add("finish");
    }
    indicators[n].classList.add("active");
}

function nextPrev(n) {
    const steps = document.getElementsByClassName("step");

    // Validate the form fields before moving forward
    if (n === 1 && !validateForm()) return false;

    // Hide the current step
    steps[currentTab].style.display = "none";

    // Move to the next step
    currentTab += n;

    // If the user reaches the end of the form, submit it
    if (currentTab >= steps.length) {
        document.getElementById("multiStepForm").submit();
        return false;
    }

    // Otherwise, show the next tab
    showTab(currentTab);
}

function validateForm() {
    const currentStep = document.getElementsByClassName("step")[currentTab];
    const inputs = currentStep.querySelectorAll("[required]");
    let valid = true;

    // Use Bootstrap validation classes
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.parentNode.classList.add("is-invalid");
            valid = false;
        } else {
            input.parentNode.classList.remove("is-invalid");
            input.parentNode.classList.add("is-valid");
        }
    });

    return valid;
}
