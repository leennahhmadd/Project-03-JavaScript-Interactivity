const shows = [
    "Amr Diab",
    "Fairuz",
    "Majida El Roumi",
    "Abadi Al Johar",
    "Wael Kfoury"
];

const listElement = document.getElementById("Most Listened Artists");

for (let i = 0; i < shows.length; i++) {
    
    const listItem = document.createElement("li");
    
    listItem.textContent = shows[i];
    
    listElement.appendChild(listItem);
}