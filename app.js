console.log("Hello World!");
const name = "Sara";
let hasDownloadedResume = false;
function showGreeting(userName) {
  return "Hello, my name is " + userName + "! Welcome to my portfolio!";
}
function daysUntilDeadline(deadlineDate) {
  let today = new Date();
  let futureDate = new Date(deadlineDate);
  let difference = futureDate - today;
  let daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return daysLeft;
}
window.addEventListener("load", function () {
  let greetingElement = document.getElementById("greetingText");
  if (greetingElement) {
    greetingElement.textContent = showGreeting(name);
  }
  let deadlineElement = document.getElementById("projectDeadline");
  let daysElement = document.getElementById("daysLeftText");
  if (deadlineElement && daysElement) {
    let deadlineDate = deadlineElement.textContent.trim();
    let remainingDays = daysUntilDeadline(deadlineDate);
    daysElement.textContent = "Days left until deadline: " + remainingDays;
    console.log("Days left until deadline:", remainingDays);
  }
  let resumeButton = document.getElementById("downloadResumeBtn");
  if (resumeButton) {
    resumeButton.addEventListener("click", function () {
      if (hasDownloadedResume === false) {
        setTimeout(function () {
          alert("Your resume is downloaded successfully!");
        }, 2000);
        hasDownloadedResume = true;
      }
    });
  }
});