<div align="center">
  <h1>☕ Скандинавська Кав'ярня (Coffee Shop Web)</h1>
  <p>Елегантний, мінімалістичний та швидкий веб-додаток для кав'ярні, розроблений з акцентом на естетику та продуктивність.</p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/ASP.NET_Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt="ASP.NET Core" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </p>
</div>

---

## 🌟 Про проєкт

Проєкт **Coffee Shop Web** — це сучасна платформа для онлайн-презентації меню кав'ярні. Головна мета — передати атмосферу закладу через цифровий простір.

**Дизайн-філософія:**
- **Скандинавський мінімалізм:** Чисті лінії, багато простору (whitespace), м'які акцентні кольори (шавлія `#8A9A86`).
- **Фокус на контенті:** Фотографії інтер'єру та кави відіграють головну роль. Ніщо не відволікає від краси продукту.
- **Плавність:** М'які мікро-анімації, красиві ефекти наведення та інтерактивна плавна CSS-карусель.

## ✨ Ключові можливості

- 📱 **Адаптивний дизайн:** Чудово виглядає як на великих моніторах, так і на смартфонах.
- 🖼️ **Інтерактивна карусель:** Кастомна математично вивірена карусель для презентації інтер'єру з 3D-ефектом `[тускла] [фокус] [тускла]`.
- 🛍️ **Динамічне меню:** Отримання товарів з бази даних (PostgreSQL + Entity Framework Core).
- 🧭 **Збереження стану:** Розумна кнопка "Назад" без втрати позиції скролу в каталозі.

## 🛠️ Технічний стек

### Backend (API)
- **Мова:** C# 12.0+ (.NET 8/10)
- **Фреймворк:** ASP.NET Core Web API
- **ORM:** Entity Framework Core
- **База даних:** PostgreSQL
- **Особливості:** Автоматичне наповнення бази даних (Data Seeding) початковим меню.

### Frontend (Клієнт)
- **Мова:** TypeScript
- **Фреймворк:** Next.js (App Router)
- **Бібліотека UI:** React 18
- **Стилізація:** Vanilla CSS (CSS Variables для системи дизайну)

## 🚀 Як запустити локально

### 1. Налаштування Бази Даних (PostgreSQL)
Переконайтеся, що у вас встановлений PostgreSQL. У файлі `appsettings.json` (корінь проєкту) налаштуйте свій рядок підключення:
```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=coffee_db;Username=postgres;Password=ВАШ_ПАРОЛЬ"
}
```

### 2. Запуск Backend-сервера
Відкрийте термінал у корені проєкту та виконайте команди:
```bash
# Оновлення бази даних та застосування міграцій
dotnet ef database update

# Запуск API
dotnet run
```
Сервер запуститься і автоматично наповнить базу меню з 12 позицій.

### 3. Запуск Frontend
Відкрийте новий термінал у папці `frontend`:
```bash
cd frontend

# Встановлення залежностей
npm install

# Запуск режиму розробки
npm run dev
```
Відкрийте [http://localhost:3000](http://localhost:3000) у вашому браузері.

## 📸 Галерея

*(Рекомендується додати сюди 2-3 скріншоти готового проєкту після розгортання)*
- `Головна сторінка з каруселлю`
<img width="1888" height="910" alt="image" src="https://github.com/user-attachments/assets/0db3bce8-0e74-4059-b409-d7940efaee46" />

- `Сітка товарів (Меню)`
<img width="1903" height="908" alt="image" src="https://github.com/user-attachments/assets/7415c848-7cb8-44a9-8f39-6585b97723e4" />

- `Сторінка "Про нас"`
<img width="1901" height="907" alt="image" src="https://github.com/user-attachments/assets/81703ecd-3e6d-45aa-af64-64f9bccd3dd2" />


---
<div align="center">
  Зроблено з ❤️ та кавою.
</div>
