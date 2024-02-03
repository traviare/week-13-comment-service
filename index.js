const findName = document.querySelector("#name");
const findUrl = document.querySelector("#link");
const findComment = document.querySelector("#comment");
const findButton = document.querySelector(".button");
const findAddName = document.querySelector(".add-name");
const findAddImg = document.querySelector(".add-img");
const findAddComment = document.querySelector(".add-comment-text");
const findCommentDate = document.querySelector(".comment-date");
const findRadioYes = document.querySelector("#yes");
const findRadioNo = document.querySelector("#no");

// приводим введенное имя к единому формату
function getName() {
  const a = findName.value.replaceAll(" ", "").toLowerCase();
  const b = a[0].toUpperCase() + a.substring(1);
  return b;
}

// добавляем имя пользователя
function addName() {
  if (findRadioYes.checked) {
    findAddName.textContent = getName();
  } else {
    findAddName.textContent = "username";
  }
  findName.value = "";
}

// добавляем аватар пользователя
function addAvatar() {
  if (findUrl.value === "") {
    randomeImage();
  } else {
    findAddImg.src = `${findUrl.value}`;
  }
  findUrl.value = "";
  findAddImg.classList.add("img");
}

// функция для рандомного подбора аватара
function randomeImage() {
  const randomNumber = Math.floor(Math.random() * 7);
  switch (randomNumber) {
    case 0:
      findAddImg.src = "./assets/images/avatar-1.jpeg";
      break;
    case 1:
      findAddImg.src = "./assets/images/avatar-2.webp";
      break;
    case 2:
      findAddImg.src = "./assets/images/avatar-3.jpeg";
      break;
    case 3:
      findAddImg.src = "./assets/images/avatar-4.avif";
      break;
    case 4:
      findAddImg.src = "./assets/images/avatar-5.jpeg";
      break;
    case 5:
      findAddImg.src = "./assets/images/avatar-6.webp";
      break;
    case 6:
      findAddImg.src = "./assets/images/avatar-7.webp";
      break;
    default:
      findAddImg.src = "Нет фотографии";
  }
}

// добавляем дату комментария
function addDate() {
  const date = new Date();
  const dateName = date.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = date.toLocaleTimeString();
  findCommentDate.textContent = `${dateName} в ${time}`;
}

// функции для спам фильтра
function checkSpamOne() {
  let lowerStr = findAddComment.textContent.toLowerCase();
  return lowerStr.includes("viagra");
}

function checkSpamTwo() {
  let lowerStr = findAddComment.textContent.toLowerCase();
  return lowerStr.includes("xxx");
}

// добавляем комментарий пользователя
function addComment() {
  findAddComment.textContent = findComment.value;
  findComment.value = "";
  if (checkSpamOne()) {
    findAddComment.textContent = findAddComment.textContent.replace(
      /viagra/gi,
      "***"
    );
  } else if (checkSpamTwo()) {
    findAddComment.textContent = findAddComment.textContent.replace(
      /xxx/gi,
      "***"
    );
  } else {
    findAddComment.innerHTML = findAddComment.textContent;
  }
}

//функция для обработчика событий
function addInformation() {
  addName();
  addAvatar();
  addDate();
  addComment();
}
