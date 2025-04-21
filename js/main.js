// for future analytics or interactivity
const linkLabels = [
  "Join my Patreon","Shop (Coming Soon)","Available Prints (Coming Soon)",
  "Instagram","X (Twitter)","Bluesky",
  "Join my Discord",
  "Check Out the Game (Coming Soon)","Kickstarter (Coming Soon)",
  "Venmo","PayPal","Amazon Wish List"
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card, i) => {
    card.addEventListener("click", () => {
      console.log("Clicked:", linkLabels[i]);
    });
  });
});
