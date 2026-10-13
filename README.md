# Jira Clone - Project Management Application

A full-featured project management application built with Next.js 14, inspired by Jira. Manage workspaces, projects, tasks, and team members with an intuitive interface.

## Features

- 🏢 **Workspace Management** - Create and manage multiple workspaces
- 📊 **Project Tracking** - Organize tasks within projects
- ✅ **Task Management** - Create, assign, and track tasks with different statuses
- 👥 **Team Collaboration** - Invite members and manage team permissions
- 📈 **Analytics Dashboard** - Track project progress and team performance
- 🎯 **Drag & Drop** - Intuitive task management with drag-and-drop functionality
- 📅 **Calendar View** - Visualize tasks in calendar format
- 🔐 **Authentication** - Secure sign-in and sign-up flows

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: TanStack Query (React Query)
- **Backend**: Hono + Appwrite
- **Form Handling**: React Hook Form + Zod
- **Drag & Drop**: @hello-pangea/dnd
- **Charts**: Recharts
- **Calendar**: React Big Calendar

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm/yarn/pnpm/bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Jira
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Main dashboard pages
│   └── standalone/        # Standalone pages (settings, etc.)
├── components/            # Reusable React components
├── features/              # Feature-based modules
└── lib/                   # Utility functions and configurations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is for educational purposes.
