
// List of labels in the exact order of LINKS[]
const linkLabels = [
  "Join my Patreon",
  "Shop (Coming Soon)",
  "Available Prints (Coming Soon)",
  "Instagram",
  "X (Twitter)",
  "Bluesky",
  "Gaming (Coming Soon)",
  "Kickstarter (Coming Soon)",
  "Venmo",
  "PayPal",
  "Amazon Wish List"
];

// Attach click handlers for analytics or logging
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".links-grid .card");
  cards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      console.log(`Navigating to: ${linkLabels[idx]}`);
      // here you could send an AJAX beacon to your tracking endpoint
    });
  });
});
