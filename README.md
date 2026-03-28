

# 🏡 StayZio — Cloud-Powered Rental Management Platform

**StayZio** is a full-stack rental platform that enables property owners to manage listings and bookings seamlessly while allowing guests to explore, book, and review accommodations — all in a secure cloud-integrated environment with Next.js frontend, AWS Cognito for authentication, Node.js backend, and AWS RDS and S3 for database and storage.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js (App Router, TypeScript, Tailwind CSS, Zustand) |
| **Backend** | Node.js + Express.js |
| **Database ORM** | Prisma (PostgreSQL) |
| **Cloud Services** | AWS EC2 / S3 |
| **Authentication** | JWT-based Auth (Role-based) |
| **State Management** | Redux Toolkit |
| **Styling** | Tailwind CSS + ShadCN UI |
| **Deployment** | Vercel (Frontend), AWS EC2 (Backend) |

---

## 🧠 Project Structure

```
StayZio/
├── client/                 # Frontend (Next.js)
│   ├── src/
│   │   ├── app/            # App Router (Auth, Dashboard, Listings, etc.)
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── state/          # Redux 
│   │   ├── lib/            # Utility functions & API client
│   │   └── types/          # Global TypeScript types
│   └── package.json
│
├── server/                 # Backend (Express + Prisma)
│   ├── src/
│   │   ├── controllers/    # Route controllers (auth, bookings, listings)
│   │   ├── routes/         # REST API routes
│   │   ├── middleware/     # Authentication & validation middlewares
│   │   └── index.ts        # Entry point
│   ├── prisma/             # Prisma schema & migrations
│   └── package.json
│
└── README.md
```

---

## ⚙️ Key Features

### 🏘️ For Property Owners
- Add, edit, and delete property listings.
- Manage rental pricing, availability, and images.
- Track and manage bookings.

### 👥 For Guests
- Browse and filter properties by city, price, and amenities.
- Book instantly or request availability.
- Leave ratings and reviews.

### 🔒 Authentication & Roles
- JWT-based authentication with roles: `admin`, `host`, `guest`.
- Protected routes and session persistence.

### ☁️ Cloud Integrations
- Image uploads to **AWS S3**.
- Deployment on **AWS EC2** for scalability.

### 🗄️ Backend Services
- **Prisma ORM** for structured database interaction.
- REST APIs with **Express** for listings, users, and bookings.

### 🎨 Modern Frontend
- Responsive UI with **TailwindCSS + ShadCN**.
- Modular and type-safe architecture.
- Built on **Next.js App Router**.

---

## 🧭 Complete Application Workflow

```mermaid
flowchart TD
A[User Visit StayZio] --> B{Authenticated?}
B -->|No| C[Login / Register Page]
B -->|Yes| D[Role Check]

D -->|Guest| E[Browse Listings]
E --> F[Filter & View Property Details]
F --> G[Book Property]
G --> H[Payment & Booking Confirmation]
H --> I[Email Notification Sent]
I --> J[Booking Data Stored in Database]

D -->|Host| K[Access Dashboard]
K --> L[Add / Edit Property Listings]
L --> M[Upload Images to AWS S3]
M --> N[Manage Bookings & Earnings]
N --> O[Database Update via Prisma]

D -->|Admin| P[Admin Dashboard]
P --> Q[Manage Users, Listings & Reports]
Q --> R[System Analytics & Logs]
R --> S[Cloud Backup & Security Checks]
```

---

## ⚙️ API Architecture (Backend)

```mermaid
graph TD
A[Client Request] --> B[Express Router]
B --> C{Controller}
C -->|Validation| D[Middleware]
D --> E[Prisma ORM]
E --> F[(PostgreSQL Database)]
C --> G[Response JSON → Client]
```

---

## 🧩 State Management Flow (Frontend)

```mermaid
graph TD
A[User Interaction] --> B[Action Dispatch]
B --> C[Zustand/Redux Store]
C --> D[API Call via lib/api.ts]
D --> E[Backend Response]
E --> F[State Updated → UI Re-renders]
```

---

## 🧰 Installation & Setup

### 🖥️ Backend Setup
```bash
cd server
npm install

# Create .env file
cp env.example .env

# Run Prisma migrations
npx prisma migrate dev

# Start backend
npm run dev
```

### 💻 Frontend Setup
```bash
cd client
npm install

# Create .env file
cp env.example .env.local

# Run development server
npm run dev
```

Visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🌩️ Deployment

### Frontend
Deployed on **Vercel**
```bash
npm run build
vercel deploy
```

### Backend
Hosted on **AWS EC2** using PM2
```bash
pm2 start ecosystem.config.js
```






Sample Images
<img width="1918" height="800" alt="image" src="https://github.com/user-attachments/assets/2c33da3a-b36e-4c46-b7d1-e4cff905ff77" />

<img width="1919" height="844" alt="image" src="https://github.com/user-attachments/assets/a069b720-3903-4805-ac03-c669cc25f426" />



<img width="1919" height="974" alt="image" src="https://github.com/user-attachments/assets/aed448e5-7835-4397-904e-ba9364259c69" />

<img width="1133" height="844" alt="image" src="https://github.com/user-attachments/assets/d1a3ece5-2ba2-4ee3-bdbe-c04ed882c133" />


<img width="1705" height="797" alt="image" src="https://github.com/user-attachments/assets/434a2c4a-7bd3-4bab-beb9-1ada8fea70de" />

<img width="1919" height="808" alt="image" src="https://github.com/user-attachments/assets/45aa7b85-33f1-4ad2-8f14-5cfb9762401e" />

<img width="1918" height="860" alt="image" src="https://github.com/user-attachments/assets/6025c384-b7b6-43b3-971d-b390a4ec42e3" />



