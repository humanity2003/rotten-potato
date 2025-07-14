# 🍿 Rotten Potato

**Rotten Potato** is a movie recommendation web app built using Angular. It displays curated movie listings categorized as **Trending**, **Popular**, and **In Theatre** — all fetched from static JSON files.

> 💡 Future versions will integrate with real-time APIs like OMDb or TMDb for dynamic movie data.

---

## 🎬 Features

- 💡 Categorized movie sections (Trending, Popular, In Theatre)
- ⭐ Star rating display using reusable component
- 📱 Responsive UI design (mobile-first)
- 🔐 Static login screen (for future enhancement)
- 🔄 Angular routing for movie details

---

## 🧰 Tech Stack

- **Angular 16+**
- **HTML/CSS**
- **Static JSON (Assets folder)**
- Designed for easy transition to **REST API (OMDb)**

---

## 📁 Project Structure

```plaintext
/src
  /app
    /components
      /header
      /home
      /login
      /movie
      /landingpage
    /features
      /star-rating
  /assets
    trending-movies.json
    theatre-movies.json
    popular-movies.json

🚀 Running the App Locally
npm install
ng serve

Open your browser at: http://localhost:4200

📸 Screenshots

### 🎬 Landing Page
![Landing](https://raw.githubusercontent.com/humanity2003/rotten-potato/main/src/assets/screenshots/LandingPage.png)

### 🏠 Home Page
![Home](https://raw.githubusercontent.com/humanity2003/rotten-potato/main/src/assets/screenshots/Home.png)

### 🔐 Login Page
![Login](https://raw.githubusercontent.com/humanity2003/rotten-potato/main/src/assets/screenshots/LogInPage.png)

### 🎞️ Movie Page
![Movie](https://raw.githubusercontent.com/humanity2003/rotten-potato/main/src/assets/screenshots/Movie.png)


🔮 Future Enhancements
🔗 Connect to OMDb or TMDb API

👤 Real login + user registration

💬 User reviews and watchlists

🔎 Search and filter movies

👨‍💻 Author
Sourav Halder
[GitHub Profile](https://github.com/humanity2003)

## 🙏 Acknowledgments

This project was inspired and guided by [WebTechTalk on YouTube](https://www.youtube.com/@WebTechTalk).  
A big thanks to the creator for their clear explanations and hands-on Angular tutorials.

📝 License
This project is licensed under the MIT License.

__________________________________________________________________________________________________________________________________________



