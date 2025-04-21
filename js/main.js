// for future analytics or interactivity
const linkLabels = [
  "Join my Patreon","Shop (Coming Soon)","Available Prints (Coming Soon)",
  "Instagram","X (Twitter)","Bluesky",
  "Join my Discord",
  "Check Out the Game (Coming Soon)","Kickstarter (Coming Soon)",
  "Venmo","cashapp","Amazon Wish List"
];

document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("age‑gate");
  const yes = document.getElementById("age‑gate‑yes");
  const no  = document.getElementById("age‑gate‑no");

  // If they've already confirmed, skip overlay
  if (localStorage.getItem("ageConfirmed") === "true") {
    gate.style.display = "none";
  }

  yes.addEventListener("click", () => {
    localStorage.setItem("ageConfirmed", "true");
    gate.style.display = "none";
  });

  no.addEventListener("click", () => {
    alert("Sorry, you must be 18 or older to view this site.");
    // Optionally redirect them somewhere else:
    window.location.href = "https://google.com";
  });
});



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card, i) => {
    card.addEventListener("click", () => {
      console.log("Clicked:", linkLabels[i]);
    });
  });
});
