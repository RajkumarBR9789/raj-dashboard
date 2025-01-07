# Rajkumar's User Dashboard Application

A modern, elegant user management dashboard featuring a Next.js frontend with TypeScript and Tailwind CSS, containerized with Docker.

## Features

- Stunning red gradient design
- Personalized user management dashboard
- CRUD operations for user data
- Responsive design using Tailwind CSS
- Type-safe development with TypeScript
- Containerized deployment with Docker
- Mock data integration for development

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd rajkumar-dashboard
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

## Docker Deployment

1. Build the Docker image:
\`\`\`bash
docker build -t rajkumar-dashboard .
\`\`\`

2. Run the container:
\`\`\`bash
docker run -p 3000:3000 rajkumar-dashboard
\`\`\`

Visit http://localhost:3000 to view the application.

## Mock Data

The application includes sample user data for development purposes. The mock data includes:
- Super Admin (Rajkumar)
- Developers
- Designers
- Project Managers

## Contributing

Created and maintained by Rajkumar. Feel free to contribute by opening issues or submitting pull requests.
