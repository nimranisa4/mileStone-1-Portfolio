var toggleButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
var isSkillsVisible = false;
toggleButton.addEventListener("click", function () {
    isSkillsVisible = !isSkillsVisible;
    if (isSkillsVisible) {
        skillsSection.style.display = "block";
        skillsSection.style.maxHeight = skillsSection.scrollHeight + "px";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.maxHeight = "0";
        toggleButton.textContent = "Show Skills";
    }
});
