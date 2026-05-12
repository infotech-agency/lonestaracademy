# 🚀 Lone Star Academy - Full Stack Website

## Project Structure
```
├── src/                    # React Frontend (Vite + TypeScript)
│   ├── app/
│   │   ├── App.tsx         # Home page
│   │   ├── components/     # Shared components
│   │   ├── pages/          # All pages
│   │   │   ├── AboutPage.tsx
│   │   │   ├── CoursesPage.tsx
│   │   │   ├── CourseDetailPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── TestimonialsPage.tsx
│   │   │   └── TeamPage.tsx
│   │   └── admin/          # Admin Panel
│   │       ├── AdminPanel.tsx
│   │       ├── AdminLogin.tsx
│   │       └── AdminDashboard.tsx
├── backend/                # Node.js + Express API
│   ├── src/
│   │   ├── index.js        # Server entry point
│   │   ├── routes/
│   │   │   ├── courses.js  # Course CRUD + image upload
│   │   │   └── auth.js     # JWT authentication
│   │   └── middleware/
│   │       └── auth.js     # Auth middleware
│   └── uploads/            # Uploaded images stored here
└── index.html              # SEO-optimized HTML
```

## 🛠 Setup & Run

### 1. Start Backend
```bash
cd backend
npm install
node src/index.js
# Backend runs at http://localhost:3001
```

### 2. Start Frontend
```bash
npm install   # (already done)
npm run dev
# Frontend runs at http://localhost:5173
```

## 🌐 Pages & Routes

| Page | URL | Description |
|------|-----|-------------|
| Home | / | Main landing page |
| All Courses | /courses | Course listing with search & filter |
| Course Detail | /courses/:id | Individual course page |
| About Us | /about | Company story, team, milestones |
| Contact | /contact | Contact form + map |
| Testimonials | /testimonials | Student success stories |
| Our Team | /team | Trainer profiles |
| Admin Panel | /admin | Course management dashboard |

## 🔐 Admin Panel

**URL:** http://localhost:5173/admin

**Default Credentials:**
- Email: `admin@lonestar.com`
- Password: `Admin@123`

### Admin Features:
- ✅ Add / Edit / Delete courses
- ✅ Upload course images (up to 5MB)
- ✅ Set featured courses
- ✅ SEO meta tags per course (title, description, keywords, OG tags)
- ✅ Category management
- ✅ Dashboard stats

## 🔌 API Endpoints

| Method | URL | Auth | Description |
|--------|-----|------|-------------|
| GET | /api/courses | No | List all courses |
| GET | /api/courses/:id | No | Get course by ID |
| POST | /api/courses | Yes | Create course (with image) |
| PUT | /api/courses/:id | Yes | Update course (with image) |
| DELETE | /api/courses/:id | Yes | Delete course |
| POST | /api/auth/login | No | Get admin JWT token |

## 📦 SEO Features

Each course page uses:
- `<title>` from admin-set SEO title
- `<meta name="description">` 
- `<meta name="keywords">`
- Open Graph tags for social sharing
- Structured data (JSON-LD) on homepage
- Semantic HTML headings

## 🎨 New Pages Added

- **Navbar links** now navigate to real pages
- **Footer links** connect to all pages
- **Course cards** link to detail pages
- **Testimonials** page with 8 student stories
- **Team** page with 6 trainer profiles
- **About** page with timeline, mission, values
- **Contact** page with form + map
