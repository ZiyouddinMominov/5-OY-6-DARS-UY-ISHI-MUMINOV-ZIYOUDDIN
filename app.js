function generateCard() {
  // Foydalanuvchi tomonidan kiritilgan ma'lumotlarni olish
  var name = document.getElementById("nameInput").value;
  var imageUrl = document.getElementById("imageInput").value;

  // Ma'lumotlar tekshiriladi
  if (name === "" || imageUrl === "") {
    alert("Iltimos, ism va rasmingizni kiriting.");
    return;
  }

  // Card element
  var card = document.createElement("div");
  card.classList.add("card");

  // Name element
  var nameElement = document.createElement("p");
  nameElement.textContent = "Ism: " + name;

  // Image element
  var imageElement = document.createElement("img");
  imageElement.src = imageUrl;

  // Adding elements to the card
  card.appendChild(nameElement);
  card.appendChild(imageElement);

  // Adding the card to the card container
  var cardContainer = document.getElementById("card-container");
  cardContainer.appendChild(card);

  // Inputlarni tozalash
  document.getElementById("nameInput").value = "";
  document.getElementById("imageInput").value = "";
}
