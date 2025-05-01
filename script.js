// Когда Mini App готов, Telegram сообщает
window.Telegram.WebApp.ready();

// Получаем имя пользователя из Telegram
const user = window.Telegram.WebApp.initDataUnsafe.user;

// Показываем имя на экране (если есть)
document.getElementById("username").textContent = user?.first_name || "Hunter";

// Кнопка запуска миссии
function startMission() {
  Telegram.WebApp.openTelegramLink("https://t.me/hunt_point_bot");
}
