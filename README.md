# 📚 React Native Audiobook App

![Home Screen](./screenshots/Audible%20-%20Audiobooks.png)

A sleek and modern **React Native Expo** application that allows users to browse, play, and manage audiobooks. The app features **user authentication with Clerk**, **floating audio controls**, the ability to **add audiobooks to favourites**, and a **customizable user profile**. Designed for a seamless mobile experience.

---

## 🚀 Features

- 🔐 **User Authentication** with [Clerk](https://clerk.dev)
- 🎧 **Play Audiobooks** with an intuitive audio player
- 📌 **Floating Play Component** for global audio control
- ❤️ **Add to Favourites** for easy access to your favorite audiobooks
- 👤 **User Profile Management** with editable profile details
- 📱 Built with **React Native & Expo** for cross-platform support

---

## 📸 Screenshots

| Screen              | Preview                                                             |
| ------------------- | ------------------------------------------------------------------- |
| 🏠 **Home Screen**  | <img src="./screenshots/home%20-%20audiobook.jpg" height="300"/>    |
| 🎧 **Audio Player** | <img src="./screenshots/Player%20-%20AudioBook.jpg"  height="300"/> |
| 👤 **User Profile** | <img src="./screenshots/login%20-%20audiobook.jpg" height="300"/>   |

---

## 🧱 Tech Stack

- **React Native (with Expo)**
- **Clerk** for user authentication and session management
- **React Navigation** for screen routing
- **Expo Audio** for audio playback
- **AsyncStorage / SecureStore** for local data handling
- **Context API** for state management

---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/muhammad-bilal01/audiobook-app.git
cd audiobook-app

# Install dependencies
npm install

# Start the Expo project
npx expo start
```

---

## 🛠️ Configuration

### 🔐 Clerk Setup

1. Create an account on [Clerk.dev](https://clerk.dev)
2. Get your **Frontend API Key** and **Publishable Key**
3. Add them to your environment:

```env
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Make sure to wrap your app in ClerkProvider:

```jsx
import { ClerkProvider } from "@clerk/clerk-expo";

<ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
  <App />
</ClerkProvider>;
```

---

## 📂 Project Structure

```
📦 audiobook-app
├── 📁 assets
├── 📁 components
│   └── FloatingPlayer.js
├── 📁 screens
│   ├── HomeScreen.js
│   ├── AudioBookDetails.js
│   ├── ProfileScreen.js
│   └── FavouritesScreen.js
├── 📁 services
│   └── audioService.js
├── 📁 context / store
├── App.js
└── ...
```

---

## ⚙️ Key Functionality

### ▶️ Audio Playback

- Start, pause, resume, and seek through audio
- Floating player shows current track and basic controls
- Background playback (if supported by implementation)

### 🔐 Authentication with Clerk

- Secure Sign Up / Sign In / Sign Out
- Protect routes using `SignedIn`, `SignedOut` components
- Fetch and update user profile

### ❤️ Favourites

- Add/remove audiobooks from user favourites
- Persist across sessions (Cloud or Local depending on setup)

### 👤 Profile

- View user details
- Edit profile (name, image, etc.)
- Secure logout

---

## ✅ To-Do (Optional Enhancements)

- 🌙 Dark Mode
- 🗂️ Category Filters / Search
- ⏱️ Sleep Timer
- 📤 Upload audiobooks (admin panel)
- 🔗 Deep Linking / Sharing support

---

## 🙌 Acknowledgments

- [Clerk](https://clerk.dev) for authentication
- [React Native Track Player](https://docs.expo.dev/versions/latest/sdk/audio/)
- [Expo](https://expo.dev) for rapid development

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
